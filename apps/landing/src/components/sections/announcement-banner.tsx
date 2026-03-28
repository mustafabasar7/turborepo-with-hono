"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Sparkles } from "@/components/animate-ui/icons/sparkles";
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right";

export function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative flex w-full items-center justify-center border-b border-primary/10 bg-primary/5 py-2 px-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Sparkles
          size={14}
          className="text-primary"
          animateOnView
          animateOnViewOnce={false}
        />
        <Badge variant="default" className="px-2 py-0 text-xs">
          Yeni
        </Badge>
        <AnimatedShinyText shimmerWidth={150} className="text-sm font-medium">
          AI Doküman Zekası yayında — Çizimlerinizden otomatik RFI oluşturun
        </AnimatedShinyText>
        <Button
          variant="link"
          size="sm"
          className="h-auto gap-1 p-0 text-xs text-primary"
          asChild
        >
          <a href="#features">
            Dene
            <ArrowRight size={12} animateOnHover />
          </a>
        </Button>
      </div>
      <Button
        variant="ghost"
        size="sm"
        aria-label="Kapat"
        className="absolute right-2 top-1/2 size-6 -translate-y-1/2 p-0 text-muted-foreground hover:text-foreground"
        onClick={() => setDismissed(true)}
      >
        <X className="size-3" />
      </Button>
    </div>
  );
}
