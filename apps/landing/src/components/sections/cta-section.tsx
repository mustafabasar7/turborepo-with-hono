"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right";
import { Hammer } from "@/components/animate-ui/icons/hammer";
import { Particles } from "@/components/ui/particles";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { BlurFade } from "@/components/ui/blur-fade";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
      {/* Particle effect */}
      <Particles
        className="pointer-events-none absolute inset-0 opacity-40"
        quantity={50}
        ease={80}
        color="#ffffff"
        size={0.6}
      />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <BlurFade delay={0.1} inView>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium">
            <Hammer size={16} animateOnView />
            14 gün ücretsiz, kredi kartı gerekmez
          </div>
        </BlurFade>

        <TextAnimate
          as="h2"
          animation="blurInUp"
          by="word"
          duration={0.4}
          className="mx-auto mb-4 max-w-2xl text-3xl font-extrabold leading-tight md:text-5xl"
        >
          {"Şantiyenizi Bugün Kontrol Altına Alın"}
        </TextAnimate>

        <BlurFade delay={0.3} inView>
          <p className="mx-auto mb-10 max-w-xl text-lg opacity-90">
            Binlerce müteahhit ve mühendis her gün kullanıyor. Siz de maliyet
            aşımı ve gecikmeye son verin.
          </p>
        </BlurFade>

        <BlurFade delay={0.4} inView>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <RainbowButton size="lg" asChild>
              <Link href="#demo">
                Ücretsiz Demo Talep Et
                <ArrowRight data-icon="inline-end" animateOnHover />
              </Link>
            </RainbowButton>

            <ShimmerButton
              shimmerColor="#ffffff"
              shimmerDuration="2.5s"
              borderRadius="8px"
              className="px-8 py-3 text-base font-semibold text-white"
            >
              <Link href="#features" className="flex items-center gap-2 text-white">
                Özelliklere Bak
              </Link>
            </ShimmerButton>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
