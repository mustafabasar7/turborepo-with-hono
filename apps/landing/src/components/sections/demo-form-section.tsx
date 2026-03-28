"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DemoFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Hono API entegrasyonu
    setSubmitted(true);
    toast.success(
      "Demo talebiniz alındı! 24 saat içinde dönüş yapacağız."
    );
  }

  return (
    <section id="demo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-col items-center gap-4 text-center mb-10">
            <Badge variant="secondary">Demo Talebi</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              14 Gün Ücretsiz Deneyin
            </h2>
            <p className="text-muted-foreground text-lg">
              Uzmanlarımız sizi arayarak ihtiyaçlarınıza özel demo sunacak.
              14 günlük ücretsiz deneme hakkı dahil.
            </p>
          </div>

          {submitted ? (
            <Card>
              <CardContent className="pt-10 pb-10 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold mb-2">Talebiniz Alındı!</h3>
                <p className="text-muted-foreground">
                  En kısa sürede sizi arayacağız. Teşekkür ederiz.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">İletişim Bilgileri</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  id="demo-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Ad Soyad *</Label>
                      <Input
                        id="name"
                        placeholder="Ahmet Yılmaz"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="company">Şirket Adı *</Label>
                      <Input
                        id="company"
                        placeholder="ABC İnşaat A.Ş."
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">E-posta *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ahmet@abc.com"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+90 532 000 00 00"
                      />
                    </div>

                    {/* Firma Tipi */}
                    <div className="flex flex-col gap-2 min-w-0">
                      <Label htmlFor="company-type">Firma Tipi</Label>
                      <Select>
                        <SelectTrigger id="company-type" className="w-full">
                          <SelectValue placeholder="Seçiniz..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="contractor">
                              Müteahhit
                            </SelectItem>
                            <SelectItem value="design">
                              Tasarım Ofisi
                            </SelectItem>
                            <SelectItem value="developer">
                              Gayrimenkul Geliştirici
                            </SelectItem>
                            <SelectItem value="consulting">
                              Danışmanlık Firması
                            </SelectItem>
                            <SelectItem value="other">Diğer</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Şantiye Sayısı */}
                    <div className="flex flex-col gap-2 min-w-0">
                      <Label htmlFor="site-count">Şantiye Sayısı</Label>
                      <Select>
                        <SelectTrigger id="site-count" className="w-full">
                          <SelectValue placeholder="Seçiniz..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="1-3">1–3</SelectItem>
                            <SelectItem value="4-10">4–10</SelectItem>
                            <SelectItem value="11-25">11–25</SelectItem>
                            <SelectItem value="25+">25+</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Mesaj</Label>
                    <Textarea
                      id="message"
                      placeholder="Proje türünüz ve ihtiyaçlarınız hakkında kısa bilgi..."
                      rows={4}
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button
                  type="submit"
                  form="demo-form"
                  size="lg"
                  className="w-full"
                >
                  <Send className="size-4" />
                  Demo Talep Et
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Bilgileriniz üçüncü taraflarla paylaşılmaz. KVKK kapsamında
                  korunur.
                </p>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
