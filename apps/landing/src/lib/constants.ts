import type { FeatureItem, FaqItem, NavLink, StatItem, HowItWorksStep } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Özellikler", href: "#features" },
  { label: "Nasıl Çalışır", href: "#how-it-works" },
  { label: "SSS", href: "#faq" },
  { label: "İletişim", href: "#demo" },
];

export const STATS: StatItem[] = [
  { value: "500+", label: "Tamamlanan Proje" },
  { value: "%98", label: "Müşteri Memnuniyeti" },
  { value: "50+", label: "Aktif Müşteri" },
  { value: "24/7", label: "Teknik Destek" },
];

export const FEATURES: FeatureItem[] = [
  {
    icon: "LayoutDashboard",
    title: "Proje Yönetimi",
    description:
      "Tüm inşaat projelerinizi tek panelden takip edin. Görev atama, ilerleme izleme ve zaman çizelgesi yönetimi.",
  },
  {
    icon: "TrendingUp",
    title: "Maliyet Kontrolü",
    description:
      "Bütçe takibi, harcama analizi ve maliyet sapma raporları ile finansal kontrolü elinizde tutun.",
  },
  {
    icon: "ShieldCheck",
    title: "Kalite & Güvenlik",
    description:
      "İş güvenliği kontrol listeleri, kalite denetim formları ve olay raporlama sistemi.",
  },
  {
    icon: "HardHat",
    title: "Saha Operasyonları",
    description:
      "Ekipman takibi, malzeme yönetimi ve saha personeli koordinasyonu için kapsamlı araçlar.",
  },
  {
    icon: "Sparkles",
    title: "AI Araçları",
    description:
      "Yapay zeka destekli risk analizi, proje tahminleri ve otomatik rapor oluşturma.",
    badge: "Yeni",
  },
  {
    icon: "FileText",
    title: "Belge Yönetimi",
    description:
      "Sözleşmeler, çizimler ve teknik belgeler için merkezi arşiv sistemi. Versiyon kontrolü dahil.",
  },
  {
    icon: "BarChart3",
    title: "Raporlama",
    description:
      "Haftalık, aylık ve proje bazlı detaylı raporlar. PDF ve Excel export desteği.",
  },
  {
    icon: "Building2",
    title: "Multi-Tenant",
    description:
      "Birden fazla şirket veya departmanı tek platformda yönetin. Tam veri izolasyonu.",
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: "Kayıt Olun",
    description:
      "Ücretsiz demo hesabınızı dakikalar içinde oluşturun. Kredi kartı gerekmez.",
  },
  {
    step: 2,
    title: "Projenizi Kurun",
    description:
      "İlk projenizi oluşturun, aşamaları ve görevleri tanımlayın.",
  },
  {
    step: 3,
    title: "Ekibinizi Ekleyin",
    description:
      "Çalışanlarınızı davet edin, rolleri ve yetkileri belirleyin.",
  },
  {
    step: 4,
    title: "Kontrolü Elinize Alın",
    description:
      "Gerçek zamanlı verilerle projelerinizi takip edin ve kararlarınızı veri ile destekleyin.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "İnşaat Kontrol hangi tür projelere uygundur?",
    answer:
      "İnşaat Kontrol; konut, ticari, endüstriyel ve altyapı projelerine uygundur. Küçük villa inşaatından büyük AVM projelerine kadar her ölçekte kullanılabilir.",
  },
  {
    question: "Mobil uygulama var mı?",
    answer:
      "Evet, iOS ve Android için native mobil uygulamamız mevcuttur. Saha personeli ve yöneticiler her yerden sisteme erişebilir.",
  },
  {
    question: "Verilerim güvende mi?",
    answer:
      "Verileriniz Türkiye'deki güvenli veri merkezlerinde, 256-bit AES şifrelemesi ile saklanır. Düzenli yedekleme ve disaster recovery prosedürlerimiz mevcuttur.",
  },
  {
    question: "Mevcut muhasebe yazılımımla entegre olabilir mi?",
    answer:
      "Logo, Mikro, Luca ve diğer popüler muhasebe yazılımlarıyla entegrasyon desteği sunuyoruz. Özel entegrasyon ihtiyaçları için teknik ekibimizle görüşebilirsiniz.",
  },
  {
    question: "Kaç kullanıcı ekleyebilirim?",
    answer:
      "Planınıza bağlı olarak sınırsız kullanıcı ekleyebilirsiniz. Rol ve yetki yönetimi ile her kullanıcıya özel erişim hakları tanımlayabilirsiniz.",
  },
  {
    question: "Demo veya deneme süresi var mı?",
    answer:
      "14 günlük ücretsiz tam özellikli deneme süresi sunuyoruz. Deneme süresinde kredi kartı bilgisi gerekmez.",
  },
  {
    question: "Eğitim ve destek nasıl sağlanıyor?",
    answer:
      "Kurulum sonrası ücretsiz online eğitim, kapsamlı dokümantasyon ve 7/24 teknik destek hattı sunuyoruz. Kurumsal müşterilerimize özel dedicated destek sağlanır.",
  },
  {
    question: "Fiyatlandırma nasıl çalışıyor?",
    answer:
      "Proje sayısı veya kullanıcı sayısına göre esnek planlarımız mevcuttur. Detaylı fiyat bilgisi için demo talebi oluşturabilir veya satış ekibimizle iletişime geçebilirsiniz.",
  },
];
