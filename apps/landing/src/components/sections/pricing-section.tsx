"use client";

import { useState } from "react";
import { CheckCircle2, Zap, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { PRICING_PLANS } from "@/config/pricing";
import { cn } from "@/lib/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.yapiplan.com";

async function handleCheckout(variantId: string) {
  const res = await fetch(`${API_URL}/api/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ variantId }),
  });
  const data = (await res.json()) as { checkoutUrl?: string; error?: string };
  if (data.checkoutUrl) {
    window.location.href = data.checkoutUrl;
  }
}

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null);

  async function onPlanClick(plan: (typeof PRICING_PLANS)[0]) {
    if (!plan.isSelfServe) {
      document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const variantId = isYearly ? plan.lsVariantYearly : plan.lsVariantMonthly;
    if (!variantId) {
      document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setLoadingSlug(plan.slug);
    try {
      await handleCheckout(variantId);
    } finally {
      setLoadingSlug(null);
    }
  }

  return (
    <section id="pricing" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <BlurFade delay={0.1} inView>
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <Badge variant="secondary">Fiyatlandırma</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Şantiyenize Uygun Planı Seçin
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              14 günlük ücretsiz deneme. Kredi kartı gerekmez. İstediğiniz zaman iptal edebilirsiniz.
            </p>

            {/* Aylık / Yıllık toggle */}
            <div className="flex items-center gap-3 pt-2">
              <Label
                htmlFor="billing-toggle"
                className={cn("cursor-pointer", !isYearly ? "font-semibold text-foreground" : "text-muted-foreground")}
              >
                Aylık
              </Label>
              <Switch
                id="billing-toggle"
                checked={isYearly}
                onCheckedChange={setIsYearly}
              />
              <Label
                htmlFor="billing-toggle"
                className={cn("flex cursor-pointer items-center gap-2", isYearly ? "font-semibold text-foreground" : "text-muted-foreground")}
              >
                Yıllık
                {isYearly && (
                  <Badge variant="secondary" className="text-xs">
                    ~%20 tasarruf
                  </Badge>
                )}
              </Label>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {PRICING_PLANS.map((plan) => {
              const price = isYearly ? plan.yearlyUsd : plan.monthlyUsd;
              const isLoading = loadingSlug === plan.slug;

              return (
                <Card
                  key={plan.slug}
                  className={cn(
                    "relative flex flex-col",
                    plan.isPopular && "border-primary shadow-lg ring-2 ring-primary"
                  )}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="px-4 py-1 text-sm">
                        <Zap className="mr-1 size-3" />
                        En Popüler
                      </Badge>
                    </div>
                  )}

                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="flex items-end gap-1 pt-2">
                      {price ? (
                        <>
                          <span className="text-4xl font-extrabold">${price}</span>
                          <span className="mb-1 text-muted-foreground">/ay</span>
                        </>
                      ) : (
                        <span className="text-2xl font-bold text-muted-foreground">Teklif Al</span>
                      )}
                    </div>
                    {isYearly && price && (
                      <p className="text-sm text-muted-foreground">
                        Yıllık ${price * 12} faturalandırılır
                      </p>
                    )}
                  </CardHeader>

                  <Separator />

                  <CardContent className="flex-1 pt-6">
                    <ul className="flex flex-col gap-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button
                      variant={plan.isPopular ? "default" : "outline"}
                      className="w-full"
                      disabled={isLoading}
                      onClick={() => onPlanClick(plan)}
                    >
                      {isLoading ? (
                        "Yönlendiriliyor…"
                      ) : plan.isSelfServe ? (
                        "14 Gün Ücretsiz Başla"
                      ) : (
                        <>
                          <MessageCircle className="mr-2 size-4" />
                          Demo Talep Et
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <div className="mt-10 text-center">
            <Separator className="mx-auto mb-6 max-w-xs" />
            <p className="text-sm text-muted-foreground">
              Tüm planlar için 14 günlük ücretsiz deneme · SSL güvenli ödeme (Lemonsqueezy) · İstediğiniz zaman iptal
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
