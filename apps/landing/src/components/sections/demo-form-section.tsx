"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function DemoFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Hono API entegrasyonu
    console.log("Demo form submitted");
    setSubmitted(true);
  }

  return (
    <section id="demo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ücretsiz Demo Talep Edin
            </h2>
            <p className="text-muted-foreground text-lg">
              Uzmanlarımız sizi arayarak ihtiyaçlarınıza özel demo sunacak.
              14 günlük ücretsiz deneme hakkı dahil.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-xl border bg-background p-10 text-center shadow-sm">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-2">Talebiniz Alındı!</h3>
              <p className="text-muted-foreground">
                En kısa sürede sizi arayacağız. Teşekkür ederiz.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border bg-background p-8 shadow-sm space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Ad Soyad *</Label>
                  <Input
                    id="name"
                    placeholder="Ahmet Yılmaz"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Şirket Adı *</Label>
                  <Input
                    id="company"
                    placeholder="ABC İnşaat A.Ş."
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-posta *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ahmet@abc.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+90 532 000 00 00"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mesaj</Label>
                <Textarea
                  id="message"
                  placeholder="Proje türünüz ve ihtiyaçlarınız hakkında kısa bilgi..."
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Demo Talep Et
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Bilgileriniz üçüncü taraflarla paylaşılmaz. KVKK kapsamında
                korunur.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
