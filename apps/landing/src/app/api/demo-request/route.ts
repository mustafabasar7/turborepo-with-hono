import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadBody = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  companyType?: string;
  siteCount?: string;
  message?: string;
};

const esc = (s: string) =>
  s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c] ?? c);

export async function POST(req: Request) {
  let body: LeadBody;
  try {
    body = (await req.json()) as LeadBody;
  } catch {
    return NextResponse.json({ error: "Geçersiz istek" }, { status: 400 });
  }

  const name = body.name?.trim();
  const company = body.company?.trim();
  const email = body.email?.trim();
  if (!name || !company || !email) {
    return NextResponse.json({ error: "Ad, şirket ve e-posta zorunludur" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_EMAIL;
  if (!apiKey || !to) {
    // Lead kaybolmasın diye en azından sunucu log'una düş.
    console.error("[demo-request] RESEND_API_KEY/LEAD_EMAIL ayarlı değil — lead:", body);
    return NextResponse.json({ error: "Mail servisi yapılandırılmamış" }, { status: 503 });
  }

  const rows: Array<[string, string | undefined]> = [
    ["Ad Soyad", name],
    ["Şirket", company],
    ["E-posta", email],
    ["Telefon", body.phone],
    ["Firma Tipi", body.companyType],
    ["Şantiye Sayısı", body.siteCount],
    ["Mesaj", body.message],
  ];
  const html = `<h3>Yeni Demo Talebi — yapiplan.com</h3><ul>${rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<li><strong>${k}:</strong> ${esc(String(v))}</li>`)
    .join("")}</ul>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "YapiPlan Demo <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `[YapiPlan] Yeni Demo Talebi: ${company}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("[demo-request] Resend hata:", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "Gönderilemedi" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
