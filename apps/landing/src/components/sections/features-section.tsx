"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  TrendingUp,
  ShieldCheck,
  HardHat,
  Sparkles,
  FileText,
  BarChart3,
  AlertTriangle,
  Users,
  Camera,
  Truck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { FEATURES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  TrendingUp,
  ShieldCheck,
  HardHat,
  Sparkles,
  FileText,
  BarChart3,
  AlertTriangle,
  Users,
  Camera,
  Truck,
};

const CATEGORIES = [
  {
    id: "sahada" as const,
    label: "Sahada",
    description: "Şantiyeyi gerçek zamanlı yönet",
    emoji: "🦺",
  },
  {
    id: "ofiste" as const,
    label: "Ofiste",
    description: "Maliyet, doküman ve raporlar",
    emoji: "📊",
  },
  {
    id: "zekice" as const,
    label: "Zekice",
    description: "AI destekli araçlar",
    emoji: "✨",
  },
];

export function FeaturesSection() {
  const [activeCategory, setActiveCategory] = useState<"sahada" | "ofiste" | "zekice">("sahada");

  const filtered = FEATURES.filter((f) => f.category === activeCategory);

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Özellikler</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Her İhtiyacınız İçin Kapsamlı Çözümler
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg">
            İnşaat sektörünün karmaşık ihtiyaçlarına özel geliştirilmiş,
            uçtan uca özellik seti.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "flex flex-col items-center gap-1 rounded-xl border px-8 py-4 text-sm font-medium transition-colors w-full sm:w-auto",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              )}
            >
              <span className="text-2xl">{cat.emoji}</span>
              <span className="font-semibold">{cat.label}</span>
              <span className="text-xs opacity-80">{cat.description}</span>
            </button>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filtered.map((feature) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <div
                key={feature.title}
                className="flex gap-4 rounded-xl border bg-card p-5 hover:shadow-md transition-shadow"
              >
                {Icon && (
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                )}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                    {feature.badge && (
                      <Badge variant="default" className="text-xs px-1.5 py-0">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
