# Cold Outreach Email Tool

Parametric cold-outreach mailer for **İnşaat Kontrol** (construction ERP).
Reads a CSV of companies, renders a personalized Turkish email per row, and
sends via SMTP. **Default is dry-run** — nothing is sent unless you pass `--send`.

## Files

- `companies.sample.csv` — input format example (header + 2 sample rows)
- `template.txt` — the Turkish email template (`Subject:` line + body, with `{firma}` / `{yetkili}` placeholders)
- `send-outreach.mjs` — the script (CSV parse, render, SMTP send)
- `package.json` — minimal, depends on `nodemailer ^7`

## Setup

```bash
cd scripts/outreach
npm install        # installs nodemailer
```

## 1. Fill the CSV

Copy the sample and edit it. Required column: `email`. The `firma` and
`yetkili` columns feed the template placeholders.

```
firma,yetkili,email,sehir,sektor
Yıldız İnşaat A.Ş.,Ahmet Yıldız,ahmet@firma.com,İstanbul,Konut Yapımı
```

Fields containing commas can be quoted: `"Demir, Yapı Ltd.",...`

## 2. Dry-run (no SMTP needed)

Prints every rendered email to the console without sending:

```bash
node send-outreach.mjs
# or against your own file:
node send-outreach.mjs --file ./my-companies.csv
```

## 3. Set SMTP env vars

```bash
export SMTP_HOST=smtp.yourprovider.com
export SMTP_PORT=587            # 465 = implicit TLS, otherwise STARTTLS
export SMTP_USER=you@yourdomain.com
export SMTP_PASS=your-password-or-app-password
export MAIL_FROM='İnşaat Kontrol <you@yourdomain.com>'
```

## 4. Send for real

```bash
node send-outreach.mjs --send
node send-outreach.mjs --send --file ./my-companies.csv
```

- Real sends are rate-limited to ~1 email every 3 seconds.
- Rows with a missing/invalid email are skipped and logged.
- A summary (sent / skipped / failed) is printed at the end.

## Self-check

Verifies the CSV parser and template renderer without touching SMTP:

```bash
node send-outreach.mjs --self-check   # prints PASS or FAIL
```
