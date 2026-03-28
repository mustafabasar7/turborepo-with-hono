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
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FEATURES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; size?: number; animateOnView?: boolean }>> = {
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

const CATEGORIES: { id: CategoryId; label: string; description: string; Icon: React.ComponentType<{ size?: number; animateOnHover?: boolean; className?: string }> }[] = [
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
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 gap-1">
            <Sparkles size={14} animateOnView />
            Özellikler
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Her İhtiyacınız İçin Kapsamlı Çözümler
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg">
            İnşaat sektörünün karmaşık ihtiyaçlarına özel geliştirilmiş,
            uçtan uca özellik seti.
          </p>
        </div>

        {/* shadcn Tabs — MCP'den alındı */}
        <Tabs defaultValue="sahada" className="max-w-5xl mx-auto">
          <TabsList className="flex h-auto gap-2 bg-transparent justify-center mb-10 flex-wrap">
            {CATEGORIES.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="flex flex-col items-center gap-1 rounded-xl border px-8 py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:shadow-md border-border text-muted-foreground hover:text-foreground transition-all h-auto"
              >
                <cat.Icon size={22} animateOnHover />
                <span className="font-semibold text-sm">{cat.label}</span>
                <span className="text-xs opacity-80 hidden sm:block">{cat.description}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {CATEGORIES.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {FEATURES.filter((f) => f.category === cat.id).map((feature) => {
                  const Icon = ICON_MAP[feature.icon];
                  return (
                    <Tooltip key={feature.title}>
                      <TooltipTrigger asChild>
                        <Card className="cursor-default hover:shadow-md transition-shadow hover:border-primary/40">
                          <CardContent className="flex gap-4 p-5">
                            {Icon && (
                              <div className="flex-shrink-0 flex size-10 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
                                <Icon size={20} className="text-primary" animateOnView />
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
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-xs text-center">
                        <p className="font-medium">{feature.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
