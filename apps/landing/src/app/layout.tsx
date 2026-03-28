import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "İnşaat Kontrol — Türkiye'nin Lider İnşaat ERP Platformu",
  description:
    "Proje yönetimi, maliyet kontrolü, kalite denetimi ve saha operasyonlarını tek platformda yönetin. 14 günlük ücretsiz deneme.",
  keywords: [
    "inşaat yazılımı",
    "inşaat ERP",
    "proje yönetimi",
    "maliyet kontrolü",
    "inşaat kontrol",
    "yapı denetim yazılımı",
  ],
  openGraph: {
    title: "İnşaat Kontrol — Türkiye'nin Lider İnşaat ERP Platformu",
    description:
      "Proje yönetimi, maliyet kontrolü, kalite denetimi ve saha operasyonlarını tek platformda yönetin.",
    url: "https://insaatkontrol.com",
    siteName: "İnşaat Kontrol",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "İnşaat Kontrol — Türkiye'nin Lider İnşaat ERP Platformu",
    description:
      "Proje yönetimi, maliyet kontrolü, kalite denetimi ve saha operasyonlarını tek platformda yönetin.",
  },
  alternates: {
    canonical: "https://insaatkontrol.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
