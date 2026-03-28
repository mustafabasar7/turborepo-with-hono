"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles } from "@/components/animate-ui/icons/sparkles";

export function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <Alert className="rounded-none border-x-0 border-t-0 bg-primary/10 border-primary/20 py-3 px-4">
      <AlertDescription>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-1 flex-wrap items-center justify-center gap-2 text-sm">
            <div className="flex items-center gap-1.5">
              <Sparkles
                size={16}
                className="text-primary"
                animateOnView
                animateOnViewOnce={false}
              />
              <Badge variant="default" className="text-xs px-2 py-0.5">
                Yeni
              </Badge>
            </div>
            <span className="text-foreground">
              AI Doküman Zekası özelliği yayında — Çizimlerinizden otomatik RFI
              ve Submittal oluşturun.
            </span>
            <Button variant="link" size="sm" className="h-auto p-0 text-primary">
              Dene →
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            aria-label="Kapat"
            className="shrink-0 size-7 p-0 text-muted-foreground hover:text-foreground"
            onClick={() => setDismissed(true)}
          >
            <X className="size-4" />
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  );
}
