"use client";

import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sparkles } from "@/components/animate-ui/icons/sparkles";
import { Clock } from "@/components/animate-ui/icons/clock";
import { cn } from "@/lib/utils";

interface FeatureChip {
  icon: React.ReactNode;
  label: string;
}

export function VideoDemoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const featureChips: FeatureChip[] = [
    { icon: <Clock size={14} />, label: "90 saniye" },
    { icon: <span className="text-xs">✓</span>, label: "Kurulum gerektirmez" },
    { icon: <span className="text-xs">✓</span>, label: "Türkçe anlatım" },
    { icon: <span className="text-xs">✓</span>, label: "Tüm özellikler" },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Badge variant="outline">Demo</Badge>
            <Sparkles size={16} className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Sistemi 90 Saniyede Görün
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Dashboard&apos;dan saha operasyonlarına, maliyet kontrolünden AI
            araçlarına — tüm sistem canlı demo.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <AspectRatio ratio={16 / 9}>
                <div className="relative flex size-full flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  {/* Top label */}
                  <div className="absolute top-6 flex items-center gap-2 rounded-full bg-background/80 px-4 py-1.5 text-sm font-medium shadow-sm backdrop-blur-sm">
                    <Play className="size-3.5 fill-current" />
                    Demo Video
                  </div>

                  {/* Play button */}
                  <button
                    type="button"
                    aria-label="Videoyu oynat"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={cn(
                      "flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform motion-safe:hover:scale-110 motion-safe:active:scale-95"
                    )}
                  >
                    <Play className="size-8 fill-current" />
                  </button>

                  {/* Placeholder text */}
                  <p className="mt-5 text-sm text-muted-foreground">
                    Canlı demo yakında
                  </p>
                </div>
              </AspectRatio>
            </CardContent>
          </Card>

          {/* Feature chips */}
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
