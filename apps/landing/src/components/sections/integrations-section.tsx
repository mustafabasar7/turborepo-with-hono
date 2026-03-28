"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Blocks } from "@/components/animate-ui/icons/blocks";

interface Integration {
  name: string;
  category: string;
  desc: string;
  initials: string;
  color: string;
}

const INTEGRATIONS: Integration[] = [
  {
    name: "AutoCAD",
    category: "CAD/BIM",
    desc: "DWG dosyaları direkt içe aktarın",
    initials: "AC",
    color: "bg-red-600",
  },
  {
    name: "Revit",
    category: "BIM",
    desc: "BIM modelleriyle senkronize çalışın",
    initials: "RV",
    color: "bg-blue-600",
  },
  {
    name: "MS Project",
    category: "Planlama",
    desc: "Gantt şemalarını import edin",
    initials: "MP",
    color: "bg-blue-800",
  },
  {
    name: "SAP ERP",
    category: "ERP",
    desc: "Muhasebe ve satın alma entegrasyonu",
    initials: "SAP",
    color: "bg-blue-500",
  },
  {
    name: "WhatsApp",
    category: "İletişim",
    desc: "Saha ekibine anlık bildirim gönderin",
    initials: "WA",
    color: "bg-green-600",
  },
  {
    name: "Microsoft Teams",
    category: "İletişim",
    desc: "Proje toplantıları ve dosya paylaşımı",
    initials: "MT",
    color: "bg-purple-600",
  },
  {
    name: "Google Drive",
    category: "Depolama",
    desc: "Belgeleri otomatik yedekleyin",
    initials: "GD",
    color: "bg-yellow-500",
  },
  {
    name: "Dropbox",
    category: "Depolama",
    desc: "Dosya senkronizasyonu ve paylaşım",
    initials: "DB",
    color: "bg-blue-400",
  },
  {
    name: "Excel / CSV",
    category: "Veri",
    desc: "Mevcut verilerinizi kolayca aktarın",
    initials: "XL",
    color: "bg-green-700",
  },
  {
    name: "Procore",
    category: "İnşaat",
    desc: "Procore projelerini senkronize edin",
    initials: "PC",
    color: "bg-orange-500",
  },
  {
    name: "BIM 360",
    category: "BIM",
    desc: "Autodesk BIM 360 bağlantısı",
    initials: "B3",
    color: "bg-red-500",
  },
  {
    name: "Slack",
    category: "İletişim",
    desc: "Kanal bildirimleri ve bot entegrasyonu",
    initials: "SL",
    color: "bg-purple-700",
  },
];

export function IntegrationsSection() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">Entegrasyonlar</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Araçlarınızla Entegre Çalışır
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Mevcut iş akışınızı bozmadan, kullandığınız araçlarla bağlantı
            kurun.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {INTEGRATIONS.map((integration) => (
            <HoverCard key={integration.name}>
              <HoverCardTrigger asChild>
                <Card className="cursor-pointer transition-colors hover:bg-accent">
                  <CardContent className="flex flex-col items-center gap-3 p-4">
                    <Avatar className="size-12">
                      <AvatarFallback
                        className={`${integration.color} text-xs font-bold text-white`}
                      >
                        {integration.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <span className="text-sm font-semibold leading-tight">
                        {integration.name}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {integration.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-10">
                      <AvatarFallback
                        className={`${integration.color} text-xs font-bold text-white`}
                      >
                        {integration.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-semibold">{integration.name}</p>
                      <Badge variant="outline" className="w-fit text-xs">
                        {integration.category}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {integration.desc}
                  </p>
                  <a
                    href="#demo"
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    Entegrasyon Detayları →
                  </a>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-muted-foreground">
          <Blocks size={18} />
          <p className="text-sm">
            API erişimi ile özel entegrasyon da mümkün.{" "}
            <a href="#demo" className="font-medium text-primary hover:underline">
              Bizimle iletişime geçin
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
