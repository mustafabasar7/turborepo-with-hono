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
    description: "1-2 projeli küçük müteahhitler için",
    monthly: 2990,
    yearly: 28704,
    lsVariantMonthly: process.env.NEXT_PUBLIC_LS_VARIANT_STARTER_MONTHLY ?? null,
    lsVariantYearly: process.env.NEXT_PUBLIC_LS_VARIANT_STARTER_YEARLY ?? null,
    features: [
      "2 aktif proje",
      "5 kullanıcı",
      "Günlük saha log modülü",
      "Temel maliyet takibi",
      "AI sohbet asistanı (sesli asistan ve panorama Pro planda)",
      "Kamera dahil değil",
      "Email destek",
    ],
    isPopular: false,
    isSelfServe: true,
  },
  {
    slug: "pro",
    name: "Pro",
    description: "3-5 projeli büyüyen müteahhitler için",
    monthly: 5990,
    yearly: 57504,
    lsVariantMonthly: process.env.NEXT_PUBLIC_LS_VARIANT_PRO_MONTHLY ?? null,
    lsVariantYearly: process.env.NEXT_PUBLIC_LS_VARIANT_PRO_YEARLY ?? null,
    features: [
      "5 aktif proje",
      "15 kullanıcı",
      "2 kamera dahil",
      "Genişletilmiş AI kotası: ayda 60 dk sesli asistan, 5 panorama",
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
      "20+ proje",
      "Özel kullanıcı, kamera ve AI kotası",
      "Özel SLA (sözleşmeye göre)",
      "Dedicated teknik destek",
      "Özel entegrasyon talepleri",
      "Özel fiyatlandırma",
    ],
    isPopular: false,
    isSelfServe: false,
  },
];

export interface AddOnConfig {
  name: string;
  price: string;
}

// Yalnızca Pro planı için eklentiler.
export const PRO_ADD_ONS: AddOnConfig[] = [
  { name: "Ek aktif proje", price: "₺1.000 / ay" },
  { name: "Ek kamera", price: "₺500 / ay" },
  { name: "Sesli asistan dakika paketi", price: "Paket olarak satılır, fiyat için iletişime geçin" },
  { name: "Panorama paketi", price: "Paket olarak satılır, fiyat için iletişime geçin" },
];
