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
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ClipboardCheck } from "@/components/animate-ui/icons/clipboard-check";
import { Activity } from "@/components/animate-ui/icons/activity";

const WINS = [
  {
    day: "Gün 1",
    title: "Kurulum & İlk Proje",
    description: "5 dakikada kurulum. İlk projenizi oluşturun, ekibinizi davet edin.",
    value: 20,
    metric: "Ortalama kurulum süresi: 5 dk",
  },
  {
    day: "Gün 3",
    title: "Saha Ekibi Aktif",
    description: "Mobil görünüm ile saha logları giriliyor, ofis anlık takip ediyor.",
    value: 45,
    metric: "Telefon trafiği %70 azalır",
  },
  {
    day: "Gün 7",
    title: "İlk Maliyet Raporu",
    description: "Bütçe vs gerçekleşen karşılaştırması, ek iş takibi hazır.",
    value: 65,
    metric: "Rapor hazırlama 4 saat → 10 dk",
  },
  {
    day: "Gün 14",
    title: "Doküman Düzeni",
    description: "Tüm çizimler, RFI ve submittallar arşivde. Revizyon kaosuna son.",
    value: 80,
    metric: "Doküman arama süresi %90 azalır",
  },
  {
    day: "Gün 30",
    title: "Tam Kontrol",
    description: "Risk matrisi, müşteri portalı ve AI araçları aktif. Tam verimlilik.",
    value: 100,
    metric: "Ortalama %35 maliyet tasarrufu",
  },
];

function WinCard({ win, index }: { win: typeof WINS[0]; index: number }) {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setTimeout(() => setProgress(win.value), index * 150);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [win.value, index]);

  return (
    <Card ref={ref} className="flex flex-col gap-3">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs font-mono">
            {win.day}
          </Badge>
          <span className="text-xs font-bold text-primary tabular-nums">
            {progress}%
          </span>
        </div>
        <CardTitle className="text-base">{win.title}</CardTitle>
        <CardDescription className="text-sm">{win.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 pt-0">
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-muted-foreground">{win.metric}</p>
      </CardContent>
    </Card>
  );
}

export function QuickWinsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 gap-1">
            <ClipboardCheck size={14} animateOnView />
            Hızlı Kazanımlar
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            İlk 30 Günde Neler Değişir?
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg">
            Kurulumdan tam verimliliğe giden yolda her adımda somut kazanımlar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {WINS.map((win, i) => (
            <WinCard key={win.day} win={win} index={i} />
          ))}
        </div>

        <Separator className="mt-12 max-w-xs mx-auto" />

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-center">
          {[
            { icon: <Activity size={20} animateOnView className="text-primary mx-auto mb-1" />, stat: "14 gün", sub: "Ücretsiz deneme" },
            { icon: <ClipboardCheck size={20} animateOnView className="text-primary mx-auto mb-1" />, stat: "5 dakika", sub: "Kurulum süresi" },
            { icon: <Activity size={20} animateOnView className="text-primary mx-auto mb-1" />, stat: "7/24", sub: "Türkçe destek" },
          ].map((item) => (
            <div key={item.sub} className="flex flex-col items-center">
              {item.icon}
              <span className="text-xl font-extrabold">{item.stat}</span>
              <span className="text-xs text-muted-foreground">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
