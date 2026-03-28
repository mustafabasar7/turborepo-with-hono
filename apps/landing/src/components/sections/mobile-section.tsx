import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right";
import { Clock } from "@/components/animate-ui/icons/clock";
import { RefreshCcw } from "@/components/animate-ui/icons/refresh-ccw";
import { Cctv } from "@/components/animate-ui/icons/cctv";
import { Activity } from "@/components/animate-ui/icons/activity";

const MOBILE_FEATURES = [
  {
    icon: <Activity size={20} animateOnView className="text-primary" />,
    title: "Offline Çalışır",
    description: "İnternet olmadan saha loglarını gir, bağlantı gelince senkronize et.",
  },
  {
    icon: <RefreshCcw size={20} animateOnView className="text-primary" />,
    title: "Anlık Senkronizasyon",
    description: "Değişiklikler saniyeler içinde tüm ekip ile paylaşılır.",
  },
  {
    icon: <Clock size={20} animateOnView className="text-primary" />,
    title: "Gerçek Zamanlı Bildirim",
    description: "Bütçe uyarısı, görev ataması veya revizyon anında telefonuna gelir.",
  },
  {
    icon: <Cctv size={20} animateOnView className="text-primary" />,
    title: "Kamera Entegrasyonu",
    description: "Telefonunla fotoğraf çek, anında proje dosyasına ekle.",
  },
];

export function MobileSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

          {/* Left — Phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-64 rounded-[2.5rem] border-4 border-foreground/20 bg-background shadow-2xl overflow-hidden">
                {/* Status bar */}
                <div className="flex items-center justify-between px-5 py-2 bg-muted text-xs text-muted-foreground">
                  <span>9:41</span>
                  <span>●●●</span>
                </div>
                {/* App content */}
                <div className="p-4 flex flex-col gap-3 bg-background">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">İnşaat Kontrol</span>
                    <Badge variant="secondary" className="text-xs">Saha</Badge>
                  </div>
                  <Separator />
                  {/* Mini cards */}
                  {[
                    { label: "Bütçe Durumu", value: "%87", color: "bg-chart-2/15 text-chart-2" },
                    { label: "Aktif Görevler", value: "12", color: "bg-primary/10 text-primary" },
                    { label: "Günlük Log", value: "✓", color: "bg-chart-3/15 text-chart-3" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2"
                    >
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                      <span className={`text-xs font-bold rounded px-1.5 py-0.5 ${item.color}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                  <div className="mt-2 rounded-lg bg-primary/10 border border-primary/20 px-3 py-2">
                    <p className="text-xs text-primary font-medium">🔔 Yeni Revizyon: Z-12 Plan</p>
                    <p className="text-xs text-muted-foreground mt-0.5">2 dakika önce</p>
                  </div>
                </div>
                {/* Home indicator */}
                <div className="py-3 flex justify-center bg-background">
                  <div className="w-24 h-1 rounded-full bg-foreground/20" />
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 -z-10 rounded-full bg-primary/10 blur-2xl" />
            </div>
          </div>

          {/* Right — Content */}
          <div className="flex flex-col gap-6">
            <div>
              <Badge variant="secondary" className="mb-4 gap-1">
                <ArrowRight size={14} animateOnView />
                Mobil Erişim
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Telefonunuzdan da Kullanabilirsiniz
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ayrı uygulama yüklemenize gerek yok. Telefonunuzun tarayıcısından
                girin, sahada tam kontrol. İnternet olmasa bile çalışır.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MOBILE_FEATURES.map((f) => (
                <Card key={f.title} className="border-0 bg-muted/50 shadow-none">
                  <CardHeader className="pb-1 pt-4 px-4">
                    <div className="flex items-center gap-2">
                      {f.icon}
                      <CardTitle className="text-sm">{f.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 pb-4">
                    <CardDescription className="text-xs leading-relaxed">
                      {f.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link href="#demo">
                  Ücretsiz Deneyin
                  <ArrowRight data-icon="inline-end" animateOnHover />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Tüm Özelliklere Bak</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
