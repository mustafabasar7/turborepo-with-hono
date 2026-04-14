export interface PlanConfig {
  slug: string;
  name: string;
  description: string;
  monthlyUsd: number | null;
  yearlyUsd: number | null;
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
    monthlyUsd: 49,
    yearlyUsd: 470,
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
    monthlyUsd: 149,
    yearlyUsd: 1430,
    lsVariantMonthly: null,
    lsVariantYearly: null,
    features: [
      "Sınırsız proje",
      "AI Asistan & Doküman Zekası",
      "Kamera entegrasyonu",
      "Hakediş & Maliyet modülü",
      "Öncelikli destek",
    ],
    isPopular: true,
    isSelfServe: false,
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    description: "Büyük inşaat grupları",
    monthlyUsd: null,
    yearlyUsd: null,
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
