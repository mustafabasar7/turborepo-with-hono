import React from "react";
import { Badge } from "@/components/ui/badge";

const TESTIMONIALS = [
  {
    quote:
      "Daha önce Excel'de yapırdım her şeyi. Şimdi bütçe sapmasını aynı gün görüyorum, ek işleri anında kaydediyorum. 3 ayda maliyet yönetimim tamamen değişti.",
    name: "Mehmet Yıldız",
    title: "Müteahhit Firma Sahibi",
    initials: "MY",
  },
  {
    quote:
      "Sabah 7'de şantiyeye geldiğimde günün logunu sisteme giriyorum. Mühendisler anında görüyor. Eskiden telefon açardım, şimdi gerek yok.",
    name: "Hasan Çelik",
    title: "Şantiye Şefi",
    initials: "HÇ",
  },
  {
    quote:
      "Müşteri portalı sayesinde müvekkile ayrı rapor hazırlamıyorum. Kendileri sisteme girip bakıyor. Güven ilişkisi çok daha kolay kuruldu.",
    name: "Ayşe Kara",
    title: "Proje Müdürü",
    initials: "AK",
  },
];

export function SocialProofSection() {
  return (
    <section id="testimonials" className="py-20">
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

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border bg-card p-6 flex flex-col gap-4"
            >
              <p className="text-sm text-foreground leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
