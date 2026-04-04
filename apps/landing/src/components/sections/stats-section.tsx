"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const STATS = [
  {
    key: "maliyet",
    value: "%35",
    label: "Ortalama Maliyet Tasarrufu",
    description: "Proje başına maliyet aşımı azalması",
    angle: 126,
    color: "var(--chart-1)",
  },
  {
    key: "evrak",
    value: "%60",
    label: "Daha Az Evrak İşi",
    description: "Dijital süreçler kağıt israfını bitirir",
    angle: 216,
    color: "var(--chart-2)",
  },
  {
    key: "rapor",
    value: "3×",
    label: "Daha Hızlı Raporlama",
    description: "Anlık veri ile karar süreleri kısalır",
    angle: 270,
    color: "var(--chart-3)",
  },
  {
    key: "destek",
    value: "24/7",
    label: "Türkçe Teknik Destek",
    description: "Haftanın 7 günü, günün 24 saati",
    angle: 360,
    color: "var(--chart-4)",
  },
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden py-16 border-y">
      {/* Scroll-reveal background image */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src="/images/build-02.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-15 dark:opacity-8"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat) => {
            const chartConfig = {
              value: { label: stat.label, color: stat.color },
            } satisfies ChartConfig;

            const chartData = [
              { name: stat.key, value: 100, fill: stat.color },
            ];

            return (
              <Card key={stat.key} className="flex flex-col items-center text-center border-0 shadow-none bg-transparent">
                <CardHeader className="pb-0 items-center p-3">
                  <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square h-[120px]"
                  >
                    <RadialBarChart
                      data={chartData}
                      startAngle={90}
                      endAngle={90 - stat.angle}
                      outerRadius={52}
                      innerRadius={40}
                    >
                      <PolarGrid
                        gridType="circle"
                        radialLines={false}
                        stroke="none"
                        className="first:fill-muted last:fill-background"
                        polarRadius={[52, 40]}
                      />
                      <RadialBar dataKey="value" background cornerRadius={8} />
                      <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                        <Label
                          content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                              return (
                                <text
                                  x={viewBox.cx}
                                  y={viewBox.cy}
                                  textAnchor="middle"
                                  dominantBaseline="middle"
                                >
                                  <tspan
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    className="fill-foreground text-xl font-bold"
                                  >
                                    {stat.value}
                                  </tspan>
                                </text>
                              );
                            }
                          }}
                        />
                      </PolarRadiusAxis>
                    </RadialBarChart>
                  </ChartContainer>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <CardTitle className="text-sm font-bold mb-1">{stat.label}</CardTitle>
                  <CardDescription className="text-xs leading-snug">{stat.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
