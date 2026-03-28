"use client";

import React from "react";
import Link from "next/link";
import { HardHat, Construction, Building2 } from "lucide-react";
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right";
import { Hammer } from "@/components/animate-ui/icons/hammer";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Decorative icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HardHat className="absolute top-6 left-8 size-16 opacity-10 rotate-[-10deg]" />
        <Construction className="absolute bottom-8 right-10 size-20 opacity-10 rotate-[8deg]" />
        <Building2 className="absolute top-1/2 left-4 -translate-y-1/2 size-14 opacity-8 rotate-[-5deg]" />
        <Building2 className="absolute top-1/2 right-6 -translate-y-1/2 size-12 opacity-8 rotate-[5deg]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-1.5 text-sm font-medium mb-6">
          <Hammer size={16} animateOnView />
          14 gün ücretsiz, kredi kartı gerekmez
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 max-w-2xl mx-auto leading-tight">
          Şantiyenizi Bugün Kontrol Altına Alın
        </h2>
        <p className="mx-auto max-w-xl text-lg opacity-90 mb-10">
          Binlerce müteahhit ve mühendis her gün kullanıyor.
          Siz de maliyet aşımı ve gecikmeye son verin.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="text-base px-10 font-semibold"
            asChild
          >
            <Link href="#demo">
              Ücretsiz Demo Talep Et
              <ArrowRight data-icon="inline-end" animateOnHover />
            </Link>
          </Button>
          <Button
            size="lg"
            className="text-base px-10 bg-transparent border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <Link href="#features">Özelliklere Bak</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
