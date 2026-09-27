const FROM = "noreply@yapiplan.com";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "admin@yapiplan.com";

type EmailPayload = {
  from: string;
  to: string[];
  subject: string;
  html: string;
  idempotencyKey?: string;
};

async function sendEmail(payload: EmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...(payload.idempotencyKey
        ? { "Idempotency-Key": payload.idempotencyKey }
        : {}),
    },
    body: JSON.stringify({
      from: payload.from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend request failed with status ${res.status}`);
  }

  return res.json();
}

export async function sendWelcomeEmail(params: {
  to: string;
  name: string;
  plan: string;
  lsSubscriptionId: string;
}) {
  return sendEmail({
    from: FROM,
    to: [params.to],
    subject: "yapiplan.com'a Hoş Geldiniz — Hesabınız Aktive Edildi",
    html: `
      <h2>Merhaba ${params.name},</h2>
      <p><strong>${params.plan}</strong> planınız başarıyla aktive edildi.</p>
      <p>Ekibimiz en kısa sürede sizinle iletişime geçecek ve sistemi birlikte kuracağız.</p>
      <p>Sorularınız için: destek@yapiplan.com</p>
      <br/>
      <p>İnşaat Kontrol Ekibi</p>
    `,
    idempotencyKey: `welcome-${params.lsSubscriptionId}`,
  });
}

export async function sendAdminNotification(params: {
  email: string;
  name: string;
  plan: string;
  lsSubscriptionId: string;
}) {
  return sendEmail({
    from: FROM,
    to: [ADMIN_EMAIL],
    subject: `[YapiPlan] Yeni Abone: ${params.name} — ${params.plan}`,
    html: `
      <h3>Yeni abonelik oluştu</h3>
      <ul>
        <li><strong>Ad:</strong> ${params.name}</li>
        <li><strong>Email:</strong> ${params.email}</li>
        <li><strong>Plan:</strong> ${params.plan}</li>
        <li><strong>LS ID:</strong> ${params.lsSubscriptionId}</li>
      </ul>
    `,
  });
}
