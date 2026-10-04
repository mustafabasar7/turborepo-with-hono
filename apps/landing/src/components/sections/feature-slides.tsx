"use client";

import { useCallback, useEffect, useRef, useState, type ComponentType, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Iphone } from "@/components/ui/iphone";
import { cn } from "@/lib/utils";
import { BrowserFrame } from "@/components/sections/browser-frame";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

export type SlideFeature = {
  title: string;
  description: string;
  badge?: string;
  Icon?: IconComponent;
  /** Uygulamadan alınan gezinti videosu; yoksa özellik yalnızca listede görünür. */
  video?: { src: string; poster: string; mobile?: { src: string; poster: string } };
};

type FeatureSlidesProps = {
  features: SlideFeature[];
};

const CLEAR_PIXEL = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

/** Gerçek telefon çerçevesi; ekran alanına `children` yerleşir (ekran oranı 389.5 : 843.5). */
function PhoneFrame({ children, controls }: { children: ReactNode; controls: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-80">
      <div className="relative mx-auto w-[64%] max-w-64 [&_svg]:pointer-events-none">
      <div
        className="absolute z-0 overflow-hidden"
        style={{ left: "4.907%", top: "2.183%", width: "89.95%", height: "95.63%", borderRadius: "14.3% / 6.6%" }}
      >
        <div className="relative size-full">{children}</div>
      </div>
      <Iphone src={CLEAR_PIXEL} className="md:drop-shadow-2xl" />
      </div>
      {controls}
    </div>
  );
}

type SlideVideoProps = {
  src: string;
  poster: string;
  label: string;
  /** Yalnızca görünen slayt oynar. */
  active: boolean;
  playing: boolean;
  /** Dikey telefon videosu mu? */
  portrait: boolean;
  /** Seçili slayt: posteri hemen ve öncelikli yüklenir. */
  current: boolean;
  onEnded: () => void;
};

/** Sessiz gezinti videosu. Yalnızca etkin slaytta ve bölüm görünürken yüklenir; diğerleri poster gösterir. */
function SlideVideo({
  src,
  poster,
  label,
  active,
  playing,
  portrait,
  current,
  onEnded,
}: SlideVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const shouldPlay = active && playing;
  const shape = cn("block w-full object-cover object-top", portrait ? "aspect-[390/844]" : "aspect-video");

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (shouldPlay) void video.play().catch(() => undefined);
    else video.pause();
  }, [shouldPlay]);

  if (!active) {
    // biome-ignore lint/performance/noImgElement: küçük sabit poster, kaydırmada yüklenir
    return (
      <img
        src={poster}
        alt=""
        loading={current ? "eager" : "lazy"}
        fetchPriority={current ? "high" : "auto"}
        decoding="async"
        className={shape}
      />
    );
  }

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      playsInline
      autoPlay={playing}
      preload="auto"
      aria-label={label}
      className={shape}
      onEnded={onEnded}
    />
  );
}

/**
 * Solda özellik listesi, sağda tarayıcı çerçevesinde gezinti videosu.
 * Listeden bir özelliğe basınca o özelliğin videosu açılır; video bitince sıradaki özelliğe geçilir.
 */
export function FeatureSlides({ features }: FeatureSlidesProps) {
  const reducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 640px)", false);
  const rootRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLButtonElement>(null);
  const [nearViewport, setNearViewport] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [userChoice, setUserChoice] = useState<boolean | null>(null);
  const playing = userChoice ?? !reducedMotion;

  const slides = features.filter((feature) => feature.video && (isDesktop || feature.video.mobile));
  const activeTitle = slides[current]?.title;
  const activeFeature = slides[current];

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const showFeature = useCallback(
    (title: string) => {
      const index = slides.findIndex((slide) => slide.title === title);
      if (index >= 0) api?.scrollTo(index);
      // Telefonda liste videonun altında: seçince video görünüme gelsin.
      if (!isDesktop) {
        playerRef.current?.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "center",
        });
      }
    },
    [api, slides, isDesktop, reducedMotion],
  );

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const showNext = useCallback(() => api?.scrollNext(), [api]);

  // Telefonda seçili düğme satırın ortasında kalsın. Yalnızca düğme satırı yatay kayar;
  // scrollIntoView sayfayı da dikey kaydırdığı için kullanılmaz.
  useEffect(() => {
    const chip = chipRef.current;
    const row = chip?.parentElement;
    if (!chip || !row) return;
    row.scrollTo({ left: chip.offsetLeft - (row.clientWidth - chip.offsetWidth) / 2, behavior: "smooth" });
  }, [current]);

  const togglePlaying = useCallback(() => {
    setUserChoice(!playing);
  }, [playing]);

  const carousel = (
        <Carousel opts={{ loop: true, watchDrag: false }} setApi={setApi}>
          <CarouselContent className="ml-0">
            {slides.map((slide, index) => (
              <CarouselItem key={slide.title} className="pl-0">
                {slide.video && (
                  <SlideVideo
                    src={!isDesktop && slide.video.mobile ? slide.video.mobile.src : slide.video.src}
                    poster={!isDesktop && slide.video.mobile ? slide.video.mobile.poster : slide.video.poster}
                    portrait={!isDesktop && Boolean(slide.video.mobile)}
                    current={index === current}
                    label={`${slide.title} gezinti videosu`}
                    active={nearViewport && index === current}
                    playing={playing}
                    onEnded={showNext}
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
  );

  const overlayControls = (
    <>
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center rounded-full bg-background/80 px-1 backdrop-blur-sm">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`${slide.title} videosu`}
              aria-current={index === current}
              className="flex size-11 items-center justify-center"
              onClick={() => api?.scrollTo(index)}
            >
              <span
                className={cn(
                  "size-2.5 rounded-full transition-colors",
                  index === current ? "bg-primary" : "bg-muted-foreground/40",
                )}
              />
            </button>
          ))}
        </div>

        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="absolute right-3 bottom-3 size-11"
          aria-label={playing ? "Videoyu durdur" : "Videoyu oynat"}
          onClick={togglePlaying}
        >
          {playing ? <Pause /> : <Play />}
        </Button>
    </>
  );

  const belowControls = (
    <div className="mt-3 flex items-center gap-2">
      <div
        role="tablist"
        aria-label="Özellik videoları"
        className="flex min-w-0 flex-1 snap-x gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            ref={index === current ? chipRef : undefined}
            type="button"
            role="tab"
            aria-selected={index === current}
            className={cn(
              "min-h-11 shrink-0 snap-center rounded-full border px-4 text-sm font-medium transition-colors",
              index === current
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground",
            )}
            onClick={() => api?.scrollTo(index)}
          >
            {slide.title}
          </button>
        ))}
      </div>
      <Button
        type="button"
        variant="secondary"
        size="icon"
        className="size-11 shrink-0"
        aria-label={playing ? "Videoyu durdur" : "Videoyu oynat"}
        onClick={togglePlaying}
      >
        {playing ? <Pause /> : <Play />}
      </Button>
    </div>
  );

  return (
    <div ref={rootRef} className="grid items-center gap-8 lg:grid-cols-[4fr_8fr]">
      {isDesktop ? (
      <ul className="flex flex-col gap-2">
        {features.map((feature) => {
          const hasVideo = slides.includes(feature);
          const isActive = hasVideo && feature.title === activeTitle;
          const content = (
            <>
              {feature.Icon && (
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <feature.Icon size={20} className="text-primary" />
                </span>
              )}
              <span className="flex flex-col gap-1">
                <span className="flex items-center gap-2 text-sm font-semibold">
                  {feature.title}
                  {feature.badge && (
                    <Badge className="px-1.5 py-0 text-xs">{feature.badge}</Badge>
                  )}
                </span>
                <span className="text-xs leading-relaxed text-muted-foreground">
                  {feature.description}
                </span>
              </span>
            </>
          );
          const rowClass = cn(
            "flex min-h-11 w-full items-start gap-4 rounded-xl border p-4 text-left transition-colors",
            isActive ? "border-primary bg-primary/5" : "border-border",
          );
          return (
            <li key={feature.title}>
              {hasVideo ? (
                <button
                  type="button"
                  aria-pressed={isActive}
                  className={cn(rowClass, "cursor-pointer hover:border-primary/60")}
                  onClick={() => showFeature(feature.title)}
                >
                  {content}
                </button>
              ) : (
                <div className={cn(rowClass, "opacity-80")}>{content}</div>
              )}
            </li>
          );
        })}
      </ul>
      ) : (
        activeFeature && (
          <div className="mx-auto flex w-full max-w-80 items-start gap-3 rounded-xl border border-primary bg-primary/5 p-4 text-left" aria-live="polite">
            {activeFeature.Icon && (
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <activeFeature.Icon size={20} className="text-primary" />
              </span>
            )}
            <span className="flex flex-col gap-1">
              <span className="text-sm font-semibold">{activeFeature.title}</span>
              <span className="text-xs leading-relaxed text-muted-foreground">{activeFeature.description}</span>
            </span>
          </div>
        )
      )}

      {isDesktop ? (
        <BrowserFrame url="app.insaatkontrol.com" className="bg-muted/30">
          {carousel}
          {overlayControls}
        </BrowserFrame>
      ) : (
        <div ref={playerRef} className="max-lg:order-first">
          <PhoneFrame controls={belowControls}>{carousel}</PhoneFrame>
        </div>
      )}
    </div>
  );
}
