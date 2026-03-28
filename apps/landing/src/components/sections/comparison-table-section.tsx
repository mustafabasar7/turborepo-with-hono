"use client";

import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BadgeCheck } from "@/components/animate-ui/icons/badge-check";

type ComparisonRow = {
  feature: string;
  excel: { label: string; supported: boolean };
  insaatKontrol: { label: string; supported: boolean };
};

const ROWS: ComparisonRow[] = [
  {
    feature: "Gerçek Zamanlı Hakediş",
    excel: { label: "Hayır", supported: false },
    insaatKontrol: { label: "Evet", supported: true },
  },
  {
    feature: "Mobil Saha Erişimi",
    excel: { label: "Hayır", supported: false },
    insaatKontrol: { label: "Evet", supported: true },
  },
  {
    feature: "AI Doküman Analizi",
    excel: { label: "Hayır", supported: false },
    insaatKontrol: { label: "Evet", supported: true },
  },
  {
    feature: "Risk Matrisi Görselleştirme",
    excel: { label: "Hayır", supported: false },
    insaatKontrol: { label: "Evet", supported: true },
  },
  {
    feature: "Otomatik Raporlama",
    excel: { label: "Hayır", supported: false },
    insaatKontrol: { label: "Evet", supported: true },
  },
  {
    feature: "Müşteri Portalı",
    excel: { label: "Hayır", supported: false },
    insaatKontrol: { label: "Evet", supported: true },
  },
  {
    feature: "Saha Kamerası Entegrasyonu",
    excel: { label: "Hayır", supported: false },
    insaatKontrol: { label: "Evet", supported: true },
  },
  {
    feature: "Çoklu Proje Yönetimi",
    excel: { label: "Zor", supported: false },
    insaatKontrol: { label: "Kolayca", supported: true },
  },
];

export function ComparisonTableSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-3 text-center mb-10">
          <Badge variant="secondary">Karşılaştırma</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Excel&apos;den Çıkın, Kontrolü Ele Alın
          </h2>
          <p className="max-w-xl text-muted-foreground text-lg">
            Eski yöntemlerden modern inşaat yönetimine geçişin farkını görün.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="sr-only">Özellik Karşılaştırması</CardTitle>
              <CardDescription className="sr-only">
                Excel ve klasik araçlar ile İnşaat Kontrol platformunun
                özellik karşılaştırması
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableCaption className="pb-4">
                  İnşaat Kontrol vs. Excel / Klasik Araçlar
                </TableCaption>
                <TableHeader>
                  <TableRow className="bg-muted hover:bg-muted">
                    <TableHead className="font-semibold text-foreground">
                      Özellik
                    </TableHead>
                    <TableHead className="text-center font-semibold text-foreground">
                      Excel / Klasik
                    </TableHead>
                    <TableHead className="text-center font-semibold text-foreground">
                      İnşaat Kontrol
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ROWS.map((row) => (
                    <TableRow key={row.feature}>
                      <TableCell className="font-medium">
                        {row.feature}
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <X className="size-4 text-destructive" />
                          <Badge variant="destructive" className="text-xs">
                            {row.excel.label}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <BadgeCheck
                            size={16}
                            className="text-primary"
                            animateOnView
                            animateOnViewOnce={false}
                          />
                          <Badge variant="default" className="text-xs">
                            {row.insaatKontrol.label}
                          </Badge>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
