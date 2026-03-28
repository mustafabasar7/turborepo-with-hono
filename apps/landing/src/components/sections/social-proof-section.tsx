import React from "react";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TESTIMONIALS = [
  {
    quote:
      "Daha önce Excel'de yapırdım her şeyi. Şimdi bütçe sapmasını aynı gün görüyorum, ek işleri anında kaydediyorum. 3 ayda maliyet yönetimim tamamen değişti.",
    name: "Mehmet Yıldız",
    title: "Müteahhit Firma Sahibi",
    initials: "MY",
    color: "bg-amber-500",
  },
  {
    quote:
      "Sabah 7'de şantiyeye geldiğimde günün logunu sisteme giriyorum. Mühendisler anında görüyor. Eskiden telefon açardım, şimdi gerek yok.",
    name: "Hasan Çelik",
    title: "Şantiye Şefi",
    initials: "HÇ",
    color: "bg-blue-500",
  },
  {
    quote:
      "Müşteri portalı sayesinde müvekkile ayrı rapor hazırlamıyorum. Kendileri sisteme girip bakıyor. Güven ilişkisi çok daha kolay kuruldu.",
    name: "Ayşe Kara",
    title: "Proje Müdürü",
    initials: "AK",
    color: "bg-green-600",
  },
  {
    quote:
      "Risk matrisini ilk gördüğümde şaşırdım. Olasılık × etki bazlı görsel matris tam ihtiyacımız olan şeydi. Artık riskleri proaktif yönetiyoruz.",
    name: "Kemal Arslan",
    title: "İnşaat Proje Direktörü",
    initials: "KA",
    color: "bg-purple-600",
  },
  {
    quote:
      "AI araçları sayesinde saha talimatlarını çok daha hızlı oluşturuyorum. Malzeme önerileri de gerçekten isabetli çıkıyor.",
    name: "Selin Demir",
    title: "Saha Mühendisi",
    initials: "SD",
    color: "bg-rose-500",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

export function SocialProofSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Müşteri Görüşleri</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Sahadan Gelen Sesler
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg">
            Gerçek kullanıcılar, gerçek sonuçlar.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {TESTIMONIALS.map((t) => (
              <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="flex flex-col gap-4 p-6 h-full">
                    <StarRating />
                    <p className="text-sm text-foreground leading-relaxed flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-2 border-t">
                      <Avatar className="size-10 flex-shrink-0">
                        <AvatarFallback className={`${t.color} text-white text-sm font-bold`}>
                          {t.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
