import React from "react";
import Link from "next/link";
import { HardHat } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const FOOTER_LINKS = {
  Ürün: [
    { label: "Özellikler", href: "#features" },
    { label: "Nasıl Çalışır", href: "#how-it-works" },
    { label: "Fiyatlandırma", href: "#demo" },
    { label: "SSS", href: "#faq" },
  ],
  Şirket: [
    { label: "Hakkımızda", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Kariyer", href: "#" },
    { label: "İletişim", href: "#demo" },
  ],
  Destek: [
    { label: "Yardım Merkezi", href: "#" },
    { label: "Dokümantasyon", href: "#" },
    { label: "API Referansı", href: "#" },
    { label: "Durum Sayfası", href: "#" },
  ],
  Yasal: [
    { label: "Gizlilik Politikası", href: "#" },
    { label: "Kullanım Şartları", href: "#" },
    { label: "KVKK", href: "#" },
    { label: "Çerez Politikası", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <HardHat className="h-6 w-6 text-primary" />
              <span className="font-bold">İnşaat Kontrol</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              İnşaat projelerinizi daha akıllı yönetin. Türkiye&apos;nin lider
              inşaat ERP platformu.
            </p>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} İnşaat Kontrol. Tüm hakları saklıdır.
          </p>
          <p className="text-sm text-muted-foreground">
            Türkiye&apos;de 🇹🇷 tasarlandı ve geliştirildi
          </p>
        </div>
      </div>
    </footer>
  );
}
