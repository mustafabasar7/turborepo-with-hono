#!/usr/bin/env node
// Parametric cold-outreach email tool for İnşaat Kontrol.
// DEFAULT IS DRY-RUN. Use --send to actually send via SMTP.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SEND_INTERVAL_MS = 3000; // ~1 email / 3s
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---- Tiny CSV parser (handles quoted fields, "" escapes, CRLF) ----
function parseCsv(text) {
  const rows = [];
  let field = "";
  let row = [];
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      field = "";
      row = [];
    } else {
      field += c;
    }
  }
  if (field !== "" || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  // Drop fully-empty trailing rows.
  const nonEmpty = rows.filter((r) => r.some((cell) => cell.trim() !== ""));
  if (nonEmpty.length === 0) return [];
  const header = nonEmpty[0].map((h) => h.trim());
  return nonEmpty.slice(1).map((r) => {
    const obj = {};
    header.forEach((h, idx) => {
      obj[h] = (r[idx] ?? "").trim();
    });
    return obj;
  });
}

// ---- Template rendering ----
// template.txt format: first non-empty "Subject:" line is the subject,
// the rest (after a blank line) is the body. {firma}/{yetkili} substituted.
function loadTemplate() {
  return readFileSync(resolve(__dirname, "template.txt"), "utf8");
}

function renderTemplate(template, vars) {
  const filled = template.replace(/\{(\w+)\}/g, (m, key) =>
    vars[key] != null ? vars[key] : m,
  );
  const lines = filled.split("\n");
  const subjectIdx = lines.findIndex((l) => /^subject:/i.test(l.trim()));
  let subject = "";
  let bodyLines = lines;
  if (subjectIdx !== -1) {
    subject = lines[subjectIdx].replace(/^subject:/i, "").trim();
    bodyLines = lines.slice(subjectIdx + 1);
  }
  const body = bodyLines.join("\n").replace(/^\n+/, "").trimEnd();
  return { subject, body };
}

// ---- CLI args ----
function parseArgs(argv) {
  const args = { file: null, send: false, selfCheck: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--send") args.send = true;
    else if (a === "--self-check") args.selfCheck = true;
    else if (a === "--file") args.file = argv[++i];
  }
  return args;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---- Self-check ----
async function selfCheck() {
  const assert = (await import("node:assert/strict")).default;
  let ok = true;
  const fail = (msg, err) => {
    ok = false;
    console.error(`  - ${msg}: ${err.message}`);
  };

  try {
    const csv =
      "firma,yetkili,email\n" +
      'Yıldız İnşaat A.Ş.,Ahmet Yıldız,ahmet@example.com\n' +
      '"Demir, Yapı",Elif Demir,elif@example.com\n';
    const rows = parseCsv(csv);
    assert.equal(rows.length, 2, "expected 2 rows");
    assert.equal(rows[0].firma, "Yıldız İnşaat A.Ş.");
    assert.equal(rows[0].yetkili, "Ahmet Yıldız");
    assert.equal(rows[0].email, "ahmet@example.com");
    assert.equal(rows[1].firma, "Demir, Yapı"); // quoted comma preserved
    assert.equal(rows[1].email, "elif@example.com");
  } catch (e) {
    fail("CSV parser", e);
  }

  try {
    const tmpl = "Subject: Merhaba {firma}\n\nSayın {yetkili}, bu {firma} içindir.";
    const { subject, body } = renderTemplate(tmpl, {
      firma: "ACME",
      yetkili: "Ada",
    });
    assert.equal(subject, "Merhaba ACME");
    assert.ok(body.includes("Sayın Ada,"), "yetkili substituted in body");
    assert.ok(body.includes("bu ACME içindir."), "firma substituted in body");
    assert.ok(!body.includes("{firma}"), "no leftover {firma}");
    assert.ok(!body.includes("{yetkili}"), "no leftover {yetkili}");
  } catch (e) {
    fail("Template renderer", e);
  }

  console.log(ok ? "PASS" : "FAIL");
  process.exit(ok ? 0 : 1);
}

// ---- Main ----
async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.selfCheck) {
    await selfCheck();
    return;
  }

  const filePath = resolve(
    process.cwd(),
    args.file ?? resolve(__dirname, "companies.sample.csv"),
  );

  let rows;
  try {
    rows = parseCsv(readFileSync(filePath, "utf8"));
  } catch (e) {
    console.error(`Could not read CSV at ${filePath}: ${e.message}`);
    process.exit(1);
  }

  const template = loadTemplate();
  const mode = args.send ? "SEND" : "DRY-RUN";
  console.log(`Mode: ${mode} | File: ${filePath} | Rows: ${rows.length}\n`);

  let transporter = null;
  const from = process.env.MAIL_FROM;
  if (args.send) {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !from) {
      console.error(
        "Missing SMTP env. Required: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM",
      );
      process.exit(1);
    }
    const nodemailer = (await import("nodemailer")).default;
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  }

  let sent = 0;
  let skipped = 0;
  let failed = 0;
  let first = true;

  for (const row of rows) {
    const email = (row.email ?? "").trim();
    if (!EMAIL_RE.test(email)) {
      skipped++;
      console.warn(`SKIP  ${row.firma || "(firma yok)"} — invalid email: "${email}"`);
      continue;
    }

    const { subject, body } = renderTemplate(template, {
      firma: row.firma || "",
      yetkili: row.yetkili || "",
    });

    if (!args.send) {
      console.log("─".repeat(60));
      console.log(`To:      ${email}`);
      console.log(`Subject: ${subject}`);
      console.log("");
      console.log(body);
      console.log("");
      sent++; // counts as "would send" in dry-run
      continue;
    }

    if (!first) await sleep(SEND_INTERVAL_MS);
    first = false;

    try {
      await transporter.sendMail({ from, to: email, subject, text: body });
      sent++;
      console.log(`SENT  ${email} (${row.firma || ""})`);
    } catch (e) {
      failed++;
      console.error(`FAIL  ${email} — ${e.message}`);
    }
  }

  console.log("\n" + "═".repeat(60));
  const sentLabel = args.send ? "Sent" : "Would send";
  console.log(`Summary: ${sentLabel}=${sent}  Skipped=${skipped}  Failed=${failed}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
