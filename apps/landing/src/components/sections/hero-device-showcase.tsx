"use client";

import { useCallback, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Iphone } from "@/components/ui/iphone";
import { Safari } from "@/components/ui/safari";
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
    <div className="relative mx-auto w-full max-w-3xl pb-12 lg:max-w-none pl-[16%] sm:pb-16">
      <Safari
        url="app.insaatkontrol.com"
        role="img"
        aria-label="İnşaat Kontrol proje komuta merkezi ekran kaydı"
        className="drop-shadow-2xl"
        {...(playing
          ? { videoSrc: "/videos/hero-desktop.mp4" }
          : { imageSrc: "/images/hero-desktop-poster.jpg" })}
      />

      <div className="absolute bottom-0 left-0 w-[26%] -rotate-6">
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
