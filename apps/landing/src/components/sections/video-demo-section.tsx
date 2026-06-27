"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { CircleCheck } from "@/components/animate-ui/icons/circle-check";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sparkles } from "@/components/animate-ui/icons/sparkles";
import { Clock } from "@/components/animate-ui/icons/clock";

interface DemoModule {
  slug: string;
  label: string;
  description: string;
  src: string;
}

const DEMO_MODULES = [
  {
    slug: "dashboard",
    label: "Genel Bakış",
    description: "Tüm projelerin tek ekranda canlı durumu, KPI'lar ve uyarılar.",
    src: "/videos/dashboard.mp4",
  },
  {
    slug: "cost-control",
    label: "Maliyet Kontrolü",
    description: "Bütçe, hakediş ve gerçekleşen maliyetin sapma takibi.",
    src: "/videos/cost-control.mp4",
  },
  {
    slug: "project-management",
    label: "Proje Yönetimi",
    description: "Görevler, milestone'lar ve saha ekibinin ilerleme akışı.",
    src: "/videos/project-management.mp4",
  },
  {
    slug: "manager-reports",
    label: "Yönetici Raporları",
    description: "Karar vericiler için özet raporlar ve dışa aktarım.",
    src: "/videos/manager-reports.mp4",
  },
] as const satisfies readonly DemoModule[];

export function VideoDemoSection() {
  const [active, setActive] = useState<DemoModule>(DEMO_MODULES[0]);

  const featureChips = [
    { icon: <Clock size={14} />, label: "Modül başı ~1 dk" },
    { icon: <CircleCheck size={14} animateOnView className="text-primary" />, label: "Türkçe anlatım" },
    { icon: <CircleCheck size={14} animateOnView className="text-primary" />, label: "Gerçek ürün" },
    { icon: <CircleCheck size={14} animateOnView className="text-primary" />, label: "Kurulum gerektirmez" },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Badge variant="outline">Demo</Badge>
            <Sparkles size={16} className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ürünü Modül Modül İzleyin</h2>
          <p className="max-w-2xl text-muted-foreground">
            Dashboard&apos;dan maliyet kontrolüne — her modülün gerçek ürün üzerinden, Türkçe
            anlatımlı kısa demosu.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          {/* Modül seçici */}
          <div
            className="flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Demo modülleri"
          >
            {DEMO_MODULES.map((mod) => (
              <Button
                key={mod.slug}
                type="button"
                role="tab"
                aria-selected={active.slug === mod.slug}
                variant={active.slug === mod.slug ? "default" : "outline"}
                size="sm"
                onClick={() => setActive(mod)}
              >
                {mod.label}
              </Button>
            ))}
          </div>

          {/* Oynatıcı */}
          <Card className="mt-6 overflow-hidden">
            <CardContent className="p-0">
              <AspectRatio ratio={16 / 9}>
                {/* key → modül değişince video yeniden yüklenir */}
                <video
                  key={active.src}
                  controls
                  preload="metadata"
                  className="size-full bg-black object-contain"
                  aria-label={`${active.label} demo videosu`}
                >
                  <source src={active.src} type="video/mp4" />
                </video>
              </AspectRatio>
            </CardContent>
          </Card>

          <p className="mt-4 text-center text-sm text-muted-foreground">{active.description}</p>

          {/* Özellik rozetleri */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {featureChips.map((chip) => (
              <div
                key={chip.label}
                className="flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-sm text-muted-foreground"
              >
                {chip.icon}
                <span>{chip.label}</span>
              </div>
            ))}
          </div>

          <Separator className="my-8" />

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <a href="#demo">Canlı Demo İste</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#demo" className="flex items-center gap-2">
                <ExternalLink className="size-4" />
                Ekranı Paylaş ile Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
