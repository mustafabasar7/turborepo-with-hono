"use client";

import { useState } from "react";
import { Check, Zap, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

interface CheckoutModalProps {
  planName: string;
  onClose: () => void;
  onSubmit: (data: CustomerFormState) => void;
  loading: boolean;
}

function CheckoutModal({ planName, onClose, onSubmit, loading }: CheckoutModalProps) {
  const [form, setForm] = useState<CustomerFormState>({
    name: "",
    surname: "",
    email: "",
    gsmNumber: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-background rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          aria-label="Kapat"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-xl font-bold mb-1">{planName} Planı</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Ödeme sayfasına yönlendirilmek için bilgilerinizi girin.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium block mb-1" htmlFor="name">
                Ad
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Ahmet"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1" htmlFor="surname">
                Soyad
              </label>
              <input
                id="surname"
                name="surname"
                type="text"
                required
                value={form.surname}
                onChange={handleChange}
                placeholder="Yılmaz"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium block mb-1" htmlFor="email">
              E-posta
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="ornek@email.com"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1" htmlFor="gsmNumber">
              Telefon <span className="text-muted-foreground">(opsiyonel)</span>
            </label>
            <input
              id="gsmNumber"
              name="gsmNumber"
              type="tel"
              value={form.gsmNumber}
              onChange={handleChange}
              placeholder="+905551234567"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Yönlendiriliyor..." : "Ödeme Sayfasına Git"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ id: string; name: string; ref: string } | null>(null);
  const [loading, setLoading] = useState(false);

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

  async function handleCheckoutSubmit(customer: CustomerFormState) {
    if (!selectedPlan) return;
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planReferenceCode: selectedPlan.ref,
          ...customer,
        }),
      });

      if (!res.ok) throw new Error();

      const data = (await res.json()) as { checkoutFormContent: string; token: string };

      // Iyzico form içeriğini yeni sayfada aç
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
      {selectedPlan && (
        <CheckoutModal
          planName={selectedPlan.name}
          onClose={() => setSelectedPlan(null)}
          onSubmit={handleCheckoutSubmit}
          loading={loading}
        />
      )}

      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Fiyatlandırma
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              İşletmenize Uygun Planı Seçin
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              14 günlük ücretsiz deneme. Kredi kartı gerekmez. İstediğiniz
              zaman iptal edebilirsiniz.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <span
                className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}
              >
                Aylık
              </span>
              <button
                role="switch"
                aria-checked={isYearly}
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${isYearly ? "bg-primary" : "bg-input"}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isYearly ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
              <span
                className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}
              >
                Yıllık
                <Badge variant="secondary" className="ml-2 text-xs">
                  %20 İndirim
                </Badge>
              </span>
            </div>
          </div>

          {/* Plans */}
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border bg-background p-8 shadow-sm flex flex-col ${
                  plan.highlighted
                    ? "border-primary shadow-lg ring-2 ring-primary"
                    : "border-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="px-4 py-1 text-sm">
                      <Zap className="mr-1 h-3 w-3" />
                      En Popüler
                    </Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-extrabold">
                      {formatPrice(
                        isYearly ? plan.yearlyPrice : plan.monthlyPrice
                      )}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-muted-foreground mb-1">/ay</span>
                    )}
                  </div>
                  {isYearly && plan.monthlyPrice > 0 && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Yıllık {formatPrice(plan.yearlyPrice * 12)} faturalandırılır
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  className="w-full"
                  onClick={() => handlePlanClick(plan.id, plan.name)}
                >
                  {plan.ctaLabel}
                </Button>
              </div>
            ))}
          </div>

          {/* Trust */}
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>
              Tüm planlar için 14 günlük ücretsiz deneme • SSL güvenli ödeme
              (iyzico) • İstediğiniz zaman iptal
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
