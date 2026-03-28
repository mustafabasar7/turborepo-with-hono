import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Marquee } from "@/components/ui/marquee";
import { Star } from "@/components/animate-ui/icons/star";

const TESTIMONIALS = [
  {
    quote:
      "Daha önce Excel'de yapardım her şeyi. Şimdi bütçe sapmasını aynı gün görüyorum, ek işleri anında kaydediyorum. 3 ayda maliyet yönetimim tamamen değişti.",
    name: "Mehmet Yıldız",
    title: "Müteahhit Firma Sahibi",
    initials: "MY",
    colorClass: "bg-chart-4/20 text-chart-4",
  },
  {
    quote:
      "Sabah 7'de şantiyeye geldiğimde günün logunu sisteme giriyorum. Mühendisler anında görüyor. Eskiden telefon açardım, şimdi gerek yok.",
    name: "Hasan Çelik",
    title: "Şantiye Şefi",
    initials: "HÇ",
    colorClass: "bg-primary/20 text-primary",
  },
  {
    quote:
      "Müşteri portalı sayesinde müvekkile ayrı rapor hazırlamıyorum. Kendileri sisteme girip bakıyor. Güven ilişkisi çok daha kolay kuruldu.",
    name: "Ayşe Kara",
    title: "Proje Müdürü",
    initials: "AK",
    colorClass: "bg-chart-2/20 text-chart-2",
  },
  {
    quote:
      "Risk matrisini ilk gördüğümde şaşırdım. Olasılık × etki bazlı görsel matris tam ihtiyacımız olan şeydi. Artık riskleri proaktif yönetiyoruz.",
    name: "Kemal Arslan",
    title: "İnşaat Proje Direktörü",
    initials: "KA",
    colorClass: "bg-chart-3/20 text-chart-3",
  },
  {
    quote:
      "AI araçları sayesinde saha talimatlarını çok daha hızlı oluşturuyorum. Malzeme önerileri de gerçekten isabetli çıkıyor.",
    name: "Selin Demir",
    title: "Saha Mühendisi",
    initials: "SD",
    colorClass: "bg-chart-5/20 text-chart-5",
  },
  {
    quote:
      "Kamera entegrasyonu ile sahayı ofisten izleyebilmek inanılmaz fark yarattı. Artık her gün şantiyeye gitmek zorunda değilim.",
    name: "Osman Tunç",
    title: "İnşaat Direktörü",
    initials: "OT",
    colorClass: "bg-primary/20 text-primary",
  },
  {
    quote:
      "Hakedişleri hazırlamak eskiden 2 gün sürerdi. Şimdi tüm veriler sistemde, 2 saatte bitiriyorum. Excel ile geçen zamanı düşününce ağlıyorum.",
    name: "Fatma Arslan",
    title: "Mali İşler Müdürü",
    initials: "FA",
    colorClass: "bg-chart-2/20 text-chart-2",
  },
  {
    quote:
      "Mobil erişim gerçekten çalışıyor. Sahada tabletime bakıyorum, tüm proje verisi elimin altında. Önceki sistemde böyle bir şey yoktu.",
    name: "Burak Yılmaz",
    title: "Saha Koordinatörü",
    initials: "BY",
    colorClass: "bg-chart-4/20 text-chart-4",
  },
];

const firstRow = TESTIMONIALS.slice(0, 4);
const secondRow = TESTIMONIALS.slice(4);

function TestimonialCard({
  quote,
  name,
  title,
  initials,
  colorClass,
}: (typeof TESTIMONIALS)[number]) {
  return (
    <figure
      className={cn(
        "relative w-72 shrink-0 cursor-pointer overflow-hidden rounded-xl border p-5",
        "bg-card shadow-sm transition-colors hover:bg-accent/50",
      )}
    >
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-primary text-primary"
            animateOnView
            animateOnViewOnce={false}
            delay={i * 80}
          />
        ))}
      </div>
      <blockquote className="mb-4 text-sm leading-relaxed text-foreground">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t pt-3">
        <Avatar className="size-9">
          <AvatarFallback className={cn("text-xs font-bold", colorClass)}>
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-muted-foreground">{title}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function SocialProofSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">
            Müşteri Görüşleri
          </Badge>
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
            Sahadan Gelen Sesler
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Gerçek kullanıcılar, gerçek sonuçlar.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <Marquee pauseOnHover className="[--duration:45s] [--gap:1rem]">
          {firstRow.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>

        <Marquee
          reverse
          pauseOnHover
          className="mt-3 [--duration:45s] [--gap:1rem]"
        >
          {secondRow.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
