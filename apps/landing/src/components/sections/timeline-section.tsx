import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CircleCheck } from "@/components/animate-ui/icons/circle-check";
import { Clock } from "@/components/animate-ui/icons/clock";
import { Sparkles } from "@/components/animate-ui/icons/sparkles";
import { Loader } from "lucide-react";

type MilestoneStatus = "done" | "current" | "upcoming";

interface Milestone {
  period: string;
  title: string;
  description: string;
  items: string[];
  status: MilestoneStatus;
}

const MILESTONES: Milestone[] = [
  {
    period: "Q1 2024",
    title: "Platform Lansmanı",
    description: "Temel proje yönetimi ve maliyet kontrolü modülleri.",
    items: ["Proje yönetimi", "Maliyet takibi", "Hakediş modülü", "Mobil görünüm (beta)"],
    status: "done",
  },
  {
    period: "Q3 2024",
    title: "Saha & Doküman",
    description: "Saha operasyonları ve doküman yönetimi modülleri.",
    items: ["Günlük saha logları", "Doküman arşivi", "RFI / Submittal", "Kamera entegrasyonu"],
    status: "done",
  },
  {
    period: "Q1 2025",
    title: "AI Araçları",
    description: "Yapay zeka destekli iş akışları ve otomasyon.",
    items: ["AI Doküman Zekası", "Otomatik RFI oluşturma", "Maliyet projeksiyonu", "360° sanal tur"],
    status: "done",
  },
  {
    period: "Q2 2025",
    title: "Kurumsal & Entegrasyon",
    description: "Büyük ölçekli firma desteği ve ERP entegrasyonları.",
    items: ["SAP entegrasyonu", "Çoklu firma desteği", "Özel raporlama", "API erişimi"],
    status: "current",
  },
  {
    period: "Q4 2025",
    title: "Akıllı Platform",
    description: "Tam otonom saha yönetimi ve prediktif analitik.",
    items: ["Prediktif risk analizi", "Otomatik hakediş", "IoT sensör entegrasyonu", "AR saha asistanı"],
    status: "upcoming",
  },
];

function StatusIcon({ status }: { status: MilestoneStatus }) {
  if (status === "done")
    return <CircleCheck size={20} animateOnView className="text-primary" />;
  if (status === "current")
    return <Clock size={20} animateOnView className="text-chart-2" />;
  return <Loader className="size-5 text-muted-foreground" />;
}

function statusLabel(status: MilestoneStatus) {
  if (status === "done") return { text: "Tamamlandı", variant: "default" as const };
  if (status === "current") return { text: "Devam Ediyor", variant: "secondary" as const };
  return { text: "Yakında", variant: "outline" as const };
}

export function TimelineSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4 gap-1">
            <Sparkles size={14} animateOnView />
            Yol Haritası
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Nereden Nereye Geldik
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg">
            Sürekli geliştirilen platform — geçmiş başarılar ve gelecek
            vizyonumuz.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-0.5" />

          <div className="flex flex-col gap-8">
            {MILESTONES.map((m, i) => {
              const label = statusLabel(m.status);
              const isRight = i % 2 === 0;

              return (
                <div
                  key={m.period}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isRight ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-background border-2 border-border shadow-sm md:absolute md:left-1/2 md:-translate-x-1/2 md:top-4">
                    <StatusIcon status={m.status} />
                  </div>

                  {/* Card */}
                  <div className={`flex-1 md:w-[calc(50%-3rem)] ${isRight ? "md:pr-8" : "md:pl-8 md:ml-[calc(50%+1.5rem)]"}`}>
                    <Card className={m.status === "current" ? "border-primary/40 shadow-md" : ""}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <Badge variant="outline" className="text-xs font-mono">
                            {m.period}
                          </Badge>
                          <Badge variant={label.variant} className="text-xs">
                            {label.text}
                          </Badge>
                        </div>
                        <CardTitle className="text-base mt-1">{m.title}</CardTitle>
                        <CardDescription>{m.description}</CardDescription>
                      </CardHeader>
                      <Separator />
                      <CardContent className="pt-3">
                        <ul className="flex flex-col gap-1.5">
                          {m.items.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span className="size-1 rounded-full bg-primary flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
