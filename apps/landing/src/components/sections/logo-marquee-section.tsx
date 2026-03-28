"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Firm = {
  name: string;
  initials: string;
};

const FIRMS: Firm[] = [
  { name: "Limak İnşaat", initials: "LI" },
  { name: "Kalyon İnşaat", initials: "KI" },
  { name: "Rönesans Holding", initials: "RH" },
  { name: "Kolin İnşaat", initials: "KL" },
  { name: "Alarko Holding", initials: "AH" },
  { name: "TAV İnşaat", initials: "TV" },
  { name: "Tekfen İnşaat", initials: "TK" },
  { name: "İçtaş İnşaat", initials: "İÇ" },
  { name: "Aydınlı Group", initials: "AG" },
  { name: "Polat İnşaat", initials: "PI" },
  { name: "Makyol İnşaat", initials: "MK" },
  { name: "Özallar İnşaat", initials: "ÖZ" },
];

function FirmCard({ firm }: { firm: Firm }) {
  return (
    <Card className="flex shrink-0 items-center gap-3 px-4 py-3 shadow-sm">
      <Avatar className="size-8">
        <AvatarFallback className="text-xs font-semibold bg-primary/10 text-primary">
          {firm.initials}
        </AvatarFallback>
      </Avatar>
      <span className="whitespace-nowrap text-sm font-medium">{firm.name}</span>
    </Card>
  );
}

export function LogoMarqueeSection() {
  return (
    <div className="w-full">
      <Separator />
      <div className="py-8">
        <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
          100+ inşaat firması güveniyor
        </p>
        <div className="relative overflow-hidden">
          {/* Gradient fade on left/right edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
          {/* Marquee track — doubled list for seamless loop */}
          <div className="flex animate-marquee gap-4">
            {FIRMS.map((firm) => (
              <FirmCard key={`a-${firm.name}`} firm={firm} />
            ))}
            {/* Duplicate for seamless loop */}
            {FIRMS.map((firm) => (
              <FirmCard key={`b-${firm.name}`} firm={firm} />
            ))}
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
}
