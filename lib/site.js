// Central brand + site configuration for kibristaksi24.com

export const SITE = {
  name: "Kıbrıs Taksi 24",
  domain: "kibristaksi24.com",
  url: "https://kibristaksi24.com",
  legalName: "Kıbrıs Taksi 24 Transfer Hizmetleri",
  slogan: "KKTC'nin Premium Taksi & Transfer Platformu",
  phoneDisplay: "+90 548 875 77 31",
  phoneRaw: "905488757731",
  email: "info@kibristaksi24.com",
  areaServed: "Kuzey Kıbrıs Türk Cumhuriyeti (KKTC)",
  rating: { value: "4.9", count: "1287" },
};

// WhatsApp deep link builder
export function waUrl(message) {
  const text = encodeURIComponent(message || "Merhaba, Kıbrıs Taksi 24 üzerinden transfer rezervasyonu yapmak istiyorum.");
  return `https://wa.me/${SITE.phoneRaw}?text=${text}`;
}

// Curated premium imagery
export const IMG = {
  heroHarbour: "https://images.unsplash.com/photo-1677023484291-005b9840132f",
  coast: "https://images.pexels.com/photos/13042270/pexels-photo-13042270.jpeg",
  luxuryCar: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5",
  luxuryCar2: "https://images.unsplash.com/photo-1655827763440-7905302b75ff",
  airport: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d",
  airport2: "https://images.pexels.com/photos/3140204/pexels-photo-3140204.jpeg",
  cityscape: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
  walls: "https://images.unsplash.com/photo-1679589170510-ecc0c498d755",
  walls2: "https://images.pexels.com/photos/17251320/pexels-photo-17251320.jpeg",
  road: "https://images.unsplash.com/photo-1504203328729-b937e8e102f2",
  road2: "https://images.unsplash.com/photo-1720670272553-d352388d54d0",
  chauffeur: "https://images.pexels.com/photos/7594130/pexels-photo-7594130.jpeg",
  chauffeur2: "https://images.pexels.com/photos/15774577/pexels-photo-15774577.jpeg",
  beach: "https://images.unsplash.com/photo-1471085507142-12355181f804",
  beach2: "https://images.pexels.com/photos/10876041/pexels-photo-10876041.jpeg",
};

// Location options used inside the booking widget dropdowns
export const PLACES = [
  "Ercan Havalimanı",
  "Girne (Kyrenia)",
  "Lefkoşa (Nicosia)",
  "Gazimağusa (Famagusta)",
  "İskele",
  "Lapta",
  "Alsancak",
  "Çatalköy",
  "Bellapais",
  "Bafra",
  "Acapulco Resort",
  "Merit Royal / Crystal Cove",
  "Larnaka Havalimanı",
  "Karpaz",
  "Güzelyurt",
  "Diğer / Otel Adı",
];

// Header navigation model
export const NAV = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Kıbrıs Taksi", href: "/kibris-taksi" },
  {
    label: "Transfer",
    children: [
      { label: "Kıbrıs Transfer", href: "/kibris-transfer", desc: "Ada geneli özel transfer" },
      { label: "Ercan Havalimanı Transfer", href: "/ercan-havalimani-transfer", desc: "Uçuş takipli karşılama" },
      { label: "VIP Transfer", href: "/vip-transfer", desc: "Lüks araç & şoför" },
    ],
  },
  {
    label: "Şehirler",
    children: [
      { label: "Girne Taksi", href: "/girne-taksi" },
      { label: "Lefkoşa Taksi", href: "/lefkosa-taksi" },
      { label: "Gazimağusa Taksi", href: "/gazimagusa-taksi" },
      { label: "İskele Taksi", href: "/iskele-taksi" },
      { label: "Lapta Taksi", href: "/lapta-taksi" },
      { label: "Alsancak Taksi", href: "/alsancak-taksi" },
      { label: "Çatalköy Taksi", href: "/catalkoy-taksi" },
      { label: "Bellapais Taksi", href: "/bellapais-taksi" },
    ],
  },
  { label: "Kurumsal", href: "/kurumsal" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

// Lightweight UI dictionary (TR default, EN secondary) for interactive shell
export const DICT = {
  tr: {
    book: "Online Rezervasyon",
    reserve: "Hemen Rezervasyon",
    whatsapp: "WhatsApp",
    call: "Ara",
    getPrice: "Fiyat Sor",
    from: "Nereden",
    to: "Nereye",
    date: "Tarih",
    time: "Saat",
    passengers: "Yolcu",
    luggage: "Bavul",
    childSeat: "Çocuk koltuğu",
    oneWay: "Tek Yön",
    roundTrip: "Gidiş-Dönüş",
    selectFrom: "Kalkış noktası seçin",
    selectTo: "Varış noktası seçin",
    continueWhatsApp: "WhatsApp ile Devam Et",
    bookNow: "Rezervasyonu Tamamla",
    heroBadge: "KKTC'nin #1 Taksi & Transfer Platformu",
    priceNote: "Sabit fiyat için WhatsApp'tan bize ulaşın",
    quoteBtn: "Ücretsiz Fiyat Teklifi Al",
    langName: "TR",
  },
  en: {
    book: "Online Booking",
    reserve: "Book Now",
    whatsapp: "WhatsApp",
    call: "Call",
    getPrice: "Get a Quote",
    from: "From",
    to: "To",
    date: "Date",
    time: "Time",
    passengers: "Passengers",
    luggage: "Luggage",
    childSeat: "Child seat",
    oneWay: "One Way",
    roundTrip: "Round Trip",
    selectFrom: "Select pick-up",
    selectTo: "Select drop-off",
    continueWhatsApp: "Continue on WhatsApp",
    bookNow: "Complete Booking",
    heroBadge: "Cyprus' #1 Taxi & Transfer Platform",
    priceNote: "Contact us on WhatsApp for a fixed price",
    quoteBtn: "Get a Free Quote",
    langName: "EN",
  },
};

// Common trust/feature blocks reused on landing pages
export const DEFAULT_HIGHLIGHTS = [
  { icon: "Clock", title: "7/24 Kesintisiz Hizmet", text: "Gece-gündüz, bayram-tatil fark etmeksizin her saat transfer." },
  { icon: "BadgeCheck", title: "Sabit & Şeffaf Fiyat", text: "Sürpriz ücret yok. Rezervasyonda fiyatınız nettir." },
  { icon: "PlaneLanding", title: "Ücretsiz Uçuş Takibi", text: "Uçağınız rötar yapsa da şoförünüz sizi bekler." },
  { icon: "ShieldCheck", title: "Lisanslı & Sigortalı", text: "KKTC lisanslı, sigortalı araç ve profesyonel şoförler." },
];

export const TRUST_STATS = [
  { value: "120.000+", label: "Tamamlanan Transfer" },
  { value: "4.9/5", label: "Müşteri Puanı" },
  { value: "7/24", label: "Canlı Destek" },
  { value: "%100", label: "Uçuş Takibi" },
];
