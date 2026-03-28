import React from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6 text-sm px-4 py-1.5">
          Türkiye&apos;nin İnşaat ERP Platformu
        </Badge>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          Maliyet Aşımı Bitti.{" "}
          <span className="text-primary">Gecikme Bitti.</span>{" "}
          Kontrol Sizde.
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl mb-10">
          Şantiyeden ofise tek platform. Proje yönetimi, maliyet kontrolü,
          kalite denetimi, saha operasyonları ve AI araçları — hepsi bir arada.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-base px-8" asChild>
            <Link href="#demo">
              Ücretsiz Demo Talep Et
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8" asChild>
            <Link href="#features">
              <Play className="mr-2 h-4 w-4" />
              Özelliklere Bak
            </Link>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">✓ 14 gün ücretsiz deneme</span>
          <span className="flex items-center gap-1.5">✓ Kredi kartı gerekmez</span>
          <span className="flex items-center gap-1.5">✓ Kurulum 5 dakika</span>
          <span className="flex items-center gap-1.5">✓ Türkçe destek</span>
        </div>

        {/* Product mockup placeholder */}
        <div className="mt-16 mx-auto max-w-5xl">
          <div className="rounded-xl border bg-muted/50 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <div className="flex-1 mx-4 h-6 rounded bg-background/50" />
            </div>
            <div className="aspect-[16/9] bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏗️</div>
                <p className="text-muted-foreground font-semibold text-lg">
                  İnşaat Kontrol — Dashboard
                </p>
                <p className="text-muted-foreground text-sm mt-1">
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
