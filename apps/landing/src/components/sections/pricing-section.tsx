"use client";

import { useEffect, useRef, useState } from "react";
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
import { BorderBeam } from "@/components/ui/border-beam";
import { PRICING_PLANS, PRO_ADD_ONS } from "@/config/pricing";
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
  const planRowRef = useRef<HTMLDivElement>(null);

  // Telefonda kartlar yatay kayar; ilk açılışta "En Popüler" plan ortada görünsün.
  useEffect(() => {
    const row = planRowRef.current;
    if (!row || row.scrollWidth <= row.clientWidth) return;
    const popular = row.children[PRICING_PLANS.findIndex((plan) => plan.isPopular)] as HTMLElement | undefined;
    if (!popular) return;
    row.scrollLeft = popular.offsetLeft - (row.clientWidth - popular.offsetWidth) / 2;
  }, []);

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
              7 günlük ücretsiz deneme. Kredi kartı gerekmez. İstediğiniz zaman iptal edebilirsiniz.
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
          <div
            ref={planRowRef}
            className="-mx-4 flex max-w-5xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pt-6 pb-4 [scrollbar-width:none] md:mx-auto md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pt-0 [&::-webkit-scrollbar]:hidden"
          >
            {PRICING_PLANS.map((plan) => {
              // yearly = yıllık TOPLAM tutar (₺); ekranda aylık-eşdeğer gösterilir.
              const displayMonthly =
                isYearly && plan.yearly ? Math.round(plan.yearly / 12) : plan.monthly;
              const isLoading = loadingSlug === plan.slug;

              return (
                <Card
                  key={plan.slug}
                  className={cn(
                    "relative flex min-w-[82%] snap-center flex-col md:min-w-0",
                    plan.isPopular && "border-primary shadow-lg ring-2 ring-primary"
                  )}
                >
                  {plan.isPopular && (
                    <BorderBeam size={140} duration={7} colorFrom="#f59e0b" colorTo="#fde68a" borderWidth={2} />
                  )}
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
                      {displayMonthly ? (
                        <>
                          <span className="text-4xl font-extrabold">
                            ₺{displayMonthly.toLocaleString("tr-TR")}
                          </span>
                          <span className="mb-1 text-muted-foreground">/ay</span>
                        </>
                      ) : (
                        <span className="text-2xl font-bold text-muted-foreground">Teklif Al</span>
                      )}
                    </div>
                    {isYearly && plan.yearly && (
                      <p className="text-sm text-muted-foreground">
                        Yıllık ₺{plan.yearly.toLocaleString("tr-TR")} faturalandırılır
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
                        "7 Gün Ücretsiz Başla"
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

        <BlurFade delay={0.25} inView>
          <Card className="mx-auto mt-10 max-w-5xl">
            <CardHeader>
              <CardTitle className="text-base">Pro Plan Eklentileri</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3 text-sm sm:grid-cols-2">
                {PRO_ADD_ONS.map((addOn) => (
                  <li key={addOn.name} className="flex flex-col gap-0.5">
                    <span className="font-medium">{addOn.name}</span>
                    <span className="text-muted-foreground">{addOn.price}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <div className="mt-10 text-center">
            <Separator className="mx-auto mb-6 max-w-xs" />
            <p className="text-sm text-muted-foreground">
              Tüm planlar için 7 günlük ücretsiz deneme · SSL güvenli ödeme (Lemonsqueezy) · İstediğiniz zaman iptal
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
