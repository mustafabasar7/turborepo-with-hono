"use client";

import { useState } from "react";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PRICING_PLANS } from "@/lib/constants";

const PLAN_REFS = {
  starter: {
    monthly: process.env.NEXT_PUBLIC_IYZICO_PLAN_STARTER_MONTHLY ?? "",
    yearly: process.env.NEXT_PUBLIC_IYZICO_PLAN_STARTER_YEARLY ?? "",
  },
  pro: {
    monthly: process.env.NEXT_PUBLIC_IYZICO_PLAN_PRO_MONTHLY ?? "",
    yearly: process.env.NEXT_PUBLIC_IYZICO_PLAN_PRO_YEARLY ?? "",
  },
} as const;

function formatPrice(price: number): string {
  if (price === 0) return "İletişim";
  return new Intl.NumberFormat("tr-TR").format(price) + " ₺";
}

interface CustomerFormState {
  name: string;
  surname: string;
  email: string;
  gsmNumber: string;
}

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ id: string; name: string; ref: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<CustomerFormState>({
    name: "",
    surname: "",
    email: "",
    gsmNumber: "",
  });

  function handlePlanClick(planId: string, planName: string) {
    if (planId === "enterprise") {
      document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const refs = PLAN_REFS[planId as keyof typeof PLAN_REFS];
    const ref = isYearly ? refs?.yearly : refs?.monthly;
    if (!ref) {
      alert("Plan henüz yapılandırılmamış. Lütfen bize ulaşın.");
      return;
    }
    setSelectedPlan({ id: planId, name: planName, ref });
  }

  async function handleCheckoutSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedPlan) return;
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planReferenceCode: selectedPlan.ref, ...form }),
      });
      if (!res.ok) throw new Error();
      const data = (await res.json()) as { checkoutFormContent: string };
      const win = window.open("", "_blank");
      if (win) {
        win.document.write(data.checkoutFormContent);
        win.document.close();
      }
    } catch {
      alert("Ödeme sayfası açılamadı. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
      setSelectedPlan(null);
    }
  }

  return (
    <>
      {/* shadcn Dialog — MCP'den alındı */}
      <Dialog open={!!selectedPlan} onOpenChange={(open) => !open && setSelectedPlan(null)}>
        <DialogContent className="sm:max-w-md">
          <form onSubmit={handleCheckoutSubmit}>
            <DialogHeader>
              <DialogTitle>{selectedPlan?.name} Planı</DialogTitle>
              <DialogDescription>
                Ödeme sayfasına yönlendirilmek için bilgilerinizi girin.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="grid gap-2">
                  <Label htmlFor="name">Ad</Label>
                  <Input
                    id="name"
                    placeholder="Ahmet"
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="surname">Soyad</Label>
                  <Input
                    id="surname"
                    placeholder="Yılmaz"
                    required
                    value={form.surname}
                    onChange={(e) => setForm((p) => ({ ...p, surname: e.target.value }))}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">E-posta</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ornek@email.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">
                  Telefon <span className="text-muted-foreground text-xs">(opsiyonel)</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+905551234567"
                  value={form.gsmNumber}
                  onChange={(e) => setForm((p) => ({ ...p, gsmNumber: e.target.value }))}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setSelectedPlan(null)}>
                İptal
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Yönlendiriliyor..." : "Ödeme Sayfasına Git"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Fiyatlandırma</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              İşletmenize Uygun Planı Seçin
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              14 günlük ücretsiz deneme. Kredi kartı gerekmez. İstediğiniz zaman iptal edebilirsiniz.
            </p>

            {/* shadcn Switch — MCP'den alındı */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <Label htmlFor="billing-toggle" className={!isYearly ? "text-foreground font-medium" : "text-muted-foreground"}>
                Aylık
              </Label>
              <Switch
                id="billing-toggle"
                checked={isYearly}
                onCheckedChange={setIsYearly}
              />
              <Label htmlFor="billing-toggle" className={isYearly ? "text-foreground font-medium" : "text-muted-foreground"}>
                Yıllık
                <Badge variant="secondary" className="ml-2 text-xs">%20 İndirim</Badge>
              </Label>
            </div>
          </div>

          {/* shadcn Card — MCP'den alındı */}
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan) => (
              <Card
                key={plan.id}
                className={plan.highlighted ? "border-primary shadow-lg ring-2 ring-primary relative" : "relative"}
              >
                {plan.highlighted && (
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
                    <span className="text-4xl font-extrabold">
                      {formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-muted-foreground mb-1">/ay</span>
                    )}
                  </div>
                  {isYearly && plan.monthlyPrice > 0 && (
                    <p className="text-sm text-muted-foreground">
                      Yıllık {formatPrice(plan.yearlyPrice * 12)} faturalandırılır
                    </p>
                  )}
                </CardHeader>
                <Separator />
                <CardContent className="pt-6">
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="size-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={plan.highlighted ? "default" : "outline"}
                    className="w-full"
                    onClick={() => handlePlanClick(plan.id, plan.name)}
                  >
                    {plan.ctaLabel}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center text-sm text-muted-foreground">
            <Separator className="mb-6 max-w-xs mx-auto" />
            <p>Tüm planlar için 14 günlük ücretsiz deneme • SSL güvenli ödeme (iyzico) • İstediğiniz zaman iptal</p>
          </div>
        </div>
      </section>
    </>
  );
}
