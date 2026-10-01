import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BENEFITS = [
  {
    title: "Kurulumu biz yaparız",
    description: "Projenizi ve ekibinizi sizin yerinize sisteme gireriz. Siz sadece kullanırsınız.",
  },
  {
    title: "İhtiyacınıza göre şekillenir",
    description: "İlk müşterilerin geri bildirimi, geliştirme sırasını doğrudan belirler.",
  },
  {
    title: "Özel pilot koşulları",
    description: "Pilot programa katılanlara özel fiyat ve koşullar sunarız. Detay için iletişime geçin.",
  },
] as const;

export function EarlyAccessSection() {
  return (
    <section id="early-access" className="py-20">
      <div className="container mx-auto px-4">
        <BlurFade delay={0.1} inView>
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <Badge variant="outline">Erken Erişim Programı</Badge>
            <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
              Ürünü birlikte şekillendirecek ilk müteahhitleri arıyoruz
            </h2>
            <p className="max-w-xl text-muted-foreground">
              İnşaat Kontrol yeni bir üründür. İlk kullanıcılarla yakın çalışıp sahadaki gerçek
              ihtiyaca göre geliştiriyoruz.
            </p>
          </div>
        </BlurFade>

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {BENEFITS.map((item, index) => (
            <BlurFade key={item.title} delay={0.15 + index * 0.08} inView>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </BlurFade>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button size="lg" asChild>
            <Link href="#demo">Pilot Programa Başvur</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
