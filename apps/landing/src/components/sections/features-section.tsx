import React from "react";
import {
  LayoutDashboard,
  TrendingUp,
  ShieldCheck,
  HardHat,
  Sparkles,
  FileText,
  BarChart3,
  Building2,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FEATURES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  TrendingUp,
  ShieldCheck,
  HardHat,
  Sparkles,
  FileText,
  BarChart3,
  Building2,
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Her İhtiyacınız İçin Kapsamlı Çözümler
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg">
            İnşaat sektörünün karmaşık ihtiyaçlarına özel geliştirilmiş,
            uçtan uca özellik seti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <Card
                key={feature.title}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    {Icon && (
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    )}
                    {feature.badge && (
                      <Badge variant="default" className="text-xs">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
