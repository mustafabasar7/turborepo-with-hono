"use client";

import React from "react";
import {
  Building2,
  Ruler,
  HardHat,
  FileText,
  Truck,
  Construction,
  Wrench,
} from "lucide-react";
import { Sparkles } from "@/components/animate-ui/icons/sparkles";
import { ChartBarIncreasing } from "@/components/animate-ui/icons/chart-bar-increasing";
import { UsersRound } from "@/components/animate-ui/icons/users-round";
import { Cctv } from "@/components/animate-ui/icons/cctv";
import { Axe } from "@/components/animate-ui/icons/axe";
import { Bot } from "@/components/animate-ui/icons/bot";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlurFade } from "@/components/ui/blur-fade";
import { FEATURES } from "@/lib/constants";
import { FeatureSlides } from "@/components/sections/feature-slides";

/** Özellik başlığı → uygulamadan alınan gezinti videosu. Listede olmayan özelliğin videosu yoktur. */
const VIDEOS: Record<string, string> = {
  "Saha Operasyonları": "field",
  "Kalite & Güvenlik": "quality",
  "Kaynaklar & Lojistik": "resources",
  "Maliyet Kontrolü": "cost",
  "Doküman Zekası": "docs",
  "Raporlar & Analitik": "insights",
  "Proje Yönetimi": "pm",
  "Risk Yönetimi": "risk",
  "Müşteri Portalı": "portal",
};

const videoFor = (title: string) => {
  const slug = VIDEOS[title];
  return slug
    ? { src: `/videos/feat/${slug}.mp4`, poster: `/images/feat/${slug}.jpg` }
    : undefined;
};

const ICON_MAP: Record<
  string,
  React.ComponentType<{
    className?: string;
    size?: number;
    animateOnView?: boolean;
  }>
> = {
  Building2,
  Ruler,
  HardHat,
  Sparkles,
  FileText,
  BarChart3: ChartBarIncreasing,
  Users: UsersRound,
  Camera: Cctv,
  Truck,
  Construction,
  Wrench,
};

type CategoryId = "sahada" | "ofiste" | "akilli";

const CATEGORIES: {
  id: CategoryId;
  label: string;
  description: string;
  Icon: React.ComponentType<{
    size?: number;
    animateOnHover?: boolean;
    className?: string;
  }>;
}[] = [
  {
    id: "sahada",
    label: "Sahada",
    description: "Şantiyeyi gerçek zamanlı yönet",
    Icon: Axe,
  },
  {
    id: "ofiste",
    label: "Ofiste",
    description: "Maliyet, doküman ve raporlar",
    Icon: ChartBarIncreasing,
  },
  {
    id: "akilli",
    label: "Akıllı Araçlar",
    description: "AI destekli araçlar",
    Icon: Bot,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20">

      <div className="container mx-auto px-4">
        <BlurFade delay={0.1} inView>
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4 gap-1">
              <Sparkles size={14} animateOnView />
              Özellikler
            </Badge>
            <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
              Her İhtiyacınız İçin Kapsamlı Çözümler
            </h2>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground">
              İnşaat sektörünün karmaşık ihtiyaçlarına özel geliştirilmiş,
              uçtan uca özellik seti.
            </p>
          </div>
        </BlurFade>

        <Tabs defaultValue="sahada" className="mx-auto max-w-6xl">
          <TabsList className="mb-10 flex h-auto flex-wrap justify-center gap-2 bg-transparent">
            {CATEGORIES.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="h-auto flex-col items-center gap-1 rounded-xl border border-border px-8 py-4 text-muted-foreground transition-all hover:text-foreground data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
              >
                <cat.Icon size={22} animateOnHover />
                <span className="text-sm font-semibold">{cat.label}</span>
                <span className="hidden text-xs opacity-80 sm:block">
                  {cat.description}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {CATEGORIES.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <FeatureSlides
                features={FEATURES.filter((f) => f.category === cat.id).map(
                  (feature) => ({
                    title: feature.title,
                    description: feature.description,
                    badge: feature.badge,
                    Icon: ICON_MAP[feature.icon],
                    video: videoFor(feature.title),
                  }),
                )}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
