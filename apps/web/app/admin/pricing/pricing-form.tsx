"use client";

import { useState, useTransition } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { upsertPricingConfig, type PricingUpdateData } from "./actions";
import type { PricingConfig } from "@repo/db";

interface Props {
  config: PricingConfig;
}

export function PricingForm({ config }: Props) {
  const [pending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);

  const [form, setForm] = useState<PricingUpdateData>({
    name: config.name,
    description: config.description,
    monthlyUsd: config.monthlyUsd,
    yearlyUsd: config.yearlyUsd,
    lsVariantMonthly: config.lsVariantMonthly,
    lsVariantYearly: config.lsVariantYearly,
    isPopular: config.isPopular,
    isSelfServe: config.isSelfServe,
    isActive: config.isActive,
    sortOrder: config.sortOrder,
    features: Array.isArray(config.features) ? (config.features as string[]) : [],
  });

  function set<K extends keyof PricingUpdateData>(key: K, value: PricingUpdateData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }

  function handleSubmit() {
    startTransition(async () => {
      await upsertPricingConfig(config.slug, form);
      setSaved(true);
    });
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          {form.name}
          {form.isPopular && <Badge>En Popüler</Badge>}
          {!form.isActive && <Badge variant="secondary">Pasif</Badge>}
        </CardTitle>
        <span className="text-xs text-muted-foreground font-mono">{config.slug}</span>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {/* Temel bilgiler */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={`name-${config.slug}`}>Plan Adı</Label>
            <Input
              id={`name-${config.slug}`}
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={`desc-${config.slug}`}>Açıklama</Label>
            <Input
              id={`desc-${config.slug}`}
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
            />
          </div>
        </div>

        <Separator />

        {/* Fiyatlar */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={`mu-${config.slug}`}>Aylık Fiyat (USD)</Label>
            <Input
              id={`mu-${config.slug}`}
              type="number"
              placeholder="49"
              value={form.monthlyUsd ?? ""}
              onChange={(e) => set("monthlyUsd", e.target.value ? Number(e.target.value) : null)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={`yu-${config.slug}`}>Yıllık Fiyat (USD)</Label>
            <Input
              id={`yu-${config.slug}`}
              type="number"
              placeholder="470"
              value={form.yearlyUsd ?? ""}
              onChange={(e) => set("yearlyUsd", e.target.value ? Number(e.target.value) : null)}
            />
          </div>
        </div>

        {/* LS Variant ID'ler */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={`lsm-${config.slug}`}>LS Variant (Aylık)</Label>
            <Input
              id={`lsm-${config.slug}`}
              placeholder="123456"
              value={form.lsVariantMonthly ?? ""}
              onChange={(e) => set("lsVariantMonthly", e.target.value || null)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={`lsy-${config.slug}`}>LS Variant (Yıllık)</Label>
            <Input
              id={`lsy-${config.slug}`}
              placeholder="123457"
              value={form.lsVariantYearly ?? ""}
              onChange={(e) => set("lsVariantYearly", e.target.value || null)}
            />
          </div>
        </div>

        <Separator />

        {/* Özellikler */}
        <div className="flex flex-col gap-1.5">
          <Label>Özellikler (her satır bir madde)</Label>
          <textarea
            className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y"
            value={form.features.join("\n")}
            onChange={(e) =>
              set("features", e.target.value.split("\n").filter(Boolean))
            }
          />
        </div>

        <Separator />

        {/* Toggle'lar */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {(
            [
              { key: "isPopular", label: "En Popüler" },
              { key: "isSelfServe", label: "Self-Serve" },
              { key: "isActive", label: "Aktif" },
            ] as const
          ).map(({ key, label }) => (
            <div key={key} className="flex items-center justify-between rounded-lg border p-3">
              <Label htmlFor={`${key}-${config.slug}`} className="text-sm">{label}</Label>
              <Switch
                id={`${key}-${config.slug}`}
                checked={form[key]}
                onCheckedChange={(v) => set(key, v)}
              />
            </div>
          ))}
        </div>

        {/* Save */}
        <div className="flex items-center gap-3 pt-1">
          <Button onClick={handleSubmit} disabled={pending}>
            {pending ? "Kaydediliyor…" : "Kaydet"}
          </Button>
          {saved && <span className="text-sm text-green-600">Kaydedildi ✓</span>}
        </div>
      </CardContent>
    </Card>
  );
}
