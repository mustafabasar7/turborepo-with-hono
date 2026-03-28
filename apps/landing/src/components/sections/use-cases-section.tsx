"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { CircleCheck } from "@/components/animate-ui/icons/circle-check";
import { UsersRound } from "@/components/animate-ui/icons/users-round";

const PERSONAS = [
  {
    id: "mteahhit",
    label: "Müteahhit",
    initials: "MT",
    title: "Ali Yıldız",
    role: "Müteahhit Firma Sahibi",
    quote:
      "Artık hangi projemde bütçe aşımı var, anlık görüyorum. Geç kalmadan müdahale edebiliyorum.",
    pain: "Excel'de kaybolmuş bütçe takibi ve geç gelen hakedişler",
    gains: [
      "Tüm projelerin tek ekranda bütçe özeti",
      "Hakediş hazırlığı dakikalar içinde",
      "Alt yüklenici KPI takibi otomatik",
      "PDF/Excel rapor tek tıkla",
    ],
  },
  {
    id: "santiye",
    label: "Şantiye Şefi",
    initials: "ŞŞ",
    title: "Mehmet Çelik",
    role: "Şantiye Şefi",
    quote:
      "Sabah 7'de sahaya geldiğimde günlük logu giriyorum, mühendisler ofiste anında görüyor.",
    pain: "Telefon ve WhatsApp ile koordinasyon kaybı",
    gains: [
      "Günlük saha logu mobil görünümden",
      "Ekipman ve personel anlık takip",
      "Near-miss ve güvenlik kaydı",
      "İnternet olmadan çalışır",
    ],
  },
  {
    id: "mudur",
    label: "Proje Müdürü",
    initials: "PM",
    title: "Ayşe Kara",
    role: "Proje Müdürü",
    quote:
      "Müşteriye ayrı rapor hazırlamıyorum artık. Portala giriyor, kendi bakıyor.",
    pain: "Rapor hazırlama, toplantı notları ve müşteri iletişimi",
    gains: [
      "Müşteri portalı ile şeffaf iletişim",
      "Risk matrisi ile erken uyarı",
      "Gantt ve Kanban görünümleri",
      "Punch board ile kusur yönetimi",
    ],
  },
  {
    id: "muhendis",
    label: "Mühendis",
    initials: "MH",
    title: "Kemal Arslan",
    role: "Saha Mühendisi",
    quote:
      "Çizimlerin son revizyonunu bulmak için saatler harcardım. Artık tek tıkla.",
    pain: "Revizyon takibi, RFI ve doküman karmaşası",
    gains: [
      "Tüm revizyon geçmişi merkezi arşivde",
      "RFI ve submittal takibi otomatik",
      "AI Smart Edit ile hızlı düzenleme",
      "Versiyon karşılaştırma tek tıkla",
    ],
  },
] as const;

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 gap-1">
            <UsersRound size={14} animateOnView />
            Sizi Tanıyoruz
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Rolünüze Özel Tasarlandı
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg">
            Müteahhitten mühendise, şantiye şefindan proje müdürüne — herkes
            için özel akış.
          </p>
        </div>

        <Tabs defaultValue="mteahhit" className="max-w-4xl mx-auto">
          <TabsList className="grid h-auto grid-cols-2 gap-2 bg-transparent mb-8 sm:grid-cols-4">
            {PERSONAS.map((p) => (
              <TabsTrigger
                key={p.id}
                value={p.id}
                className="flex items-center gap-2 rounded-xl border px-5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:shadow border-border text-muted-foreground hover:text-foreground transition-all"
              >
                <Avatar className="size-6">
                  <AvatarFallback className="text-[10px] font-bold bg-muted">
                    {p.initials}
                  </AvatarFallback>
                </Avatar>
                {p.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {PERSONAS.map((p) => (
            <TabsContent key={p.id} value={p.id}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="size-14">
                      <AvatarFallback className="text-lg font-bold bg-primary/10 text-primary">
                        {p.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">{p.title}</CardTitle>
                      <CardDescription className="text-base">{p.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <Separator />

                <CardContent className="pt-6 grid md:grid-cols-2 gap-8">
                  {/* Quote + Pain */}
                  <div className="flex flex-col gap-4">
                    <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground text-sm leading-relaxed">
                      &ldquo;{p.quote}&rdquo;
                    </blockquote>
                    <div className="rounded-lg bg-destructive/8 border border-destructive/20 px-4 py-3">
                      <p className="text-xs font-semibold text-destructive mb-1">Eski Sorun</p>
                      <p className="text-sm text-muted-foreground">{p.pain}</p>
                    </div>
                  </div>

                  {/* Gains */}
                  <div>
                    <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">
                      Platformla Ne Değişiyor
                    </p>
                    <ul className="flex flex-col gap-3">
                      {p.gains.map((gain) => (
                        <li key={gain} className="flex items-start gap-2 text-sm">
                          <CircleCheck
                            size={16}
                            className="text-primary mt-0.5 flex-shrink-0"
                            animateOnView
                          />
                          {gain}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
