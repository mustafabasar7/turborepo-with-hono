"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const TABS = [
  {
    id: "dashboard",
    label: "Dashboard",
    emoji: "📊",
    title: "Tüm projeleri tek ekranda",
    description:
      "Bütçe, ilerleme, risk ve ekip durumunu gerçek zamanlı görün. Hiçbir şeyi kaçırmayın.",
  },
  {
    id: "cost",
    label: "Maliyet Kontrolü",
    emoji: "💰",
    title: "Her kuruşu kontrol edin",
    description:
      "Ek işler, hakedişler ve maliyet kodları. Bütçe sapmasını oluşmadan önce görün, Excel ile dışa aktarın.",
  },
  {
    id: "quality",
    label: "Kalite & Güvenlik",
    emoji: "🦺",
    title: "Sıfır kaza, sıfır eksik",
    description:
      "Punch board ile kusur takibi, denetim şablonları ve near-miss kaydı. İş güvenliğini dokümante edin.",
  },
  {
    id: "field",
    label: "Saha Operasyonları",
    emoji: "🔧",
    title: "Sahayı ofisten yönetin",
    description:
      "Günlük loglar, hava durumu kaydı ve ekipman saatleri. Saha personeli mobil uygulamadan giriş yapar.",
  },
  {
    id: "documents",
    label: "Doküman Zekası",
    emoji: "📁",
    title: "Çizimler, RFI, onaylar",
    description:
      "Tüm proje belgelerini merkezi arşivde tutun. AI Smart Edit ile revizyon yönetimi ve versiyon takibi.",
  },
  {
    id: "ai",
    label: "AI Araçları",
    emoji: "✨",
    title: "Yapay zeka ile şantiye",
    description:
      "Saha talimatı oluşturma, malzeme önerisi, maliyet projeksiyonu ve 360° sanal saha turu.",
  },
];

export function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState<string>(TABS[0]!.id);

  // TABS is a non-empty const — find always returns a defined value
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const current = (TABS.find((t) => t.id === activeTab) ?? TABS[0])!;

  return (
    <section id="showcase" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Ürün Turu</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Gerçek Sistem, Gerçek Sonuçlar
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg">
            Müteahhitler, mühendisler ve saha şefleri her gün kullanıyor.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
          {/* Tab list */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible lg:w-56 flex-shrink-0 pb-2 lg:pb-0">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium transition-colors text-left whitespace-nowrap lg:whitespace-normal w-auto lg:w-full",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground border-primary shadow"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                )}
              >
                <span className="text-lg">{tab.emoji}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Showcase area */}
          <div className="flex-1 rounded-xl border bg-card overflow-hidden shadow-lg">
            <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <div className="flex-1 mx-4 h-6 rounded bg-background/50" />
            </div>
            <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-secondary/10 flex flex-col items-center justify-center p-8 text-center">
              <div className="text-5xl mb-4">{current.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{current.title}</h3>
              <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
                {current.description}
              </p>
              <p className="mt-6 text-xs text-muted-foreground/60 italic">
                Ekran görüntüsü yakında eklenecek
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
