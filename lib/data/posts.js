export const POSTS = [
  {
    slug: 'ercan-havalimani-transfer-rehberi',
    title: 'Ercan Havalimanı Transfer Rehberi: Bilmeniz Gereken Her Şey',
    excerpt: 'Ercan Havalimanı\'na indikten sonra Girne, Lefkoşa veya İskele\'ye en hızlı, en konforlu ve en güvenli nasıl ulaşırsınız? İşte adım adım transfer rehberi.',
    date: '2025-06-01',
    cover: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d',
    body: [
      'Ercan Havalimanı, Kuzey Kıbrıs\'ın ana giriş kapısıdır. Uçağınız iner inmez şehir merkezlerine ulaşmanın en pratik yolu önceden rezerve edilmiş özel transferdir. Havalimanı çıkışında taksi aramak yerine, şoförünüzün sizi isim tabelasıyla karşılaması hem zaman kazandırır hem de sürpriz ücretlerin önüne geçer.',
      'Girne\'ye yaklaşık 40 dakika, Lefkoşa\'ya 20 dakika, Gazimağusa ve İskele\'ye ise 45-55 dakika içinde ulaşabilirsiniz. Rezervasyonunuzu yaparken yolcu ve bavul sayınızı doğru belirtmeniz, doğru araç tipinin ayarlanmasını sağlar.',
      'Uçuşunuz rötar yaparsa endişelenmeyin; profesyonel transfer firmaları uçuşunuzu canlı takip eder ve ek ücret almadan sizi bekler. WhatsApp üzerinden 60 saniyede rezervasyon yaparak tatilinize veya iş seyahatinize dinlenmiş başlayabilirsiniz.',
    ],
  },
  {
    slug: 'girne-gezi-rehberi',
    title: 'Girne (Kyrenia) Gezi Rehberi: Görülmesi Gereken 7 Yer',
    excerpt: 'Tarihi limanı, kalesi ve dağ köyleriyle Girne, KKTC\'nin incisidir. Girne\'de mutlaka görmeniz gereken yerleri ve ulaşım ipuçlarını derledik.',
    date: '2025-05-20',
    cover: 'https://images.unsplash.com/photo-1677023484291-005b9840132f',
    body: [
      'Girne, Akdeniz\'in en güzel sahil kasabalarından biridir. Antik liman çevresindeki restoranlar, Girne Kalesi ve batık gemi müzesi ziyaretçilere unutulmaz anlar yaşatır.',
      'Şehrin arka planındaki Beşparmak Dağları\'nda yer alan Bellapais Manastırı ve St. Hilarion Kalesi, muhteşem manzaralarıyla mutlaka görülmelidir. Karmi ve Ozanköy gibi taş köyler ise otantik bir deneyim sunar.',
      'Girne içinde ve çevresinde ulaşım için özel taksi kullanmak, hem konfor hem de esneklik sağlar. Şoförlü araç ile gün boyu gezi planlayarak zamandan tasarruf edebilirsiniz.',
    ],
  },
  {
    slug: 'kibris-transfer-fiyatlari-nasil-belirlenir',
    title: 'Kıbrıs Transfer Fiyatları Nasıl Belirlenir?',
    excerpt: 'Transfer ücretini etkileyen faktörler nelerdir? Mesafe, araç tipi, yolcu sayısı ve zaman... Şeffaf fiyatlandırmanın ardındaki mantığı açıklıyoruz.',
    date: '2025-05-05',
    cover: 'https://images.pexels.com/photos/13042270/pexels-photo-13042270.jpeg',
    body: [
      'Transfer fiyatları temel olarak mesafeye ve seçilen araç tipine göre belirlenir. Ercan-Lefkoşa gibi kısa mesafeler ile Ercan-Bafra gibi uzun mesafeler arasında doğal bir fiyat farkı vardır.',
      'Yolcu ve bavul sayısı, kullanılacak aracı belirler: 1-3 kişi için sedan, 4-6 kişi için VIP minivan, daha kalabalık gruplar için minibüs. VIP hizmet, lüks araç ve ek ikramlar fiyatı etkileyen diğer unsurlardır.',
      'Güvenilir firmalar sabit ve şeffaf fiyat sunar; rezervasyon anında onayladığınız ücret değişmez. Net fiyat için WhatsApp üzerinden rotanızı ve detaylarınızı paylaşmanız yeterlidir.',
    ],
  },
  {
    slug: 'kktc-ulasim-ipuclari',
    title: 'KKTC\'de Ulaşım: Turistler İçin Pratik İpuçları',
    excerpt: 'Kuzey Kıbrıs\'ta ilk kez mi bulunuyorsunuz? Ada içi ulaşım, mesafeler ve transfer seçenekleri hakkında bilmeniz gereken her şey bu rehberde.',
    date: '2025-04-18',
    cover: 'https://images.unsplash.com/photo-1504203328729-b937e8e102f2',
    body: [
      'KKTC kompakt bir ada olsa da şehirler arası mesafeler ve toplu taşıma sıklığı, planınızı önceden yapmanızı gerektirir. Özel transfer ve taksi, en esnek ve konforlu seçenektir.',
      'Larnaka Havalimanı\'ndan giriş yapan ziyaretçiler için sınır geçişi dahil transfer hizmetleri mevcuttur. Ercan Havalimanı ise doğrudan KKTC içindedir ve şehir merkezlerine yakındır.',
      'Gece geç saatlerde iniş yapıyorsanız, 7/24 hizmet veren bir transfer firmasıyla önceden anlaşmak en güvenli yoldur. Böylece havalimanında beklemeden, doğrudan konaklama yerinize ulaşırsınız.',
    ],
  },
]

export const getPost = (slug) => POSTS.find((p) => p.slug === slug) || null
