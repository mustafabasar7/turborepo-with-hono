import React from "react";
import { TrendingDown, FileX, Zap, HeadsetIcon } from "lucide-react";
import { STATS } from "@/lib/constants";

const STAT_ICONS = [TrendingDown, FileX, Zap, HeadsetIcon];

export function StatsSection() {
  return (
    <section className="py-12 border-y bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => {
            const Icon = STAT_ICONS[i];
            return (
              <div key={stat.label} className="flex flex-col items-center text-center gap-2">
                {Icon && (
                  <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 mb-1">
                    <Icon className="size-5 text-primary" />
                  </div>
                )}
                <div className="text-3xl md:text-4xl font-extrabold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
