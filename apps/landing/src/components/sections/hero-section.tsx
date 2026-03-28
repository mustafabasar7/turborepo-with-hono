"use client";

import React from "react";
import Link from "next/link";
import { HardHat, Construction, Truck, Ruler, BrickWall } from "lucide-react";
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right";
import { Hammer } from "@/components/animate-ui/icons/hammer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TextAnimate } from "@/components/ui/text-animate";
import { WordRotate } from "@/components/ui/word-rotate";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
      {/* Floating icons */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -z-10 size-[700px] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute top-16 left-8 rotate-[-12deg] opacity-10 md:left-24">
          <HardHat className="size-12 text-primary md:size-16" />
        </div>
        <div className="absolute top-32 right-8 rotate-[10deg] opacity-10 md:right-28">
          <Construction className="size-10 text-primary md:size-14" />
        </div>
        <div className="absolute bottom-24 left-12 rotate-[8deg] opacity-10 md:left-36">
          <Truck className="size-10 text-primary md:size-12" />
        </div>
        <div className="absolute top-20 left-1/4 rotate-[-6deg] opacity-10">
          <Hammer size={36} animateOnView loop loopDelay={3000} className="text-primary" />
        </div>
        <div className="absolute bottom-32 right-12 rotate-[15deg] opacity-10 md:right-40">
          <Ruler className="size-8 text-primary md:size-12" />
        </div>
        <div className="absolute top-48 right-1/4 rotate-[-8deg] opacity-10">
          <BrickWall className="size-8 text-primary md:size-10" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Shiny badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border bg-background/70 px-4 py-1.5 text-sm backdrop-blur-sm">
            <AnimatedShinyText shimmerWidth={150} className="font-medium">
              Türkiye&apos;nin İnşaat ERP Platformu
            </AnimatedShinyText>
          </div>
        </div>

        {/* Animated headline */}
        <TextAnimate
          as="h1"
          animation="blurInUp"
          by="line"
          duration={0.25}
          className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {"Maliyet Aşımı Bitti."}
        </TextAnimate>

        {/* Rotating tagline */}
        <div className="mb-6 flex justify-center">
          <WordRotate
            words={[
              "Gecikme Bitti.",
              "Kaos Bitti.",
              "Belirsizlik Bitti.",
              "Kontrol Sizde.",
            ]}
            duration={2200}
            className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl"
          />
        </div>

        <TextAnimate
          as="p"
          animation="blurIn"
          by="line"
          duration={0.3}
          delay={0.2}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          {"Şantiyeden ofise tek platform. Proje yönetimi, maliyet kontrolü, kalite denetimi, saha operasyonları ve AI araçları — hepsi bir arada."}
        </TextAnimate>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 text-base" asChild>
            <Link href="#demo">
              Ücretsiz Demo Talep Et
              <ArrowRight data-icon="inline-end" animateOnHover />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 text-base backdrop-blur-sm"
            asChild
          >
            <Link href="#features">Özelliklere Bak</Link>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {[
            "14 gün ücretsiz deneme",
            "Kredi kartı gerekmez",
            "Kurulum 5 dakika",
            "Türkçe destek",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              ✓ {item}
            </span>
          ))}
        </div>

        {/* Product mockup */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-xl border bg-muted/50 shadow-2xl">
            <div className="flex items-center gap-2 border-b bg-muted px-4 py-3">
              <div className="size-3 rounded-full bg-destructive/60" />
              <div className="size-3 rounded-full bg-yellow-400/80" />
              <div className="size-3 rounded-full bg-green-500/80" />
              <div className="mx-4 h-6 flex-1 rounded bg-background/50" />
            </div>
            <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-primary/15 to-secondary/15">
              <div className="text-center">
                <Hammer
                  size={60}
                  animateOnView
                  loop
                  loopDelay={4000}
                  className="mx-auto mb-4 text-primary"
                />
                <p className="text-lg font-semibold text-muted-foreground">
                  İnşaat Kontrol — Dashboard
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tüm projeleriniz, tek ekranda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
