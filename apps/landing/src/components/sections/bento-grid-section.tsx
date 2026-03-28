import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "@/components/animate-ui/icons/sparkles";
import { Bot } from "@/components/animate-ui/icons/bot";
import { Layers } from "@/components/animate-ui/icons/layers";
import { Activity } from "@/components/animate-ui/icons/activity";
import { ClipboardCheck } from "@/components/animate-ui/icons/clipboard-check";
import { Blocks } from "@/components/animate-ui/icons/blocks";
import { RefreshCcw } from "@/components/animate-ui/icons/refresh-ccw";
import { BellRing } from "@/components/animate-ui/icons/bell-ring";

export function BentoGridSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 gap-1">
            <Blocks size={14} animateOnView />
            Platform Özeti
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Hepsini Bir Arada Yönet
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg">
            Şantiyeden ofise, yapay zekadan raporlamaya — tek çatı altında
            eksiksiz inşaat yönetimi.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-auto gap-4 max-w-5xl mx-auto">

          {/* Large — AI */}
          <Card className="col-span-2 row-span-2 bg-gradient-to-br from-primary/15 to-primary/5 border-primary/20 overflow-hidden relative">
            <CardHeader>
              <div className="mb-2">
                <Bot size={36} animateOnView className="text-primary" />
              </div>
              <CardTitle className="text-xl">AI Destekli Asistan</CardTitle>
              <CardDescription className="text-base">
                Saha talimatı yaz, malzeme öner, maliyet projeksiyon yap.
                Dokümanlardan otomatik RFI oluştur.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge className="gap-1">
                <Sparkles size={12} animateOnView />
                Yapay Zeka
              </Badge>
            </CardContent>
            {/* decorative */}
            <div className="absolute -bottom-6 -right-6 size-32 rounded-full bg-primary/8" />
          </Card>

          {/* Small — Gerçek Zamanlı */}
          <Card className="col-span-1">
            <CardHeader className="pb-2">
              <Activity size={24} animateOnView className="text-chart-2 mb-1" />
              <CardTitle className="text-sm">Gerçek Zamanlı</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xs">
                Değişiklikler anında tüm ekiple senkronize.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Small — Bildirimler */}
          <Card className="col-span-1">
            <CardHeader className="pb-2">
              <BellRing size={24} animateOnView className="text-chart-3 mb-1" />
              <CardTitle className="text-sm">Akıllı Uyarılar</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xs">
                Bütçe sapması, gecikme ve risk bildirimleri.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Small — Revizyon */}
          <Card className="col-span-1">
            <CardHeader className="pb-2">
              <RefreshCcw size={24} animateOnView className="text-chart-4 mb-1" />
              <CardTitle className="text-sm">Revizyon Takibi</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xs">
                Her dokümanın tüm versiyonları tek arşivde.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Small — Kalite */}
          <Card className="col-span-1">
            <CardHeader className="pb-2">
              <ClipboardCheck size={24} animateOnView className="text-primary mb-1" />
              <CardTitle className="text-sm">Kalite Kontrol</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xs">
                Punch board ve denetim şablonları.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Wide — Entegrasyonlar */}
          <Card className="col-span-2 bg-muted/50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Layers size={28} animateOnView className="text-primary" />
                <div>
                  <CardTitle className="text-base">40+ Entegrasyon</CardTitle>
                  <CardDescription className="text-sm">
                    AutoCAD, SAP, Teams, WhatsApp Business, BIM360 ve daha
                    fazlası.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["AutoCAD", "SAP", "Teams", "WhatsApp", "BIM360", "Excel", "Revit"].map(
                  (tool) => (
                    <Badge key={tool} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  )
                )}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
