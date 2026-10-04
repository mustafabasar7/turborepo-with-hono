"use client";

import { useCallback, useEffect, useRef, useState, type ComponentType } from "react";
import { Pause, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

export type SlideFeature = {
  title: string;
  description: string;
  badge?: string;
  Icon?: IconComponent;
  /** Uygulamadan alınan gezinti videosu; yoksa özellik yalnızca listede görünür. */
  video?: { src: string; poster: string };
};

type FeatureSlidesProps = {
  features: SlideFeature[];
};

type SlideVideoProps = {
  src: string;
  poster: string;
  label: string;
  /** Yalnızca görünen slayt oynar. */
  active: boolean;
  playing: boolean;
  onEnded: () => void;
};

/** Sessiz gezinti videosu. Görünür olunca baştan oynar, bitince bir sonrakine geçilir. */
function SlideVideo({ src, poster, label, active, playing, onEnded }: SlideVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const shouldPlay = active && playing;

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (shouldPlay) void video.play().catch(() => undefined);
    else video.pause();
  }, [shouldPlay]);

  useEffect(() => {
    if (!active && ref.current) ref.current.currentTime = 0;
  }, [active]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      playsInline
      preload="metadata"
      aria-label={label}
      className="block aspect-video w-full object-cover object-top"
      onEnded={onEnded}
      onError={onEnded}
    />
  );
}

/**
 * Solda özellik listesi, sağda tarayıcı çerçevesinde gezinti videosu.
 * Listeden bir özelliğe basınca o özelliğin videosu açılır; video bitince sıradaki özelliğe geçilir.
 */
export function FeatureSlides({ features }: FeatureSlidesProps) {
  const reducedMotion = useReducedMotion();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [userChoice, setUserChoice] = useState<boolean | null>(null);
  const playing = userChoice ?? !reducedMotion;

  const slides = features.filter((feature) => feature.video);
  const activeTitle = slides[current]?.title;

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
    },
    [api, slides],
  );

  const showNext = useCallback(() => api?.scrollNext(), [api]);

  const togglePlaying = useCallback(() => {
    setUserChoice(!playing);
  }, [playing]);

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[4fr_8fr]">
      <ul className="flex flex-col gap-2">
        {features.map((feature) => {
          const hasVideo = Boolean(feature.video);
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

      <Card className="relative gap-0 overflow-hidden rounded-2xl bg-muted/30 p-0 shadow-xl">
        <div className="flex items-center gap-2 border-b bg-muted px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="mx-3 flex-1 truncate rounded bg-background/60 px-3 py-1 text-xs text-muted-foreground">
            app.insaatkontrol.com
          </span>
        </div>

        <Carousel opts={{ loop: true, watchDrag: false }} setApi={setApi}>
          <CarouselContent className="ml-0">
            {slides.map((slide, index) => (
              <CarouselItem key={slide.title} className="pl-0">
                {slide.video && (
                  <SlideVideo
                    src={slide.video.src}
                    poster={slide.video.poster}
                    label={`${slide.title} gezinti videosu`}
                    active={index === current}
                    playing={playing}
                    onEnded={showNext}
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

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
      </Card>
    </div>
  );
}
