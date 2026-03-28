import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck } from "@/components/animate-ui/icons/badge-check";
import { CircleCheck } from "@/components/animate-ui/icons/circle-check";

const TRUST_ITEMS = [
  {
    title: "SSL / TLS Şifreleme",
    description:
      "Tüm veri iletimi 256-bit SSL ile şifrelenir. Tarayıcıdan sunucuya kadar güvenli.",
  },
  {
    title: "KVKK Uyumlu",
    description:
      "Kişisel veriler Türkiye sınırları içinde tutulur, KVKK gerekliliklerine tam uyum.",
  },
  {
    title: "Günlük Yedekleme",
    description:
      "Verileriniz her gün otomatik yedeklenir, 30 gün boyunca kurtarılabilir.",
  },
  {
    title: "Rol Tabanlı Erişim",
    description:
      "Her kullanıcı yalnızca yetkili olduğu alanlara erişir. Proje bazlı izin yönetimi.",
  },
  {
    title: "İki Faktörlü Doğrulama",
    description:
      "SMS veya authenticator uygulaması ile ek güvenlik katmanı.",
  },
  {
    title: "Denetim Kaydı",
    description:
      "Kim, ne zaman, ne değiştirdi? Tüm aktiviteler değiştirilemez log olarak saklanır.",
  },
];

const COMPLIANCE_BADGES = [
  { label: "KVKK", sub: "Uyumlu" },
  { label: "SSL", sub: "256-bit" },
  { label: "99.9%", sub: "Uptime SLA" },
  { label: "ISO", sub: "Hazırlık" },
];

export function SecuritySection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 gap-1">
            <BadgeCheck size={14} animateOnView />
            Güvenlik & Uyumluluk
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Verileriniz Güvende
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg">
            Kurumsal düzeyde güvenlik altyapısı ile inşaat projelerinizin
            hassas verileri korunur.
          </p>
        </div>

        {/* Compliance badges row */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {COMPLIANCE_BADGES.map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center gap-1 rounded-xl border bg-background px-6 py-4 shadow-sm"
            >
              <BadgeCheck size={24} animateOnView className="text-primary" />
              <span className="text-xl font-extrabold">{b.label}</span>
              <span className="text-xs text-muted-foreground">{b.sub}</span>
            </div>
          ))}
        </div>

        <Separator className="mb-12 max-w-xs mx-auto" />

        {/* Trust grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {TRUST_ITEMS.map((item) => (
            <Card key={item.title} className="flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-start gap-3">
                  <CircleCheck
                    size={20}
                    className="text-primary mt-0.5 flex-shrink-0"
                    animateOnView
                  />
                  <CardTitle className="text-sm leading-snug">
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
