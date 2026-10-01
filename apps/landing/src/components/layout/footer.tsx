import Link from "next/link";
import { Hammer } from "@/components/animate-ui/icons/hammer";
import { Separator } from "@/components/ui/separator";

const LINKS = [
  { label: "Özellikler", href: "#features" },
  { label: "Ürün Turu", href: "#showcase" },
  { label: "Fiyatlandırma", href: "#pricing" },
  { label: "SSS", href: "#faq" },
  { label: "İletişim", href: "#demo" },
] as const;

export function Footer() {
  return (
    <footer role="contentinfo" className="border-t bg-card">
      <div className="container mx-auto flex flex-col gap-6 px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-sm flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Hammer className="size-6 text-primary" />
              <span className="text-base font-bold">İnşaat Kontrol</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Şantiyeden ofise tek platform: görev, maliyet ve güvenlik takibi.
            </p>
          </div>

          <nav aria-label="Alt menü">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {LINKS.map((link) => (
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
          </nav>
        </div>

        <Separator />

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} İnşaat Kontrol. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
