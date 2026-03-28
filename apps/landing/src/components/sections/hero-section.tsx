"use client";

import React from "react";
import Link from "next/link";
import { HardHat, Construction, Truck, Ruler, BrickWall, TrendingUp, AlertTriangle, CheckCircle2, Clock } from "lucide-react";
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right";
import { Hammer } from "@/components/animate-ui/icons/hammer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TextAnimate } from "@/components/ui/text-animate";
import { WordRotate } from "@/components/ui/word-rotate";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Animated gradient orbs — pure Tailwind */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="motion-safe:animate-pulse absolute -top-32 left-1/2 size-[700px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="motion-safe:animate-pulse absolute top-1/3 -left-32 size-[400px] rounded-full bg-primary/10 blur-3xl [animation-delay:1.5s] [animation-duration:4s]" />
        <div className="motion-safe:animate-pulse absolute top-1/4 -right-32 size-[400px] rounded-full bg-primary/10 blur-3xl [animation-delay:3s] [animation-duration:5s]" />
        <div className="motion-safe:animate-pulse absolute bottom-0 left-1/2 size-[500px] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl [animation-delay:0.8s] [animation-duration:6s]" />
      </div>
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

        {/* Dashboard mockup */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-xl border bg-background shadow-2xl">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b bg-muted px-4 py-2.5">
              <div className="size-3 rounded-full bg-destructive/50" />
              <div className="size-3 rounded-full bg-primary/60" />
              <div className="size-3 rounded-full bg-chart-2/60" />
              <div className="mx-3 flex h-6 flex-1 items-center rounded bg-background/60 px-3 text-xs text-muted-foreground">
                app.insaatkontrol.com/dashboard
              </div>
              <Avatar className="size-6">
                <AvatarFallback className="bg-primary/20 text-[9px] font-bold text-primary">AY</AvatarFallback>
              </Avatar>
            </div>

            {/* Dashboard content */}
            <div className="flex h-[420px] overflow-hidden bg-muted/20">
              {/* Sidebar */}
              <div className="hidden w-44 shrink-0 flex-col gap-1 border-r bg-background p-3 md:flex">
                <div className="mb-2 flex items-center gap-2 px-2 py-1">
                  <HardHat className="size-4 text-primary" />
                  <span className="text-xs font-bold text-primary">İnşaat Kontrol</span>
                </div>
                {["Dashboard", "Projeler", "Maliyet", "Saha Logları", "Hakedişler", "Raporlar"].map((item, i) => (
                  <div key={item} className={`rounded-md px-2 py-1.5 text-left text-xs ${i === 0 ? "bg-primary/10 font-semibold text-primary" : "text-muted-foreground"}`}>
                    {item}
                  </div>
                ))}
              </div>

              {/* Main panel */}
              <div className="flex flex-1 flex-col gap-3 overflow-hidden p-4">
                {/* Stats row */}
                <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
                  {[
                    { label: "Aktif Proje", value: "12", icon: CheckCircle2, color: "text-chart-2" },
                    { label: "Toplam Bütçe", value: "₺48M", icon: TrendingUp, color: "text-primary" },
                    { label: "Risk Uyarısı", value: "3", icon: AlertTriangle, color: "text-destructive" },
                    { label: "Bu Ay Harcama", value: "₺2.1M", icon: Clock, color: "text-chart-3" },
                  ].map(({ label, value, icon: Icon, color }) => (
                    <Card key={label} className="p-0">
                      <CardContent className="flex items-center gap-2 p-3">
                        <Icon className={`size-4 shrink-0 ${color}`} />
                        <div className="min-w-0">
                          <p className="truncate text-[10px] text-muted-foreground">{label}</p>
                          <p className="text-sm font-bold">{value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Project table */}
                <Card className="flex-1 overflow-hidden p-0">
                  <CardHeader className="border-b px-4 py-2.5">
                    <CardTitle className="text-xs font-semibold">Proje Durumu</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    {[
                      { name: "Kadıköy Konut Projesi", budget: 72, status: "Aktif", risk: false },
                      { name: "Levent Ofis Kulesi", budget: 45, status: "Gecikme", risk: true },
                      { name: "İzmir AVM Yenileme", budget: 88, status: "Aktif", risk: false },
                      { name: "Ankara Lojistik Merkezi", budget: 31, status: "Planlama", risk: false },
                    ].map((p, i) => (
                      <div key={p.name}>
                        <div className="flex items-center gap-3 px-4 py-2">
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-xs font-medium">{p.name}</p>
                            <div className="mt-1 flex items-center gap-2">
                              <Progress value={p.budget} className="h-1 w-20" />
                              <span className="text-[10px] text-muted-foreground">%{p.budget}</span>
                            </div>
                          </div>
                          <Badge variant={p.risk ? "destructive" : "secondary"} className="shrink-0 text-[10px]">
                            {p.status}
                          </Badge>
                        </div>
                        {i < 3 && <Separator />}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
