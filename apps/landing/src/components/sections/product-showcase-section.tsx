"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity } from "@/components/animate-ui/icons/activity";
import { ChartBarDecreasing } from "@/components/animate-ui/icons/chart-bar-decreasing";
import { ClipboardCheck } from "@/components/animate-ui/icons/clipboard-check";
import { Settings } from "@/components/animate-ui/icons/settings";
import { ClipboardList } from "@/components/animate-ui/icons/clipboard-list";
import { Bot } from "@/components/animate-ui/icons/bot";
import { Layers } from "@/components/animate-ui/icons/layers";

type TabItem = {
  id: string;
  label: string;
  Icon: React.ComponentType<{ size?: number; animateOnHover?: boolean; animateOnView?: boolean; className?: string }>;
  ShowcaseIcon: React.ComponentType<{ size?: number; animateOnView?: boolean; className?: string }>;
  title: string;
  description: string;
};

const TABS: TabItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    Icon: Activity,
    ShowcaseIcon: Activity,
    title: "Tüm projeleri tek ekranda",
    description:
      "Bütçe, ilerleme, risk ve ekip durumunu gerçek zamanlı görün. Hiçbir şeyi kaçırmayın.",
  },
  {
    id: "cost",
    label: "Maliyet",
    Icon: ChartBarDecreasing,
    ShowcaseIcon: ChartBarDecreasing,
    title: "Her kuruşu kontrol edin",
    description:
      "Ek işler, hakedişler ve maliyet kodları. Bütçe sapmasını oluşmadan önce görün, Excel ile dışa aktarın.",
  },
  {
    id: "quality",
    label: "Kalite & Güvenlik",
    Icon: ClipboardCheck,
    ShowcaseIcon: ClipboardCheck,
    title: "Sıfır kaza, sıfır eksik",
    description:
      "Punch board ile kusur takibi, denetim şablonları ve near-miss kaydı. İş güvenliğini dokümante edin.",
  },
  {
    id: "field",
    label: "Saha Ops",
    Icon: Settings,
    ShowcaseIcon: Settings,
    title: "Sahayı ofisten yönetin",
    description:
      "Günlük loglar, hava durumu kaydı ve ekipman saatleri. Saha personeli mobil tarayıcıdan giriş yapar.",
  },
  {
    id: "documents",
    label: "Dokümanlar",
    Icon: ClipboardList,
    ShowcaseIcon: ClipboardList,
    title: "Çizimler, RFI, onaylar",
    description:
      "Tüm proje belgelerini merkezi arşivde tutun. AI Smart Edit ile revizyon yönetimi ve versiyon takibi.",
  },
  {
    id: "ai",
    label: "AI Araçları",
    Icon: Bot,
    ShowcaseIcon: Bot,
    title: "Yapay zeka ile şantiye",
    description:
      "Saha talimatı oluşturma, malzeme önerisi, maliyet projeksiyonu ve 360° sanal saha turu.",
  },
];

export function ProductShowcaseSection() {
  return (
    <section id="showcase" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 gap-1">
            <Layers size={14} animateOnView />
            Ürün Turu
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Gerçek Sistem, Gerçek Sonuçlar
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg">
            Müteahhitler, mühendisler ve saha şefleri her gün kullanıyor.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue={TABS[0]!.id}>
            <TabsList className="flex flex-wrap h-auto gap-1 mb-6 bg-muted p-1 rounded-xl">
              {TABS.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow"
                >
                  <tab.Icon size={15} animateOnHover />
                  <span>{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {TABS.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <Card>
                  <CardContent className="p-0 overflow-hidden">
                    {/* Browser chrome */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted">
                      <div className="size-3 rounded-full bg-destructive/60" />
                      <div className="size-3 rounded-full bg-yellow-400/80" />
                      <div className="size-3 rounded-full bg-green-500/80" />
                      <div className="flex-1 mx-4 h-6 rounded bg-background/50 text-xs text-muted-foreground flex items-center px-3">
                        app.insaatkontrol.com
                      </div>
                    </div>
                    {/* Showcase area */}
                    <div className="aspect-video bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex flex-col items-center justify-center p-8 text-center">
                      <tab.ShowcaseIcon
                        size={64}
                        animateOnView
                        className="text-primary mb-6 opacity-80"
                      />
                      <h3 className="text-2xl font-bold mb-3">{tab.title}</h3>
                      <p className="text-muted-foreground max-w-md leading-relaxed">
                        {tab.description}
                      </p>
                      <p className="mt-8 text-xs text-muted-foreground/50 italic">
                        Ekran görüntüsü yakında eklenecek
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
