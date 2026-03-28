import type { FeatureItem, FaqItem, NavLink, StatItem, HowItWorksStep } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Özellikler", href: "#features" },
  { label: "Nasıl Çalışır", href: "#how-it-works" },
  { label: "Fiyatlandırma", href: "#pricing" },
  { label: "SSS", href: "#faq" },
  { label: "İletişim", href: "#demo" },
];

export const STATS: StatItem[] = [
  { value: "%35", label: "Ortalama Maliyet Tasarrufu" },
  { value: "%60", label: "Daha Az Evrak İşi" },
  { value: "3×", label: "Daha Hızlı Raporlama" },
  { value: "24/7", label: "Türkçe Teknik Destek" },
];

export const FEATURES: FeatureItem[] = [
  // --- Sahada ---
  {
    icon: "HardHat",
    title: "Saha Operasyonları",
    description:
      "Günlük saha logları, hava durumu takibi, ekipman saatleri ve alt yüklenici koordinasyonu. Mobil uyumlu, internet olmadan da çalışır.",
    category: "sahada",
  },
  {
    icon: "ShieldCheck",
    title: "Kalite & Güvenlik",
    description:
      "Punch board, denetim şablonları, near-miss kaydı ve iş güvenliği kontrol listeleri. Saha ekibine anlık bildirim.",
    category: "sahada",
  },
  {
    icon: "Camera",
    title: "Kamera İzleme",
    description:
      "Gerçek zamanlı saha kamerası entegrasyonu. İstediğiniz anda şantiyeyi izleyin, kayıtlara erişin.",
    category: "sahada",
  },
  // --- Ofiste ---
  {
    icon: "TrendingUp",
    title: "Maliyet Kontrolü",
    description:
      "Ek işler, hakedişler, maliyet kodları ve bütçe sapma analizi. Excel export ile muhasebe entegrasyonu.",
    category: "ofiste",
  },
  {
    icon: "FileText",
    title: "Doküman Zekası",
    description:
      "RFI, submittal, revizyon takibi ve AI Smart Edit. Çizimlerinizi yükleyin, tüm versiyonlara anında erişin.",
    category: "ofiste",
  },
  {
    icon: "BarChart3",
    title: "Raporlar & Analitik",
    description:
      "Takım aktivitesi, kapasite riski ve üretkenlik metrikleri. Haftalık, aylık, proje bazlı PDF/Excel raporları.",
    category: "ofiste",
  },
  // --- Zekice ---
  {
    icon: "Sparkles",
    title: "AI Araçları",
    description:
      "Yapay zeka ile saha talimatı oluşturma, malzeme önerisi, gelecek projeksiyonu ve 360° sanal tur.",
    badge: "Yeni",
    category: "zekice",
  },
  {
    icon: "AlertTriangle",
    title: "Risk Yönetimi",
    description:
      "Probability×Impact matrisi ile risk skorlama, mitigasyon planları ve otomatik uyarı sistemi.",
    category: "zekice",
  },
  {
    icon: "Users",
    title: "Müşteri Portalı",
    description:
      "Müşterinize özel görünüm: proje ilerlemesi, bütçe durumu ve onaylanan belgeler. Güven oluşturun.",
    category: "zekice",
  },
  {
    icon: "LayoutDashboard",
    title: "Proje Yönetimi",
    description:
      "Liste, Kanban ve Takvim görünümleri. Görev atama, ilerleme takibi ve zaman çizelgesi yönetimi.",
    category: "ofiste",
  },
  {
    icon: "Truck",
    title: "Kaynaklar & Lojistik",
    description:
      "Ekipman yönetimi, teslimat takvimi ve alt yüklenici KPI takibi. Gecikmeler başlamadan önce görün.",
    category: "sahada",
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: "Demo Talep Edin",
    description:
      "14 günlük ücretsiz erişim alın. Kredi kartı gerekmez, kurulum 5 dakika.",
  },
  {
    step: 2,
    title: "Projenizi Girin",
    description:
      "Hazır şablonlarla ilk projenizi oluşturun; aşamalar, görevler ve bütçe otomatik oluşturulur.",
  },
  {
    step: 3,
    title: "Ekibinizi Davet Edin",
    description:
      "Her çalışana role göre yetki tanımlayın: saha personeli, mühendis, proje müdürü veya müşteri.",
  },
  {
    step: 4,
    title: "Sahadan Yönetin",
    description:
      "Mobil uygulama veya masaüstünden gerçek zamanlı veri alın; kararlarınızı veriye dayandırın.",
  },
];

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlighted: boolean;
  ctaLabel: string;
  priceIdMonthly: string;
  priceIdYearly: string;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Başlangıç",
    description: "Küçük ekipler ve tek şantiye yönetimi için ideal",
    monthlyPrice: 2990,
    yearlyPrice: 2392,
    features: [
      "5 aktif proje",
      "10 kullanıcı",
      "Proje yönetimi (Liste/Kanban)",
      "Maliyet takibi & bütçe",
      "Doküman yönetimi",
      "E-posta desteği",
      "5 GB depolama",
    ],
    highlighted: false,
    ctaLabel: "Başlangıç Planı Seç",
    priceIdMonthly: "",
    priceIdYearly: "",
  },
  {
    id: "pro",
    name: "Profesyonel",
    description: "Büyüyen firmalar için gelişmiş özellikler",
    monthlyPrice: 5990,
    yearlyPrice: 4792,
    features: [
      "Sınırsız proje",
      "50 kullanıcı",
      "Tüm özellikler (Saha, Kalite, Doküman)",
      "AI Araçları (Smart Edit, Projeksiyon)",
      "Risk Yönetimi & Raporlar",
      "Müşteri Portalı",
      "Öncelikli destek",
      "50 GB depolama",
    ],
    highlighted: true,
    ctaLabel: "Profesyonel Planı Seç",
    priceIdMonthly: "",
    priceIdYearly: "",
  },
  {
    id: "enterprise",
    name: "Kurumsal",
    description: "Büyük organizasyonlar için özel çözümler",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Sınırsız proje ve kullanıcı",
      "Kamera İzleme entegrasyonu",
      "Özel muhasebe entegrasyonu",
      "Dedicated müşteri temsilcisi",
      "SLA garantisi",
      "Sınırsız depolama",
      "On-premise seçeneği",
    ],
    highlighted: false,
    ctaLabel: "Bize Ulaşın",
    priceIdMonthly: "",
    priceIdYearly: "",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Şantiye personeli teknik bilgi olmadan kullanabilir mi?",
    answer:
      "Evet. Mobil uygulama saha personeli için özel olarak tasarlandı: fotoğraf çek, log gir, kontrol listesini onayla. Teknik bilgi gerektiren adım yok. Ortalama öğrenme süresi 20 dakika.",
  },
  {
    question: "Birden fazla şantiyeyi aynı anda takip edebilir miyim?",
    answer:
      "Evet, tüm planlarımızda çoklu şantiye desteği var. Ana dashboarddan tüm projelerinizin anlık durumunu — maliyet, ilerleme, risk — tek ekranda görürsünüz.",
  },
  {
    question: "AI araçları ne gibi analizler yapıyor?",
    answer:
      "AI araçları; saha talimatı ve iş emri oluşturma, malzeme seçim önerisi, maliyet projeksiyon analizi ve 360° sanal saha turu destekliyor. Tüm çıktılar onay gerektiriyor, otomatik işlem yapmıyor.",
  },
  {
    question: "Müşterilerime proje ilerlemesini nasıl gösteririm?",
    answer:
      "Müşteri Portalı özelliğiyle müşterinize özel bir görünüm oluşturabilirsiniz. Hangi bilgilerin görünür olacağını siz seçersiniz: ilerleme yüzdesi, bütçe durumu, onaylı belgeler.",
  },
  {
    question: "Mevcut muhasebe yazılımımla entegre olabilir mi?",
    answer:
      "Logo, Mikro ve Luca için hazır entegrasyon desteği sunuyoruz. Hakedişler ve maliyet kalemleri doğrudan muhasebe sistemine aktarılabilir. Özel entegrasyon için teknik ekibimizle görüşebilirsiniz.",
  },
  {
    question: "İnşaat Kontrol hangi tür projelere uygundur?",
    answer:
      "Konut, ticari, endüstriyel ve altyapı projelerine uygundur. Küçük villa inşaatından büyük AVM projelerine kadar her ölçekte çalışır.",
  },
  {
    question: "Verilerim güvende mi?",
    answer:
      "Verileriniz Türkiye'deki güvenli veri merkezlerinde, 256-bit AES şifrelemesiyle saklanır. Düzenli yedekleme ve disaster recovery prosedürlerimiz mevcuttur.",
  },
  {
    question: "Demo veya deneme süresi var mı?",
    answer:
      "14 günlük ücretsiz tam özellikli deneme sunuyoruz. Deneme süresinde kredi kartı bilgisi gerekmez ve tüm özelliklere erişiminiz olur.",
  },
];
