// Central brand + site configuration for kibristaksi24.com

export const SITE = {
  name: "Kıbrıs Taksi 24",
  domain: "kibristaksi24.com",
  url: "https://kibristaksi24.com",
  legalName: "Kıbrıs Taksi 24 Transfer Hizmetleri",
  slogan: "Kaliteli ve Uygun · KKTC Taksi & Transfer",
  phoneDisplay: "+90 548 875 77 31",
  phoneTitle: "+90 548 875 7731", // used inside SEO title tags
  phoneRaw: "905488757731",
  email: "info@kibristaksi24.com",
  areaServed: "Kuzey Kıbrıs Türk Cumhuriyeti (KKTC)",
  rating: { value: "4.9", count: "1287" },
};

// WhatsApp deep link builder
export function waUrl(message) {
  const text = encodeURIComponent(
    message || "Merhaba, Kıbrıs Taksi 24 üzerinden taksi/transfer için bilgi almak istiyorum."
  );
  return `https://wa.me/${SITE.phoneRaw}?text=${text}`;
}

// Curated premium imagery
export const IMG = {
  heroHarbour: "https://images.unsplash.com/photo-1677023484291-005b9840132f",
  coast: "https://images.pexels.com/photos/13042270/pexels-photo-13042270.jpeg",
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
  // Real vehicles
  eClass: "https://images.pexels.com/photos/30809411/pexels-photo-30809411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  vito: "https://images.pexels.com/photos/17455633/pexels-photo-17455633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  vito2: "https://images.pexels.com/photos/17455625/pexels-photo-17455625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  minibus: "https://images.pexels.com/photos/12555017/pexels-photo-12555017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  van: "https://images.unsplash.com/photo-1633804305751-1d6ee641847f?crop=entropy&cs=srgb&fm=jpg&q=85&w=940",
  tourCastle: "https://images.pexels.com/photos/36149762/pexels-photo-36149762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

// Vehicle fleet (real Mercedes photos) — reused across pages
export const FLEET = [
  { name: "Mercedes-Benz E-Class", cap: "1-3 Yolcu", desc: "Konforlu, prestijli sedan. Bireysel yolcular, çiftler ve iş seyahatleri için ideal.", img: IMG.eClass, alt: "Siyah Mercedes-Benz E-Class VIP taksi aracı" },
  { name: "Mercedes-Benz Vito / Viano", cap: "4-7 Yolcu", desc: "Geniş iç hacim ve büyük bagaj kapasitesi. Aileler ve gruplar için en çok tercih edilen araç.", img: IMG.vito, alt: "Siyah Mercedes-Benz Vito VIP transfer minivan" },
  { name: "Minibüs & Grup Aracı", cap: "8-16 Yolcu", desc: "Kalabalık gruplar, ekipler ve organizasyonlar için geniş, klimalı minibüs seçenekleri.", img: IMG.minibus, alt: "Beyaz minibüs grup transfer aracı" },
];

// Booking widget location options
export const PLACES = [
  "Ercan Havalimanı",
  "Larnaka Havalimanı",
  "Girne (Kyrenia)",
  "Lefkoşa (Nicosia)",
  "Gazimağusa (Famagusta)",
  "İskele / Long Beach",
  "Lapta",
  "Alsancak",
  "Karşıyaka",
  "Çamlıbel",
  "Çatalköy",
  "Bellapais",
  "Bafra Otelleri",
  "Acapulco Resort",
  "Cratos Premium",
  "Merit Royal / Crystal Cove",
  "GAÜ (Girne Amerikan Üniv.)",
  "DAÜ (Doğu Akdeniz Üniv.)",
  "Karpaz",
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
      { label: "Kıbrıs Vito Transfer", href: "/kibris-vito-transfer", desc: "Mercedes Vito grup transferi" },
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
      { label: "Karşıyaka Taksi", href: "/karsiyaka-taksi" },
      { label: "Çamlıbel Taksi", href: "/camlibel-taksi" },
      { label: "Alsancak Taksi", href: "/alsancak-taksi" },
      { label: "Çatalköy Taksi", href: "/catalkoy-taksi" },
      { label: "Bellapais Taksi", href: "/bellapais-taksi" },
      { label: "GAÜ Taksi", href: "/gau-taksi" },
      { label: "DAÜ Taksi", href: "/dau-taksi" },
      { label: "Yakın Doğu Taksi", href: "/yakin-dogu-taksi" },
    ],
  },
  {
    label: "Güney Transfer",
    children: [
      { label: "Larnaka KKTC Transfer", href: "/larnaka-kktc-transfer", desc: "Sınır geçişi dahil özel transfer" },
      { label: "Paf Havalimanı KKTC Transfer", href: "/paf-kktc-transfer", desc: "Paphos'tan KKTC'ye ulaşım" },
      { label: "Larnaka → Girne Transfer", href: "/larnaka-girne-transfer" },
      { label: "Larnaka → Lefkoşa Transfer", href: "/larnaka-lefkosa-transfer" },
      { label: "Güney Kıbrıs → KKTC", href: "/guney-kibris-kktc-transfer" },
    ],
  },
  {
    label: "Otel & Casino",
    children: [
      { label: "Merit Royal Taksi", href: "/merit-royal-taksi" },
      { label: "Cratos Premium Taksi", href: "/cratos-taksi" },
      { label: "Elexus Taksi", href: "/elexus-taksi" },
      { label: "Kaya Artemis Taksi", href: "/kaya-artemis-taksi" },
      { label: "Cratos Casino Taksi", href: "/cratos-casino-taksi" },
      { label: "Girne Casino Taksi", href: "/girne-casino-taksi" },
    ],
  },
  { label: "Günlük Turlar", href: "/kibris-gunluk-turlar" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

// Lightweight UI dictionary (TR default, EN secondary) for interactive shell
export const DICT = {
  tr: {
    book: "Online Rezervasyon", reserve: "Hemen Rezervasyon", whatsapp: "WhatsApp", call: "Ara",
    getPrice: "Bilgi Al", from: "Nereden", to: "Nereye", date: "Tarih", time: "Saat",
    passengers: "Yolcu", luggage: "Bavul", childSeat: "Çocuk koltuğu", oneWay: "Tek Yön", roundTrip: "Gidiş-Dönüş",
    selectFrom: "Kalkış noktası seçin", selectTo: "Varış noktası seçin",
    continueWhatsApp: "WhatsApp ile Bilgi Al", bookNow: "Talebi Gönder",
    heroBadge: "KKTC'nin #1 Taksi & Transfer Platformu",
    priceNote: "Ücret bilgisi için WhatsApp'tan bize ulaşın", quoteBtn: "WhatsApp'tan Bilgi Al", langName: "TR",
  },
  en: {
    book: "Online Booking", reserve: "Book Now", whatsapp: "WhatsApp", call: "Call",
    getPrice: "Get Info", from: "From", to: "To", date: "Date", time: "Time",
    passengers: "Passengers", luggage: "Luggage", childSeat: "Child seat", oneWay: "One Way", roundTrip: "Round Trip",
    selectFrom: "Select pick-up", selectTo: "Select drop-off",
    continueWhatsApp: "Get Info on WhatsApp", bookNow: "Send Request",
    heroBadge: "Cyprus' #1 Taxi & Transfer Platform",
    priceNote: "Contact us on WhatsApp for pricing", quoteBtn: "Get Info on WhatsApp", langName: "EN",
  },
};

// Trust section blocks (fixed-price promises removed; taximeter perception)
export const TRUST_BASE = [
  { icon: "Car", title: "Lisanslı Mercedes Araçlar", text: "Bakımlı, sigortalı ve lisanslı Mercedes E-Class ve Vito filosu ile güvenli yolculuk." },
  { icon: "Clock", title: "7/24 Kesintisiz Hizmet", text: "Gece-gündüz, bayram ve tatil fark etmeksizin her saat ulaşım imkânı." },
  { icon: "Gauge", title: "Taksimetre & Şeffaf Ücret", text: "Yolculuğunuz taksimetre ile şeffaf biçimde ücretlendirilir; gizli masraf yok." },
  { icon: "ThumbsUp", title: "Kaliteli ve Uygun", text: "Yüksek konfor standardını uygun ve rekabetçi ücretlerle bir arada sunuyoruz." },
];

export const AIRPORT_TRUST = {
  icon: "PlaneLanding",
  title: "Ücretsiz Uçuş Takibi",
  text: "Uçağınızı canlı takip ederiz; rötar olsa dahi şoförünüz sizi bekler.",
};

export const TRUST_STATS = [
  { value: "120.000+", label: "Tamamlanan Yolculuk" },
  { value: "4.9/5", label: "Müşteri Puanı" },
  { value: "7/24", label: "Canlı Destek" },
  { value: "Mercedes", label: "E-Class & Vito Filo" },
];
