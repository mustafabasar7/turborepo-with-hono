"use client";

import { Badge } from "@/components/ui/badge";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { SpinningText } from "@/components/ui/spinning-text";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";
import { Blocks } from "@/components/animate-ui/icons/blocks";
import {
  Bot,
  Activity,
  Bell,
  Layers,
  TrendingUp,
} from "lucide-react";

const INTEGRATION_BADGES = [
  "AutoCAD",
  "SAP",
  "Teams",
  "WhatsApp",
  "BIM360",
  "Excel",
  "Revit",
  "Procore",
  "Slack",
  "Dropbox",
];

function SpinningAiBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-20">
      <SpinningText
        radius={10}
        duration={14}
        className="text-lg font-bold text-primary"
      >
        {"AI • YAPAY ZEKA • AKILLI • "}
      </SpinningText>
    </div>
  );
}

function IntegrationsBackground() {
  return (
    <div className="absolute inset-x-0 top-0 overflow-hidden p-4">
      <Marquee pauseOnHover className="[--duration:20s] [--gap:0.5rem]">
        {INTEGRATION_BADGES.map((name) => (
          <span
            key={name}
            className="rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

function CounterBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-15">
      <NumberTicker
        value={35}
        className="text-6xl font-extrabold text-primary"
      />
    </div>
  );
}

const features = [
  {
    Icon: Bot,
    name: "AI Destekli Asistan",
    description:
      "Saha talimatı yaz, malzeme öner, maliyet projeksiyonu yap. Dokümanlardan otomatik RFI oluştur.",
    href: "#features",
    cta: "Keşfet",
    background: <SpinningAiBackground />,
    className: "lg:col-span-2 lg:row-start-1",
  },
  {
    Icon: Activity,
    name: "Gerçek Zamanlı",
    description: "Değişiklikler anında tüm ekiple senkronize olur.",
    href: "#features",
    cta: "Detaylar",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
    ),
    className: "lg:col-start-3 lg:row-start-1",
  },
  {
    Icon: TrendingUp,
    name: "Maliyet Kontrolü",
    description: "Bütçe sapmasını oluşmadan önce gör. %35 ortalama tasarruf.",
    href: "#features",
    cta: "İncele",
    background: <CounterBackground />,
    className: "lg:col-start-1 lg:row-start-2",
  },
  {
    Icon: Bell,
    name: "Akıllı Uyarılar",
    description: "Bütçe sapması, gecikme ve risk bildirimleri anında.",
    href: "#features",
    cta: "Detaylar",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-chart-3/5 to-transparent" />
    ),
    className: "lg:col-start-2 lg:row-start-2",
  },
  {
    Icon: Layers,
    name: "40+ Entegrasyon",
    description:
      "AutoCAD, SAP, Teams, WhatsApp Business, BIM360 ve daha fazlası.",
    href: "#features",
    cta: "Tümü",
    background: <IntegrationsBackground />,
    className: "lg:col-start-3 lg:row-start-2",
  },
] as const;

export function BentoGridSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <BlurFade delay={0.1} inView>
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4 gap-1">
              <Blocks size={14} animateOnView />
              Platform Özeti
            </Badge>
            <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
              Hepsini Bir Arada Yönet
            </h2>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground">
              Şantiyeden ofise, yapay zekadan raporlamaya — tek çatı altında.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <BentoGrid className="mx-auto max-w-5xl lg:grid-rows-2">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </BlurFade>
      </div>
    </section>
  );
}
