"use client";

import React from "react";
import { Building2, UserPlus, MonitorSmartphone } from "lucide-react";
import { ClipboardList } from "@/components/animate-ui/icons/clipboard-list";
import { Settings } from "@/components/animate-ui/icons/settings";
import { Badge } from "@/components/ui/badge";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

type LucideIcon = React.ComponentType<{ className?: string }>;
const STEP_ICONS_LUCIDE: (LucideIcon | null)[] = [null, Building2, UserPlus, MonitorSmartphone];
const STEP_COLORS = [
  "bg-amber-100 text-amber-700",
  "bg-blue-100 text-blue-700",
  "bg-green-100 text-green-700",
  "bg-purple-100 text-purple-700",
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 gap-1">
            <Settings size={14} animateOnView />
            Nasıl Çalışır
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            4 Adımda Başlayın
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg">
            Dakikalar içinde kurulum yapın, projelerinizi hemen yönetmeye başlayın.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-border z-0" />

            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const LucideIcon = STEP_ICONS_LUCIDE[index];
              const colorClass = STEP_COLORS[index] ?? STEP_COLORS[0];
              return (
                <div key={step.step} className="relative flex flex-col items-center text-center z-10">
                  {/* Icon circle */}
                  <div className={`flex size-20 items-center justify-center rounded-2xl ${colorClass} mb-4 shadow-sm`}>
                    {index === 0
                      ? <ClipboardList size={36} animateOnView />
                      : LucideIcon && <LucideIcon className="size-9" />}
                  </div>

                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 md:right-auto md:left-1/2 md:-translate-x-1/2 md:-top-2 size-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </div>

                  <h3 className="font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
