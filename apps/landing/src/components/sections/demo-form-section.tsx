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

const EMPTY = {
  name: "",
  company: "",
  email: "",
  phone: "",
  companyType: "",
  siteCount: "",
  message: "",
};

export function DemoFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(EMPTY);

  const set = (key: keyof typeof EMPTY) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("request failed");
      setSubmitted(true);
      toast.success("Demo talebiniz alındı! En kısa sürede dönüş yapacağız.");
    } catch {
      toast.error(
        "Talep gönderilemedi. Lütfen tekrar deneyin veya bizi arayın.",
      );
    } finally {
      setLoading(false);
    }
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
                        value={form.name}
                        onChange={(e) => set("name")(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="company">Şirket Adı *</Label>
                      <Input
                        id="company"
                        placeholder="ABC İnşaat A.Ş."
                        required
                        value={form.company}
                        onChange={(e) => set("company")(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">E-posta *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ahmet@abc.com"
                        required
                        value={form.email}
                        onChange={(e) => set("email")(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+90 532 000 00 00"
                        value={form.phone}
                        onChange={(e) => set("phone")(e.target.value)}
                      />
                    </div>

                    {/* Firma Tipi */}
                    <div className="flex flex-col gap-2 min-w-0">
                      <Label htmlFor="company-type">Firma Tipi</Label>
                      <Select value={form.companyType} onValueChange={set("companyType")}>
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
                      <Select value={form.siteCount} onValueChange={set("siteCount")}>
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
                      value={form.message}
                      onChange={(e) => set("message")(e.target.value)}
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
                  disabled={loading}
                >
                  <Send className="size-4" />
                  {loading ? "Gönderiliyor..." : "Demo Talep Et"}
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
