"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { BlurFade } from "@/components/ui/blur-fade";
import { Blocks } from "@/components/animate-ui/icons/blocks";
import { HardHat } from "lucide-react";

interface Integration {
  name: string;
  initials: string;
  colorClass: string;
}

const INTEGRATIONS_LEFT: Integration[] = [
  { name: "AutoCAD", initials: "AC", colorClass: "bg-destructive/20 text-destructive" },
  { name: "SAP ERP", initials: "SAP", colorClass: "bg-primary/20 text-primary" },
  { name: "MS Project", initials: "MP", colorClass: "bg-chart-2/20 text-chart-2" },
  { name: "Revit", initials: "RV", colorClass: "bg-primary/20 text-primary" },
];

const INTEGRATIONS_RIGHT: Integration[] = [
  { name: "WhatsApp", initials: "WA", colorClass: "bg-chart-2/20 text-chart-2" },
  { name: "Teams", initials: "MT", colorClass: "bg-chart-3/20 text-chart-3" },
  { name: "Excel", initials: "XL", colorClass: "bg-chart-2/20 text-chart-2" },
  { name: "BIM 360", initials: "B3", colorClass: "bg-destructive/20 text-destructive" },
];

function IntegrationNode({
  integration,
  nodeRef,
}: {
  integration: Integration;
  nodeRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={nodeRef}
      className="flex flex-col items-center gap-1"
    >
      <Avatar className="size-12 shadow-md">
        <AvatarFallback className={`text-xs font-bold ${integration.colorClass}`}>
          {integration.initials}
        </AvatarFallback>
      </Avatar>
      <span className="text-xs text-muted-foreground">{integration.name}</span>
    </div>
  );
}

function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const leftRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const rightRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center gap-12 p-8"
    >
      {/* Left integrations */}
      <div className="flex flex-col gap-6">
        {INTEGRATIONS_LEFT.map((integration, i) => (
          <IntegrationNode
            key={integration.name}
            integration={integration}
            nodeRef={leftRefs[i]!}
          />
        ))}
      </div>

      {/* Center platform */}
      <div
        ref={centerRef}
        className="relative z-10 flex size-20 flex-col items-center justify-center gap-1 rounded-full border-2 border-primary bg-background shadow-xl"
      >
        <HardHat className="size-8 text-primary" />
        <span className="text-[9px] font-bold text-primary leading-none">İK</span>
      </div>

      {/* Right integrations */}
      <div className="flex flex-col gap-6">
        {INTEGRATIONS_RIGHT.map((integration, i) => (
          <IntegrationNode
            key={integration.name}
            integration={integration}
            nodeRef={rightRefs[i]!}
          />
        ))}
      </div>

      {/* Animated beams — left to center (4 beams only) */}
      {leftRefs.map((ref, i) => (
        <AnimatedBeam
          key={`left-${i}`}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
          curvature={i % 2 === 0 ? 30 : -30}
          delay={i * 0.6}
          duration={5}
          gradientStartColor="hsl(var(--primary))"
          gradientStopColor="hsl(var(--chart-2))"
        />
      ))}
    </div>
  );
}

export function IntegrationsSection() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <BlurFade delay={0.1} inView>
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <Badge variant="outline" className="gap-1">
              <Blocks size={14} animateOnView />
              Entegrasyonlar
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Araçlarınızla Entegre Çalışır
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Mevcut iş akışınızı bozmadan, kullandığınız araçlarla bağlantı
              kurun. Veri akışı her iki yönde de anlık çalışır.
            </p>
          </div>
        </BlurFade>

        {/* Animated beam diagram */}
        <BlurFade delay={0.2} inView>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border bg-card shadow-lg">
            <AnimatedBeamDemo />
          </div>
        </BlurFade>

        {/* Orbiting circles — additional visual */}
        <BlurFade delay={0.3} inView>
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Ve çok daha fazlası — toplamda 40+ entegrasyon
            </p>
            <div className="relative flex size-48 items-center justify-center">
              <div className="z-10 flex flex-col items-center gap-1 rounded-full border-2 border-primary bg-background p-4 shadow-lg">
                <HardHat className="size-8 text-primary" />
                <span className="text-xs font-bold text-primary">API</span>
              </div>
              <OrbitingCircles iconSize={30} radius={80} duration={20}>
                <Avatar className="size-8 shadow-sm">
                  <AvatarFallback className="bg-primary/10 text-xs font-bold text-primary">AC</AvatarFallback>
                </Avatar>
                <Avatar className="size-8 shadow-sm">
                  <AvatarFallback className="bg-chart-2/20 text-xs font-bold text-chart-2">WA</AvatarFallback>
                </Avatar>
                <Avatar className="size-8 shadow-sm">
                  <AvatarFallback className="bg-chart-3/20 text-xs font-bold text-chart-3">GD</AvatarFallback>
                </Avatar>
              </OrbitingCircles>
              <OrbitingCircles iconSize={24} radius={56} duration={15} reverse>
                <Avatar className="size-6 shadow-sm">
                  <AvatarFallback className="bg-destructive/10 text-[10px] font-bold text-destructive">RV</AvatarFallback>
                </Avatar>
                <Avatar className="size-6 shadow-sm">
                  <AvatarFallback className="bg-chart-4/20 text-[10px] font-bold text-chart-4">XL</AvatarFallback>
                </Avatar>
              </OrbitingCircles>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
