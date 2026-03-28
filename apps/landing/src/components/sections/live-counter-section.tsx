"use client";

import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Activity } from "@/components/animate-ui/icons/activity";
import { ChartBarIncreasing } from "@/components/animate-ui/icons/chart-bar-increasing";
import { BadgeCheck } from "@/components/animate-ui/icons/badge-check";
import { UsersRound } from "@/components/animate-ui/icons/users-round";

interface CounterItem {
  icon: React.ReactNode;
  target: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  color: string;
}

const COUNTERS: CounterItem[] = [
  {
    icon: <ChartBarIncreasing size={28} animateOnView />,
    target: 500,
    suffix: "+",
    label: "Aktif Proje",
    description: "Aynı anda yönetilen inşaat projesi",
    color: "text-primary",
  },
  {
    icon: <UsersRound size={28} animateOnView />,
    target: 12000,
    suffix: "+",
    label: "Kullanıcı",
    description: "Mühendis, şef ve müteahhit",
    color: "text-chart-2",
  },
  {
    icon: <Activity size={28} animateOnView />,
    target: 2,
    suffix: " Milyar ₺",
    label: "Yönetilen Bütçe",
    description: "Platform üzerinden takip edilen",
    color: "text-chart-3",
  },
  {
    icon: <BadgeCheck size={28} animateOnView />,
    target: 98,
    suffix: "%",
    label: "Memnuniyet",
    description: "Kullanıcı memnuniyeti skoru",
    color: "text-chart-4",
  },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, start]);

  return count;
}

function CounterCard({ item }: { item: CounterItem }) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(item.target, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry?.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const display =
    item.target >= 1000
      ? count.toLocaleString("tr-TR")
      : count.toString();

  return (
    <Card ref={ref} className="text-center">
      <CardHeader className="pb-2 items-center">
        <div className={`mb-2 ${item.color}`}>{item.icon}</div>
        <CardTitle className="text-4xl font-extrabold tabular-nums">
          {item.prefix}{display}{item.suffix}
        </CardTitle>
        <CardDescription className="text-base font-semibold text-foreground">
          {item.label}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  );
}

export function LiveCounterSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4 gap-1">
            <Activity size={14} animateOnView />
            Canlı Veriler
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            Rakamlar Konuşuyor
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Binlerce proje, on binlerce kullanıcı. Türkiye inşaat sektörünün
            güvendiği platform.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {COUNTERS.map((item) => (
            <CounterCard key={item.label} item={item} />
          ))}
        </div>

        <Separator className="mt-12 max-w-xs mx-auto" />
      </div>
    </section>
  );
}
