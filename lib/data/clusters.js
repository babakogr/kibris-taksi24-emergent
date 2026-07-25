import { IMG } from "@/lib/site";

const short = (kw) => `${kw} | +90 548 875 7731`;

// ---------- HOTEL PAGES (Ercan -> Hotel) ----------
function hotel({ slug, name, area, citySlug, dist, dur, hero }) {
  const kw = `${name} Taksi`;
  return {
    slug, type: "route", kw, name, breadcrumb: kw, isAirport: true, from: "Ercan Havalimanı",
    metaTitle: short(kw),
    metaDescription: `${name} taksi & transfer: Ercan Havalimanı'ndan ${area} bölgesindeki ${name}'e uçuş takipli Mercedes karşılama. ${dur} konforlu yolculuk. WhatsApp'tan bilgi alın!`,
    hero: hero || IMG.eClass, heroAlt: `${name} otel transfer ve taksi hizmeti`,
    lead: `Ercan Havalimanı'ndan ${area} bölgesindeki ${name}'e uçuş takipli, isim tabelalı karşılama ile ${dur} konforlu Mercedes transfer.`,
    subKeywords: [`${name} transfer`, `${name} ercan taksi`, `${name} havalimanı transfer`, `${name} vip transfer`, `${name} vito taksi`, `${area} otel taksi`],
    intro: [
      `${name}, ${area} bölgesinin öne çıkan konaklama tesislerindendir. ${name} taksi hizmetimizle Ercan Havalimanı'ndan otel lobinize doğrudan, aktarmasız ve konforlu ulaşım sunuyoruz. Şoförünüz uçuşunuzu takip eder ve sizi isim tabelasıyla karşılar.`,
      `Yaklaşık ${dist} mesafedeki bu güzergâhı ortalama ${dur} içinde, bakımlı Mercedes E-Class ve Vito araçlarımızla kat edersiniz. Gece geç saatteki inişler dahil 7/24 karşılama garantisi sunuyoruz.`,
      `Aileler ve gruplar için Mercedes Vito, bireysel misafirler için E-Class seçeneği mevcuttur. Bebek koltuğu ve ek bagaj talepleriniz önceden ayarlanır; ücretlendirme taksimetre ile şeffaf biçimde yapılır.`,
    ],
    sections: [
      { h2: `${name} Karşılama ve Transfer Süreci`, body: [
        `Dış hatlar çıkışında isim tabelalı karşılama ile buluşur, bagajlarınızın yerleştirilmesinin ardından doğrudan ${name} lobisine hareket ederiz. Gidiş-dönüş transferini tek talepte planlayabilirsiniz.`,
        `${area} bölgesindeki diğer otel ve villalara da doğrudan transfer düzenliyoruz. Kurumsal ve grup talepleriniz için birden fazla araçla eşzamanlı organizasyon yapabiliriz.`,
      ]},
    ],
    journey: { distance: `≈ ${dist}`, duration: `≈ ${dur}`, pickup: "Otel lobisi isim tabelalı karşılama" },
    points: [name, area, "Ercan Havalimanı", "Girne", "Girne Limanı"],
    faqs: [
      { q: `Ercan'dan ${name}'e ne kadar sürer?`, a: `Yaklaşık ${dur} süren konforlu bir transferdir (${dist}).` },
      { q: `${name} lobisinden karşılama var mı?`, a: `Evet, otel lobisinde isim tabelasıyla karşılama sağlıyoruz.` },
      { q: `Ücret nasıl belirleniyor?`, a: `Yolculuğunuz taksimetre ile şeffaf biçimde ücretlendirilir. Bilgi için WhatsApp'tan yazın.` },
      { q: `Grup için Vito transfer olur mu?`, a: `Evet, aileler ve gruplar için Mercedes Vito ile ${name} transferi sağlıyoruz.` },
    ],
    related: { cities: [citySlug].filter(Boolean), routes: [], services: ["vip-transfer", "ercan-havalimani-transfer", "kibris-transfer"], blog: [] },
  };
}

const HOTELS = [
  hotel({ slug: "merit-royal-taksi", name: "Merit Royal", area: "Alsancak", citySlug: "alsancak-taksi", dist: "50 km", dur: "45 dk", hero: IMG.vito2 }),
  hotel({ slug: "merit-crystal-taksi", name: "Merit Crystal Cove", area: "Alsancak", citySlug: "alsancak-taksi", dist: "50 km", dur: "45 dk", hero: IMG.beach }),
  hotel({ slug: "cratos-taksi", name: "Cratos Premium", area: "Girne", citySlug: "girne-taksi", dist: "50 km", dur: "45 dk", hero: IMG.eClass }),
  hotel({ slug: "elexus-taksi", name: "Elexus Resort", area: "Karşıyaka", citySlug: "karsiyaka-taksi", dist: "60 km", dur: "55 dk", hero: IMG.coast }),
  hotel({ slug: "concorde-taksi", name: "Concorde Luxury Resort", area: "Bafra", citySlug: "iskele-taksi", dist: "80 km", dur: "65 dk", hero: IMG.beach2 }),
  hotel({ slug: "noahs-ark-taksi", name: "Noah's Ark", area: "Bafra", citySlug: "iskele-taksi", dist: "80 km", dur: "65 dk", hero: IMG.beach2 }),
  hotel({ slug: "kaya-artemis-taksi", name: "Kaya Artemis", area: "Bafra", citySlug: "iskele-taksi", dist: "80 km", dur: "65 dk", hero: IMG.beach }),
  hotel({ slug: "chamada-prestige-taksi", name: "Chamada Prestige", area: "Girne", citySlug: "girne-taksi", dist: "50 km", dur: "45 dk", hero: IMG.vito }),
  hotel({ slug: "salamis-bay-taksi", name: "Salamis Bay Conti", area: "Gazimağusa", citySlug: "gazimagusa-taksi", dist: "60 km", dur: "50 dk", hero: IMG.walls }),
  hotel({ slug: "lords-palace-taksi", name: "Lords Palace", area: "Girne", citySlug: "girne-taksi", dist: "48 km", dur: "45 dk", hero: IMG.heroHarbour }),
  hotel({ slug: "malpas-taksi", name: "Malpas Hotel", area: "Alsancak", citySlug: "alsancak-taksi", dist: "50 km", dur: "45 dk", hero: IMG.road2 }),
  hotel({ slug: "arkin-colony-taksi", name: "Arkın Colony", area: "Girne", citySlug: "girne-taksi", dist: "47 km", dur: "42 dk", hero: IMG.heroHarbour }),
];

// ---------- CASINO PAGES ----------
function casino({ slug, name, casinoName, area, citySlug, dist, dur, hero }) {
  const kw = `${name} Taksi`;
  return {
    slug, type: "route", kw, name, breadcrumb: kw, isAirport: true, from: "Ercan Havalimanı",
    metaTitle: short(kw),
    metaDescription: `${name} & transfer: ${casinoName} misafirlerine Ercan'dan uçuş takipli Mercedes karşılama ve gece 7/24 casino transferi. WhatsApp'tan bilgi alın!`,
    hero: hero || IMG.vito2, heroAlt: `${casinoName} casino transfer ve taksi hizmeti`,
    lead: `${casinoName} misafirlerine Ercan Havalimanı'ndan VIP Mercedes karşılama ve gece dahil 7/24 casino transferi.`,
    subKeywords: [`${casinoName} transfer`, `${casinoName} gece taksi`, `${area} casino taksi`, `${casinoName} vip transfer`, `kıbrıs casino taksi`, `${casinoName} havalimanı transfer`],
    intro: [
      `${casinoName}, ${area} bölgesinin en popüler eğlence ve oyun merkezlerindendir. ${name} hizmetimizle havalimanından otele ve gece boyunca casino-otel arası konforlu ulaşımınızı 7/24 sağlıyoruz.`,
      `Gece geç saatler dahil güvenli dönüş transferleri düzenliyoruz. Lüks Mercedes araçlarımız ve profesyonel şoförlerimizle keyifli bir gece için ulaşımı dert olmaktan çıkarıyoruz.`,
      `Bireysel misafirler için E-Class, gruplar için Mercedes Vito seçeneği mevcuttur. Ücretlendirme taksimetre ile şeffaf biçimde yapılır.`,
    ],
    sections: [
      { h2: `${casinoName} Gece Transferi`, body: [
        `Casino ziyaretiniz sonrası konaklama yerinize güvenli dönüş için gece geç saatlerde de hizmet veriyoruz. Gidiş-dönüş transferinizi tek talepte planlayabilirsiniz.`,
        `${area} bölgesindeki diğer casinolara ve otellere de transfer düzenliyoruz.`,
      ]},
    ],
    journey: { distance: `≈ ${dist}`, duration: `≈ ${dur}`, pickup: "Otel/casino lobisi karşılaması" },
    points: [casinoName, area, "Ercan Havalimanı", "Girne", "Girne Merkez"],
    faqs: [
      { q: `${casinoName}'a gece transfer var mı?`, a: `Evet, gece geç saatler dahil 7/24 otel-casino transferi düzenliyoruz.` },
      { q: `Ercan'dan ${casinoName}'a ne kadar sürer?`, a: `Yaklaşık ${dur} süren konforlu bir transferdir (${dist}).` },
      { q: `VIP araç ile transfer mümkün mü?`, a: `Evet, talebinize göre lüks Mercedes E-Class veya Vito ile transfer sağlıyoruz.` },
    ],
    related: { cities: [citySlug].filter(Boolean), routes: [], services: ["vip-transfer", "ercan-havalimani-transfer"], blog: ["kibris-casino-rehberi"] },
  };
}

const CASINOS = [
  casino({ slug: "cratos-casino-taksi", name: "Cratos Casino Taksi", casinoName: "Cratos Premium Casino", area: "Girne", citySlug: "girne-taksi", dist: "50 km", dur: "45 dk", hero: IMG.eClass }),
  casino({ slug: "merit-casino-taksi", name: "Merit Casino Taksi", casinoName: "Merit Royal Casino", area: "Alsancak", citySlug: "alsancak-taksi", dist: "50 km", dur: "45 dk", hero: IMG.vito2 }),
  casino({ slug: "chamada-casino-taksi", name: "Chamada Casino Taksi", casinoName: "Chamada Prestige Casino", area: "Girne", citySlug: "girne-taksi", dist: "50 km", dur: "45 dk", hero: IMG.vito }),
  casino({ slug: "kibris-casino-taksi", name: "Kıbrıs Casino Taksi", casinoName: "Kıbrıs casinoları", area: "KKTC", citySlug: "girne-taksi", dist: "50 km", dur: "45 dk", hero: IMG.luxuryCarFallback || IMG.vito2 }),
];

// ---------- UNIVERSITY PAGES ----------
function uni({ slug, name, uniName, citySlug, area, dist, dur, hero }) {
  const kw = `${name} Taksi`;
  return {
    slug, type: "city", kw, name, breadcrumb: kw, isAirport: false,
    metaTitle: short(kw),
    metaDescription: `${name} taksi: ${uniName} kampüs, yurtlar ve Ercan arası 7/24 Mercedes öğrenci taksi & transfer. Aile ziyaretleri. WhatsApp'tan bilgi alın!`,
    hero: hero || IMG.cityscape, heroAlt: `${uniName} öğrenci taksi ve transfer hizmeti`,
    lead: `${uniName} kampüs, yurtlar ve Ercan arası 7/24 konforlu öğrenci taksi ve havalimanı transferi.`,
    subKeywords: [`${name} öğrenci taksi`, `${uniName} taksi`, `${name} ercan transfer`, `${name} kampüs taksi`, `${name} yurt taksi`, `${name} havalimanı taksi`],
    intro: [
      `${uniName}, ${area} bölgesinde yer alan köklü bir kampüstür. ${name} taksi hizmetimizle kampüs, yurtlar ve şehir merkezi arasında 7/24 güvenli öğrenci ulaşımı sağlıyoruz.`,
      `Dönem başı gelişlerde ve dönem sonu dönüşlerde Ercan Havalimanı'ndan uçuş takipli karşılama yapıyoruz. Aileler kampüs ziyaretlerinde konforlu Mercedes araçlarımızla karşılanır.`,
      `Kampüs-merkez, kampüs-yurt ve kampüs-havalimanı güzergâhlarında düzenli ve uygun ulaşım için yanınızdayız. Ücretlendirme taksimetre ile şeffaftır.`,
    ],
    sections: [
      { h2: `${uniName} Öğrenci ve Havalimanı Transferleri`, body: [
        `Dönem başı ve sonu yoğunluğunda Ercan Havalimanı'ndan kampüs ve yurtlara uçuş takipli karşılama yapıyoruz. Öğrenciler yurt ve kampüs arasında güvenle ulaşır.`,
        `Aile ziyaretleri ve mezuniyet törenleri için grup transferleri düzenliyoruz.`,
      ]},
    ],
    journey: { distance: `Ercan'a ≈ ${dist}`, duration: `≈ ${dur}`, pickup: "Kampüs/yurt kapı karşılaması" },
    points: [uniName, "Öğrenci Yurtları", area, "Ercan Havalimanı", "Şehir Merkezi"],
    faqs: [
      { q: `${uniName}'ne havalimanından transfer var mı?`, a: `Evet, Ercan Havalimanı'ndan uçuş takipli karşılama ile kampüs ve yurtlara transfer sağlıyoruz.` },
      { q: `Öğrenciler için düzenli taksi olur mu?`, a: `Evet, kampüs-yurt-merkez güzergâhlarında düzenli ve uygun öğrenci ulaşımı sunuyoruz.` },
      { q: `Aile ziyaretinde araç ayarlıyor musunuz?`, a: `Evet, aile ziyaretleri ve tören günlerinde konforlu araç ve grup transferi sağlıyoruz.` },
    ],
    related: { cities: [citySlug].filter(Boolean), routes: [], services: ["kibris-taksi", "ercan-havalimani-transfer"], blog: ["kktc-ulasim-ipuclari"] },
  };
}

const UNIS = [
  uni({ slug: "dau-taksi", name: "DAÜ", uniName: "Doğu Akdeniz Üniversitesi", citySlug: "gazimagusa-taksi", area: "Gazimağusa", dist: "60 km", dur: "50 dk", hero: IMG.walls }),
  uni({ slug: "yakin-dogu-taksi", name: "Yakın Doğu", uniName: "Yakın Doğu Üniversitesi", citySlug: "lefkosa-taksi", area: "Lefkoşa", dist: "15 km", dur: "20 dk", hero: IMG.cityscape }),
  uni({ slug: "uku-taksi", name: "UKÜ", uniName: "Uluslararası Kıbrıs Üniversitesi", citySlug: "lefkosa-taksi", area: "Lefkoşa (Haspolat)", dist: "12 km", dur: "18 dk", hero: IMG.cityscape }),
];

// ---------- PORT / NIGHTLIFE / DISTRICT PAGES ----------
function spot({ slug, kw, name, area, citySlug, hero, subs, introExtra, faqExtra }) {
  return {
    slug, type: "service", kw, name, breadcrumb: kw, isAirport: false,
    metaTitle: short(kw),
    metaDescription: `${kw}: ${area} bölgesinde 7/24 Mercedes taksi & transfer. Gece dahil güvenli ulaşım, taksimetre ile şeffaf ücret. WhatsApp'tan bilgi alın!`,
    hero: hero || IMG.heroHarbour, heroAlt: `${kw} hizmeti`,
    lead: `${area} bölgesinde ${kw.toLowerCase()} ihtiyacınız için 7/24 konforlu Mercedes taksi ve transfer.`,
    subKeywords: subs || [`${name} taksi`, `${name} gece taksi`, `${name} vip taksi`, `${area} taksi`, `${name} transfer`, `${name} 7/24 taksi`],
    intro: [
      `${kw} hizmetimizle ${area} bölgesinde 7/24 güvenli ve konforlu ulaşım sunuyoruz. ${introExtra || "Bakımlı Mercedes araçlarımız ve deneyimli şoförlerimizle en kısa güzergâhtan seyahat edersiniz."}`,
      `Gece geç saatler dahil hizmet veriyoruz; eğlence ve gece hayatı dönüşlerinizde güvenli ulaşımınızı sağlıyoruz. Ücretlendirme taksimetre ile şeffaf biçimde yapılır.`,
      `Havalimanı bağlantıları, otel transferleri ve şehir içi kısa yolculuklar dahil her ihtiyaca cevap veriyoruz.`,
    ],
    sections: [
      { h2: `${area} Bölgesinde 7/24 Ulaşım`, body: [
        `Kapıdan karşılama ile alım yapar, sizi güvenle varış noktanıza ulaştırırız. Grup talepleriniz için Mercedes Vito seçeneğimiz mevcuttur.`,
        introExtra ? introExtra : `Bölgeyi iyi bilen şoförlerimizle konforlu ve zamanında ulaşım sağlıyoruz.`,
      ]},
    ],
    points: [name, area, "Ercan Havalimanı", "Girne", "Lefkoşa"],
    faqs: faqExtra || [
      { q: `${kw} 7/24 hizmet veriyor mu?`, a: `Evet, gece geç saatler dahil 7/24 hizmet veriyoruz.` },
      { q: `Ücret nasıl belirleniyor?`, a: `Yolculuğunuz taksimetre ile şeffaf biçimde ücretlendirilir. Bilgi için WhatsApp'tan yazın.` },
      { q: `Grup için araç var mı?`, a: `Evet, gruplar için Mercedes Vito araçlarımız mevcuttur.` },
    ],
    related: { cities: [citySlug].filter(Boolean), routes: [], services: ["kibris-taksi", "vip-transfer"], blog: ["kibris-gece-ulasimi"] },
  };
}

const SPOTS = [
  spot({ slug: "girne-liman-taksi", kw: "Girne Liman Taksi", name: "Girne Limanı", area: "Girne", citySlug: "girne-taksi", hero: IMG.heroHarbour, subs: ["girne liman taksi", "girne antik liman taksi", "liman restoran taksi", "girne liman gece taksi", "girne liman vip taksi", "girne liman transfer"] }),
  spot({ slug: "girne-casino-taksi", kw: "Girne Casino Taksi", name: "Girne Casinoları", area: "Girne", citySlug: "girne-taksi", hero: IMG.vito2, subs: ["girne casino taksi", "girne kumarhane taksi", "girne casino gece taksi", "girne casino vip transfer", "girne casino otel taksi", "kıbrıs casino taksi"] }),
  spot({ slug: "girne-gece-kulubu-taksi", kw: "Girne Gece Kulübü Taksi", name: "Girne Gece Hayatı", area: "Girne", citySlug: "girne-taksi", hero: IMG.heroHarbour, subs: ["girne gece kulübü taksi", "girne bar taksi", "girne gece taksi", "girne eğlence taksi", "girne gece dönüş taksi", "girne night club taxi"] }),
  spot({ slug: "lefkosa-gece-kulubu-taksi", kw: "Lefkoşa Gece Kulübü Taksi", name: "Lefkoşa Gece Hayatı", area: "Lefkoşa (Dereboyu)", citySlug: "lefkosa-taksi", hero: IMG.cityscape, subs: ["lefkoşa gece kulübü taksi", "dereboyu taksi", "lefkoşa bar taksi", "lefkoşa gece taksi", "lefkoşa eğlence taksi", "lefkoşa gece dönüş taksi"] }),
  spot({ slug: "lefkosa-alaykoy-taksi", kw: "Lefkoşa Alayköy Taksi", name: "Alayköy", area: "Lefkoşa", citySlug: "lefkosa-taksi", hero: IMG.cityscape, subs: ["alayköy taksi", "alayköy ercan taksi", "alayköy transfer", "alayköy sanayi taksi", "alayköy otel taksi", "alayköy 7/24 taksi"] }),
];

// ---------- CROSS-BORDER (South Cyprus -> KKTC) ----------
function crossHub({ slug, kw, name, airport, hero, subs, intro3, faqs }) {
  return {
    slug, type: "service", kw, name, breadcrumb: kw, isAirport: true,
    metaTitle: short(kw),
    metaDescription: `${kw}: ${airport} Havalimanı'ndan Kuzey Kıbrıs'a sınır geçişi dahil tek araçla özel transfer. Uçuş takipli karşılama. WhatsApp'tan bilgi alın!`,
    hero: hero || IMG.airport, heroAlt: `${kw} hizmeti`,
    lead: `${airport} Havalimanı'ndan Kuzey Kıbrıs'a sınır geçişi dahil, tek araçla aktarmasız özel transfer.`,
    subKeywords: subs,
    intro: intro3,
    sections: [
      { h2: "Sınır Geçiş Süreci Nasıl İşliyor?", body: [
        "Güney Kıbrıs (Rum kesimi) havalimanına indikten sonra şoförümüz sizi isim tabelasıyla karşılar. Metehan (Ledra) veya Beyarmudu gibi sınır kapılarından geçiş yapılır. Çoğu durumda tek araçla, araç değiştirmeden yolculuğunuz sürer; yoğunluğa göre bazı kapılarda kısa bir bekleme olabilir.",
        "Pasaportunuz ve geçerli seyahat belgelerinizle sınır geçişi hızlı tamamlanır. Bagajlarınız araçta kalır; çocuk koltuğu ve ek bagaj talepleriniz önceden ayarlanır.",
      ]},
    ],
    journey: { distance: "Rotaya göre değişir", duration: "1,5 - 3 saat", pickup: "Havalimanı çıkışı + sınır geçişi dahil" },
    points: [`${airport} Havalimanı`, "Metehan Sınır Kapısı", "Girne", "Lefkoşa", "Gazimağusa", "İskele"],
    faqs,
    related: { cities: ["girne-taksi", "lefkosa-taksi", "iskele-taksi"], routes: ["larnaka-girne-transfer", "larnaka-lefkosa-transfer", "paf-girne-transfer"], services: ["kibris-transfer"], blog: ["guney-kibris-kktc-nasil-gecilir", "larnaka-girneye-nasil-gidilir"] },
  };
}

function crossRoute({ slug, fromLabel, airport, to, citySlug, dist, dur, hero }) {
  const kw = `${fromLabel} ${to} Transfer`;
  return {
    slug, type: "route", kw, name: to, breadcrumb: `${fromLabel} → ${to} Transfer`, isAirport: true, from: fromLabel,
    metaTitle: short(kw),
    metaDescription: `${kw}: ${airport}'ndan ${to}'e sınır geçişi dahil ${dur} tek araçla özel Mercedes transfer. Uçuş takipli karşılama. WhatsApp'tan bilgi alın!`,
    hero: hero || IMG.airport, heroAlt: `${fromLabel} ${to} sınır ötesi transfer`,
    lead: `${airport} Havalimanı'ndan ${to}'e sınır geçişi dahil, tek araçla aktarmasız ${dur} özel transfer.`,
    subKeywords: [`${fromLabel.toLowerCase()} ${to.toLowerCase()} taksi`, `${fromLabel.toLowerCase()} ${to.toLowerCase()} transfer`, `${airport.toLowerCase()} ${to.toLowerCase()} ulaşım`, `${fromLabel.toLowerCase()} kktc transfer`, `${to.toLowerCase()} havalimanı transfer`, `sınır ötesi ${to.toLowerCase()} taksi`],
    intro: [
      `${airport} Havalimanı'na inip ${to}'e geçecek misafirlerimize sınır geçişi dahil, tek araçla aktarmasız transfer sunuyoruz. Şoförünüz sizi terminalde isim tabelasıyla karşılar.`,
      `Yaklaşık ${dist} olan bu güzergâhı, sınır kapısındaki işlemler dahil ortalama ${dur} içinde tamamlarız. Metehan veya en uygun sınır kapısı üzerinden geçiş yapılır.`,
      `Bagajlarınız araçta kalır, araç değiştirmezsiniz. Pasaport ve geçerli belgelerinizle geçiş hızlı ilerler; çocuk koltuğu talepleriniz önceden ayarlanır.`,
    ],
    sections: [
      { h2: "Sınır Geçişi ve Yolculuk", body: [
        `${fromLabel} - ${to} transferinde en kritik konu sınır geçişidir. Deneyimli şoförlerimiz en uygun kapıyı ve saati seçerek bekleme süresini en aza indirir.`,
        `Yolculuk boyunca tek araçla seyahat eder, ${to}'deki otel veya adresinize kapıdan ulaşırsınız.`,
      ]},
    ],
    journey: { distance: `≈ ${dist}`, duration: `≈ ${dur}`, pickup: "Havalimanı çıkışı, isim tabelalı karşılama" },
    points: [`${airport} Havalimanı`, "Metehan Sınır Kapısı", to, "KKTC"],
    faqs: [
      { q: `${fromLabel}'dan ${to}'e araç değişiyor mu?`, a: `Hayır, çoğu durumda tek araçla, araç değiştirmeden seyahat edersiniz. Sınır geçişi araçta beklenerek tamamlanır.` },
      { q: `Yolculuk ne kadar sürer?`, a: `Sınır işlemleri dahil yaklaşık ${dur} sürer (${dist}).` },
      { q: `Sınır geçişi için ne gerekli?`, a: `Geçerli pasaport ve seyahat belgeleriniz yeterlidir. Bagajlarınız araçta kalır.` },
      { q: `Gece transfer mümkün mü?`, a: `Evet, 7/24 hizmet veriyoruz; sınır kapısı çalışma saatlerine göre planlama yaparız.` },
    ],
    related: { cities: [citySlug].filter(Boolean), routes: [], services: ["larnaka-kktc-transfer", "kibris-transfer"], blog: ["guney-kibris-kktc-nasil-gecilir"] },
  };
}

const CROSS = [
  crossHub({
    slug: "larnaka-kktc-transfer", kw: "Larnaka KKTC Transfer", name: "Larnaka", airport: "Larnaka", hero: IMG.airport,
    subs: ["larnaka kıbrıs transfer", "larnaka girne transfer", "larnaka havalimanı kktc", "larnaka kuzey kıbrıs ulaşım", "larnaka lefkoşa transfer", "larnaka sınır transfer"],
    intro3: [
      "Larnaka Havalimanı, Kuzey Kıbrıs'a gelen birçok turistin tercih ettiği giriş noktalarından biridir. Larnaka KKTC transfer hizmetimizle havalimanından Girne, Lefkoşa, Gazimağusa ve İskele'ye sınır geçişi dahil, tek araçla aktarmasız ulaşım sunuyoruz.",
      "Şoförünüz sizi terminalde isim tabelasıyla karşılar ve en uygun sınır kapısından geçişinizi sağlar. Yolculuk boyunca araç değiştirmezsiniz; bagajlarınız sizinle kalır.",
      "Uçuş takibi, 7/24 hizmet ve konforlu Mercedes araçlarımızla Güney'den Kuzey'e geçişinizi sorunsuz hale getiriyoruz.",
    ],
    faqs: [
      { q: "Larnaka'dan Kuzey Kıbrıs'a nasıl geçilir?", a: "En pratik yol, sınır geçişi dahil özel transferdir. Şoförünüz sizi karşılar, Metehan gibi bir kapıdan geçiş yaparak sizi KKTC'deki adresinize ulaştırır." },
      { q: "Tek araçla mı geçiliyor?", a: "Evet, çoğu durumda araç değiştirmeden tek araçla seyahat edersiniz." },
      { q: "Sınır geçişi ne kadar sürer?", a: "Yoğunluğa göre değişir; genellikle kısa sürer. Şoförümüz en uygun kapıyı seçer." },
      { q: "Larnaka'dan Girne ne kadar sürer?", a: "Sınır işlemleri dahil yaklaşık 1,5 - 2 saat sürer." },
    ],
  }),
  crossHub({
    slug: "paf-kktc-transfer", kw: "Paf Havalimanı KKTC Transfer", name: "Paf (Paphos)", airport: "Paf", hero: IMG.airport2,
    subs: ["paf kıbrıs transfer", "paphos kktc transfer", "paf girne transfer", "paf kuzey kıbrıs ulaşım", "paf lefkoşa transfer", "paphos north cyprus transfer"],
    intro3: [
      "Paf (Paphos) Havalimanı, Güney Kıbrıs'ın batısında yer alır ve Kuzey Kıbrıs'a gelen turistler için bir diğer giriş noktasıdır. Paf KKTC transfer hizmetimizle havalimanından tüm KKTC şehirlerine sınır geçişi dahil özel transfer sunuyoruz.",
      "Paf, KKTC'ye Larnaka'ya göre daha uzaktır; bu nedenle konforlu ve dinlendirici bir yolculuk için geniş Mercedes araçlarımızı öneririz. Şoförünüz sizi terminalde karşılar.",
      "Uçuş takibi ve 7/24 hizmet ile uzun yolculuğunuzu sorunsuz ve güvenli hale getiriyoruz.",
    ],
    faqs: [
      { q: "Paf'tan Kuzey Kıbrıs'a nasıl gidilir?", a: "Sınır geçişi dahil özel transfer en konforlu yöntemdir. Şoförünüz sizi karşılar ve uygun sınır kapısından KKTC'ye ulaştırır." },
      { q: "Paf'tan Girne ne kadar sürer?", a: "Mesafe uzundur; sınır işlemleri dahil yaklaşık 2,5 - 3 saat sürebilir." },
      { q: "Araç değişiyor mu?", a: "Hayır, tek araçla aktarmasız seyahat edersiniz." },
    ],
  }),
  crossHub({
    slug: "guney-kibris-kktc-transfer", kw: "Güney Kıbrıs KKTC Transfer", name: "Güney Kıbrıs", airport: "Larnaka/Paf", hero: IMG.road,
    subs: ["güney kıbrıs kuzey kıbrıs transfer", "rum kesimi kktc geçiş", "sınır ötesi transfer kıbrıs", "güney kıbrıs kktc taksi", "kıbrıs sınır transfer", "cross border taxi cyprus"],
    intro3: [
      "Güney Kıbrıs → Kuzey Kıbrıs transfer hizmetimiz, Larnaka ve Paf havalimanlarından ya da Güney'deki herhangi bir noktadan KKTC'ye sınır geçişi dahil ulaşımı kapsar. Amacımız, bu geçişi sizin için en konforlu ve sorunsuz hale getirmektir.",
      "Hangi sınır kapısının kullanılacağı, bekleme süreleri ve gerekli belgeler konusunda deneyimli ekibimiz size rehberlik eder. Tek araçla, aktarmasız seyahat edersiniz.",
      "Uçuş takibi, 7/24 hizmet ve konforlu Mercedes araçlarımızla Güney'den Kuzey'e geçişinizde yanınızdayız.",
    ],
    faqs: [
      { q: "Güney Kıbrıs'tan KKTC'ye geçiş yasal mı?", a: "Evet, açık sınır kapılarından geçerli belgelerle geçiş yapılır. Şoförümüz süreç boyunca size rehberlik eder." },
      { q: "Hangi sınır kapısı kullanılır?", a: "Rotaya ve yoğunluğa göre Metehan (Ledra) veya Beyarmudu gibi kapılar kullanılır." },
      { q: "Kiralık araçla mı yoksa transferle mi geçmeliyim?", a: "Kiralık araçlarda sınır geçiş ve sigorta kısıtları olabilir; özel transfer çoğu durumda daha pratik ve sorunsuzdur." },
    ],
  }),
  crossRoute({ slug: "larnaka-girne-transfer", fromLabel: "Larnaka", airport: "Larnaka", to: "Girne", citySlug: "girne-taksi", dist: "110 km", dur: "1,5-2 saat", hero: IMG.heroHarbour }),
  crossRoute({ slug: "larnaka-lefkosa-transfer", fromLabel: "Larnaka", airport: "Larnaka", to: "Lefkoşa", citySlug: "lefkosa-taksi", dist: "70 km", dur: "1-1,5 saat", hero: IMG.cityscape }),
  crossRoute({ slug: "larnaka-iskele-transfer", fromLabel: "Larnaka", airport: "Larnaka", to: "İskele", citySlug: "iskele-taksi", dist: "100 km", dur: "1,5-2 saat", hero: IMG.beach }),
  crossRoute({ slug: "larnaka-gazimagusa-transfer", fromLabel: "Larnaka", airport: "Larnaka", to: "Gazimağusa", citySlug: "gazimagusa-taksi", dist: "80 km", dur: "1-1,5 saat", hero: IMG.walls }),
  crossRoute({ slug: "larnaka-bafra-transfer", fromLabel: "Larnaka", airport: "Larnaka", to: "Bafra", citySlug: "iskele-taksi", dist: "120 km", dur: "2 saat", hero: IMG.beach2 }),
  crossRoute({ slug: "paf-girne-transfer", fromLabel: "Paf", airport: "Paf", to: "Girne", citySlug: "girne-taksi", dist: "220 km", dur: "2,5-3 saat", hero: IMG.heroHarbour }),
  crossRoute({ slug: "paf-lefkosa-transfer", fromLabel: "Paf", airport: "Paf", to: "Lefkoşa", citySlug: "lefkosa-taksi", dist: "180 km", dur: "2-2,5 saat", hero: IMG.cityscape }),
];

export const CLUSTER_PAGES = [...HOTELS, ...CASINOS, ...UNIS, ...SPOTS, ...CROSS];
