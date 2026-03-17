import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Projelerinizi Bugün Kontrol Altına Alın
        </h2>
        <p className="mx-auto max-w-xl text-lg opacity-90 mb-8">
          14 günlük ücretsiz deneme ile İnşaat Kontrol&apos;ü hemen keşfedin.
          Kurulum dakikalar içinde tamamlanır, destek her zaman yanınızda.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="text-base px-8"
            asChild
          >
            <Link href="#demo">
              Ücretsiz Demo Talep Et
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <Link href="#features">Özellikleri Keşfet</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
