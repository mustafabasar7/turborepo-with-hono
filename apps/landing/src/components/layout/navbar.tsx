"use client";

import Link from "next/link";
import { Menu, Github, Twitter } from "lucide-react";
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Hammer } from "@/components/animate-ui/icons/hammer";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const FEATURE_ITEMS = [
  { label: "Saha Operasyonları", href: "#features" },
  { label: "Maliyet Kontrolü", href: "#features" },
  { label: "Kalite & Güvenlik", href: "#features" },
  { label: "Doküman Zekası", href: "#features" },
  { label: "AI Araçları", href: "#features" },
] as const;

// NAV_LINKS excluding "Özellikler" — shown via DropdownMenu instead
const SECONDARY_NAV_LINKS = NAV_LINKS.filter(
  (link) => link.label !== "Özellikler"
);

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Hammer className="size-7 text-primary" />
          <span className="text-lg font-bold">İnşaat Kontrol</span>
          <Badge variant="secondary" className="text-xs">
            v2.0
          </Badge>
        </Link>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* Özellikler — DropdownMenu */}
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "flex items-center gap-1"
                    )}
                  >
                    Özellikler
                    <span className="text-[10px] opacity-60">▼</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-52">
                  <DropdownMenuGroup>
                    {FEATURE_ITEMS.map((item) => (
                      <DropdownMenuItem key={item.label} asChild>
                        <Link href={item.href}>{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>

            {SECONDARY_NAV_LINKS.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={link.href}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="#demo">Giriş Yap</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="#demo">Demo Talep Et</Link>
          </Button>
        </div>

        {/* Mobile — Sheet drawer (side="left") */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Menüyü aç"
            >
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 px-0">
            <SheetTitle className="sr-only">Navigasyon Menüsü</SheetTitle>

            {/* Sheet Logo */}
            <div className="flex items-center gap-2 border-b px-6 pb-4 pt-2">
              <Hammer className="size-6 text-primary" />
              <span className="font-bold">İnşaat Kontrol</span>
              <Badge variant="secondary" className="text-xs">
                v2.0
              </Badge>
            </div>

            <nav className="flex flex-col gap-1 px-3 pt-4">
              {/* Özellikler group */}
              <p className="px-3 pt-2 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Özellikler
              </p>
              {FEATURE_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {item.label}
                </Link>
              ))}

              {/* Other nav links */}
              <div className="my-2 border-t" />
              {SECONDARY_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA buttons */}
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
