"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo, LogoMark } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

const PRODUCT_ITEMS = [
  { label: "Özellikler", href: "#features", description: "Saha, ofis ve AI araçları" },
  { label: "Platform Özeti", href: "#showcase", description: "Ürünü yakından gör" },
  { label: "Kullanım Alanları", href: "#use-cases", description: "Senaryoya göre incele" },
  { label: "Entegrasyonlar", href: "#integrations", description: "40+ araçla bağlantı" },
  { label: "Nasıl Çalışır", href: "#how-it-works", description: "5 adımda başla" },
] as const;

const SECONDARY_NAV = [
  { label: "Fiyatlandırma", href: "#pricing" },
  { label: "Referanslar", href: "#testimonials" },
  { label: "SSS", href: "#faq" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Logo iconSize={28} />
          <Badge variant="secondary" className="text-xs">Beta</Badge>
        </Link>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* Ürün dropdown */}
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className={cn(navigationMenuTriggerStyle(), "gap-1")}>
                    Ürün
                    <span className="text-[10px] opacity-50">▾</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64">
                  <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">Platform</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    {PRODUCT_ITEMS.map((item) => (
                      <DropdownMenuItem key={item.label} asChild>
                        <Link href={item.href} className="flex flex-col items-start gap-0.5">
                          <span className="font-medium">{item.label}</span>
                          <span className="text-xs text-muted-foreground">{item.description}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="#demo" className="font-medium text-primary">Demo Talep Et →</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>

            {SECONDARY_NAV.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href={link.href}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="#demo">Giriş Yap</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="#demo">Demo Talep Et</Link>
          </Button>
        </div>

        {/* Mobile — Sheet drawer */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menüyü aç">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 px-0">
            <SheetTitle className="sr-only">Navigasyon Menüsü</SheetTitle>

            <div className="flex items-center gap-2.5 border-b px-6 pb-4 pt-2">
              <Logo iconSize={26} />
              <Badge variant="secondary" className="text-xs">Beta</Badge>
            </div>

            <nav className="flex flex-col gap-1 px-3 pt-4">
              <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Ürün
              </p>
              {PRODUCT_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {item.label}
                </Link>
              ))}

              <div className="my-2 border-t" />
              {SECONDARY_NAV.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-4 flex flex-col gap-2 border-t pt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="#demo">Giriş Yap</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="#demo">Demo Talep Et</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
