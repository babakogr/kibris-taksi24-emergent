import { IMG } from "@/lib/site";
import { CLUSTER_PAGES } from "@/lib/data/clusters";

// v2 page schema:
// { slug, type, kw, name, breadcrumb, isAirport, metaTitle, metaDescription,
//   hero, heroAlt, lead, subKeywords[], intro[], sections[{h2, body[], list?}],
//   journey?{distance,duration,pickup}, points[], faqs[{q,a}],
//   related:{cities[],routes[],services[],blog[]} }

export const SERVICES = [
  {
    slug: "kibris-taksi", type: "service", kw: "Kıbrıs Taksi", name: "Kıbrıs Taksi", breadcrumb: "Kıbrıs Taksi", isAirport: false,
    metaTitle: "Kıbrıs Taksi | Kaliteli ve Uygun | +90 548 875 7731",
    metaDescription: "Kıbrıs taksi ve KKTC transfer hizmeti: Ercan, Girne, Lefkoşa ve tüm ada için 7/24 Mercedes araçlarla kaliteli ulaşım. Hemen WhatsApp'tan bilgi alın!",
    hero: IMG.road, heroAlt: "Kuzey Kıbrıs sahil yolunda ilerleyen taksi",
    lead: "KKTC genelinde 7/24 taksi ve havalimanı transferi. Mercedes E-Class ve Vito araçlarla kaliteli, konforlu ve uygun ulaşım.",
    subKeywords: ["kktc taksi", "kuzey kıbrıs taksi", "kıbrıs havalimanı taksi", "taksi kıbrıs", "kıbrıs taksi durağı", "kıbrıs vito taksi"],
    intro: [
      "Kıbrıs Taksi 24, Kuzey Kıbrıs'ın tamamında hizmet veren, deneyimli şoför kadrosu ve bakımlı Mercedes filosuyla öne çıkan bir taksi ve transfer platformudur. Ercan Havalimanı karşılamalarından şehir içi kısa yolculuklara, otel transferlerinden günlük şoförlü araç kiralamaya kadar tüm ulaşım ihtiyaçlarınızı tek bir noktadan çözüyoruz.",
      "KKTC taksi hizmetimiz; adaya ilk kez gelen turistlerden Kuzey Kıbrıs'ta yaşayan yerel halka, üniversite öğrencilerinden iş insanlarına kadar geniş bir kitleye hitap eder. Türkçe ve İngilizce konuşan şoförlerimiz, bölgeyi çok iyi bilir ve sizi en kısa, en konforlu güzergâhtan varış noktanıza ulaştırır.",
      "İster Girne'nin tarihi limanına, ister Lefkoşa'daki bir toplantıya, ister Gazimağusa'daki üniversite kampüsüne gidin; Kıbrıs taksi ağımız her noktaya ulaşır. Kıbrıs havalimanı taksi talepleriniz için uçuşunuzu takip eder, terminalde isim tabelasıyla sizi karşılarız.",
    ],
    sections: [
      { h2: "KKTC Genelinde Kapsamlı Taksi Ağı", body: [
        "Kuzey Kıbrıs taksi hizmetimiz yalnızca büyük şehirlerle sınırlı değildir. Girne merkez taksi, liman taksi, Lefkoşa şehir içi taksi, Gazimağusa DAÜ taksi ve İskele Long Beach taksi taleplerinizin tamamını aynı kalite standardıyla karşılıyoruz. Karşıyaka, Çamlıbel, Alsancak, Çatalköy ve Bellapais gibi turistik yerleşimlere de düzenli hizmet veriyoruz.",
        "Kıbrıs Vito taksi seçeneğimiz, kalabalık aileler ve gruplar için ideal bir çözümdür. Geniş bagaj hacmi sayesinde valizleriniz rahatça sığar, yolculuğunuz konforlu geçer. Bireysel yolcular ve çiftler ise prestijli Mercedes E-Class ile seyahat etmeyi tercih edebilir.",
      ]},
      { h2: "Kıbrıs Havalimanı Taksi ve Transfer", body: [
        "Ercan Havalimanı, Kuzey Kıbrıs'ın ana giriş kapısıdır ve şehir merkezlerine yakındır. Kıbrıs havalimanı taksi hizmetimizde şoförünüz, uçuşunuzu canlı takip ederek siz bagajınızı almadan terminalde hazır bekler. Larnaka Havalimanı'ndan giriş yapan misafirlerimiz için sınır geçişi dahil transfer düzenliyoruz.",
        "Gece geç saatte iniş yapsanız bile 7/24 karşılama garantisi sunuyoruz. Böylece havalimanında beklemeden, pazarlık yapmadan doğrudan konaklama yerinize ulaşırsınız.",
      ]},
    ],
    points: ["Ercan Havalimanı", "Girne Limanı", "Lefkoşa Surlariçi", "Gazimağusa Surları", "İskele Long Beach", "Karpaz Yarımadası"],
    faqs: [
      { q: "Kıbrıs'ta taksi nasıl çağırılır?", a: "En hızlı yöntem WhatsApp'tır. Nereden-nereye, tarih ve saati yazın; ekibimiz dakikalar içinde aracınızı ayarlar. Havalimanı karşılamalarında şoförünüz isim tabelasıyla sizi bekler." },
      { q: "Kıbrıs taksi ücreti nasıl belirlenir?", a: "Yolculuğunuz taksimetre ile şeffaf biçimde ücretlendirilir. Yaklaşık bilgi ve müsaitlik için WhatsApp veya telefondan bize ulaşabilirsiniz." },
      { q: "KKTC'de gece taksi bulunur mu?", a: "Evet, 7/24 hizmet veriyoruz. Gece yarısı dahil her saatte güvenli taksi ve transfer sağlıyoruz." },
      { q: "Hangi araçlarla hizmet veriyorsunuz?", a: "Bakımlı ve sigortalı Mercedes E-Class sedan, Mercedes Vito minivan ve grup için minibüs araçlarımız bulunmaktadır." },
      { q: "Kıbrıs Vito taksi kaç kişiliktir?", a: "Mercedes Vito araçlarımız 4-7 yolcu ve yüksek bagaj kapasitesi ile aileler ve gruplar için idealdir." },
    ],
    related: { cities: ["girne-taksi", "lefkosa-taksi", "gazimagusa-taksi"], routes: ["ercan-girne-taksi", "ercan-lefkosa-taksi"], services: ["kibris-transfer", "ercan-havalimani-transfer", "kibris-vito-transfer"], blog: ["ercan-havalimani-transfer-rehberi", "kktc-ulasim-ipuclari"] },
  },
  {
    slug: "kibris-transfer", type: "service", kw: "Kıbrıs Transfer", name: "Kıbrıs Transfer", breadcrumb: "Kıbrıs Transfer", isAirport: false,
    metaTitle: "Kıbrıs Transfer | Kaliteli ve Uygun | +90 548 875 7731",
    metaDescription: "Kıbrıs transfer: Ercan ve Larnaka havalimanından tüm KKTC otellerine özel Mercedes transfer. Uçuş takipli karşılama. Hemen WhatsApp'tan bilgi alın!",
    hero: IMG.coast, heroAlt: "Kuzey Kıbrıs sahil manzarası ve transfer aracı",
    lead: "Ercan ve Larnaka havalimanından KKTC'deki tüm otel ve şehirlere özel, aktarmasız Mercedes transfer hizmeti.",
    subKeywords: ["kktc transfer", "kıbrıs havalimanı transfer", "kıbrıs otel transfer", "larnaka kıbrıs transfer", "kıbrıs özel transfer", "kıbrıs vito transfer"],
    intro: [
      "Özel transfer, tatilinizin ilk ve son izlenimidir. Kıbrıs transfer hizmetimizde Ercan ve Larnaka havalimanlarından KKTC'nin dört bir yanındaki otellere, tatil köylerine ve özel adreslere doğrudan, aktarmasız ulaşım sunuyoruz. Aracı sizden başka kimseyle paylaşmazsınız.",
      "Klimalı ve geniş bagajlı Mercedes araçlarımızla ailenizle, arkadaşlarınızla veya iş ekibinizle konforlu seyahat edersiniz. Kıbrıs özel transfer talebinizde bebek koltuğu, ek durak ve çoklu araç ihtiyaçlarınızı önceden planlar, kapıdan kapıya kusursuz bir deneyim yaşatırız.",
      "Larnaka Kıbrıs transfer hizmetimizde, Güney'deki havalimanından KKTC'ye sınır geçişi dahil sorunsuz ulaşım sağlıyoruz. Böylece hangi havalimanına inerseniz inin, konaklama yerinize güvenle ulaşırsınız.",
    ],
    sections: [
      { h2: "Havalimanı ve Otel Transferleri", body: [
        "Kıbrıs otel transfer hizmetimizle Merit otelleri, Acapulco Resort, Cratos Premium, Kaya Artemis ve Bafra oteller bölgesindeki tüm tesislere doğrudan ulaşım sağlıyoruz. Şoförünüz sizi terminalde isim tabelasıyla karşılar ve otel lobinize kadar konforla götürür.",
        "Uçağınızın rötar yapması durumunda uçuşunuzu ücretsiz takip eder ve bekleriz. Gece geç saatteki inişler dahil 7/24 karşılama garantisi sunuyoruz.",
      ]},
      { h2: "Araç Seçenekleri ve Grup Transferleri", body: [
        "1-3 kişilik yolculuklar için Mercedes E-Class, 4-7 kişilik aileler ve gruplar için Mercedes Vito, daha kalabalık ekipler için ise minibüs seçeneklerimiz mevcuttur. Kıbrıs Vito transfer, yüksek bagaj kapasitesi ve konforuyla en çok tercih edilen çözümdür.",
        "Kurumsal ve toplu transfer taleplerinizde birden fazla araçla eşzamanlı organizasyon yapabiliriz. Tur operatörleri ve oteller için özel anlaşma seçeneklerimiz bulunur.",
      ]},
    ],
    points: ["Ercan Havalimanı", "Larnaka Havalimanı", "Merit Otelleri", "Cratos Premium", "Acapulco Resort", "Bafra Oteller Bölgesi"],
    faqs: [
      { q: "Transfer ile taksi arasındaki fark nedir?", a: "Transferde aracınız size özeldir; rota ve durak sizin planınıza göre ayarlanır. Havalimanı transferlerinde şoför sizi terminalde isim tabelasıyla karşılar." },
      { q: "Larnaka Havalimanı'ndan transfer var mı?", a: "Evet. Güney Kıbrıs'taki Larnaka Havalimanı'ndan KKTC'ye sınır geçişi dahil sorunsuz transfer sağlıyoruz." },
      { q: "Kaç kişilik araçlarınız var?", a: "1-3 kişi için Mercedes E-Class, 4-7 kişi için Mercedes Vito ve daha kalabalık gruplar için minibüs seçeneklerimiz mevcuttur." },
      { q: "Transfer ücreti nasıl belirlenir?", a: "Mesafe ve araç tipine göre şeffaf biçimde ücretlendirme yapılır. Net bilgi için WhatsApp'tan ulaşın." },
      { q: "Ne kadar önceden rezervasyon yapmalıyım?", a: "İdeal olarak 24 saat önce; ancak son dakika talepleri de müsaitliğe göre karşılıyoruz." },
    ],
    related: { cities: ["girne-taksi", "iskele-taksi", "gazimagusa-taksi"], routes: ["ercan-bafra-transfer", "ercan-acapulco-transfer", "ercan-merit-royal-transfer"], services: ["kibris-taksi", "ercan-havalimani-transfer", "vip-transfer"], blog: ["kibris-transfer-fiyatlari-nasil-belirlenir", "kktc-ulasim-ipuclari"] },
  },
  {
    slug: "ercan-havalimani-transfer", type: "service", kw: "Ercan Havalimanı Transfer", name: "Ercan Havalimanı", breadcrumb: "Ercan Havalimanı Transfer", isAirport: true,
    metaTitle: "Ercan Havalimanı Transfer | +90 548 875 7731",
    metaDescription: "Ercan Havalimanı transfer & taksi: Girne, Lefkoşa, İskele ve tüm KKTC'ye uçuş takipli Mercedes karşılama. İsim tabelalı karşılama. WhatsApp'tan bilgi alın!",
    hero: IMG.airport, heroAlt: "Ercan Havalimanı transfer karşılama hizmeti",
    lead: "Ercan Havalimanı'na indiğiniz an konfor başlasın. Uçuş takipli, isim tabelalı karşılama ile tüm KKTC'ye Mercedes transfer.",
    subKeywords: ["ercan havalimanı taksi", "ercan transfer", "ercan girne transfer", "ercan lefkoşa transfer", "ercan havalimanı karşılama", "ercan airport transfer"],
    intro: [
      "Ercan Havalimanı transfer hizmetimizle, uçağınızdan iner inmez konfor başlar. Şoförünüz uçuşunuzu ücretsiz takip eder ve siz bagajınızı almadan dış hatlar çıkışında adınızın yazılı olduğu tabelayla sizi bekler. Kuyrukta beklemek, pazarlık yapmak veya belirsiz ücretlerle uğraşmak yoktur.",
      "Ercan havalimanı taksi taleplerinizde Girne'ye yaklaşık 40 dakika, Lefkoşa'ya 20 dakika, İskele ve Gazimağusa'ya ise doğrudan konforlu ulaşım sağlıyoruz. Mercedes E-Class ve Vito araçlarımızla yolculuğunuz kapıdan kapıya kusursuz geçer.",
      "Gece yarısı iniş yapan uçuşlar dahil 7/24 karşılama garantisi veriyoruz. Ercan transfer organizasyonunuzu önceden planlayarak, adaya varışınızı stresten arındırıyoruz.",
    ],
    sections: [
      { h2: "Uçuş Takipli Karşılama Süreci", body: [
        "Rezervasyonunuzu aldıktan sonra uçuş numaranıza göre iniş saatinizi canlı takip ederiz. Uçağınız erken veya geç inse de şoförünüz doğru saatte terminalde hazır olur. Bu sayede rötar kaynaklı bekleme için ek kaygı yaşamazsınız.",
        "İniş sonrası şoförünüzle WhatsApp üzerinden anlık iletişim kurabilir, buluşma noktasını netleştirebilirsiniz. Bagajlarınızın araca yerleştirilmesine yardımcı olur, ardından doğrudan varış noktanıza hareket ederiz.",
      ]},
      { h2: "Ercan'dan Popüler Varış Noktaları", body: [
        "Ercan-Girne transfer, Ercan-Lefkoşa transfer ve Ercan-İskele transfer en çok tercih edilen güzergâhlardır. Bunun yanında Bafra otelleri, Acapulco Resort, Cratos Premium ve Merit Royal gibi tesislere de doğrudan karşılama hizmeti sunuyoruz.",
        "Her güzergâh için ayrıntılı bilgiye ilgili transfer sayfalarımızdan ulaşabilir, yolculuk süresi ve karşılama detaylarını inceleyebilirsiniz.",
      ]},
    ],
    journey: { distance: "Şehre göre 15-80 km", duration: "20-70 dk", pickup: "Dış hatlar çıkışı, isim tabelalı karşılama" },
    points: ["Ercan Dış Hatlar", "Girne", "Lefkoşa", "Gazimağusa", "İskele Long Beach", "Bafra"],
    faqs: [
      { q: "Uçağım rötar yaparsa ne olur?", a: "Uçuşunuzu canlı takip eder ve gerçek iniş saatinize göre karşılarız. Rötar kaynaklı bekleme için ek kaygı yaşamazsınız." },
      { q: "Şoför beni nerede karşılar?", a: "Şoförünüz dış hatlar çıkışında adınızın yazılı olduğu tabelayla bekler. İniş sonrası WhatsApp'tan da iletişim kurabilirsiniz." },
      { q: "Ercan'dan Girne'ye ne kadar sürer?", a: "Trafiğe göre yaklaşık 35-45 dakikadır. Lefkoşa'ya ise sadece 20 dakikada ulaşırsınız." },
      { q: "Bebek/çocuk koltuğu var mı?", a: "Evet, rezervasyon sırasında belirtmeniz halinde uygun çocuk koltuğunu temin ederiz." },
      { q: "Gece geç saatte transfer yapıyor musunuz?", a: "Evet, 7/24 hizmet veriyoruz; gece yarısı inen uçuşlar dahil karşılama sağlıyoruz." },
    ],
    related: { cities: ["girne-taksi", "lefkosa-taksi", "iskele-taksi"], routes: ["ercan-girne-taksi", "ercan-lefkosa-taksi", "ercan-iskele-transfer"], services: ["kibris-transfer", "kibris-vito-transfer", "vip-transfer"], blog: ["ercan-havalimani-transfer-rehberi"] },
  },
  {
    slug: "kibris-vito-transfer", type: "service", kw: "Kıbrıs Vito Transfer", name: "Kıbrıs Vito Transfer", breadcrumb: "Kıbrıs Vito Transfer", isAirport: false,
    metaTitle: "Kıbrıs Vito Transfer | Mercedes Vito | +90 548 875 7731",
    metaDescription: "Kıbrıs Vito transfer: Mercedes Vito ile 4-7 kişilik aile ve grup transferleri. Geniş bagaj, VIP konfor. Hemen WhatsApp'tan bilgi ve müsaitlik alın!",
    hero: IMG.vito, heroAlt: "Siyah Mercedes-Benz Vito grup transfer aracı",
    lead: "Aileler ve gruplar için ideal: Mercedes Vito ile geniş, konforlu ve yüksek bagaj kapasiteli KKTC transferi.",
    subKeywords: ["mercedes vito kıbrıs", "kıbrıs grup transfer", "vito havalimanı transfer", "kıbrıs aile transfer", "vito minivan kıbrıs", "kktc vito taksi"],
    intro: [
      "Kıbrıs Vito transfer hizmetimiz, kalabalık aileler ve gruplar için tasarlanmış konforlu bir çözümdür. Mercedes-Benz Vito araçlarımız 4-7 yolcu kapasitesi ve yüksek bagaj hacmiyle, valizlerinizin ve yol arkadaşlarınızın rahatça sığmasını sağlar.",
      "Havalimanı karşılamalarından şehirler arası yolculuklara, otel transferlerinden günlük gezilere kadar her ihtiyaçta Vito araçlarımız yanınızda. Klimalı, ferah iç mekân ve sessiz sürüş konforu ile uzun yolculuklar bile keyifli geçer.",
      "Mercedes Vito, özellikle Ercan Havalimanı'ndan Bafra, İskele ve Girne otellerine yapılan grup transferlerinde en çok tercih edilen araçtır. Tek araçla tüm grubunuzu aktarmasız taşıyarak hem ekonomik hem de pratik bir seçenek sunar.",
    ],
    sections: [
      { h2: "Neden Mercedes Vito?", body: [
        "Vito, geniş oturma düzeni ve büyük bagaj bölmesi sayesinde 6-7 kişilik ailelerin tüm valizleriyle birlikte tek araçta seyahat etmesine imkân tanır. Bu da birden fazla sedan kiralama zorunluluğunu ortadan kaldırır.",
        "Aracın yüksek tavanı ve rahat girişi, yaşlı yolcular ve çocuklu aileler için konfor sağlar. Bebek koltuğu talepleriniz önceden ayarlanır.",
      ]},
    ],
    points: ["Havalimanı grup karşılaması", "Aile transferleri", "Otel transferleri", "Şehirler arası yolculuk", "Günlük tur", "Kurumsal ekip transferi"],
    faqs: [
      { q: "Vito kaç kişiliktir?", a: "Mercedes Vito araçlarımız yolcu düzenine göre 4-7 kişi taşır ve yüksek bagaj kapasitesine sahiptir." },
      { q: "Vito'da bagaj kapasitesi yeterli mi?", a: "Evet, Vito'nun geniş bagaj bölmesi sayesinde 6-7 kişilik bir grubun büyük valizleri rahatça sığar." },
      { q: "Vito transfer hangi durumlarda tercih edilir?", a: "Aileler, arkadaş grupları ve kurumsal ekipler için, tek araçla aktarmasız taşımada Vito idealdir." },
      { q: "Vito ile havalimanı karşılaması yapıyor musunuz?", a: "Evet, uçuş takipli, isim tabelalı karşılama ile Ercan ve Larnaka'dan Vito transferi sağlıyoruz." },
    ],
    related: { cities: ["iskele-taksi", "girne-taksi", "alsancak-taksi"], routes: ["ercan-bafra-transfer", "ercan-iskele-transfer", "ercan-girne-taksi"], services: ["kibris-transfer", "vip-transfer", "ercan-havalimani-transfer"], blog: ["kibris-transfer-fiyatlari-nasil-belirlenir"] },
  },
  {
    slug: "vip-transfer", type: "service", kw: "Kıbrıs VIP Transfer", name: "VIP Transfer", breadcrumb: "VIP Transfer", isAirport: false,
    metaTitle: "Kıbrıs VIP Transfer | Lüks Araç | +90 548 875 7731",
    metaDescription: "Kıbrıs VIP transfer: Mercedes Vito/E-Class ile üst düzey konfor, karşılama, su ikramı ve profesyonel şoför. Kurumsal & özel etkinlik. WhatsApp'tan bilgi alın!",
    hero: IMG.vito2, heroAlt: "Lüks Mercedes VIP transfer aracı",
    lead: "Üst segment Mercedes araçlar ve profesyonel şoförlerle ayrıcalıklı KKTC yolculuğu. Kurumsal, düğün ve özel etkinlikler.",
    subKeywords: ["kıbrıs vip taksi", "lüks transfer kktc", "mercedes vip transfer", "şoförlü araç kıbrıs", "kurumsal transfer kıbrıs", "vip karşılama"],
    intro: [
      "Bazı yolculuklar ayrıcalık ister. Kıbrıs VIP transfer hizmetimizde, üst segment Mercedes-Benz Vito/Viano ve E-Class araçlarımızla, takım elbiseli profesyonel şoförler eşliğinde seyahat edersiniz. Su ikramı ve karşılama hizmeti standarttır.",
      "Kurumsal misafir ağırlama, düğün ve özel etkinlik transferleri, iş seyahatleri ve tam günlük şoförlü araç ihtiyaçlarınız için idealdir. Gizlilik, dakiklik ve zarafeti bir arada sunuyoruz.",
      "VIP transferde her detay sizin konforunuz için planlanır; sessiz iç mekân, esnek program ve kişiye özel hizmet ile yolculuğunuz unutulmaz bir deneyime dönüşür.",
    ],
    sections: [
      { h2: "Kurumsal ve Özel Etkinlik Transferleri", body: [
        "Şirketiniz için kurumsal misafir karşılama, kongre ve etkinlik lojistiği, VIP havalimanı transferi ve düzenli yönetici ulaşımı sağlıyoruz. KDV'li fatura ve aylık cari hesap seçenekleri mevcuttur.",
        "Düğün ve özel organizasyonlarınızda gelin arabası düzenlemesi ve konuk transfer organizasyonu için yanınızdayız.",
      ]},
    ],
    points: ["Kurumsal karşılama", "5 yıldızlı oteller", "Düğün & organizasyon", "Casino transferleri", "İş seyahatleri", "Tam günlük şoför"],
    faqs: [
      { q: "VIP transferde hangi araçlar var?", a: "Mercedes-Benz Vito/Viano VIP paket araçlar ve lüks E-Class sedanlar sunuyoruz. Talebe göre araç önceden netleştirilir." },
      { q: "Kurumsal fatura kesiyor musunuz?", a: "Evet, kurumsal müşterilerimize KDV'li fatura ve aylık cari hesap seçenekleri sunuyoruz." },
      { q: "Tam günlük şoför kiralayabilir miyim?", a: "Evet, saatlik ve günlük şoförlü araç paketlerimiz mevcuttur. Programınıza göre esnek çözüm üretiriz." },
      { q: "Düğün için araç süsleme yapıyor musunuz?", a: "Talebiniz üzerine gelin arabası düzenlemesi ve konuk transfer organizasyonu sağlıyoruz." },
    ],
    related: { cities: ["girne-taksi", "alsancak-taksi", "catalkoy-taksi"], routes: ["ercan-merit-royal-transfer", "ercan-acapulco-transfer", "cratos-otel-taksi"], services: ["kibris-transfer", "kibris-vito-transfer", "ercan-havalimani-transfer"], blog: ["kibris-transfer-fiyatlari-nasil-belirlenir"] },
  },
  {
    slug: "kibris-gunluk-turlar", type: "tour", kw: "Kıbrıs Günlük Turlar", name: "Kıbrıs Günlük Turlar", breadcrumb: "Kıbrıs Günlük Turlar", isAirport: false,
    metaTitle: "Kıbrıs Günlük Turlar | Ada Turu | +90 548 875 7731",
    metaDescription: "Kıbrıs günlük turlar ve ada turu: Girne, St Hilarion, Karpaz ve gezilecek yerler için şoförlü Mercedes ile özel tur. Programını sen belirle! WhatsApp'tan bilgi al.",
    hero: IMG.tourCastle, heroAlt: "Kuzey Kıbrıs kale ve Akdeniz manzarası günlük tur",
    lead: "Kıbrıs gezilecek yerleri kendi programınızla keşfedin: şoförlü Mercedes ile özel, esnek ve konforlu günlük turlar.",
    subKeywords: ["kıbrıs ada turu", "kıbrıs gezilecek yerler", "girne günlük tur", "karpaz turu", "st hilarion turu", "kıbrıs özel tur"],
    intro: [
      "Kıbrıs günlük turlar hizmetimizle, Kuzey Kıbrıs'ın eşsiz doğal ve tarihi güzelliklerini kalabalık otobüs turlarına sıkışmadan, kendi programınızla keşfedersiniz. Şoförlü Mercedes aracınızla istediğiniz noktada durur, dilediğiniz kadar vakit geçirirsiniz.",
      "Girne Kalesi ve antik liman, St. Hilarion Kalesi, Bellapais Manastırı, Karpaz Yarımadası'nın altın kumsalları ve yaban eşekleri, Salamis Antik Kenti ve Gazimağusa surları... Ada turu rotanızı ilgi alanlarınıza göre birlikte planlarız.",
      "Kıbrıs gezilecek yerler konusunda deneyimli şoförlerimiz, size en iyi fotoğraf noktalarını ve yerel lezzet duraklarını da önerir. Aileler, çiftler ve küçük gruplar için ideal, esnek ve konforlu bir keşif deneyimi sunuyoruz.",
    ],
    sections: [
      { h2: "Popüler Tur Rotaları", body: [
        "Girne günlük tur: Girne Kalesi, antik liman, St. Hilarion ve Bellapais'i kapsayan yarım/tam günlük klasik rota. Karpaz turu: bakir plajlar, Altın Kumsal ve Apostolos Andreas Manastırı. Mesarya ve Gazimağusa turu: Salamis, surlar ve tarihi kent merkezi.",
        "Turlarınızı yarım gün veya tam gün olarak, grubunuza ve tempolarınıza göre planlıyoruz. Giriş ücretleri ve öğle yemeği molaları program içinde netleştirilir.",
      ]},
    ],
    points: ["Girne Kalesi & Liman", "St. Hilarion Kalesi", "Bellapais Manastırı", "Karpaz & Altın Kumsal", "Salamis Antik Kenti", "Büyük Han (Lefkoşa)"],
    faqs: [
      { q: "Günlük turlar özel mi, grup turu mu?", a: "Turlarımız özeldir; aracı ve programı yalnızca siz kullanırsınız. Dilediğiniz noktada durabilir, süreyi kendiniz belirlersiniz." },
      { q: "Tur programını değiştirebilir miyim?", a: "Elbette. Rota tamamen size özel planlanır; ilgi alanlarınıza göre durakları ekler veya çıkarırız." },
      { q: "Turlar kaç saat sürer?", a: "Yarım gün (4-5 saat) ve tam gün (7-9 saat) seçenekleri mevcuttur." },
      { q: "Tur ücreti neleri kapsar?", a: "Araç, yakıt ve şoför hizmetini kapsar. Müze giriş ücretleri ve yemek ayrıca planlanır; detay için WhatsApp'tan bilgi alın." },
    ],
    related: { cities: ["girne-taksi", "bellapais-taksi", "gazimagusa-taksi"], routes: ["ercan-girne-taksi"], services: ["kibris-taksi", "vip-transfer"], blog: ["girne-gezi-rehberi", "kktc-ulasim-ipuclari"] },
  },
];

// helper to build a city page object compactly
function city(o) { return { type: "city", isAirport: false, ...o }; }

export const CITIES = [
  city({
    slug: "girne-taksi", kw: "Girne Taksi", name: "Girne", breadcrumb: "Girne Taksi",
    metaTitle: "Girne Taksi | Kaliteli ve Uygun | +90 548 875 7731",
    metaDescription: "Girne taksi: liman, merkez, oteller ve Ercan arası 7/24 Mercedes taksi & transfer. Girne Vito taksi ve VIP karşılama. Hemen WhatsApp'tan bilgi alın!",
    hero: IMG.heroHarbour, heroAlt: "Girne (Kyrenia) tarihi limanı ve taksi hizmeti",
    lead: "Girne merkez, antik liman ve oteller bölgesi için 7/24 konforlu Mercedes taksi ve havalimanı transferi.",
    subKeywords: ["girne merkez taksi", "girne liman taksi", "girne vito taksi", "kyrenia taxi", "girne otel taksi", "girne ercan taksi"],
    intro: [
      "Girne (Kyrenia), tarihi limanı, kalesi ve sahil şeridiyle KKTC'nin en gözde turizm merkezidir. Girne taksi hizmetimizle merkez, antik liman, oteller bölgesi ve tüm mahalleler için 7/24 konforlu ulaşım sunuyoruz. Girne merkez taksi ve liman taksi taleplerinizde dakikalar içinde yanınızdayız.",
      "İster Ercan Havalimanı'ndan otelinize transfer olun, ister restoran ve gece hayatı için şehir içinde hareket edin, ister Bellapais ve Beşparmak Dağları'na keşif turuna çıkın; Girne'nin her noktasına güler yüzlü şoförlerle ulaşırsınız.",
      "Kalabalık aileler ve gruplar için Girne Vito taksi seçeneğimiz, geniş iç hacmi ve yüksek bagaj kapasitesiyle en pratik çözümdür. Bireysel yolcular ise prestijli Mercedes E-Class ile konforlu bir yolculuğun tadını çıkarır.",
    ],
    sections: [
      { h2: "Girne'de Taksi Hizmet Alanlarımız", body: [
        "Girne merkez, Karaoğlanoğlu, Zeytinlik, Ozanköy, Çatalköy ve Alsancak dahil tüm bölgelerde hizmet veriyoruz. Girne liman taksi ile antik limandaki restoran ve barlara, Girne merkez taksi ile çarşı ve alışveriş noktalarına kolayca ulaşırsınız.",
        "Oteller bölgesindeki Merit, Acapulco, Cratos ve diğer tesislerden kapıdan alım yaparız. Girne otel taksi hizmetimizde resepsiyon veya belirttiğiniz adresten karşılama sağlıyoruz.",
      ]},
      { h2: "Girne Havalimanı Ulaşımı ve Transferler", body: [
        "Girne, Ercan Havalimanı'na yaklaşık 40-45 dakika mesafededir. Girne Ercan taksi hizmetimizde uçuş saatinize göre alım zamanınızı planlar, sizi zamanında havalimanına ulaştırırız. Havalimanı karşılamalarında ise şoförünüz isim tabelasıyla sizi bekler.",
        "Larnaka Havalimanı'ndan Girne'ye sınır geçişi dahil transfer talepleriniz için de hizmetinizdeyiz.",
      ]},
    ],
    journey: { distance: "Ercan'a ≈ 45 km", duration: "≈ 40-45 dk", pickup: "Otel/adres kapı karşılaması" },
    points: ["Girne Antik Limanı", "Girne Kalesi", "Bellapais Manastırı", "Beşparmak Dağları", "Karmi Köyü", "Oteller Bölgesi"],
    faqs: [
      { q: "Girne'den Ercan Havalimanı'na taksi ne kadar sürer?", a: "Yaklaşık 40-45 dakikadır. Uçuşunuzdan yeterli süre önce kalkış planlarız." },
      { q: "Girne içinde kısa mesafe taksi buluyor musunuz?", a: "Evet, liman, oteller ve merkez arası kısa şehir içi yolculuklar dahil her mesafede hizmet veriyoruz." },
      { q: "Girne Vito taksi mevcut mu?", a: "Evet, 4-7 kişilik aileler ve gruplar için Mercedes Vito araçlarımız hizmetinizdedir." },
      { q: "Girne otel önünden alım yapıyor musunuz?", a: "Kesinlikle. Otel resepsiyonu veya belirttiğiniz adresten kapıdan alım yaparız." },
      { q: "Gece geç saatte Girne'de taksi bulunur mu?", a: "Evet, 7/24 hizmet veriyoruz; gece geç saatlerde de güvenli ulaşım sağlıyoruz." },
    ],
    related: { cities: ["alsancak-taksi", "catalkoy-taksi", "bellapais-taksi", "karsiyaka-taksi"], routes: ["ercan-girne-taksi", "girne-ercan-transfer"], services: ["kibris-taksi", "kibris-gunluk-turlar"], blog: ["girne-gezi-rehberi"] },
  }),
  city({
    slug: "lefkosa-taksi", kw: "Lefkoşa Taksi", name: "Lefkoşa", breadcrumb: "Lefkoşa Taksi",
    metaTitle: "Lefkoşa Taksi | Kaliteli ve Uygun | +90 548 875 7731",
    metaDescription: "Lefkoşa taksi: merkez, üniversiteler, hastaneler ve Ercan arası 7/24 Mercedes taksi & transfer. Başkente en hızlı ulaşım. Hemen WhatsApp'tan bilgi alın!",
    hero: IMG.cityscape, heroAlt: "Lefkoşa (Nicosia) şehir manzarası ve taksi hizmeti",
    lead: "Başkent Lefkoşa merkez, üniversiteler ve Ercan arası 7/24 hızlı, konforlu Mercedes taksi ve transfer.",
    subKeywords: ["lefkoşa merkez taksi", "nicosia taxi", "lefkoşa üniversite taksi", "lefkoşa ercan taksi", "dereboyu taksi", "lefkoşa hastane taksi"],
    intro: [
      "Dünyanın son bölünmüş başkenti Lefkoşa (Nicosia), KKTC'nin idari ve akademik kalbidir. Lefkoşa taksi hizmetimizle merkez, Surlariçi, üniversite kampüsleri, devlet daireleri ve hastaneler için 7/24 hızlı ulaşım sağlıyoruz.",
      "Ercan Havalimanı'na yalnızca 20 dakika mesafedeki Lefkoşa'da; iş toplantıları, üniversite ulaşımı ve resmi randevularınız için dakik ve profesyonel çözüm sunuyoruz. Lefkoşa merkez taksi ve Dereboyu taksi taleplerinize hızla yanıt veriyoruz.",
      "Yakın Doğu Üniversitesi ve diğer kampüslere düzenli öğrenci ulaşımı, hastane ve resmi daire transferleri için Mercedes araçlarımızla konforlu hizmet veriyoruz.",
    ],
    sections: [
      { h2: "Lefkoşa'da Hizmet Noktalarımız", body: [
        "Surlariçi, Büyük Han, Selimiye Camii, Dereboyu eğlence bölgesi, Yakın Doğu Üniversitesi, devlet hastanesi ve Girne Kapısı çevresinde yoğun hizmet veriyoruz. Lefkoşa üniversite taksi hizmetimizle öğrenciler kampüse zamanında ulaşır.",
        "Lefkoşa hastane taksi taleplerinizde randevu saatinize göre planlanmış, konforlu ulaşım sağlıyoruz.",
      ]},
      { h2: "Ercan Havalimanı ve Sınır Geçişi", body: [
        "Lefkoşa, Ercan Havalimanı'na en yakın şehirdir; sadece 15-20 dakikada ulaşırsınız. Lefkoşa Ercan taksi hizmetimizde uçuş saatinize göre alım planlar, sizi telaşsızca havalimanına ulaştırırız.",
        "Güney Kıbrıs'a geçiş yapacak misafirlerimiz için sınır kapılarına ve Larnaka bağlantılarına transfer düzenliyoruz.",
      ]},
    ],
    journey: { distance: "Ercan'a ≈ 15 km", duration: "≈ 15-20 dk", pickup: "Adres/kampüs kapı karşılaması" },
    points: ["Surlariçi (Walled City)", "Büyük Han", "Selimiye Camii", "Yakın Doğu Üniversitesi", "Dereboyu", "Girne Kapısı"],
    faqs: [
      { q: "Ercan'dan Lefkoşa'ya taksi ne kadar sürer?", a: "Lefkoşa, Ercan'a en yakın şehirdir; yaklaşık 15-20 dakikada ulaşırsınız." },
      { q: "Üniversite öğrencilerine hizmet veriyor musunuz?", a: "Evet, kampüslere düzenli öğrenci ulaşımı ve avantajlı transfer paketleri sunuyoruz." },
      { q: "Hastane ve resmi daire transferi yapıyor musunuz?", a: "Evet, randevu saatinize göre planlanmış konforlu ulaşım sağlıyoruz." },
      { q: "Lefkoşa'dan güney geçişi için transfer olur mu?", a: "Evet, sınır kapılarına ve Güney Kıbrıs bağlantılarına transfer düzenliyoruz." },
      { q: "Lefkoşa'da Vito taksi bulunur mu?", a: "Evet, gruplar için Mercedes Vito araçlarımız hizmetinizdedir." },
    ],
    related: { cities: ["girne-taksi", "gazimagusa-taksi", "gau-taksi"], routes: ["ercan-lefkosa-taksi"], services: ["kibris-taksi", "ercan-havalimani-transfer"], blog: ["kktc-ulasim-ipuclari"] },
  }),
  city({
    slug: "gazimagusa-taksi", kw: "Gazimağusa Taksi", name: "Gazimağusa", breadcrumb: "Gazimağusa Taksi",
    metaTitle: "Gazimağusa Taksi | Kaliteli ve Uygun | +90 548 875 7731",
    metaDescription: "Gazimağusa taksi: merkez, DAÜ, Salamis ve Ercan arası 7/24 Mercedes taksi & transfer. Mağusa öğrenci ve otel transferi. Hemen WhatsApp'tan bilgi alın!",
    hero: IMG.walls, heroAlt: "Gazimağusa (Famagusta) surları ve taksi hizmeti",
    lead: "Mağusa merkez, DAÜ, Salamis ve sahil otelleri için 7/24 konforlu Mercedes taksi ve transfer.",
    subKeywords: ["mağusa taksi", "famagusta taxi", "daü taksi", "gazimağusa öğrenci taksi", "gazimağusa otel taksi", "salamis taksi"],
    intro: [
      "Surları, antik kentleri ve altın kumsallarıyla Gazimağusa (Famagusta), tarih ve denizi buluşturan büyülü bir şehirdir. Gazimağusa taksi hizmetimizle merkez, Surlariçi, Doğu Akdeniz Üniversitesi ve sahil otelleri için 7/24 ulaşım sağlıyoruz.",
      "DAÜ taksi hizmetimiz, öğrenciler ve akademisyenler için kampüs, yurtlar ve şehir merkezi arasında düzenli, güvenli ulaşım sunar. Aileler her geldiğinde konforlu Mağusa taksi ile karşılanır.",
      "Salamis Antik Kenti, Kaya Artemis ve Palm Beach bölgesine keyifli yolculuklar; turistik gezilerden günlük ulaşıma kadar her ihtiyaca Mercedes araçlarımızla cevap veriyoruz.",
    ],
    sections: [
      { h2: "Mağusa'da Hizmet Noktaları", body: [
        "Gazimağusa surları, Lala Mustafa Paşa Camii, Salamis, DAÜ kampüsü ve Palm Beach çevresinde yoğun hizmet veriyoruz. Gazimağusa öğrenci taksi ile kampüs ve yurtlara zamanında ulaşım sağlanır.",
        "Sahil otellerine (Kaya Artemis, Palm Beach) doğrudan kapı transferi yaparız.",
      ]},
      { h2: "Ercan ve Havalimanı Ulaşımı", body: [
        "Gazimağusa, Ercan Havalimanı'na yaklaşık 40-45 dakika mesafededir. Uçuş takipli karşılama ile terminalden doğrudan Mağusa'daki adresinize ulaşırsınız.",
        "Larnaka Havalimanı'na yakınlığı sayesinde Güney bağlantılı transferlerde de avantajlı çözümler sunuyoruz.",
      ]},
    ],
    journey: { distance: "Ercan'a ≈ 55 km", duration: "≈ 45 dk", pickup: "Kampüs/otel kapı karşılaması" },
    points: ["Gazimağusa Surları", "Lala Mustafa Paşa Camii", "Salamis Antik Kenti", "Doğu Akdeniz Üniversitesi", "Palm Beach", "Kaya Artemis"],
    faqs: [
      { q: "Ercan'dan Gazimağusa'ya ne kadar sürer?", a: "Yaklaşık 40-45 dakikalık konforlu bir yolculuktur." },
      { q: "DAÜ öğrencilerine transfer yapıyor musunuz?", a: "Evet, DAÜ kampüsü ve yurtlar için düzenli öğrenci transferleri düzenliyoruz." },
      { q: "Salamis ve turistik gezi turu olur mu?", a: "Evet, günübirlik şoförlü araç ile Salamis, Karpaz ve çevre turlarını planlayabiliriz." },
      { q: "Sahil otellerine kapıdan transfer var mı?", a: "Kaya Artemis, Palm Beach ve diğer sahil otellerine doğrudan kapı transferi sağlıyoruz." },
      { q: "Mağusa'da Vito taksi bulunur mu?", a: "Evet, gruplar için Mercedes Vito araçlarımız hizmetinizdedir." },
    ],
    related: { cities: ["iskele-taksi", "lefkosa-taksi", "gau-taksi"], routes: ["ercan-iskele-transfer", "ercan-bafra-transfer"], services: ["kibris-transfer", "kibris-gunluk-turlar"], blog: ["kktc-ulasim-ipuclari"] },
  }),
  city({
    slug: "iskele-taksi", kw: "İskele Taksi", name: "İskele", breadcrumb: "İskele Taksi",
    metaTitle: "İskele Taksi | Long Beach & Bafra | +90 548 875 7731",
    metaDescription: "İskele taksi: Long Beach, Bafra otelleri ve Ercan arası 7/24 Mercedes taksi & transfer. Rezidans kapı transferi. Hemen WhatsApp'tan bilgi alın!",
    hero: IMG.beach, heroAlt: "İskele Long Beach sahili ve transfer hizmeti",
    lead: "Long Beach, Bafra otelleri ve Boğaz için 7/24 konforlu Mercedes taksi ve havalimanı transferi.",
    subKeywords: ["long beach taksi", "iskele ercan transfer", "bafra taksi", "iskele rezidans transfer", "boğaz taksi", "iskele otel taksi"],
    intro: [
      "Hızla gelişen İskele bölgesi, Long Beach'in eşsiz kumsalları ve modern rezidanslarıyla KKTC'nin yeni cazibe merkezidir. İskele taksi hizmetimizle merkez, Long Beach siteleri, Boğaz ve Bafra otelleri için 7/24 ulaşım sağlıyoruz.",
      "Long Beach taksi talebinizde blok ve daire önüne kadar kapı transferi yaparız. Rezidans sahipleri, tatilciler ve otel misafirleri için Ercan Havalimanı bağlantılı konforlu ulaşım sunuyoruz.",
      "Uzun mesafeye rağmen konforlu Mercedes araçlarımız ve deneyimli şoförlerimizle yolculuğunuz keyifli geçer. Uzun konaklamalarda düzenli transfer paketleri oluşturabiliriz.",
    ],
    sections: [
      { h2: "Long Beach ve Rezidans Transferleri", body: [
        "Long Beach bölgesindeki tüm sitelerde daire önüne kadar bırakma yaparız. İskele rezidans transfer hizmetimiz, yatırımcılar ve daimi sakinler için düzenli ve güvenilir ulaşım sağlar.",
        "Bafra oteller bölgesindeki Kaya Artemis, Noah's Ark ve Concorde gibi tesislere doğrudan transfer düzenliyoruz.",
      ]},
      { h2: "Ercan Havalimanı Ulaşımı", body: [
        "İskele Long Beach, Ercan Havalimanı'na yaklaşık 50-55 dakika mesafededir. Uçuş takipli karşılama ile terminalden doğrudan sitenize/otelinize ulaşırsınız.",
        "Gece geç saatteki inişler dahil 7/24 karşılama garantisi sunuyoruz.",
      ]},
    ],
    journey: { distance: "Ercan'a ≈ 55 km", duration: "≈ 50-55 dk", pickup: "Site/daire önü kapı karşılaması" },
    points: ["Long Beach", "İskele Merkez", "Boğaz", "Bafra Oteller Bölgesi", "Kaleburnu", "Karpaz kapısı"],
    faqs: [
      { q: "Ercan'dan Long Beach'e ne kadar sürer?", a: "Yaklaşık 50-55 dakikadır; site içi kapı transferi dahildir." },
      { q: "Blok/daire önüne bırakıyor musunuz?", a: "Evet, Long Beach ve diğer sitelerde daire önüne kadar bırakırız." },
      { q: "Bafra otellerine transfer var mı?", a: "Kaya Artemis, Noah's Ark ve diğer Bafra otellerine doğrudan transfer sağlıyoruz." },
      { q: "Uzun konaklamada düzenli transfer olur mu?", a: "Evet, haftalık/aylık düzenli transfer paketleri oluşturabiliriz." },
      { q: "İskele'de Vito taksi bulunur mu?", a: "Evet, gruplar ve aileler için Mercedes Vito araçlarımız mevcuttur." },
    ],
    related: { cities: ["gazimagusa-taksi", "catalkoy-taksi"], routes: ["ercan-iskele-transfer", "ercan-bafra-transfer"], services: ["kibris-vito-transfer", "ercan-havalimani-transfer"], blog: ["kibris-transfer-fiyatlari-nasil-belirlenir"] },
  }),
  city({
    slug: "lapta-taksi", kw: "Lapta Taksi", name: "Lapta", breadcrumb: "Lapta Taksi",
    metaTitle: "Lapta Taksi | Kaliteli ve Uygun | +90 548 875 7731",
    metaDescription: "Lapta taksi: sahil şeridi, oteller ve Ercan arası 7/24 Mercedes taksi & transfer. Lapta otel karşılama. Hemen WhatsApp'tan bilgi ve müsaitlik alın!",
    hero: IMG.beach2, heroAlt: "Lapta sahil kasabası ve taksi hizmeti",
    lead: "Lapta sahil şeridi, tatil siteleri ve otelleri için 7/24 konforlu Mercedes taksi ve transfer.",
    subKeywords: ["lapta ercan taksi", "lapta otel taksi", "lapta sahil taksi", "girne lapta taksi", "lapta transfer", "karşıyaka lapta taksi"],
    intro: [
      "Girne'nin batısındaki Lapta, yemyeşil dağ eteklerinin denizle buluştuğu huzurlu bir sahil kasabasıdır. Lapta taksi hizmetimizle sahil şeridi, tatil siteleri ve otelleri için 7/24 konforlu ulaşım sunuyoruz.",
      "Lapta otel taksi talebinizde tüm sahil otellerine kapıdan karşılama yaparız. Girne merkeze kısa transferler, havalimanı bağlantıları ve çevre gezileri için Mercedes araçlarımızla hizmetinizdeyiz.",
      "Doğa ve deniz tatilinizin her anında konforlu ulaşım için deneyimli şoförlerimiz yanınızda. Karşıyaka ve Alsancak yönündeki komşu yerleşimlere de kolayca ulaşırsınız.",
    ],
    sections: [
      { h2: "Lapta'da Hizmet Alanı", body: [
        "Lapta sahil yürüyüş yolu, merkez ve batı sahili otelleri çevresinde yoğun hizmet veriyoruz. Girne merkeze ve limana kısa mesafe transferleri sağlıyoruz.",
        "Çevre gezileri için günlük şoförlü araç paketlerimizle Lapta, Karşıyaka ve Girne rotasını konforla keşfedebilirsiniz.",
      ]},
    ],
    journey: { distance: "Ercan'a ≈ 55 km", duration: "≈ 50 dk", pickup: "Otel/site kapı karşılaması" },
    points: ["Lapta Sahil Yürüyüş Yolu", "Lapta Merkez", "Batı Sahili Otelleri", "Karşıyaka", "Alsancak", "Beşparmak Dağları"],
    faqs: [
      { q: "Ercan'dan Lapta'ya ne kadar sürer?", a: "Yaklaşık 50 dakikalık konforlu bir yolculuktur." },
      { q: "Lapta'dan Girne merkeze taksi var mı?", a: "Evet, Girne merkez ve limana kısa mesafe transferleri sağlıyoruz." },
      { q: "Sahil otellerine kapı transferi yapıyor musunuz?", a: "Evet, Lapta ve Karşıyaka bölgesindeki tüm otellere kapıdan transfer yaparız." },
      { q: "Gün boyu şoförlü araç kiralayabilir miyim?", a: "Evet, çevre gezileri için günlük şoförlü araç paketleri sunuyoruz." },
    ],
    related: { cities: ["karsiyaka-taksi", "alsancak-taksi", "girne-taksi"], routes: ["girne-ercan-transfer"], services: ["kibris-taksi", "kibris-gunluk-turlar"], blog: ["girne-gezi-rehberi"] },
  }),
  city({
    slug: "karsiyaka-taksi", kw: "Karşıyaka Taksi", name: "Karşıyaka", breadcrumb: "Karşıyaka Taksi",
    metaTitle: "Karşıyaka Taksi | Kaliteli ve Uygun | +90 548 875 7731",
    metaDescription: "Karşıyaka taksi: sahil, oteller ve Ercan arası 7/24 Mercedes taksi & transfer. Karşıyaka otel karşılama. Hemen WhatsApp'tan bilgi ve müsaitlik alın!",
    hero: IMG.coast, heroAlt: "Karşıyaka sahil bölgesi ve taksi hizmeti",
    lead: "Karşıyaka sahil bölgesi, oteller ve tatil siteleri için 7/24 konforlu Mercedes taksi ve transfer.",
    subKeywords: ["karşıyaka ercan taksi", "karşıyaka otel taksi", "karşıyaka sahil taksi", "girne karşıyaka taksi", "karşıyaka transfer", "lapta karşıyaka taksi"],
    intro: [
      "Girne'nin batısında, Lapta ile komşu olan Karşıyaka, sakin sahili ve gelişen tatil siteleriyle huzurlu bir yerleşimdir. Karşıyaka taksi hizmetimizle sahil bölgesi, oteller ve siteler için 7/24 konforlu ulaşım sağlıyoruz.",
      "Karşıyaka otel taksi talebinizde kapıdan karşılama yapar, Ercan Havalimanı ve Girne merkez bağlantılarınızı konforla sağlarız. Bölgeyi iyi bilen şoförlerimizle en pratik güzergâhtan seyahat edersiniz.",
      "Deniz ve doğa tatilinizde, Karşıyaka'dan Girne'ye günübirlik geziler ve çevre keşifleri için Mercedes araçlarımız yanınızda.",
    ],
    sections: [
      { h2: "Karşıyaka'da Ulaşım ve Transferler", body: [
        "Karşıyaka sahil şeridi ve tatil siteleri çevresinde kapı karşılamalı hizmet veriyoruz. Girne merkez, Lapta ve Alsancak yönüne kısa transferler sağlıyoruz.",
        "Ercan Havalimanı'na uçuş takipli transfer ve Larnaka bağlantılı ulaşım için hizmetinizdeyiz.",
      ]},
    ],
    journey: { distance: "Ercan'a ≈ 55 km", duration: "≈ 50 dk", pickup: "Otel/site kapı karşılaması" },
    points: ["Karşıyaka Sahili", "Karşıyaka Merkez", "Tatil Siteleri", "Lapta", "Alsancak", "Beşparmak Dağları"],
    faqs: [
      { q: "Ercan'dan Karşıyaka'ya ne kadar sürer?", a: "Yaklaşık 50 dakikalık konforlu bir yolculuktur." },
      { q: "Karşıyaka otel karşılaması yapıyor musunuz?", a: "Evet, tüm otel ve sitelere kapıdan karşılama ile alım yaparız." },
      { q: "Girne merkeze kısa transfer olur mu?", a: "Evet, Girne merkez ve limana konforlu kısa transferler sağlıyoruz." },
      { q: "Karşıyaka'da Vito taksi bulunur mu?", a: "Evet, aileler ve gruplar için Mercedes Vito araçlarımız mevcuttur." },
    ],
    related: { cities: ["lapta-taksi", "alsancak-taksi", "girne-taksi"], routes: ["girne-ercan-transfer"], services: ["kibris-taksi", "kibris-gunluk-turlar"], blog: ["girne-gezi-rehberi"] },
  }),
  city({
    slug: "camlibel-taksi", kw: "Çamlıbel Taksi", name: "Çamlıbel", breadcrumb: "Çamlıbel Taksi",
    metaTitle: "Çamlıbel Taksi | Kaliteli ve Uygun | +90 548 875 7731",
    metaDescription: "Çamlıbel taksi: merkez, çevre köyler ve Ercan arası 7/24 Mercedes taksi & transfer. Çamlıbel kapı karşılama. Hemen WhatsApp'tan bilgi ve müsaitlik alın!",
    hero: IMG.road2, heroAlt: "Çamlıbel bölgesi ve taksi hizmeti",
    lead: "Çamlıbel merkez, çevre köyler ve tatil bölgeleri için 7/24 konforlu Mercedes taksi ve transfer.",
    subKeywords: ["çamlıbel ercan taksi", "çamlıbel transfer", "girne çamlıbel taksi", "çamlıbel otel taksi", "güzelyurt çamlıbel taksi", "çamlıbel sahil taksi"],
    intro: [
      "Girne ile Güzelyurt arasında, doğal güzellikleriyle öne çıkan Çamlıbel, sakin yaşamın ve tatil sitelerinin adresidir. Çamlıbel taksi hizmetimizle merkez, çevre köyler ve tatil bölgeleri için 7/24 konforlu ulaşım sağlıyoruz.",
      "Çamlıbel transfer talebinizde Ercan Havalimanı, Girne merkez ve Güzelyurt bağlantılarınızı konforla planlarız. Bölgeyi iyi bilen şoförlerimizle en kısa güzergâhtan seyahat edersiniz.",
      "Doğa ve huzur arayanlar için ideal olan Çamlıbel'den, çevre gezileri ve günübirlik turlar için Mercedes araçlarımız hizmetinizdedir.",
    ],
    sections: [
      { h2: "Çamlıbel'de Ulaşım ve Transferler", body: [
        "Çamlıbel merkez ve çevresindeki tatil siteleri ile köylerde kapı karşılamalı hizmet veriyoruz. Girne, Lapta ve Güzelyurt yönüne konforlu transferler sağlıyoruz.",
        "Ercan Havalimanı'na uçuş takipli transfer ile terminalden doğrudan Çamlıbel'deki adresinize ulaşırsınız.",
      ]},
    ],
    journey: { distance: "Ercan'a ≈ 65 km", duration: "≈ 55 dk", pickup: "Adres kapı karşılaması" },
    points: ["Çamlıbel Merkez", "Tatil Siteleri", "Güzelyurt yolu", "Lapta", "Girne", "Beşparmak Dağları"],
    faqs: [
      { q: "Ercan'dan Çamlıbel'e ne kadar sürer?", a: "Yaklaşık 55 dakikalık konforlu bir yolculuktur." },
      { q: "Çamlıbel'den Girne'ye transfer var mı?", a: "Evet, Girne merkez ve limana konforlu transferler sağlıyoruz." },
      { q: "Kapıdan alım yapıyor musunuz?", a: "Evet, adresinizden veya otelinizden kapı karşılaması ile alım yaparız." },
      { q: "Çamlıbel'de Vito taksi bulunur mu?", a: "Evet, aileler ve gruplar için Mercedes Vito araçlarımız mevcuttur." },
    ],
    related: { cities: ["lapta-taksi", "karsiyaka-taksi", "girne-taksi"], routes: ["girne-ercan-transfer"], services: ["kibris-taksi", "kibris-gunluk-turlar"], blog: ["kktc-ulasim-ipuclari"] },
  }),
  city({
    slug: "alsancak-taksi", kw: "Alsancak Taksi", name: "Alsancak", breadcrumb: "Alsancak Taksi",
    metaTitle: "Alsancak Taksi | Otel Transfer | +90 548 875 7731",
    metaDescription: "Alsancak taksi: Merit, Escape Beach otelleri ve Ercan arası 7/24 Mercedes taksi & transfer. Otel karşılama & casino transferi. WhatsApp'tan bilgi alın!",
    hero: IMG.beach, heroAlt: "Alsancak oteller bölgesi ve transfer hizmeti",
    lead: "Merit otelleri, Escape Beach ve Alsancak sahil tesisleri için 7/24 konforlu Mercedes taksi ve transfer.",
    subKeywords: ["merit alsancak taksi", "escape beach taksi", "alsancak ercan taksi", "alsancak otel taksi", "alsancak casino transfer", "alsancak sahil taksi"],
    intro: [
      "Alsancak, Girne'nin en canlı otel ve tatil bölgelerinden biridir. Merit otelleri, Escape Beach ve çok sayıda tatil sitesine ev sahipliği yapan bölgede, Alsancak taksi hizmetimizle 7/24 otel karşılama ve transfer sunuyoruz.",
      "Alsancak otel taksi talebinizde resepsiyon veya lobiden karşılama ile alım yaparız. Havalimanından otelinize sorunsuz varış, Girne merkeze eğlence transferleri ve sahil boyunca konforlu ulaşım hizmetinizdedir.",
      "Merit ve diğer otel casinolarına gece dahil 7/24 transfer sağlıyoruz. Grup transferleri için Mercedes Vito ve minibüs seçeneklerimizle her ihtiyaca cevap veriyoruz.",
    ],
    sections: [
      { h2: "Alsancak Otel ve Casino Transferleri", body: [
        "Merit Royal, Merit Crystal Cove, Escape Beach ve Malpas gibi tesislere kapıdan karşılama ile hizmet veriyoruz. Alsancak casino transfer taleplerinizde gece geç saatler dahil güvenli ulaşım sağlıyoruz.",
        "Girne merkeze eğlence ve alışveriş transferleri için kısa mesafe hizmetimiz mevcuttur.",
      ]},
    ],
    journey: { distance: "Ercan'a ≈ 50 km", duration: "≈ 45-50 dk", pickup: "Otel lobisi karşılaması" },
    points: ["Merit Otelleri", "Escape Beach", "Alsancak Merkez", "Riverside", "Malpas Otel", "Girne Batı Sahili"],
    faqs: [
      { q: "Ercan'dan Alsancak otellerine ne kadar sürer?", a: "Yaklaşık 45-50 dakikalık doğrudan bir transferdir." },
      { q: "Otel resepsiyonundan alım yapıyor musunuz?", a: "Evet, otel önünden veya lobiden karşılama ile alım yaparız." },
      { q: "Casino ve gece transferi olur mu?", a: "Evet, Merit ve diğer otel casinolarına gece dahil 7/24 transfer sağlıyoruz." },
      { q: "Grup transferi için araç var mı?", a: "Evet, Mercedes Vito ve minibüs seçenekleriyle grup transferleri düzenliyoruz." },
    ],
    related: { cities: ["lapta-taksi", "girne-taksi", "catalkoy-taksi", "karsiyaka-taksi"], routes: ["ercan-merit-royal-transfer"], services: ["vip-transfer", "kibris-vito-transfer"], blog: ["girne-gezi-rehberi"] },
  }),
  city({
    slug: "catalkoy-taksi", kw: "Çatalköy Taksi", name: "Çatalköy", breadcrumb: "Çatalköy Taksi",
    metaTitle: "Çatalköy Taksi | Acapulco & Villa | +90 548 875 7731",
    metaDescription: "Çatalköy taksi: Acapulco Resort, villalar ve Ercan arası 7/24 Mercedes taksi & transfer. Villa kapı karşılaması. Hemen WhatsApp'tan bilgi alın!",
    hero: IMG.road2, heroAlt: "Çatalköy villa bölgesi ve taksi hizmeti",
    lead: "Acapulco Resort, Çatalköy villaları ve oteller için 7/24 konforlu Mercedes taksi ve transfer.",
    subKeywords: ["acapulco taksi", "çatalköy villa taksi", "çatalköy ercan taksi", "çatalköy otel taksi", "catalkoy taxi", "çatalköy sahil taksi"],
    intro: [
      "Girne'nin doğusundaki Çatalköy, lüks villaları ve Acapulco Resort ile öne çıkan sakin bir yerleşimdir. Çatalköy taksi hizmetimizle villa, site ve oteller için 7/24 konforlu ulaşım sunuyoruz.",
      "Çatalköy villa taksi talebinizde tüm villa ve site adreslerine kapıdan alım/bırakma yaparız. Havalimanı karşılamasından Girne merkeze, sahil otellerinden özel villalara kadar her adrese ulaşırız.",
      "Acapulco Resort misafirleri için lobiden isim tabelasıyla karşılama sağlıyoruz. Girne limanı ve merkeze kısa mesafe transferleri de hizmetlerimiz arasındadır.",
    ],
    sections: [
      { h2: "Çatalköy Villa ve Otel Transferleri", body: [
        "Çatalköy'deki tüm villa ve site adreslerine kapıdan hizmet veriyoruz. Acapulco Resort lobisinden karşılama ve otel transferleri sağlıyoruz.",
        "Girne merkez, liman ve Bellapais yönüne kısa mesafe transferleri düzenliyoruz.",
      ]},
    ],
    journey: { distance: "Ercan'a ≈ 50 km", duration: "≈ 45 dk", pickup: "Villa/otel kapı karşılaması" },
    points: ["Acapulco Resort", "Çatalköy Merkez", "Villa Bölgeleri", "Girne Doğu Sahili", "Bellapais yolu", "Beşparmak"],
    faqs: [
      { q: "Ercan'dan Çatalköy Acapulco'ya ne kadar sürer?", a: "Yaklaşık 45 dakikalık doğrudan bir transferdir." },
      { q: "Villa adresine kapı transferi yapıyor musunuz?", a: "Evet, Çatalköy'deki tüm villa ve site adreslerine kapıdan alım/bırakma yaparız." },
      { q: "Acapulco Resort'a otel karşılaması var mı?", a: "Evet, Acapulco Resort lobisinden isim tabelasıyla karşılama sağlıyoruz." },
      { q: "Girne merkeze kısa transfer olur mu?", a: "Evet, Girne limanı ve merkeze kısa mesafe transferleri düzenliyoruz." },
    ],
    related: { cities: ["girne-taksi", "bellapais-taksi", "alsancak-taksi"], routes: ["ercan-acapulco-transfer"], services: ["vip-transfer", "kibris-gunluk-turlar"], blog: ["girne-gezi-rehberi"] },
  }),
  city({
    slug: "bellapais-taksi", kw: "Bellapais Taksi", name: "Bellapais", breadcrumb: "Bellapais Taksi",
    metaTitle: "Bellapais Taksi | Manastır & Girne | +90 548 875 7731",
    metaDescription: "Bellapais taksi: manastır, köy restoranları ve Ercan arası 7/24 Mercedes taksi & transfer. Turistik gezi & otel transferi. WhatsApp'tan bilgi alın!",
    hero: IMG.walls2, heroAlt: "Bellapais manastır köyü ve taksi hizmeti",
    lead: "Bellapais Manastırı, köy restoranları ve çevre oteller için 7/24 konforlu Mercedes taksi ve transfer.",
    subKeywords: ["bellapais manastırı taksi", "bellapais köy taksi", "bellapais ercan taksi", "girne bellapais taksi", "bellapais restoran taksi", "bellapais tur taksi"],
    intro: [
      "Beşparmak Dağları'nın eteğinde, manastırı ve taş sokaklarıyla ünlü Bellapais, Kıbrıs'ın en romantik köyüdür. Bellapais taksi hizmetimizle manastır, köy restoranları ve çevredeki oteller için 7/24 ulaşım sağlıyoruz.",
      "Bellapais manastırı taksi talebinizde manzaralı köy yollarında konforlu ulaşım, Girne merkeze kısa transferler ve havalimanı bağlantıları için profesyonel şoförlerle güvenli yolculuk sunuyoruz.",
      "Köy restoranlarına akşam yemeği için gidiş-dönüş transferi ve manastır gezisi için bekleme dahil şoförlü araç hizmeti veriyoruz.",
    ],
    sections: [
      { h2: "Bellapais Gezi ve Restoran Transferleri", body: [
        "Bellapais Manastırı ve köy turu için bekleme dahil şoförlü araç sağlıyoruz. Köydeki manzaralı restoranlara akşam gidiş-dönüş transferi düzenliyoruz.",
        "Girne merkezden Bellapais'e kısa ve konforlu transfer ile tarihi köyü rahatça keşfedersiniz.",
      ]},
    ],
    journey: { distance: "Ercan'a ≈ 50 km", duration: "≈ 45 dk", pickup: "Köy/otel kapı karşılaması" },
    points: ["Bellapais Manastırı", "Bellapais Köyü", "Beşparmak Dağları", "Girne Merkez", "Ozanköy", "Ağırdağ"],
    faqs: [
      { q: "Ercan'dan Bellapais'e ne kadar sürer?", a: "Yaklaşık 45 dakikalık manzaralı bir yolculuktur." },
      { q: "Manastır gezisi için araç olur mu?", a: "Evet, manastır ve köy turu için bekleme dahil şoförlü araç sağlıyoruz." },
      { q: "Köy restoranlarına akşam transferi var mı?", a: "Evet, akşam yemeği için gidiş-dönüş transfer düzenliyoruz." },
      { q: "Girne'den Bellapais'e kısa transfer olur mu?", a: "Evet, Girne'den Bellapais'e kısa ve konforlu transfer sağlıyoruz." },
    ],
    related: { cities: ["girne-taksi", "catalkoy-taksi"], routes: ["ercan-girne-taksi"], services: ["kibris-gunluk-turlar", "kibris-taksi"], blog: ["girne-gezi-rehberi"] },
  }),
  city({
    slug: "gau-taksi", kw: "GAÜ Taksi", name: "GAÜ (Girne Amerikan Üniversitesi)", breadcrumb: "GAÜ Taksi",
    metaTitle: "GAÜ Taksi | Öğrenci Transfer | +90 548 875 7731",
    metaDescription: "GAÜ taksi: Girne Amerikan Üniversitesi kampüs, yurtlar ve Ercan arası 7/24 Mercedes öğrenci taksi & transfer. WhatsApp'tan bilgi ve müsaitlik alın!",
    hero: IMG.cityscape, heroAlt: "GAÜ Girne Amerikan Üniversitesi öğrenci taksi hizmeti",
    lead: "Girne Amerikan Üniversitesi kampüs, yurtlar ve Ercan arası 7/24 konforlu öğrenci taksi ve transfer.",
    subKeywords: ["gaü öğrenci taksi", "girne amerikan üniversitesi taksi", "gaü ercan transfer", "gaü kampüs taksi", "gaü yurt taksi", "gaü havalimanı taksi"],
    intro: [
      "GAÜ (Girne Amerikan Üniversitesi), Karmi/Karaoğlanoğlu bölgesinde yer alan köklü bir kampüstür. GAÜ taksi hizmetimizle kampüs, yurtlar ve şehir merkezi arasında 7/24 güvenli öğrenci ulaşımı sağlıyoruz.",
      "GAÜ öğrenci taksi talebinizde dönem başı gelişlerde ve dönem sonu dönüşlerde Ercan Havalimanı karşılaması yaparız. Aileler kampüs ziyaretlerinde konforlu Mercedes araçlarımızla karşılanır.",
      "Kampüs-Girne merkez, kampüs-liman ve kampüs-havalimanı güzergâhlarında düzenli ve uygun ulaşım için yanınızdayız.",
    ],
    sections: [
      { h2: "GAÜ Öğrenci ve Havalimanı Transferleri", body: [
        "Dönem başı ve sonu yoğunluğunda Ercan Havalimanı'ndan kampüs ve yurtlara uçuş takipli karşılama yapıyoruz. GAÜ yurt taksi ile öğrenciler yurtları ve kampüs arasında güvenle ulaşır.",
        "Aile ziyaretleri ve mezuniyet törenleri için grup transferleri düzenliyoruz.",
      ]},
    ],
    journey: { distance: "Ercan'a ≈ 50 km", duration: "≈ 45-50 dk", pickup: "Kampüs/yurt kapı karşılaması" },
    points: ["GAÜ Kampüsü", "Öğrenci Yurtları", "Karaoğlanoğlu", "Girne Merkez", "Girne Limanı", "Ercan Havalimanı"],
    faqs: [
      { q: "GAÜ kampüsüne havalimanından transfer var mı?", a: "Evet, Ercan Havalimanı'ndan uçuş takipli karşılama ile kampüs ve yurtlara transfer sağlıyoruz." },
      { q: "Öğrenciler için düzenli taksi olur mu?", a: "Evet, kampüs-yurt-merkez güzergâhlarında düzenli ve uygun öğrenci ulaşımı sunuyoruz." },
      { q: "Aile ziyaretinde araç ayarlıyor musunuz?", a: "Evet, aile ziyaretleri ve tören günlerinde konforlu araç ve grup transferi sağlıyoruz." },
      { q: "GAÜ'den Girne merkeze taksi ne kadar sürer?", a: "Kısa bir mesafe olup birkaç dakikada Girne merkez ve limana ulaşırsınız." },
    ],
    related: { cities: ["girne-taksi", "alsancak-taksi", "lefkosa-taksi"], routes: ["ercan-girne-taksi"], services: ["kibris-taksi", "ercan-havalimani-transfer"], blog: ["kktc-ulasim-ipuclari"] },
  }),
];

// helper to build a route page object compactly
function route(o) { return { type: "route", ...o }; }

export const ROUTES = [
  route({
    slug: "ercan-girne-taksi", kw: "Ercan Girne Taksi", name: "Ercan → Girne Taksi", breadcrumb: "Ercan → Girne Taksi",
    from: "Ercan Havalimanı", to: "Girne", isAirport: true,
    metaTitle: "Ercan Girne Taksi | Uçuş Takipli | +90 548 875 7731",
    metaDescription: "Ercan Girne taksi & transfer: uçuş takipli karşılama, ≈40 dk konforlu Mercedes yolculuk. İsim tabelalı karşılama. Hemen WhatsApp'tan bilgi alın!",
    hero: IMG.heroHarbour, heroAlt: "Ercan Havalimanı Girne taksi transfer güzergâhı",
    lead: "Ercan Havalimanı'ndan Girne'ye uçuş takipli, isim tabelalı karşılama ile ≈40 dakikalık konforlu Mercedes transfer.",
    subKeywords: ["ercan girne transfer", "ercan havalimanı girne taksi", "girne havalimanı transfer", "ercan girne mesafe", "ercan girne vito transfer"],
    intro: [
      "Ercan Havalimanı'ndan Girne'ye en konforlu ulaşım yöntemi özel transferdir. Ercan Girne taksi hizmetimizde şoförünüz uçuşunuzu takip eder, siz terminale iner inmez isim tabelanızla sizi karşılar ve doğrudan Girne'deki adresinize ulaştırır.",
      "Yaklaşık 45 km'lik bu güzergâhı klimalı ve geniş bagajlı Mercedes aracımızla, ortalama 40 dakikada kat edersiniz. Gece geç saatteki uçuşlar dahil 7/24 hizmet veririz.",
      "Ercan Girne transfer talebinizde ailelere ve gruplara Mercedes Vito, bireysel yolculara ise E-Class seçeneği sunuyoruz. Bebek koltuğu ve ek durak talepleriniz önceden ayarlanır.",
    ],
    sections: [
      { h2: "Karşılama ve Yolculuk Deneyimi", body: [
        "Dış hatlar çıkışında isim tabelalı karşılamayla buluşur, bagajlarınızın yerleştirilmesinin ardından doğrudan Girne'ye hareket ederiz. Yol boyunca Beşparmak Dağları'nın eşsiz manzarası size eşlik eder.",
        "Uçuş takibi sayesinde rötar durumunda ek kaygı yaşamazsınız; şoförünüz gerçek iniş saatinize göre hazır olur.",
      ]},
    ],
    journey: { distance: "≈ 45 km", duration: "≈ 40 dk", pickup: "Dış hatlar çıkışı, isim tabelalı karşılama" },
    points: ["Girne Merkez", "Girne Limanı", "Oteller Bölgesi", "Bellapais", "Karaoğlanoğlu", "Zeytinlik"],
    faqs: [
      { q: "Ercan'dan Girne'ye taksi kaç dakika?", a: "Trafiğe göre yaklaşık 35-45 dakikadır." },
      { q: "Ücret nasıl belirlenir?", a: "Yolculuğunuz taksimetre ile şeffaf biçimde ücretlendirilir. Yaklaşık bilgi için WhatsApp'tan ulaşın." },
      { q: "Rötar olursa beklersiniz mi?", a: "Evet, uçuşunuzu ücretsiz takip eder, rötarda ek kaygı yaşatmadan bekleriz." },
      { q: "Ercan Girne Vito transfer var mı?", a: "Evet, aileler ve gruplar için Mercedes Vito ile transfer sağlıyoruz." },
    ],
    related: { cities: ["girne-taksi", "bellapais-taksi", "alsancak-taksi"], routes: ["girne-ercan-transfer", "ercan-merit-royal-transfer"], services: ["ercan-havalimani-transfer", "kibris-vito-transfer"], blog: ["ercan-havalimani-transfer-rehberi"] },
  }),
  route({
    slug: "girne-ercan-transfer", kw: "Girne Ercan Transfer", name: "Girne → Ercan Transfer", breadcrumb: "Girne → Ercan Transfer",
    from: "Girne", to: "Ercan Havalimanı", isAirport: true,
    metaTitle: "Girne Ercan Transfer | Havalimanı | +90 548 875 7731",
    metaDescription: "Girne Ercan transfer: otelinizden zamanında alım, ≈40 dk konforlu Mercedes yolculuk. Uçuşunuzu kaçırmayın. Hemen WhatsApp'tan bilgi ve müsaitlik alın!",
    hero: IMG.airport, heroAlt: "Girne Ercan Havalimanı transfer güzergâhı",
    lead: "Girne'deki otelinizden Ercan Havalimanı'na zamanında, konforlu ve güvenli Mercedes transfer.",
    subKeywords: ["girne ercan taksi", "girne havalimanı transfer", "girne ercan mesafe", "girne çıkış transfer", "girne ercan vito"],
    intro: [
      "Girne'deki otelinizden veya adresinizden Ercan Havalimanı'na zamanında ve konforlu dönüş için Girne Ercan transfer hizmetimizi tercih edin. Uçuş saatinize göre alım zamanınızı planlar, sizi telaşsızca havalimanına ulaştırırız.",
      "Yaklaşık 40 dakikalık bu yolculukta bagaj ve yolcu sayınıza uygun Mercedes aracı önceden ayarlarız. Erken sabah uçuşları için de 7/24 hizmet veririz.",
      "Girne Ercan taksi talebinizde otel lobisinden karşılama yapar, uçuş öncesi stresi ortadan kaldırırız.",
    ],
    sections: [
      { h2: "Zamanında Alım ve Konfor", body: [
        "İç hat için 2, dış hat için 2,5-3 saat öncesini önerir; alım saatinizi biz planlarız. Otel lobisi veya belirttiğiniz adresten kapıdan alım yaparız.",
        "Deneyimli şoförlerimiz en uygun güzergâhı seçerek sizi zamanında havalimanına ulaştırır.",
      ]},
    ],
    journey: { distance: "≈ 45 km", duration: "≈ 40 dk", pickup: "Otel/adres kapı alımı" },
    points: ["Girne otelleri", "Girne merkez", "Alsancak", "Çatalköy", "Lapta", "Ercan Havalimanı"],
    faqs: [
      { q: "Uçuşumdan ne kadar önce yola çıkmalıyım?", a: "İç hat için 2, dış hat için 2,5-3 saat öncesini öneririz; alım saatinizi biz planlarız." },
      { q: "Otel önünden alım yapıyor musunuz?", a: "Evet, otel lobisi veya belirttiğiniz adresten kapıdan alım yaparız." },
      { q: "Sabah erken saatte transfer var mı?", a: "Evet, 7/24 hizmet veriyoruz; en erken uçuşlar için bile hazırız." },
      { q: "Grup için Vito transfer olur mu?", a: "Evet, aileler ve gruplar için Mercedes Vito ile transfer sağlıyoruz." },
    ],
    related: { cities: ["girne-taksi", "lapta-taksi", "alsancak-taksi"], routes: ["ercan-girne-taksi"], services: ["ercan-havalimani-transfer", "kibris-transfer"], blog: ["ercan-havalimani-transfer-rehberi"] },
  }),
  route({
    slug: "ercan-lefkosa-taksi", kw: "Ercan Lefkoşa Taksi", name: "Ercan → Lefkoşa Taksi", breadcrumb: "Ercan → Lefkoşa Taksi",
    from: "Ercan Havalimanı", to: "Lefkoşa", isAirport: true,
    metaTitle: "Ercan Lefkoşa Taksi | 20 dk | +90 548 875 7731",
    metaDescription: "Ercan Lefkoşa taksi & transfer: sadece ≈20 dk, uçuş takipli karşılama, konforlu Mercedes yolculuk. Başkente en hızlı ulaşım. WhatsApp'tan bilgi alın!",
    hero: IMG.cityscape, heroAlt: "Ercan Havalimanı Lefkoşa taksi transfer güzergâhı",
    lead: "Ercan Havalimanı'ndan Lefkoşa'ya sadece ≈20 dakikada uçuş takipli, konforlu Mercedes transfer.",
    subKeywords: ["ercan lefkoşa transfer", "ercan nicosia taxi", "lefkoşa havalimanı transfer", "ercan lefkoşa mesafe", "ercan lefkoşa vito"],
    intro: [
      "Lefkoşa, Ercan Havalimanı'na en yakın şehirdir. Ercan Lefkoşa taksi hizmetimizde şoförünüz sizi terminalde karşılar ve yalnızca 20 dakikada başkentteki adresinize ulaştırır. İş toplantısı, üniversite veya resmi randevu için ideal, dakik bir çözümdür.",
      "Uçuş takibi ve 7/24 hizmet ile Ercan-Lefkoşa arası ulaşımınızı stressiz hale getiriyoruz. Yakın Doğu Üniversitesi ve diğer kampüslere doğrudan kapı transferi yaparız.",
      "Ercan Lefkoşa transfer talebinizde bireysel yolculara E-Class, gruplara Mercedes Vito seçeneği sunuyoruz.",
    ],
    sections: [
      { h2: "En Kısa Havalimanı Güzergâhı", body: [
        "Sadece ≈15 km'lik mesafeyle Ercan-Lefkoşa, KKTC'nin en kısa havalimanı güzergâhıdır. Kısa sürede ve konforla başkente ulaşırsınız.",
        "Üniversite kampüsleri, hastaneler ve devlet daireleri için randevu saatinize uygun ulaşım sağlarız.",
      ]},
    ],
    journey: { distance: "≈ 15 km", duration: "≈ 20 dk", pickup: "Dış hatlar çıkışı, isim tabelalı karşılama" },
    points: ["Lefkoşa Merkez", "Surlariçi", "Yakın Doğu Üniversitesi", "Dereboyu", "Devlet Hastanesi", "Girne Kapısı"],
    faqs: [
      { q: "Ercan'dan Lefkoşa'ya kaç dakika?", a: "Yaklaşık 15-20 dakikadır; KKTC'nin en kısa havalimanı güzergâhıdır." },
      { q: "Üniversite kampüsüne bırakıyor musunuz?", a: "Evet, Yakın Doğu ve diğer kampüslere doğrudan kapı transferi yaparız." },
      { q: "Ücret neye göre belirleniyor?", a: "Yolculuğunuz taksimetre ile şeffaf biçimde ücretlendirilir. Bilgi için WhatsApp'tan yazın." },
      { q: "Gece iniş için transfer var mı?", a: "Evet, 7/24 karşılama sağlıyoruz; gece uçuşları dahil." },
    ],
    related: { cities: ["lefkosa-taksi", "gau-taksi"], routes: ["ercan-girne-taksi"], services: ["ercan-havalimani-transfer", "kibris-taksi"], blog: ["ercan-havalimani-transfer-rehberi"] },
  }),
  route({
    slug: "ercan-iskele-transfer", kw: "Ercan İskele Transfer", name: "Ercan → İskele Transfer", breadcrumb: "Ercan → İskele Transfer",
    from: "Ercan Havalimanı", to: "İskele / Long Beach", isAirport: true,
    metaTitle: "Ercan İskele Transfer | Long Beach | +90 548 875 7731",
    metaDescription: "Ercan İskele Long Beach transfer: site/otel kapısına ≈50 dk konforlu Mercedes yolculuk, uçuş takipli karşılama. Rezidans transferi. WhatsApp'tan bilgi alın!",
    hero: IMG.beach, heroAlt: "Ercan İskele Long Beach transfer güzergâhı",
    lead: "Ercan Havalimanı'ndan İskele Long Beach'e site/otel kapısına ≈50 dakikalık uçuş takipli Mercedes transfer.",
    subKeywords: ["ercan long beach transfer", "iskele havalimanı taksi", "ercan iskele mesafe", "long beach rezidans transfer", "ercan iskele vito"],
    intro: [
      "İskele ve Long Beach bölgesindeki rezidans ve otellere Ercan Havalimanı'ndan doğrudan, aktarmasız transfer sunuyoruz. Ercan İskele transfer hizmetimizde şoförünüz sizi karşılar ve site/otel kapınıza kadar konforla ulaştırır.",
      "Yaklaşık 55 km'lik güzergâhı ortalama 50 dakikada, uçuş takibi güvencesiyle tamamlarız. Uzun konaklamalar için düzenli transfer paketleri de mevcuttur.",
      "Long Beach'teki tüm sitelerde blok/daire önüne kadar bırakma yaparız. Gruplar için Mercedes Vito ile tek araçta konforlu ulaşım sağlıyoruz.",
    ],
    sections: [
      { h2: "Long Beach Rezidans ve Otel Transferleri", body: [
        "Site içi kapı transferi ile valizlerinizi taşıma derdi olmadan dairenize ulaşırsınız. Bafra otellerine devam eden yolcularımıza da doğrudan transfer sağlıyoruz.",
        "Uzun süreli konaklamalarda haftalık/aylık düzenli transfer planlayabiliriz.",
      ]},
    ],
    journey: { distance: "≈ 55 km", duration: "≈ 50-55 dk", pickup: "Site/daire önü kapı karşılaması" },
    points: ["Long Beach", "İskele Merkez", "Boğaz", "Bafra", "Kaya Artemis", "Noah's Ark"],
    faqs: [
      { q: "Ercan'dan Long Beach'e ne kadar sürer?", a: "Yaklaşık 50-55 dakikadır; site içi kapı transferi dahildir." },
      { q: "Blok/daire önüne bırakıyor musunuz?", a: "Evet, Long Beach ve diğer sitelerde daire önüne kadar bırakırız." },
      { q: "Gece iniş için transfer var mı?", a: "Evet, 7/24 karşılama sağlıyoruz; gece uçuşları dahil." },
      { q: "Grup için Vito transfer olur mu?", a: "Evet, aileler ve gruplar için Mercedes Vito ile tek araçta transfer sağlıyoruz." },
    ],
    related: { cities: ["iskele-taksi", "gazimagusa-taksi"], routes: ["ercan-bafra-transfer"], services: ["kibris-vito-transfer", "ercan-havalimani-transfer"], blog: ["kibris-transfer-fiyatlari-nasil-belirlenir"] },
  }),
  route({
    slug: "ercan-bafra-transfer", kw: "Ercan Bafra Transfer", name: "Ercan → Bafra Transfer", breadcrumb: "Ercan → Bafra Transfer",
    from: "Ercan Havalimanı", to: "Bafra Oteller Bölgesi", isAirport: true,
    metaTitle: "Ercan Bafra Transfer | Kaya Artemis | +90 548 875 7731",
    metaDescription: "Ercan Bafra transfer: Kaya Artemis, Noah's Ark ve tüm Bafra otellerine ≈65 dk konforlu Mercedes transfer, uçuş takipli karşılama. WhatsApp'tan bilgi alın!",
    hero: IMG.beach2, heroAlt: "Ercan Bafra otelleri transfer güzergâhı",
    lead: "Ercan Havalimanı'ndan Bafra otellerine (Kaya Artemis, Noah's Ark) ≈65 dakikalık uçuş takipli Mercedes transfer.",
    subKeywords: ["kaya artemis transfer", "bafra otel taksi", "bafra havalimanı transfer", "ercan bafra mesafe", "noah's ark transfer", "bafra vito transfer"],
    intro: [
      "Bafra oteller bölgesindeki Kaya Artemis, Noah's Ark, Concorde ve diğer 5 yıldızlı otellere Ercan Havalimanı'ndan doğrudan transfer sağlıyoruz. Ercan Bafra transfer hizmetimizde şoförünüz sizi terminalde karşılar, otel lobinize kadar ulaştırır.",
      "Yaklaşık 80 km'lik uzun güzergâhta bile konforlu ve klimalı Mercedes araçlarımızla yolculuğunuz keyifli geçer. Tatilinize dinlenmiş başlarsınız.",
      "Aileler ve gruplar için Mercedes Vito ile tek araçta konforlu ulaşım sağlıyoruz. Bebek koltuğu talepleriniz önceden ayarlanır.",
    ],
    sections: [
      { h2: "Bafra Otellerine Doğrudan Transfer", body: [
        "Kaya Artemis, Noah's Ark, Concorde Luxury Resort ve bölgedeki tüm otellere lobiye kadar transfer düzenliyoruz. Uçuş takibi ile terminalde isim tabelalı karşılama standarttır.",
        "Grup transferlerinde birden fazla araçla eşzamanlı organizasyon yapabiliriz.",
      ]},
    ],
    journey: { distance: "≈ 80 km", duration: "≈ 65-70 dk", pickup: "Dış hatlar çıkışı, isim tabelalı karşılama" },
    points: ["Kaya Artemis", "Noah's Ark", "Concorde Resort", "Bafra Merkez", "İskele", "Long Beach"],
    faqs: [
      { q: "Ercan'dan Bafra'ya ne kadar sürer?", a: "Yaklaşık 1 saat - 1 saat 10 dakikadır." },
      { q: "Hangi otellere transfer yapıyorsunuz?", a: "Kaya Artemis, Noah's Ark, Concorde Luxury Resort ve bölgedeki tüm otellere transfer sağlıyoruz." },
      { q: "Grup ve aile için araç var mı?", a: "Evet, Mercedes Vito ve minibüs ile grup transferleri düzenliyoruz." },
      { q: "Rötar olursa beklersiniz mi?", a: "Evet, uçuşunuzu ücretsiz takip eder, gerçek iniş saatinize göre karşılarız." },
    ],
    related: { cities: ["iskele-taksi", "gazimagusa-taksi"], routes: ["ercan-iskele-transfer"], services: ["kibris-vito-transfer", "kibris-transfer"], blog: ["kibris-transfer-fiyatlari-nasil-belirlenir"] },
  }),
  route({
    slug: "ercan-acapulco-transfer", kw: "Ercan Acapulco Transfer", name: "Ercan → Acapulco Transfer", breadcrumb: "Ercan → Acapulco Transfer",
    from: "Ercan Havalimanı", to: "Acapulco Resort", isAirport: true,
    metaTitle: "Ercan Acapulco Transfer | 40 dk | +90 548 875 7731",
    metaDescription: "Ercan Acapulco Resort transfer: ≈40 dk konforlu Mercedes yolculuk, uçuş takipli otel karşılaması, lobiden isim tabelası. Hemen WhatsApp'tan bilgi alın!",
    hero: IMG.road2, heroAlt: "Ercan Acapulco Resort transfer güzergâhı",
    lead: "Ercan Havalimanı'ndan Çatalköy'deki Acapulco Resort'a ≈40 dakikalık uçuş takipli Mercedes transfer.",
    subKeywords: ["acapulco resort taksi", "çatalköy transfer", "acapulco havalimanı transfer", "ercan acapulco mesafe", "acapulco vito transfer"],
    intro: [
      "Çatalköy'deki Acapulco Resort Hotel'e Ercan Havalimanı'ndan doğrudan, konforlu transfer sunuyoruz. Ercan Acapulco transfer hizmetimizde şoförünüz uçuşunuzu takip eder ve sizi otel lobisinde isim tabelasıyla karşılar.",
      "Yaklaşık 40 dakikalık bu keyifli yolculukta klimalı ve konforlu Mercedes araçlarımızla seyahat edersiniz. 7/24 hizmet sunar, gece inişlerde de karşılama yaparız.",
      "Aileler için çocuk koltuğu ve ek bagaj talepleriniz önceden ayarlanır. Gruplar için Mercedes Vito seçeneği mevcuttur.",
    ],
    sections: [
      { h2: "Acapulco Resort Karşılaması", body: [
        "Otel lobisinde isim tabelalı karşılama ile buluşur, giriş işlemleriniz öncesinde rahat bir varış sağlarız. Gidiş-dönüş transferini tek talepte planlayabilirsiniz.",
        "Çatalköy'deki villalara ve çevre otellere de doğrudan transfer yapıyoruz.",
      ]},
    ],
    journey: { distance: "≈ 40 km", duration: "≈ 40 dk", pickup: "Otel lobisi isim tabelalı karşılama" },
    points: ["Acapulco Resort", "Çatalköy", "Girne Doğu Sahili", "Bellapais", "Girne Merkez", "Ercan Havalimanı"],
    faqs: [
      { q: "Ercan'dan Acapulco'ya ne kadar sürer?", a: "Yaklaşık 40 dakikalık doğrudan bir transferdir." },
      { q: "Otel lobisinden karşılama var mı?", a: "Evet, Acapulco Resort lobisinde isim tabelasıyla karşılama sağlıyoruz." },
      { q: "Dönüş transferi de ayarlıyor musunuz?", a: "Evet, gidiş-dönüş transferi tek talepte planlayabilirsiniz." },
      { q: "Grup için Vito transfer olur mu?", a: "Evet, aileler ve gruplar için Mercedes Vito ile transfer sağlıyoruz." },
    ],
    related: { cities: ["catalkoy-taksi", "girne-taksi"], routes: ["ercan-girne-taksi", "cratos-otel-taksi"], services: ["vip-transfer", "ercan-havalimani-transfer"], blog: ["girne-gezi-rehberi"] },
  }),
  route({
    slug: "ercan-merit-royal-transfer", kw: "Ercan Merit Royal Transfer", name: "Ercan → Merit Royal Transfer", breadcrumb: "Ercan → Merit Royal Transfer",
    from: "Ercan Havalimanı", to: "Merit Royal (Alsancak)", isAirport: true,
    metaTitle: "Ercan Merit Royal Transfer | VIP | +90 548 875 7731",
    metaDescription: "Ercan Merit Royal / Crystal Cove transfer: ≈45 dk VIP Mercedes karşılama, uçuş takibi. Casino ve otel misafirlerine özel. Hemen WhatsApp'tan bilgi alın!",
    hero: IMG.vito2, heroAlt: "Ercan Merit Royal VIP transfer güzergâhı",
    lead: "Ercan Havalimanı'ndan Merit Royal / Crystal Cove'a ≈45 dakikalık VIP Mercedes karşılama ve transfer.",
    subKeywords: ["merit royal taksi", "crystal cove transfer", "merit alsancak transfer", "ercan merit mesafe", "merit royal vip transfer"],
    intro: [
      "Alsancak'taki Merit Royal, Merit Crystal Cove ve çevre otellere Ercan Havalimanı'ndan VIP transfer sunuyoruz. Ercan Merit Royal transfer hizmetimizde lüks Mercedes aracınız ve profesyonel şoförünüz sizi terminalde karşılar, otel lobinize ayrıcalıkla ulaştırır.",
      "Yaklaşık 50 km'lik güzergâhı ortalama 45 dakikada, su ikramı eşliğinde kat edersiniz. Casino ve etkinlik misafirleri için gece dahil 7/24 hizmet veririz.",
      "Grup ve aile transferlerinde Mercedes Vito ile tek araçta konforlu ulaşım sağlıyoruz.",
    ],
    sections: [
      { h2: "VIP Karşılama ve Casino Transferi", body: [
        "Merit Royal ve Crystal Cove lobisinde isim tabelalı VIP karşılama ile buluşursunuz. Casino misafirleri için gece geç saatler dahil otel-casino transferi düzenliyoruz.",
        "Kurumsal ve etkinlik misafirleri için özel araç ve şoför tahsis edebiliriz.",
      ]},
    ],
    journey: { distance: "≈ 50 km", duration: "≈ 45-50 dk", pickup: "Otel lobisi VIP karşılama" },
    points: ["Merit Royal", "Merit Crystal Cove", "Alsancak", "Escape Beach", "Girne Batı Sahili", "Ercan Havalimanı"],
    faqs: [
      { q: "Ercan'dan Merit Royal'e ne kadar sürer?", a: "Yaklaşık 45-50 dakikalık konforlu bir transferdir." },
      { q: "VIP araç ile mi transfer yapılıyor?", a: "Talebinize göre lüks Mercedes E-Class veya Vito VIP araçla transfer sağlıyoruz." },
      { q: "Gece casino transferi var mı?", a: "Evet, gece geç saatler dahil 7/24 otel-casino transferi düzenliyoruz." },
      { q: "Grup için Vito transfer olur mu?", a: "Evet, aileler ve gruplar için Mercedes Vito ile transfer sağlıyoruz." },
    ],
    related: { cities: ["alsancak-taksi", "girne-taksi"], routes: ["ercan-acapulco-transfer", "cratos-otel-taksi"], services: ["vip-transfer", "kibris-vito-transfer"], blog: ["girne-gezi-rehberi"] },
  }),
  route({
    slug: "cratos-otel-taksi", kw: "Cratos Otel Taksi", name: "Ercan → Cratos Premium Transfer", breadcrumb: "Cratos Otel Taksi",
    from: "Ercan Havalimanı", to: "Cratos Premium (Girne)", isAirport: true,
    metaTitle: "Cratos Otel Taksi | Ercan Transfer | +90 548 875 7731",
    metaDescription: "Cratos Premium otel taksi & transfer: Ercan'dan ≈45 dk VIP Mercedes karşılama, uçuş takibi. Casino & otel misafirlerine özel. WhatsApp'tan bilgi alın!",
    hero: IMG.eClass, heroAlt: "Cratos Premium otel Ercan transfer aracı",
    lead: "Ercan Havalimanı'ndan Girne Cratos Premium Hotel'e ≈45 dakikalık VIP Mercedes karşılama ve transfer.",
    subKeywords: ["cratos premium transfer", "cratos otel ercan taksi", "cratos casino transfer", "cratos havalimanı transfer", "cratos girne taksi"],
    intro: [
      "Girne'deki Cratos Premium Hotel, Casino & Spa misafirleri için Ercan Havalimanı'ndan VIP transfer sunuyoruz. Cratos otel taksi hizmetimizde şoförünüz uçuşunuzu takip eder, otel lobisinde isim tabelasıyla sizi karşılar.",
      "Yaklaşık 50 km'lik güzergâhı ortalama 45 dakikada konforlu Mercedes aracımızla kat edersiniz. Casino ve etkinlik misafirleri için gece dahil 7/24 hizmet veririz.",
      "Aileler ve gruplar için Mercedes Vito, bireysel misafirler için E-Class seçeneği ile ayrıcalıklı ulaşım sağlıyoruz.",
    ],
    sections: [
      { h2: "Cratos Premium Karşılaması", body: [
        "Cratos Premium lobisinde isim tabelalı VIP karşılama ile buluşur, konforlu bir varış yaşarsınız. Gece casino transferleri dahil 7/24 hizmet sunuyoruz.",
        "Kurumsal ve etkinlik misafirleri için özel araç ve şoför tahsis edebiliriz.",
      ]},
    ],
    journey: { distance: "≈ 50 km", duration: "≈ 45 dk", pickup: "Otel lobisi VIP karşılama" },
    points: ["Cratos Premium", "Girne Batı Sahili", "Alsancak", "Girne Merkez", "Girne Limanı", "Ercan Havalimanı"],
    faqs: [
      { q: "Ercan'dan Cratos'a ne kadar sürer?", a: "Yaklaşık 45-50 dakikalık konforlu bir transferdir." },
      { q: "Cratos lobisinden karşılama var mı?", a: "Evet, Cratos Premium lobisinde isim tabelasıyla VIP karşılama sağlıyoruz." },
      { q: "Gece casino transferi var mı?", a: "Evet, gece geç saatler dahil 7/24 otel-casino transferi düzenliyoruz." },
      { q: "Grup için Vito transfer olur mu?", a: "Evet, aileler ve gruplar için Mercedes Vito ile transfer sağlıyoruz." },
    ],
    related: { cities: ["girne-taksi", "alsancak-taksi"], routes: ["ercan-merit-royal-transfer", "ercan-girne-taksi"], services: ["vip-transfer", "ercan-havalimani-transfer"], blog: ["girne-gezi-rehberi"] },
  }),
];

export const ALL_PAGES = [...SERVICES, ...CITIES, ...ROUTES, ...CLUSTER_PAGES];
export function getPage(slug) { return ALL_PAGES.find((p) => p.slug === slug) || null; }
export function getAllSlugs() { return ALL_PAGES.map((p) => p.slug); }
