"use client";

import Image from "next/image";
import Link from "next/link";
import { Construction, Truck, Ruler, BrickWall, CheckCircle2 } from "lucide-react";
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right";
import { Hammer } from "@/components/animate-ui/icons/hammer";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { WordRotate } from "@/components/ui/word-rotate";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { HeroDeviceShowcase } from "@/components/sections/hero-device-showcase";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-3 pb-6 md:pt-4 md:pb-8 lg:pt-4 lg:pb-10">
      {/* Hero background image — sadece alt kısımda (dashboard arkasında) gözükür */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_80%] md:object-bottom"
          style={{ opacity: 0.5 }}
        />
        {/* Üst gradient: başlık + butonlar temiz, alt %40 görsel görünür */}
        <div className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-background via-background/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Dot grid background — pure CSS, zero JS */}
      <div
        aria-hidden="true"
        className="hero-dot-bg pointer-events-none absolute inset-0 text-foreground/[0.07]"
      />

      {/* Gradient colour washes — no blur-3xl on mobile for perf */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
        <div className="absolute -top-40 left-1/2 size-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]" />
        <div className="absolute top-1/3 -left-40 size-[500px] rounded-full bg-primary/8 blur-[80px]" />
        <div className="absolute top-1/4 -right-40 size-[500px] rounded-full bg-primary/8 blur-[80px]" />
      </div>

      {/* Floating icons */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
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

      <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 lg:grid-cols-[5fr_7fr] lg:gap-6 xl:max-w-[88rem]">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Shiny badge */}
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 text-sm">
            <AnimatedShinyText shimmerWidth={150} className="font-medium">
              İnşaat Şantiye Yönetim Platformu
            </AnimatedShinyText>
          </div>

          {/* Animated headline */}
          <TextAnimate
            as="h1"
            animation="blurInUp"
            by="line"
            duration={0.25}
            className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-5xl 2xl:text-6xl"
          >
            {"Maliyet Aşımı Bitti."}
          </TextAnimate>

          {/* Rotating tagline */}
          <div className="mb-6 flex">
            <WordRotate
              words={[
                "Gecikme Bitti.",
                "Kaos Bitti.",
                "Belirsizlik Bitti.",
                "Kontrol Sizde.",
              ]}
              duration={2200}
              className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl xl:text-5xl 2xl:text-6xl"
            />
          </div>

          <TextAnimate
            as="p"
            animation="blurIn"
            by="line"
            duration={0.3}
            delay={0.2}
            className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl"
          >
            {"Şantiyeden ofise tek platform. Proje yönetimi, maliyet kontrolü, kalite denetimi, saha operasyonları ve AI araçları — hepsi bir arada."}
          </TextAnimate>

          {/* Trust bullets */}
          <ul className="mb-8 flex flex-col gap-2 text-left text-base text-muted-foreground">
            {[
              "7 gün ücretsiz deneme",
              "Kredi kartı gerekmez",
              "Kurulum 5 dakika",
              "Türkçe destek",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="size-5 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" className="px-8 text-base" asChild>
              <Link href="#demo">
                Ücretsiz Demo Talep Et
                <ArrowRight data-icon="inline-end" animateOnHover />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 text-base"
              asChild
            >
              <Link href="#features">Özelliklere Bak</Link>
            </Button>
          </div>
        </div>

        <HeroDeviceShowcase />
      </div>
    </section>
  );
}
