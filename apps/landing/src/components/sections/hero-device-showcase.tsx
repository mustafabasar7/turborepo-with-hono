"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Iphone } from "@/components/ui/iphone";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/** Koyu çerçeveli, ayaklı monitör. Ekran içeriği `children` olarak gelir. */
function MonitorFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center md:drop-shadow-2xl">
      <div className="w-full overflow-hidden rounded-2xl border-[10px] border-b-[18px] border-neutral-800 bg-neutral-800">
        <div className="overflow-hidden rounded-md">{children}</div>
      </div>
      <div className="h-10 w-1/5 bg-gradient-to-b from-neutral-700 to-neutral-800" />
      <div className="h-2.5 w-2/5 rounded-t-md rounded-b-sm bg-neutral-800" />
    </div>
  );
}

/**
 * Monitör + telefon. Videolar sessiz ve döngülüdür;
 * "hareketi azalt" tercihi açıksa veya kullanıcı durdurursa sabit kare gösterilir.
 */
export function HeroDeviceShowcase() {
  const reducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 640px)", false);
  const [userChoice, setUserChoice] = useState<boolean | null>(null);
  const playing = userChoice ?? !reducedMotion;

  const togglePlaying = useCallback(() => {
    setUserChoice(!playing);
  }, [playing]);

  return (
    <div className="relative mx-auto w-full max-w-3xl pb-6 sm:pl-[14%] sm:pb-10 lg:max-w-none">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-[8%] hidden size-72 rounded-full bg-primary/25 blur-3xl md:block"
      />

      <MonitorFrame>
        {playing ? (
          <video
            src={isDesktop ? "/videos/hero-desktop.mp4" : "/videos/hero-desktop-sm.mp4"}
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
      </MonitorFrame>

      <div className="absolute bottom-0 left-0 hidden w-[28%] -rotate-6 sm:block">
        <Iphone
          role="img"
          aria-label="İnşaat Kontrol mobil uygulama ekran kaydı"
          className="md:drop-shadow-2xl"
          {...(playing && isDesktop
            ? { videoSrc: "/videos/hero-mobile.mp4" }
            : { src: "/images/hero-mobile-poster.jpg" })}
        />
      </div>

      <Button
        type="button"
        variant="secondary"
        size="icon"
        className="absolute right-2 bottom-0 size-11 max-sm:static max-sm:mx-auto max-sm:mt-4 max-sm:flex"
        aria-label={playing ? "Tanıtım videolarını durdur" : "Tanıtım videolarını oynat"}
        onClick={togglePlaying}
      >
        {playing ? <Pause /> : <Play />}
      </Button>
    </div>
  );
}
