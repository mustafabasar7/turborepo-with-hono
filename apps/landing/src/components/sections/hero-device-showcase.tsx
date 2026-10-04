"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Iphone } from "@/components/ui/iphone";
import { BrowserFrame } from "@/components/sections/browser-frame";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Masaüstü penceresi + telefon. Videolar sessiz ve döngülüdür;
 * "hareketi azalt" tercihi açıksa veya kullanıcı durdurursa sabit kare gösterilir.
 */
export function HeroDeviceShowcase() {
  const reducedMotion = useReducedMotion();
  const [userChoice, setUserChoice] = useState<boolean | null>(null);
  const playing = userChoice ?? !reducedMotion;

  const togglePlaying = useCallback(() => {
    setUserChoice(!playing);
  }, [playing]);

  return (
    <div className="relative mx-auto w-full max-w-3xl pb-14 lg:max-w-none sm:pl-[16%] sm:pb-20">
      <BrowserFrame url="app.insaatkontrol.com" className="hidden drop-shadow-2xl sm:flex">
        {playing ? (
          <video
            src="/videos/hero-desktop.mp4"
            poster="/images/hero-desktop-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="İnşaat Kontrol uygulama gezinti videosu"
            className="block aspect-[1200/833] w-full object-cover object-top"
          />
        ) : (
          <Image
            src="/images/hero-desktop-poster.jpg"
            alt="İnşaat Kontrol proje komuta merkezi"
            width={1200}
            height={833}
            className="h-auto w-full"
          />
        )}
      </BrowserFrame>

      <div className="mx-auto w-[68%] max-w-72 sm:absolute sm:-bottom-10 sm:left-0 sm:mx-0 sm:w-[26%] sm:max-w-none sm:-rotate-6">
        <Iphone
          role="img"
          aria-label="İnşaat Kontrol mobil uygulama ekran kaydı"
          className="drop-shadow-2xl"
          {...(playing
            ? { videoSrc: "/videos/hero-mobile.mp4" }
            : { src: "/images/hero-mobile-poster.jpg" })}
        />
      </div>

      <Button
        type="button"
        variant="secondary"
        size="icon"
        className="absolute right-2 bottom-0 size-11"
        aria-label={playing ? "Tanıtım videolarını durdur" : "Tanıtım videolarını oynat"}
        onClick={togglePlaying}
      >
        {playing ? <Pause /> : <Play />}
      </Button>
    </div>
  );
}
