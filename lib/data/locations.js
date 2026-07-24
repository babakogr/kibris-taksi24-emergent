import { IMG } from "@/lib/site";

// ---- SERVICE / HUB PAGES ----
export const SERVICES = [
  {
    slug: "kibris-taksi",
    type: "service",
    name: "Kıbrıs Taksi",
    breadcrumb: "Kıbrıs Taksi",
    h1: "Kıbrıs Taksi — KKTC Geneli 7/24 Premium Taksi Hizmeti",
    title: "Kıbrıs Taksi | 7/24 Güvenilir KKTC Taksi & Transfer | Kıbrıs Taksi 24",
    description:
      "Kıbrıs taksi hizmeti: Ercan Havalimanı, Girne, Lefkoşa, Gazimağusa ve tüm KKTC için 7/24 sabit fiyatlı, uçuş takipli premium taksi ve transfer. Anında WhatsApp rezervasyon.",
    keywords: ["kıbrıs taksi", "kktc taksi", "kıbrıs taksi durağı", "kıbrıs havalimanı taksi", "kıbrıs taksi fiyatları"],
    hero: IMG.road,
    intro: [
      "Kıbrıs Taksi 24, Kuzey Kıbrıs'ın tamamında hizmet veren premium taksi ve özel transfer platformudur. Ercan Havalimanı karşılamalarından şehir içi ulaşıma, otel transferlerinden gün boyu şoförlü araç kiralamaya kadar tüm ihtiyaçlarınızı tek noktadan, sabit fiyat garantisiyle çözüyoruz.",
      "Adaya ilk kez gelen turistlerden KKTC'de yaşayan yerel misafirlere, üniversite öğrencilerinden kurumsal müşterilere kadar herkes için konforlu, güvenli ve zamanında ulaşım sunuyoruz. Modern araç filomuz, İngilizce ve Türkçe konuşan profesyonel şoförlerimizle yolculuğunuz kapıdan kapıya kusursuz geçer.",
    ],
    landmarks: ["Ercan Havalimanı", "Girne Limanı", "Lefkoşa Surlariçi", "Gazimağusa Surları", "Karpaz Yarımadası", "Salamis Antik Kenti"],
    popularRoutes: [
      { label: "Ercan → Girne Taksi", slug: "ercan-girne-taksi" },
      { label: "Ercan → Lefkoşa Taksi", slug: "ercan-lefkosa-taksi" },
      { label: "Ercan → İskele Transfer", slug: "ercan-iskele-transfer" },
      { label: "Girne → Ercan Transfer", slug: "girne-ercan-transfer" },
    ],
    faqs: [
      { q: "Kıbrıs'ta taksi nasıl çağırırım?", a: "En hızlı yöntem WhatsApp'tır. Nereden-nereye, tarih ve saati yazın; ekibimiz dakikalar içinde aracınızı ve sabit fiyatınızı onaylar. Havalimanı karşılamalarında şoförünüz isim tabelasıyla sizi bekler." },
      { q: "Kıbrıs taksi fiyatları ne kadar?", a: "Fiyatlar mesafe ve araç tipine göre değişir; sürpriz ücret yoktur. Net ve sabit fiyat için WhatsApp'tan bize ulaşın, size özel teklifi anında iletelim." },
      { q: "Havalimanından taksi bulmak zor mu?", a: "Önceden rezervasyon yaptığınızda şoförünüz siz inmeden terminalde hazır olur. Uçuşunuzu ücretsiz takip ederiz, rötarda ek ücret almadan bekleriz." },
      { q: "Gece geç saatte transfer yapıyor musunuz?", a: "Evet, 7/24 hizmet veriyoruz. Gece yarısı iniş yapan uçuşlar dahil her saatte güvenli transfer sağlıyoruz." },
    ],
    nearby: ["kibris-transfer", "ercan-havalimani-transfer", "girne-taksi", "lefkosa-taksi"],
  },
  {
    slug: "kibris-transfer",
    type: "service",
    name: "Kıbrıs Transfer",
    breadcrumb: "Kıbrıs Transfer",
    h1: "Kıbrıs Transfer — Havalimanı & Otel Özel Transfer Hizmeti",
    title: "Kıbrıs Transfer | Ercan Havalimanı & Otel Özel Transfer | Kıbrıs Taksi 24",
    description:
      "Kıbrıs transfer hizmeti: Ercan ve Larnaka havalimanından KKTC'deki tüm otel ve şehirlere özel, konforlu, sabit fiyatlı transfer. Uçuş takipli karşılama, WhatsApp ile 60 saniyede rezervasyon.",
    keywords: ["kıbrıs transfer", "kktc transfer", "kıbrıs havalimanı transfer", "kıbrıs otel transfer", "larnaka kıbrıs transfer"],
    hero: IMG.coast,
    intro: [
      "Özel transfer, tatilinizin ilk ve son izlenimidir. Kıbrıs Taksi 24 olarak Ercan ve Larnaka havalimanlarından KKTC'nin dört bir yanındaki otellere, tatil köylerine ve özel adreslere doğrudan, aktarmasız transfer sunuyoruz. Aracı sizden başka kimseyle paylaşmazsınız.",
      "Klimalı ve geniş bagajlı modern araçlarımızla ailenizle, arkadaşlarınızla veya iş ekibinizle konforlu seyahat edersiniz. Bebek koltuğu, ek durak ve çoklu araç taleplerinizi önceden planlar, kapıdan kapıya kusursuz bir deneyim yaşatırız.",
    ],
    landmarks: ["Ercan Havalimanı", "Larnaka Havalimanı", "Merit Otelleri", "Acapulco Resort", "Kaya Artemis", "Bafra Oteller Bölgesi"],
    popularRoutes: [
      { label: "Ercan → Bafra Transfer", slug: "ercan-bafra-transfer" },
      { label: "Ercan → Acapulco Transfer", slug: "ercan-acapulco-transfer" },
      { label: "Ercan → Merit Royal Transfer", slug: "ercan-merit-royal-transfer" },
      { label: "Ercan → İskele Transfer", slug: "ercan-iskele-transfer" },
    ],
    faqs: [
      { q: "Transfer ile taksi arasındaki fark nedir?", a: "Transferde aracınız size özeldir ve fiyat baştan sabittir; rota ve durak sizin planınıza göre ayarlanır. Havalimanı transferlerinde şoför sizi terminalde isim tabelasıyla karşılar." },
      { q: "Larnaka Havalimanı'ndan da transfer var mı?", a: "Evet. Güney Kıbrıs'taki Larnaka Havalimanı'ndan KKTC'ye sınır geçişi dahil sorunsuz transfer sağlıyoruz." },
      { q: "Kaç kişilik araçlarınız var?", a: "1-3 kişi için sedan, 4-6 kişi için VIP minivan (Vito/Viano) ve daha kalabalık gruplar için minibüs seçeneklerimiz mevcuttur." },
      { q: "Rezervasyonu ne kadar önceden yapmalıyım?", a: "İdeal olarak 24 saat önce; ancak son dakika talepleri de müsaitlik durumuna göre karşılıyoruz. WhatsApp'tan hızlıca teyit alırsınız." },
    ],
    nearby: ["kibris-taksi", "ercan-havalimani-transfer", "vip-transfer", "girne-taksi"],
  },
  {
    slug: "ercan-havalimani-transfer",
    type: "service",
    name: "Ercan Havalimanı Transfer",
    breadcrumb: "Ercan Havalimanı Transfer",
    h1: "Ercan Havalimanı Transfer — Uçuş Takipli Karşılama & Taksi",
    title: "Ercan Havalimanı Transfer | Uçuş Takipli Taksi & Karşılama | Kıbrıs Taksi 24",
    description:
      "Ercan Havalimanı transfer & taksi: Girne, Lefkoşa, Gazimağusa, İskele ve tüm KKTC'ye uçuş takipli, sabit fiyatlı özel karşılama. Şoförünüz isim tabelasıyla bekler. WhatsApp rezervasyon.",
    keywords: ["ercan havalimanı transfer", "ercan havalimanı taksi", "ercan transfer", "ercan girne transfer", "ercan airport transfer"],
    hero: IMG.airport,
    intro: [
      "Ercan Havalimanı'na indiğiniz an konfor başlasın. Şoförünüz, uçuşunuzu ücretsiz takip ederek siz bagajınızı almadan terminalde isim tabelanızla hazır bekler. Kuyrukta beklemek, pazarlık yapmak veya fahiş ücretlerle uğraşmak yok.",
      "Ercan'dan Girne'ye 40 dakika, Lefkoşa'ya 20 dakika, İskele ve Gazimağusa'ya ise doğrudan konforlu ulaşım sağlıyoruz. Gece geç saatte iniş yapsanız bile 7/24 karşılama garantisi veriyoruz.",
    ],
    landmarks: ["Ercan Havalimanı Dış Hatlar", "Girne Merkez", "Lefkoşa", "Gazimağusa", "İskele Long Beach", "Bafra"],
    popularRoutes: [
      { label: "Ercan → Girne Taksi", slug: "ercan-girne-taksi" },
      { label: "Ercan → Lefkoşa Taksi", slug: "ercan-lefkosa-taksi" },
      { label: "Ercan → İskele Transfer", slug: "ercan-iskele-transfer" },
      { label: "Ercan → Merit Royal Transfer", slug: "ercan-merit-royal-transfer" },
    ],
    faqs: [
      { q: "Uçağım rötar yaparsa ek ücret öder miyim?", a: "Hayır. Uçuşunuzu canlı takip ederiz ve gerçek iniş saatinize göre karşılarız. Rötar kaynaklı bekleme için ek ücret almayız." },
      { q: "Şoför beni nerede karşılayacak?", a: "Şoförünüz, dış hatlar çıkışında adınızın yazılı olduğu tabelayla sizi bekler. İniş sonrası WhatsApp'tan da anlık iletişim kurabilirsiniz." },
      { q: "Ercan'dan Girne'ye ne kadar sürer?", a: "Trafik durumuna göre yaklaşık 35-45 dakikadır. Konforlu ve doğrudan bir yolculuk sunarız." },
      { q: "Bebek/çocuk koltuğu sağlıyor musunuz?", a: "Evet, rezervasyon sırasında belirtmeniz halinde uygun çocuk koltuğunu ücretsiz veya cüzi bir farkla temin ederiz." },
    ],
    nearby: ["ercan-girne-taksi", "ercan-lefkosa-taksi", "kibris-transfer", "vip-transfer"],
  },
  {
    slug: "vip-transfer",
    type: "service",
    name: "VIP Transfer",
    breadcrumb: "VIP Transfer",
    h1: "VIP Transfer — Lüks Araç & Profesyonel Şoför ile Ayrıcalıklı Yolculuk",
    title: "Kıbrıs VIP Transfer | Lüks Mercedes Vito & Şoförlü Transfer | Kıbrıs Taksi 24",
    description:
      "Kıbrıs VIP transfer: Mercedes Vito/Viano ve lüks sedan araçlarla üst düzey konfor, karşılama hizmeti, su ikramı ve profesyonel şoför. Kurumsal, düğün ve özel etkinlik transferleri.",
    keywords: ["kıbrıs vip transfer", "vip transfer kktc", "lüks transfer kıbrıs", "mercedes vito transfer", "şoförlü araç kıbrıs"],
    hero: IMG.luxuryCar,
    intro: [
      "Bazı yolculuklar ayrıcalık ister. VIP Transfer hizmetimizde, üst segment Mercedes Vito/Viano ve lüks sedan araçlarımızla, takım elbiseli profesyonel şoförler eşliğinde seyahat edersiniz. Su ikramı, ücretsiz Wi-Fi ve karşılama hizmeti standarttır.",
      "Kurumsal misafir ağırlama, düğün ve özel etkinlik transferleri, iş seyahatleri ve tam günlük şoförlü araç ihtiyaçlarınız için idealdir. Gizlilik, dakiklik ve zarafeti bir arada sunuyoruz.",
    ],
    landmarks: ["Kurumsal Etkinlikler", "5 Yıldızlı Oteller", "Düğün & Organizasyon", "Golf & Casino Transferleri", "İş Seyahatleri"],
    popularRoutes: [
      { label: "Ercan → Merit Royal VIP", slug: "ercan-merit-royal-transfer" },
      { label: "Ercan → Acapulco VIP", slug: "ercan-acapulco-transfer" },
      { label: "Ercan → Girne VIP", slug: "ercan-girne-taksi" },
      { label: "Kıbrıs Transfer", slug: "kibris-transfer" },
    ],
    faqs: [
      { q: "VIP transferde hangi araçlar var?", a: "Mercedes-Benz Vito/Viano VIP paket araçlar ve lüks E-Serisi sedanlar sunuyoruz. Talebe göre araç markası/modeli önceden netleştirilir." },
      { q: "Kurumsal fatura kesiyor musunuz?", a: "Evet, kurumsal müşterilerimize KDV'li fatura ve aylık cari hesap seçenekleri sunuyoruz. Detaylar için Kurumsal sayfamıza göz atın." },
      { q: "Tam günlük şoför kiralayabilir miyim?", a: "Evet, saatlik ve günlük şoförlü araç paketlerimiz mevcuttur. Programınıza göre esnek çözüm üretiriz." },
      { q: "Düğün ve etkinlik için araç süsleme yapıyor musunuz?", a: "Talebiniz üzerine gelin arabası düzenlemesi ve konuk transfer organizasyonu sağlıyoruz." },
    ],
    nearby: ["ercan-havalimani-transfer", "kibris-transfer", "kurumsal", "girne-taksi"],
  },
];

// ---- CITY PAGES ----
export const CITIES = [
  {
    slug: "girne-taksi", type: "city", name: "Girne", breadcrumb: "Girne Taksi",
    h1: "Girne Taksi — Kyrenia'da 7/24 Premium Taksi & Transfer",
    title: "Girne Taksi | 7/24 Kyrenia Taksi & Ercan Transfer | Kıbrıs Taksi 24",
    description: "Girne taksi hizmeti: Girne merkez, liman, oteller ve Ercan Havalimanı arası 7/24 sabit fiyatlı premium taksi & transfer. Anında WhatsApp rezervasyon.",
    keywords: ["girne taksi", "kyrenia taxi", "girne transfer", "girne ercan taksi", "girne taksi durağı"],
    hero: IMG.heroHarbour,
    intro: [
      "Girne (Kyrenia), tarihi limanı, kalesi ve sahil şeridiyle KKTC'nin en gözde turizm merkezidir. Kıbrıs Taksi 24 olarak Girne merkez, antik liman, oteller bölgesi ve tüm mahalleler için 7/24 konforlu taksi ve transfer sunuyoruz.",
      "İster havalimanından otelinize, ister restoran ve gece hayatı için şehir içinde, ister Bellapais ve Beşparmak Dağları turlarında; Girne'nin her noktasına sabit fiyat ve güler yüzlü şoförlerle ulaşırsınız.",
    ],
    landmarks: ["Girne Antik Limanı", "Girne Kalesi", "Bellapais Manastırı", "Beşparmak Dağları", "Karmi Köyü", "Oteller Bölgesi (Alsancak-Çatalköy)"],
    popularRoutes: [
      { label: "Ercan → Girne Taksi", slug: "ercan-girne-taksi" },
      { label: "Girne → Ercan Transfer", slug: "girne-ercan-transfer" },
      { label: "Girne → Merit Royal", slug: "ercan-merit-royal-transfer" },
    ],
    faqs: [
      { q: "Girne'den Ercan Havalimanı'na taksi ne kadar sürer?", a: "Yaklaşık 40-45 dakikadır. Uçuşunuzdan yeterli süre önce kalkış planlar, sizi zamanında havalimanına ulaştırırız." },
      { q: "Girne içinde kısa mesafe taksi buluyor musunuz?", a: "Evet, liman, oteller ve merkez arası kısa şehir içi transferler dahil her mesafede hizmet veriyoruz." },
      { q: "Girne otel önünden alım yapıyor musunuz?", a: "Kesinlikle. Otel resepsiyonu veya belirttiğiniz adresten kapıdan alım yaparız." },
      { q: "Girne gece hayatı için dönüş transferi olur mu?", a: "Evet, gece geç saatlerde de güvenli dönüş transferi sağlıyoruz. Dönüş saatinizi önceden planlayabiliriz." },
    ],
    nearby: ["alsancak-taksi", "catalkoy-taksi", "bellapais-taksi", "lapta-taksi"],
  },
  {
    slug: "lefkosa-taksi", type: "city", name: "Lefkoşa", breadcrumb: "Lefkoşa Taksi",
    h1: "Lefkoşa Taksi — Başkentte 7/24 Güvenilir Taksi & Transfer",
    title: "Lefkoşa Taksi | 7/24 Nicosia Taksi & Ercan Transfer | Kıbrıs Taksi 24",
    description: "Lefkoşa taksi hizmeti: Başkent Lefkoşa merkez, üniversiteler, hastaneler ve Ercan Havalimanı arası 7/24 sabit fiyatlı taksi & transfer. WhatsApp ile hızlı rezervasyon.",
    keywords: ["lefkoşa taksi", "nicosia taxi", "lefkoşa transfer", "lefkoşa ercan taksi", "lefkoşa taksi durağı"],
    hero: IMG.cityscape,
    intro: [
      "Dünyanın son bölünmüş başkenti Lefkoşa (Nicosia), KKTC'nin idari ve akademik kalbidir. Kıbrıs Taksi 24, Lefkoşa merkez, Surlariçi, üniversite kampüsleri, devlet daireleri ve hastaneler için 7/24 hızlı taksi ve transfer sağlar.",
      "Ercan Havalimanı'na yalnızca 20 dakika mesafedeki Lefkoşa'da; iş toplantıları, üniversite ulaşımı ve resmi randevularınız için dakik ve profesyonel çözüm sunuyoruz.",
    ],
    landmarks: ["Surlariçi (Walled City)", "Büyük Han", "Selimiye Camii", "Yakın Doğu Üniversitesi", "Girne Kapısı", "Dereboyu"],
    popularRoutes: [
      { label: "Ercan → Lefkoşa Taksi", slug: "ercan-lefkosa-taksi" },
      { label: "Lefkoşa → Ercan Transfer", slug: "girne-ercan-transfer" },
      { label: "Kıbrıs Transfer", slug: "kibris-transfer" },
    ],
    faqs: [
      { q: "Ercan'dan Lefkoşa'ya taksi ne kadar sürer?", a: "Lefkoşa, Ercan Havalimanı'na en yakın şehirdir; yaklaşık 15-20 dakikada ulaşırsınız." },
      { q: "Üniversite öğrencilerine uygun fiyat var mı?", a: "Öğrenci ve düzenli kullanıcılarımıza özel avantajlı transfer paketleri sunuyoruz. WhatsApp'tan bilgi alın." },
      { q: "Hastane ve resmi daire transferi yapıyor musunuz?", a: "Evet, randevu saatinize göre planlanmış konforlu ulaşım sağlıyoruz." },
      { q: "Lefkoşa'dan güney geçişi için transfer olur mu?", a: "Evet, sınır kapılarına ve Güney Kıbrıs bağlantılarına transfer düzenliyoruz." },
    ],
    nearby: ["girne-taksi", "gazimagusa-taksi", "iskele-taksi", "ercan-havalimani-transfer"],
  },
  {
    slug: "gazimagusa-taksi", type: "city", name: "Gazimağusa", breadcrumb: "Gazimağusa Taksi",
    h1: "Gazimağusa Taksi — Famagusta'da 7/24 Taksi & Transfer",
    title: "Gazimağusa Taksi | 7/24 Famagusta Taksi & Ercan Transfer | Kıbrıs Taksi 24",
    description: "Gazimağusa taksi hizmeti: Mağusa merkez, DAÜ, Salamis, oteller ve Ercan Havalimanı arası 7/24 sabit fiyatlı taksi & transfer. Anında WhatsApp rezervasyon.",
    keywords: ["gazimağusa taksi", "famagusta taxi", "mağusa taksi", "gazimağusa transfer", "daü taksi"],
    hero: IMG.walls,
    intro: [
      "Surları, antik kentleri ve altın kumsallarıyla Gazimağusa (Famagusta), tarih ve denizi buluşturan büyülü bir şehirdir. Kıbrıs Taksi 24, Mağusa merkez, Surlariçi, Doğu Akdeniz Üniversitesi ve sahil otelleri için 7/24 taksi ve transfer sunar.",
      "Salamis Antik Kenti, Kaya Artemis ve Palm Beach bölgesine konforlu ulaşım; öğrenci transferlerinden turistik gezilere kadar her ihtiyaca sabit fiyatla cevap veriyoruz.",
    ],
    landmarks: ["Gazimağusa Surları", "Lala Mustafa Paşa Camii", "Salamis Antik Kenti", "Doğu Akdeniz Üniversitesi (DAÜ)", "Palm Beach", "Kaya Artemis"],
    popularRoutes: [
      { label: "Ercan → Gazimağusa Transfer", slug: "ercan-iskele-transfer" },
      { label: "Ercan → Bafra Transfer", slug: "ercan-bafra-transfer" },
      { label: "Kıbrıs Transfer", slug: "kibris-transfer" },
    ],
    faqs: [
      { q: "Ercan'dan Gazimağusa'ya ne kadar sürer?", a: "Yaklaşık 40-45 dakikalık konforlu bir yolculuktur." },
      { q: "DAÜ öğrencilerine transfer yapıyor musunuz?", a: "Evet, Doğu Akdeniz Üniversitesi kampüsü ve yurtlar için düzenli öğrenci transferleri düzenliyoruz." },
      { q: "Salamis ve turistik gezi turu olur mu?", a: "Evet, günübirlik şoförlü araç ile Salamis, Karpaz ve çevre turlarını planlayabiliriz." },
      { q: "Sahil otellerine kapıdan transfer var mı?", a: "Kaya Artemis, Palm Beach ve diğer sahil otellerine doğrudan kapı transferi sağlıyoruz." },
    ],
    nearby: ["iskele-taksi", "lefkosa-taksi", "kibris-transfer", "ercan-havalimani-transfer"],
  },
  {
    slug: "iskele-taksi", type: "city", name: "İskele", breadcrumb: "İskele Taksi",
    h1: "İskele Taksi — Long Beach & Bafra 7/24 Taksi & Transfer",
    title: "İskele Taksi | Long Beach & Bafra Transfer, Ercan Taksi | Kıbrıs Taksi 24",
    description: "İskele taksi hizmeti: Long Beach, Bafra otelleri, Boğaz ve Ercan Havalimanı arası 7/24 sabit fiyatlı taksi & transfer. Rezidans ve otel misafirlerine özel çözümler.",
    keywords: ["iskele taksi", "long beach taksi", "iskele transfer", "bafra taksi", "iskele ercan transfer"],
    hero: IMG.beach,
    intro: [
      "Hızla gelişen İskele bölgesi, Long Beach'in eşsiz kumsalları ve modern rezidanslarıyla KKTC'nin yeni cazibe merkezidir. Kıbrıs Taksi 24, İskele merkez, Long Beach siteleri, Boğaz ve Bafra otelleri için 7/24 taksi ve transfer sağlar.",
      "Rezidans sahiplerinden tatilcilere, yatırımcılardan otel misafirlerine kadar herkes için Ercan Havalimanı bağlantılı konforlu ulaşım sunuyoruz. Uzun mesafeye rağmen sabit ve şeffaf fiyat garantisi veriyoruz.",
    ],
    landmarks: ["Long Beach", "İskele Merkez", "Boğaz", "Bafra Oteller Bölgesi", "Kaleburnu", "Karpaz kapısı"],
    popularRoutes: [
      { label: "Ercan → İskele Transfer", slug: "ercan-iskele-transfer" },
      { label: "Ercan → Bafra Transfer", slug: "ercan-bafra-transfer" },
      { label: "Kıbrıs Transfer", slug: "kibris-transfer" },
    ],
    faqs: [
      { q: "Ercan'dan İskele Long Beach'e ne kadar sürer?", a: "Yaklaşık 45-55 dakikalık bir yolculuktur. Site içi kapı transferi de sağlıyoruz." },
      { q: "Rezidans/site içine giriş yapıyor musunuz?", a: "Evet, Long Beach ve diğer sitelerde blok/daire önüne kadar transfer yaparız." },
      { q: "Bafra otellerine transfer var mı?", a: "Kaya Artemis, Noah's Ark ve diğer Bafra otellerine doğrudan transfer sağlıyoruz." },
      { q: "Uzun süreli konaklamada düzenli transfer olur mu?", a: "Evet, haftalık/aylık düzenli transfer paketleri oluşturabiliriz." },
    ],
    nearby: ["gazimagusa-taksi", "lefkosa-taksi", "ercan-havalimani-transfer", "kibris-transfer"],
  },
  {
    slug: "lapta-taksi", type: "city", name: "Lapta", breadcrumb: "Lapta Taksi",
    h1: "Lapta Taksi — Sahil Kasabasında 7/24 Taksi & Transfer",
    title: "Lapta Taksi | 7/24 Lapta Sahil Transfer & Ercan Taksi | Kıbrıs Taksi 24",
    description: "Lapta taksi hizmeti: Lapta sahil şeridi, oteller ve Ercan Havalimanı arası 7/24 sabit fiyatlı taksi & transfer. Doğa ve deniz tatilinizde konforlu ulaşım.",
    keywords: ["lapta taksi", "lapta transfer", "lapta ercan taksi", "girne lapta taksi", "lapta otel transfer"],
    hero: IMG.beach2,
    intro: [
      "Girne'nin batısındaki Lapta, yemyeşil dağ eteklerinin denizle buluştuğu huzurlu bir sahil kasabasıdır. Kıbrıs Taksi 24, Lapta sahil şeridi, tatil siteleri ve otelleri için 7/24 konforlu taksi ve transfer sunar.",
      "Girne merkeze kısa mesafedeki Lapta'da; havalimanı transferleri, şehir merkezine geziler ve sahil otelleri arası ulaşım için sabit fiyatlı, güvenli çözümler sağlıyoruz.",
    ],
    landmarks: ["Lapta Sahil Yürüyüş Yolu", "Lapta Merkez", "Girne Batı Otelleri", "Alsancak", "Karşıyaka", "Beşparmak Dağları"],
    popularRoutes: [
      { label: "Ercan → Lapta Transfer", slug: "ercan-merit-royal-transfer" },
      { label: "Girne → Ercan Transfer", slug: "girne-ercan-transfer" },
      { label: "Kıbrıs Transfer", slug: "kibris-transfer" },
    ],
    faqs: [
      { q: "Ercan'dan Lapta'ya ne kadar sürer?", a: "Yaklaşık 50 dakikalık konforlu bir yolculuktur." },
      { q: "Lapta'dan Girne merkeze taksi var mı?", a: "Evet, Girne merkez ve limana kısa mesafe transferleri sağlıyoruz." },
      { q: "Sahil otellerine kapı transferi yapıyor musunuz?", a: "Evet, Lapta ve Karşıyaka bölgesindeki tüm otellere kapıdan transfer yapıyoruz." },
      { q: "Gün boyu şoförlü araç kiralayabilir miyim?", a: "Evet, çevre gezileri için günlük şoförlü araç paketleri sunuyoruz." },
    ],
    nearby: ["alsancak-taksi", "girne-taksi", "catalkoy-taksi", "ercan-havalimani-transfer"],
  },
  {
    slug: "alsancak-taksi", type: "city", name: "Alsancak", breadcrumb: "Alsancak Taksi",
    h1: "Alsancak Taksi — Oteller Bölgesinde 7/24 Taksi & Transfer",
    title: "Alsancak Taksi | 7/24 Otel Transfer & Ercan Taksi | Kıbrıs Taksi 24",
    description: "Alsancak taksi hizmeti: Merit, Escape Beach, Alsancak sahil otelleri ve Ercan Havalimanı arası 7/24 sabit fiyatlı taksi & transfer. Otel misafirlerine özel karşılama.",
    keywords: ["alsancak taksi", "alsancak transfer", "merit alsancak taksi", "alsancak ercan taksi", "escape beach taksi"],
    hero: IMG.beach,
    intro: [
      "Alsancak, Girne'nin en canlı otel ve tatil bölgelerinden biridir. Merit otelleri, Escape Beach ve çok sayıda tatil sitesine ev sahipliği yapan bölgede, Kıbrıs Taksi 24 olarak 7/24 otel karşılama ve transfer hizmeti sunuyoruz.",
      "Havalimanından otelinize sorunsuz varış, Girne merkeze eğlence transferleri ve sahil boyunca konforlu ulaşım için sabit fiyat garantisiyle hizmetinizdeyiz.",
    ],
    landmarks: ["Merit Otelleri", "Escape Beach", "Alsancak Merkez", "Riverside", "Malpas Otel", "Girne Batı Sahili"],
    popularRoutes: [
      { label: "Ercan → Merit Royal Transfer", slug: "ercan-merit-royal-transfer" },
      { label: "Ercan → Girne Taksi", slug: "ercan-girne-taksi" },
      { label: "Kıbrıs Transfer", slug: "kibris-transfer" },
    ],
    faqs: [
      { q: "Ercan'dan Alsancak otellerine ne kadar sürer?", a: "Yaklaşık 45-50 dakikalık doğrudan bir transferdir." },
      { q: "Otel resepsiyonundan alım yapıyor musunuz?", a: "Evet, otel önünden veya lobiden karşılama ile alım yaparız." },
      { q: "Casino ve gece transferi olur mu?", a: "Evet, Merit ve diğer otel casinolarına gece dahil 7/24 transfer sağlıyoruz." },
      { q: "Grup transferi için araç var mı?", a: "Evet, VIP minivan ve minibüs seçenekleriyle grup transferleri düzenliyoruz." },
    ],
    nearby: ["lapta-taksi", "girne-taksi", "catalkoy-taksi", "vip-transfer"],
  },
  {
    slug: "catalkoy-taksi", type: "city", name: "Çatalköy", breadcrumb: "Çatalköy Taksi",
    h1: "Çatalköy Taksi — Acapulco & Çevresi 7/24 Taksi & Transfer",
    title: "Çatalköy Taksi | Acapulco Transfer & Ercan Taksi 7/24 | Kıbrıs Taksi 24",
    description: "Çatalköy taksi hizmeti: Acapulco Resort, Çatalköy villaları ve Ercan Havalimanı arası 7/24 sabit fiyatlı taksi & transfer. Otel ve villa misafirlerine özel çözümler.",
    keywords: ["çatalköy taksi", "acapulco taksi", "çatalköy transfer", "catalkoy taxi", "çatalköy ercan taksi"],
    hero: IMG.road2,
    intro: [
      "Girne'nin doğusundaki Çatalköy, lüks villaları ve Acapulco Resort ile öne çıkan sakin bir yerleşimdir. Kıbrıs Taksi 24, Çatalköy geneli villa, site ve oteller için 7/24 konforlu taksi ve transfer sunar.",
      "Havalimanı karşılamasından Girne merkeze, sahil otellerinden özel villalara kadar her adrese kapıdan kapıya, sabit fiyatlı ulaşım sağlıyoruz.",
    ],
    landmarks: ["Acapulco Resort", "Çatalköy Merkez", "Villa Bölgeleri", "Girne Doğu Sahili", "Bellapais yolu", "Beşparmak"],
    popularRoutes: [
      { label: "Ercan → Acapulco Transfer", slug: "ercan-acapulco-transfer" },
      { label: "Ercan → Girne Taksi", slug: "ercan-girne-taksi" },
      { label: "Kıbrıs Transfer", slug: "kibris-transfer" },
    ],
    faqs: [
      { q: "Ercan'dan Çatalköy Acapulco'ya ne kadar sürer?", a: "Yaklaşık 40-45 dakikalık doğrudan bir transferdir." },
      { q: "Villa adresine kapı transferi yapıyor musunuz?", a: "Evet, Çatalköy'deki tüm villa ve site adreslerine kapıdan alım/bırakma yaparız." },
      { q: "Acapulco Resort'a otel karşılaması var mı?", a: "Evet, Acapulco Resort lobisinden isim tabelasıyla karşılama sağlıyoruz." },
      { q: "Girne merkeze kısa transfer olur mu?", a: "Evet, Girne limanı ve merkeze kısa mesafe transferleri düzenliyoruz." },
    ],
    nearby: ["girne-taksi", "bellapais-taksi", "alsancak-taksi", "ercan-havalimani-transfer"],
  },
  {
    slug: "bellapais-taksi", type: "city", name: "Bellapais", breadcrumb: "Bellapais Taksi",
    h1: "Bellapais Taksi — Manastır Köyünde 7/24 Taksi & Transfer",
    title: "Bellapais Taksi | Bellapais Manastırı & Ercan Transfer | Kıbrıs Taksi 24",
    description: "Bellapais taksi hizmeti: Bellapais Manastırı, köy restoranları ve Ercan Havalimanı arası 7/24 sabit fiyatlı taksi & transfer. Turistik gezi ve otel transferleri.",
    keywords: ["bellapais taksi", "bellapais transfer", "bellapais manastırı taksi", "bellapais ercan taksi", "girne bellapais taksi"],
    hero: IMG.walls2,
    intro: [
      "Beşparmak Dağları'nın eteğinde, manastırı ve taş sokaklarıyla ünlü Bellapais, Kıbrıs'ın en romantik köyüdür. Kıbrıs Taksi 24, Bellapais Manastırı, köy restoranları ve çevresindeki oteller için 7/24 taksi ve transfer sağlar.",
      "Manzaralı köy yollarında konforlu ulaşım, Girne merkeze kısa transferler ve havalimanı bağlantıları için profesyonel şoförlerle güvenli bir yolculuk sunuyoruz.",
    ],
    landmarks: ["Bellapais Manastırı", "Bellapais Köyü", "Beşparmak Dağları", "Girne Merkez", "Ağırdağ", "Ozanköy"],
    popularRoutes: [
      { label: "Ercan → Girne Taksi", slug: "ercan-girne-taksi" },
      { label: "Girne → Ercan Transfer", slug: "girne-ercan-transfer" },
      { label: "Kıbrıs Transfer", slug: "kibris-transfer" },
    ],
    faqs: [
      { q: "Ercan'dan Bellapais'e ne kadar sürer?", a: "Yaklaşık 45 dakikalık manzaralı bir yolculuktur." },
      { q: "Bellapais Manastırı gezisi için araç olur mu?", a: "Evet, manastır ve köy turu için bekleme dahil şoförlü araç sağlıyoruz." },
      { q: "Köy restoranlarına akşam transferi var mı?", a: "Evet, akşam yemeği için gidiş-dönüş transfer düzenliyoruz." },
      { q: "Girne merkezden Bellapais'e kısa transfer olur mu?", a: "Evet, Girne'den Bellapais'e kısa ve konforlu transfer sağlıyoruz." },
    ],
    nearby: ["girne-taksi", "catalkoy-taksi", "alsancak-taksi", "ercan-havalimani-transfer"],
  },
];

// ---- ROUTE LANDING PAGES ----
export const ROUTES = [
  {
    slug: "ercan-girne-taksi", type: "route", from: "Ercan Havalimanı", to: "Girne", name: "Ercan → Girne Taksi",
    breadcrumb: "Ercan → Girne Taksi", distance: "≈ 45 km", duration: "≈ 40 dk",
    h1: "Ercan Havalimanı → Girne Taksi & Transfer",
    title: "Ercan Girne Taksi | Uçuş Takipli Transfer 40 dk | Kıbrıs Taksi 24",
    description: "Ercan Havalimanı - Girne taksi & transfer: uçuş takipli karşılama, sabit fiyat, ≈40 dakika konforlu yolculuk. Şoförünüz terminalde isim tabelasıyla bekler. WhatsApp rezervasyon.",
    keywords: ["ercan girne taksi", "ercan girne transfer", "ercan havalimanı girne taksi", "girne transfer"],
    hero: IMG.heroHarbour,
    intro: [
      "Ercan Havalimanı'ndan Girne'ye en konforlu ulaşım yöntemi özel transferdir. Şoförünüz uçuşunuzu takip eder, siz terminale iner inmez isim tabelanızla sizi karşılar ve doğrudan Girne'deki adresinize ulaştırır.",
      "Yaklaşık 45 km'lik bu güzergâhı 40 dakikada, klimalı ve geniş bagajlı aracımızla, sabit fiyat garantisiyle kat edersiniz. Gece geç saatteki uçuşlar dahil 7/24 hizmet veririz.",
    ],
    faqs: [
      { q: "Ercan'dan Girne'ye taksi kaç dakika?", a: "Trafiğe göre yaklaşık 35-45 dakikadır." },
      { q: "Fiyat sabit mi?", a: "Evet, rezervasyonda fiyatınız sabittir; sürpriz ücret çıkmaz. Net fiyat için WhatsApp'tan ulaşın." },
      { q: "Rötar olursa beklersiniz mi?", a: "Evet, uçuşunuzu ücretsiz takip eder, rötarda ek ücret almadan bekleriz." },
    ],
    nearby: ["girne-ercan-transfer", "girne-taksi", "ercan-havalimani-transfer", "ercan-merit-royal-transfer"],
  },
  {
    slug: "girne-ercan-transfer", type: "route", from: "Girne", to: "Ercan Havalimanı", name: "Girne → Ercan Transfer",
    breadcrumb: "Girne → Ercan Transfer", distance: "≈ 45 km", duration: "≈ 40 dk",
    h1: "Girne → Ercan Havalimanı Transfer & Taksi",
    title: "Girne Ercan Transfer | Havalimanı Taksi, Sabit Fiyat | Kıbrıs Taksi 24",
    description: "Girne - Ercan Havalimanı transfer: otelinizden zamanında alım, sabit fiyat, ≈40 dakika konforlu yolculuk. Uçuşunuzu kaçırmadan havalimanına ulaşın. WhatsApp rezervasyon.",
    keywords: ["girne ercan transfer", "girne ercan taksi", "girne havalimanı transfer", "girne ercan"],
    hero: IMG.airport,
    intro: [
      "Girne'deki otelinizden veya adresinizden Ercan Havalimanı'na zamanında ve konforlu dönüş için özel transferimizi tercih edin. Uçuş saatinize göre alım zamanınızı planlar, sizi telaşsızca havalimanına ulaştırırız.",
      "Yaklaşık 40 dakikalık bu yolculukta sabit fiyat garantisi sunar, bagaj ve yolcu sayınıza uygun aracı önceden ayarlarız. Erken sabah uçuşları için de 7/24 hizmet veririz.",
    ],
    faqs: [
      { q: "Uçuşumdan ne kadar önce yola çıkmalıyım?", a: "İç hat için 2, dış hat için 2.5-3 saat öncesini öneririz; alım saatinizi biz planlarız." },
      { q: "Otel önünden alım yapıyor musunuz?", a: "Evet, otel lobisi veya belirttiğiniz adresten kapıdan alım yaparız." },
      { q: "Sabah erken saatte transfer var mı?", a: "Evet, 7/24 hizmet veriyoruz; en erken uçuşlar için bile hazırız." },
    ],
    nearby: ["ercan-girne-taksi", "girne-taksi", "ercan-havalimani-transfer", "kibris-transfer"],
  },
  {
    slug: "ercan-lefkosa-taksi", type: "route", from: "Ercan Havalimanı", to: "Lefkoşa", name: "Ercan → Lefkoşa Taksi",
    breadcrumb: "Ercan → Lefkoşa Taksi", distance: "≈ 15 km", duration: "≈ 20 dk",
    h1: "Ercan Havalimanı → Lefkoşa Taksi & Transfer",
    title: "Ercan Lefkoşa Taksi | 20 dk Havalimanı Transfer | Kıbrıs Taksi 24",
    description: "Ercan Havalimanı - Lefkoşa taksi & transfer: sadece ≈20 dakika, uçuş takipli karşılama ve sabit fiyat. Başkente en hızlı ve konforlu ulaşım. WhatsApp rezervasyon.",
    keywords: ["ercan lefkoşa taksi", "ercan lefkoşa transfer", "ercan nicosia taxi", "lefkoşa havalimanı transfer"],
    hero: IMG.cityscape,
    intro: [
      "Lefkoşa, Ercan Havalimanı'na en yakın şehirdir. Şoförünüz sizi terminalde karşılar ve yalnızca 20 dakikada başkentteki adresinize ulaştırır. İş toplantısı, üniversite veya resmi randevu için ideal, dakik bir çözüm.",
      "Sabit fiyat garantisi, uçuş takibi ve 7/24 hizmet ile Ercan-Lefkoşa arası ulaşımınızı stressiz hale getiriyoruz.",
    ],
    faqs: [
      { q: "Ercan'dan Lefkoşa'ya kaç dakika?", a: "Yaklaşık 15-20 dakikadır; KKTC'nin en kısa havalimanı güzergâhıdır." },
      { q: "Üniversite kampüsüne bırakıyor musunuz?", a: "Evet, Yakın Doğu ve diğer kampüslere doğrudan kapı transferi yaparız." },
      { q: "Fiyat neye göre belirleniyor?", a: "Mesafe ve araç tipine göre sabittir. Net teklif için WhatsApp'tan yazın." },
    ],
    nearby: ["lefkosa-taksi", "ercan-havalimani-transfer", "ercan-girne-taksi", "kibris-transfer"],
  },
  {
    slug: "ercan-iskele-transfer", type: "route", from: "Ercan Havalimanı", to: "İskele / Long Beach", name: "Ercan → İskele Transfer",
    breadcrumb: "Ercan → İskele Transfer", distance: "≈ 55 km", duration: "≈ 50 dk",
    h1: "Ercan Havalimanı → İskele (Long Beach) Transfer",
    title: "Ercan İskele Transfer | Long Beach Havalimanı Taksi | Kıbrıs Taksi 24",
    description: "Ercan Havalimanı - İskele Long Beach transfer: site/otel kapısına ≈50 dakika konforlu ulaşım, uçuş takipli karşılama ve sabit fiyat. Rezidans misafirlerine özel. WhatsApp rezervasyon.",
    keywords: ["ercan iskele transfer", "ercan long beach transfer", "iskele havalimanı taksi", "long beach transfer"],
    hero: IMG.beach,
    intro: [
      "İskele ve Long Beach bölgesindeki rezidans ve otellere Ercan Havalimanı'ndan doğrudan, aktarmasız transfer sunuyoruz. Şoförünüz sizi karşılar ve site/otel kapınıza kadar konforla ulaştırır.",
      "Yaklaşık 55 km'lik güzergâhı 50 dakikada, sabit fiyat ve uçuş takibi güvencesiyle tamamlarız. Uzun konaklamalar için düzenli transfer paketleri de mevcuttur.",
    ],
    faqs: [
      { q: "Ercan'dan Long Beach'e ne kadar sürer?", a: "Yaklaşık 45-55 dakikadır; site içi kapı transferi dahildir." },
      { q: "Blok/daire önüne bırakıyor musunuz?", a: "Evet, Long Beach ve diğer sitelerde daire önüne kadar bırakırız." },
      { q: "Gece iniş için transfer var mı?", a: "Evet, 7/24 karşılama sağlıyoruz; gece uçuşları dahil." },
    ],
    nearby: ["iskele-taksi", "ercan-bafra-transfer", "ercan-havalimani-transfer", "kibris-transfer"],
  },
  {
    slug: "ercan-bafra-transfer", type: "route", from: "Ercan Havalimanı", to: "Bafra Oteller Bölgesi", name: "Ercan → Bafra Transfer",
    breadcrumb: "Ercan → Bafra Transfer", distance: "≈ 80 km", duration: "≈ 65 dk",
    h1: "Ercan Havalimanı → Bafra Otelleri Transfer",
    title: "Ercan Bafra Transfer | Kaya Artemis & Bafra Otel Taksi | Kıbrıs Taksi 24",
    description: "Ercan Havalimanı - Bafra otelleri transfer: Kaya Artemis, Noah's Ark ve tüm Bafra otellerine ≈65 dakika konforlu, uçuş takipli ve sabit fiyatlı transfer. WhatsApp rezervasyon.",
    keywords: ["ercan bafra transfer", "kaya artemis transfer", "bafra otel taksi", "bafra havalimanı transfer"],
    hero: IMG.beach2,
    intro: [
      "Bafra oteller bölgesindeki Kaya Artemis, Noah's Ark, Concorde ve diğer 5 yıldızlı otellere Ercan Havalimanı'ndan doğrudan transfer sağlıyoruz. Şoförünüz sizi terminalde karşılar, otel lobinize kadar ulaştırır.",
      "Yaklaşık 80 km'lik uzun güzergâhta bile sabit ve şeffaf fiyat garantisi veriyoruz. Klimalı, konforlu araçlarımızla tatilinize dinlenmiş başlarsınız.",
    ],
    faqs: [
      { q: "Ercan'dan Bafra'ya ne kadar sürer?", a: "Yaklaşık 1 saat - 1 saat 10 dakikadır." },
      { q: "Hangi otellere transfer yapıyorsunuz?", a: "Kaya Artemis, Noah's Ark, Concorde Luxury Resort ve bölgedeki tüm otellere transfer sağlıyoruz." },
      { q: "Grup ve aile için araç var mı?", a: "Evet, VIP minivan ve minibüs ile grup transferleri düzenliyoruz." },
    ],
    nearby: ["ercan-iskele-transfer", "gazimagusa-taksi", "ercan-havalimani-transfer", "kibris-transfer"],
  },
  {
    slug: "ercan-acapulco-transfer", type: "route", from: "Ercan Havalimanı", to: "Acapulco Resort", name: "Ercan → Acapulco Transfer",
    breadcrumb: "Ercan → Acapulco Transfer", distance: "≈ 40 km", duration: "≈ 40 dk",
    h1: "Ercan Havalimanı → Acapulco Resort Transfer",
    title: "Ercan Acapulco Transfer | Çatalköy Otel Taksi 40 dk | Kıbrıs Taksi 24",
    description: "Ercan Havalimanı - Acapulco Resort (Çatalköy) transfer: ≈40 dakika, uçuş takipli otel karşılaması ve sabit fiyat. Lobiden isim tabelasıyla karşılama. WhatsApp rezervasyon.",
    keywords: ["ercan acapulco transfer", "acapulco resort taksi", "çatalköy transfer", "acapulco havalimanı transfer"],
    hero: IMG.road2,
    intro: [
      "Çatalköy'deki Acapulco Resort Hotel'e Ercan Havalimanı'ndan doğrudan, konforlu transfer sunuyoruz. Şoförünüz uçuşunuzu takip eder ve sizi otel lobisinde isim tabelasıyla karşılar.",
      "Yaklaşık 40 dakikalık bu keyifli yolculukta sabit fiyat garantisi ve 7/24 hizmet sunarız. Aileler için çocuk koltuğu ve ek bagaj talepleriniz önceden ayarlanır.",
    ],
    faqs: [
      { q: "Ercan'dan Acapulco'ya ne kadar sürer?", a: "Yaklaşık 40 dakikalık doğrudan bir transferdir." },
      { q: "Otel lobisinden karşılama var mı?", a: "Evet, Acapulco Resort lobisinde isim tabelasıyla karşılama sağlıyoruz." },
      { q: "Dönüş transferi de ayarlıyor musunuz?", a: "Evet, gidiş-dönüş transferi tek rezervasyonda planlayabilirsiniz." },
    ],
    nearby: ["catalkoy-taksi", "girne-taksi", "ercan-havalimani-transfer", "vip-transfer"],
  },
  {
    slug: "ercan-merit-royal-transfer", type: "route", from: "Ercan Havalimanı", to: "Merit Royal (Alsancak)", name: "Ercan → Merit Royal Transfer",
    breadcrumb: "Ercan → Merit Royal Transfer", distance: "≈ 50 km", duration: "≈ 45 dk",
    h1: "Ercan Havalimanı → Merit Royal Transfer (VIP)",
    title: "Ercan Merit Royal Transfer | VIP Otel Taksi & Karşılama | Kıbrıs Taksi 24",
    description: "Ercan Havalimanı - Merit Royal / Crystal Cove (Alsancak) transfer: ≈45 dakika VIP karşılama, sabit fiyat ve uçuş takibi. Casino ve otel misafirlerine özel. WhatsApp rezervasyon.",
    keywords: ["ercan merit royal transfer", "merit royal taksi", "crystal cove transfer", "merit alsancak transfer"],
    hero: IMG.luxuryCar2,
    intro: [
      "Alsancak'taki Merit Royal, Merit Crystal Cove ve çevre otellere Ercan Havalimanı'ndan VIP transfer sunuyoruz. Lüks aracınız ve profesyonel şoförünüz sizi terminalde karşılar, otel lobinize kadar ayrıcalıkla ulaştırır.",
      "Yaklaşık 50 km'lik güzergâhı 45 dakikada, su ikramı ve sabit fiyat garantisiyle kat edersiniz. Casino ve etkinlik misafirleri için gece dahil 7/24 hizmet veririz.",
    ],
    faqs: [
      { q: "Ercan'dan Merit Royal'e ne kadar sürer?", a: "Yaklaşık 45-50 dakikalık konforlu bir transferdir." },
      { q: "VIP araç ile mi transfer yapılıyor?", a: "Talebinize göre lüks sedan veya Mercedes Vito VIP araçla transfer sağlıyoruz." },
      { q: "Gece casino transferi var mı?", a: "Evet, gece geç saatler dahil 7/24 otel-casino transferi düzenliyoruz." },
    ],
    nearby: ["alsancak-taksi", "vip-transfer", "girne-taksi", "ercan-havalimani-transfer"],
  },
];

export const ALL_PAGES = [...SERVICES, ...CITIES, ...ROUTES];

export function getPage(slug) {
  return ALL_PAGES.find((p) => p.slug === slug) || null;
}

export function getAllSlugs() {
  return ALL_PAGES.map((p) => p.slug);
}
