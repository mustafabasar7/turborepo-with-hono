"use client";

import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChartBarDecreasing } from "@/components/animate-ui/icons/chart-bar-decreasing";
import { ChartBarIncreasing } from "@/components/animate-ui/icons/chart-bar-increasing";
import { Activity } from "@/components/animate-ui/icons/activity";

type CompanySize = "kucuk" | "orta" | "buyuk";

interface SizeConfig {
  baseMonthlySaving: number;
  hoursPerProject: number;
  label: string;
}

const SIZE_CONFIG: Record<CompanySize, SizeConfig> = {
  kucuk: { baseMonthlySaving: 5000, hoursPerProject: 10, label: "Küçük" },
  orta: { baseMonthlySaving: 15000, hoursPerProject: 25, label: "Orta" },
  buyuk: { baseMonthlySaving: 40000, hoursPerProject: 50, label: "Büyük" },
};

const EFFICIENCY_GAIN = 35;

function formatNumber(n: number): string {
  return new Intl.NumberFormat("tr-TR").format(n);
}

export function RoiCalculatorSection() {
  const [projectCount, setProjectCount] = useState(5);
  const [companySize, setCompanySize] = useState<CompanySize>("orta");

  const { yearlySaving, monthlyHoursSaved } = useMemo(() => {
    const config = SIZE_CONFIG[companySize];
    const yearlySaving = config.baseMonthlySaving * projectCount * 12;
    const monthlyHoursSaved = config.hoursPerProject * projectCount;
    return { yearlySaving, monthlyHoursSaved };
  }, [projectCount, companySize]);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">Tasarruf Hesaplayıcı</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projenizin Tasarruf Potansiyelini Görün
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Firma büyüklüğünüzü ve proje sayınızı girerek yıllık tasarruf
            potansiyelinizi hesaplayın.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Input panel */}
          <Card>
            <CardHeader>
              <CardTitle>Bilgilerinizi Girin</CardTitle>
              <CardDescription>
                Kaydırıcı ve seçim menüsünü kullanarak hesaplama yapın.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Aktif Proje Sayısı</span>
                  <Badge variant="secondary" className="tabular-nums">
                    {projectCount} proje
                  </Badge>
                </div>
                <Slider
                  min={1}
                  max={50}
                  step={1}
                  value={[projectCount]}
                  onValueChange={([val]) => setProjectCount(val ?? 1)}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>25</span>
                  <span>50</span>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium">Firma Büyüklüğü</span>
                <div className="min-w-0">
                  <Select
                    value={companySize}
                    onValueChange={(v) => setCompanySize(v as CompanySize)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Büyüklük seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Çalışan Sayısı</SelectLabel>
                        <SelectItem value="kucuk">
                          Küçük — 10'dan az çalışan
                        </SelectItem>
                        <SelectItem value="orta">
                          Orta — 10–50 çalışan
                        </SelectItem>
                        <SelectItem value="buyuk">
                          Büyük — 50+ çalışan
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="#demo">Demo Talep Et</a>
              </Button>
            </CardFooter>
          </Card>

          {/* Results panel */}
          <div className="flex flex-col gap-4">
            {/* Yearly saving */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <ChartBarDecreasing size={20} className="text-primary" />
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Yıllık Maliyet Tasarrufu
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold tabular-nums">
                  {formatNumber(yearlySaving)}
                  <span className="ml-1 text-xl font-semibold text-muted-foreground">
                    ₺
                  </span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {formatNumber(Math.round(yearlySaving / 12))} ₺/ay
                </p>
              </CardContent>
            </Card>

            {/* Efficiency */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Activity size={20} className="text-primary" />
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Verimlilik Artışı
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <p className="text-4xl font-bold">
                  %{EFFICIENCY_GAIN}
                </p>
                <Progress value={EFFICIENCY_GAIN} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Ekip verimliliğinde ortalama artış
                </p>
              </CardContent>
            </Card>

            {/* Time saved */}
            <Card>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <ChartBarIncreasing size={20} className="text-primary" />
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Aylık Zaman Tasarrufu
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold tabular-nums">
                  {formatNumber(monthlyHoursSaved)}
                  <span className="ml-1 text-xl font-semibold text-muted-foreground">
                    saat
                  </span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {SIZE_CONFIG[companySize].hoursPerProject} saat/proje ×{" "}
                  {projectCount} proje
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
