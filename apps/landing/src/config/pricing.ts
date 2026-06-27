export interface PlanConfig {
  slug: string;
  name: string;
  description: string;
  // Fiyatlar TRY (₺). LS varyantları da TRY olarak fiyatlanmalı — eşleşmeli.
  monthly: number | null;
  yearly: number | null;
  lsVariantMonthly: string | null;
  lsVariantYearly: string | null;
  features: string[];
  isPopular: boolean;
  isSelfServe: boolean;
}

export const PRICING_PLANS: PlanConfig[] = [
  {
    slug: "starter",
    name: "Starter",
    description: "Küçük inşaat ekipleri için",
    monthly: 2990,
    yearly: 28704,
    lsVariantMonthly: process.env.NEXT_PUBLIC_LS_VARIANT_STARTER_MONTHLY ?? null,
    lsVariantYearly: process.env.NEXT_PUBLIC_LS_VARIANT_STARTER_YEARLY ?? null,
    features: [
      "5 aktif proje",
      "Günlük saha log modülü",
      "Temel maliyet takibi",
      "Mobil görünüm",
      "Email destek",
    ],
    isPopular: false,
    isSelfServe: true,
  },
  {
    slug: "pro",
    name: "Pro",
    description: "Büyüyen firmalar için",
    monthly: 5990,
    yearly: 57504,
    lsVariantMonthly: process.env.NEXT_PUBLIC_LS_VARIANT_PRO_MONTHLY ?? null,
    lsVariantYearly: process.env.NEXT_PUBLIC_LS_VARIANT_PRO_YEARLY ?? null,
    features: [
      "Sınırsız proje",
      "AI Asistan & Doküman Zekası",
      "Kamera entegrasyonu",
      "Hakediş & Maliyet modülü",
      "Öncelikli destek",
    ],
    isPopular: true,
    isSelfServe: true,
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    description: "Büyük inşaat grupları",
    monthly: null,
    yearly: null,
    lsVariantMonthly: null,
    lsVariantYearly: null,
    features: [
      "Tüm Pro özellikler",
      "Özel entegrasyonlar (SAP, AutoCAD)",
      "SLA garantisi",
      "Dedicated teknik destek",
      "Özel fiyatlandırma",
    ],
    isPopular: false,
    isSelfServe: false,
  },
];
