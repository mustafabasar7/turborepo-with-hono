import { db } from "@repo/db";
import { PricingForm } from "./pricing-form";

const DEFAULT_PLANS = [
  { slug: "starter", name: "Starter", description: "Küçük inşaat ekipleri için" },
  { slug: "pro", name: "Pro", description: "Büyüyen firmalar için" },
  { slug: "enterprise", name: "Enterprise", description: "Büyük inşaat grupları" },
];

export default async function PricingPage() {
  // Mevcut config'leri çek, yoksa default'larla göster
  const configs = await db.pricingConfig.findMany({ orderBy: { sortOrder: "asc" } });

  // Her slug için ya DB'deki ya da boş default
  const plans = DEFAULT_PLANS.map((def, i) => {
    const existing = configs.find((c) => c.slug === def.slug);
    return existing ?? {
      id: `default-${def.slug}`,
      slug: def.slug,
      name: def.name,
      description: def.description,
      monthlyUsd: null,
      yearlyUsd: null,
      lsVariantMonthly: null,
      lsVariantYearly: null,
      features: [],
      isPopular: def.slug === "pro",
      isSelfServe: def.slug === "starter",
      isActive: true,
      sortOrder: i,
      updatedAt: new Date(),
    };
  });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">Fiyatlandırma Yapılandırması</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Planları düzenle ve kaydet. Değişiklikler anında landing page&apos;e yansır.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {plans.map((plan) => (
          <PricingForm key={plan.slug} config={plan as Parameters<typeof PricingForm>[0]["config"]} />
        ))}
      </div>
    </div>
  );
}
