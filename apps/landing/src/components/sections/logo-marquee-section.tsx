import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Marquee } from "@/components/ui/marquee";

type Firm = { name: string; initials: string };

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
  { name: "Nurol Holding", initials: "NH" },
  { name: "Alsim Alarko", initials: "AA" },
  { name: "Baytur İnşaat", initials: "BY" },
  { name: "Ant Yapı", initials: "AY" },
];

const firstRow = FIRMS.slice(0, 8);
const secondRow = FIRMS.slice(8);

function FirmCard({ firm }: { firm: Firm }) {
  return (
    <figure className="flex shrink-0 cursor-pointer items-center gap-3 rounded-xl border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-accent">
      <Avatar className="size-8">
        <AvatarFallback className="bg-primary/10 text-xs font-bold text-primary">
          {firm.initials}
        </AvatarFallback>
      </Avatar>
      <span className="whitespace-nowrap text-sm font-medium">{firm.name}</span>
    </figure>
  );
}

export function LogoMarqueeSection() {
  return (
    <div className="w-full">
      <Separator />
      <div className="relative overflow-hidden py-8">
        <p className="mb-5 text-center text-sm font-medium text-muted-foreground">
          20+ inşaat firması güveniyor
        </p>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <Marquee pauseOnHover className="[--duration:35s] [--gap:0.75rem]">
          {firstRow.map((firm) => (
            <FirmCard key={firm.name} firm={firm} />
          ))}
        </Marquee>

        <Marquee
          reverse
          pauseOnHover
          className="mt-2 [--duration:35s] [--gap:0.75rem]"
        >
          {secondRow.map((firm) => (
            <FirmCard key={firm.name} firm={firm} />
          ))}
        </Marquee>
      </div>
      <Separator />
    </div>
  );
}
