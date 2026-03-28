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
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlurFade } from "@/components/ui/blur-fade";
import { FEATURES } from "@/lib/constants";

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

        <Tabs defaultValue="sahada" className="mx-auto max-w-5xl">
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
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {FEATURES.filter((f) => f.category === cat.id).map(
                  (feature, i) => {
                    const Icon = ICON_MAP[feature.icon];
                    return (
                      <BlurFade key={feature.title} delay={i * 0.08} inView>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="relative cursor-default overflow-hidden rounded-xl">
                              <MagicCard
                                className="rounded-xl"
                                gradientSize={150}
                                gradientColor="hsl(var(--primary))"
                                gradientOpacity={0.08}
                              >
                                <div className="flex gap-4 p-5">
                                  {Icon && (
                                    <div className="mt-0.5 flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                      <Icon
                                        size={20}
                                        className="text-primary"
                                        animateOnView
                                      />
                                    </div>
                                  )}
                                  <div className="min-w-0">
                                    <div className="mb-1 flex items-center gap-2">
                                      <h3 className="text-sm font-semibold">
                                        {feature.title}
                                      </h3>
                                      {feature.badge && (
                                        <Badge
                                          variant="default"
                                          className="px-1.5 py-0 text-xs"
                                        >
                                          {feature.badge}
                                        </Badge>
                                      )}
                                    </div>
                                    <p className="text-xs leading-relaxed text-muted-foreground">
                                      {feature.description}
                                    </p>
                                  </div>
                                </div>
                              </MagicCard>
                              {feature.badge && (
                                <BorderBeam
                                  size={60}
                                  duration={8}
                                  delay={i * 0.5}
                                />
                              )}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent
                            side="top"
                            className="max-w-xs text-center"
                          >
                            <p className="font-medium">{feature.title}</p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {feature.description}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </BlurFade>
                    );
                  }
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
