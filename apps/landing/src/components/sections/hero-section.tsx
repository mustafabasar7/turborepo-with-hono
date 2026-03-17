import React from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6 text-sm px-4 py-1.5">
          🚀 Yeni: AI Destekli Risk Analizi
        </Badge>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          İnşaat Projelerinizi{" "}
          <span className="text-primary">Tam Kontrole Alın</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl mb-10">
          Proje yönetimi, maliyet kontrolü, kalite denetimi ve saha
          operasyonlarını tek platformda birleştiren Türkiye&apos;nin lider
          inşaat ERP yazılımı.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-base px-8" asChild>
            <Link href="#demo">
              Ücretsiz Demo Talep Et
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8" asChild>
            <Link href="#how-it-works">
              <Play className="mr-2 h-4 w-4" />
              Nasıl Çalışır?
            </Link>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            ✓ 14 gün ücretsiz deneme
          </span>
          <span className="hidden sm:block text-border">|</span>
          <span className="flex items-center gap-1.5">
            ✓ Kredi kartı gerekmez
          </span>
          <span className="hidden sm:block text-border">|</span>
          <span className="flex items-center gap-1.5">
            ✓ 5 dakikada kurulum
          </span>
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
            <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏗️</div>
                <p className="text-muted-foreground font-medium">
                  İnşaat Kontrol Dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
