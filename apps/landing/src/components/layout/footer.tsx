"use client";

import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Hammer } from "@/components/animate-ui/icons/hammer";
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right";

const PRODUCT_LINKS = [
  { label: "Özellikler", href: "#features" },
  { label: "Fiyatlandırma", href: "#pricing" },
  { label: "SSS", href: "#faq" },
  { label: "Ürün Turu", href: "#showcase" },
] as const;

const COMPANY_LINKS = [
  { label: "Hakkımızda", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Kariyer", href: "#" },
  { label: "İletişim", href: "#demo" },
] as const;

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t bg-card"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Kolon 1 — Marka */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Hammer className="size-6 text-primary" />
              <span className="font-bold text-base">İnşaat Kontrol</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Türkiye&apos;nin inşaat sektörüne özel ERP platformu. Şantiyeden
              ofise tam kontrol.
            </p>
            <Badge variant="secondary" className="w-fit text-xs">
              v2.0
            </Badge>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                aria-label="GitHub"
                asChild
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Twitter"
                asChild
              >
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Kolon 2 — Ürün */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Ürün</h3>
            <ul className="flex flex-col gap-2">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolon 3 — Şirket */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Şirket</h3>
            <ul className="flex flex-col gap-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolon 4 — Bülten */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Güncel Kalın</h3>
            <p className="text-sm text-muted-foreground">
              İnşaat sektörü haberler ve ürün güncellemeleri için kayıt olun.
            </p>
            <div className="flex items-center gap-2 min-w-0">
              <div className="min-w-0 flex-1">
                <Input
                  type="email"
                  placeholder="email@ornek.com"
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                size="icon"
                aria-label="Abone Ol"
                className="shrink-0"
              >
                <ArrowRight />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Spam göndermiyoruz. İstediğiniz zaman çıkabilirsiniz.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} İnşaat Kontrol. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
