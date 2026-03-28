/**
 * Iyzico'da ürün ve fiyat planları oluşturur.
 * Çalıştır: node scripts/setup-iyzico-plans.mjs
 *
 * Çıktıdaki referans kodlarını .env.local'a yaz.
 */

import Iyzipay from "iyzipay";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const iyzipay = new (require("iyzipay"))({
  apiKey: process.env.IYZICO_API_KEY,
  secretKey: process.env.IYZICO_SECRET_KEY,
  uri: process.env.IYZICO_BASE_URL ?? "https://sandbox-api.iyzipay.com",
});

function call(method, params) {
  return new Promise((resolve, reject) => {
    method.call(iyzipay, params, (err, result) => {
      if (err) return reject(err);
      if (result.status !== "success") return reject(result);
      resolve(result);
    });
  });
}

async function main() {
  console.log("Iyzico plan kurulumu başlıyor...\n");

  // --- Başlangıç Ürünü ---
  const starterProduct = await call(
    iyzipay.subscriptionProduct.create.bind(iyzipay.subscriptionProduct),
    {
      locale: "tr",
      conversationId: "setup-starter",
      name: "İnşaat Kontrol - Başlangıç",
      description: "Küçük ekipler için 5 proje, 10 kullanıcı",
    }
  );
  const starterRef = starterProduct.referenceCode;
  console.log("Başlangıç ürün referenceCode:", starterRef);

  const starterMonthly = await call(
    iyzipay.subscriptionPricingPlan.create.bind(
      iyzipay.subscriptionPricingPlan
    ),
    {
      locale: "tr",
      conversationId: "setup-starter-monthly",
      productReferenceCode: starterRef,
      name: "Başlangıç - Aylık",
      price: "2990.00",
      currencyCode: "TRY",
      paymentInterval: "MONTHLY",
      paymentIntervalCount: 1,
      trialPeriodDays: 14,
    }
  );
  console.log("Başlangıç Aylık referenceCode:", starterMonthly.referenceCode);

  const starterYearly = await call(
    iyzipay.subscriptionPricingPlan.create.bind(
      iyzipay.subscriptionPricingPlan
    ),
    {
      locale: "tr",
      conversationId: "setup-starter-yearly",
      productReferenceCode: starterRef,
      name: "Başlangıç - Yıllık",
      price: "28704.00",
      currencyCode: "TRY",
      paymentInterval: "YEARLY",
      paymentIntervalCount: 1,
      trialPeriodDays: 14,
    }
  );
  console.log("Başlangıç Yıllık referenceCode:", starterYearly.referenceCode);

  // --- Profesyonel Ürünü ---
  const proProduct = await call(
    iyzipay.subscriptionProduct.create.bind(iyzipay.subscriptionProduct),
    {
      locale: "tr",
      conversationId: "setup-pro",
      name: "İnşaat Kontrol - Profesyonel",
      description: "Sınırsız proje, 50 kullanıcı, AI risk analizi",
    }
  );
  const proRef = proProduct.referenceCode;
  console.log("\nProfesyonel ürün referenceCode:", proRef);

  const proMonthly = await call(
    iyzipay.subscriptionPricingPlan.create.bind(
      iyzipay.subscriptionPricingPlan
    ),
    {
      locale: "tr",
      conversationId: "setup-pro-monthly",
      productReferenceCode: proRef,
      name: "Profesyonel - Aylık",
      price: "5990.00",
      currencyCode: "TRY",
      paymentInterval: "MONTHLY",
      paymentIntervalCount: 1,
      trialPeriodDays: 14,
    }
  );
  console.log("Profesyonel Aylık referenceCode:", proMonthly.referenceCode);

  const proYearly = await call(
    iyzipay.subscriptionPricingPlan.create.bind(
      iyzipay.subscriptionPricingPlan
    ),
    {
      locale: "tr",
      conversationId: "setup-pro-yearly",
      productReferenceCode: proRef,
      name: "Profesyonel - Yıllık",
      price: "57504.00",
      currencyCode: "TRY",
      paymentInterval: "YEARLY",
      paymentIntervalCount: 1,
      trialPeriodDays: 14,
    }
  );
  console.log("Profesyonel Yıllık referenceCode:", proYearly.referenceCode);

  console.log("\n=== .env.local'a ekle ===");
  console.log(
    `IYZICO_PLAN_STARTER_MONTHLY=${starterMonthly.referenceCode}`
  );
  console.log(`IYZICO_PLAN_STARTER_YEARLY=${starterYearly.referenceCode}`);
  console.log(`IYZICO_PLAN_PRO_MONTHLY=${proMonthly.referenceCode}`);
  console.log(`IYZICO_PLAN_PRO_YEARLY=${proYearly.referenceCode}`);
}

main().catch((err) => {
  console.error("Hata:", err);
  process.exit(1);
});
