import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  url: string;
  className?: string;
  children: ReactNode;
};

/** Tarayıcı penceresi çerçevesi: üstte üç nokta ve adres çubuğu, altta içerik. */
export function BrowserFrame({ url, className, children }: BrowserFrameProps) {
  return (
    <Card className={cn("relative gap-0 overflow-hidden rounded-2xl p-0 shadow-xl", className)}>
      <div className="flex items-center gap-2 border-b bg-muted px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="mx-3 flex-1 truncate rounded bg-background/60 px-3 py-1 text-xs text-muted-foreground">
          {url}
        </span>
      </div>
      {children}
    </Card>
  );
}
