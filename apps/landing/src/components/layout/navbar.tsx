"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <HardHat className="h-7 w-7 text-primary" />
          <span className="text-lg font-bold">İnşaat Kontrol</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="#demo">Giriş Yap</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="#demo">Demo Talep Et</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menüyü aç/kapat"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background px-4 py-4">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t">
              <Button variant="outline" size="sm" asChild>
                <Link href="#demo" onClick={() => setIsOpen(false)}>
                  Giriş Yap
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="#demo" onClick={() => setIsOpen(false)}>
                  Demo Talep Et
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
