import { Star } from 'lucide-react'

const REVIEWS = [
  { name: 'Mehmet Yılmaz', city: 'Ankara', text: 'Ercan\'dan Girne\'ye transfer için kullandım. Şoför uçuş rötarına rağmen ismimle beni bekliyordu. Araç tertemiz, fiyat söylenen gibi sabitti. Kesinlikle tavsiye ederim.' },
  { name: 'Ayşe Demir', city: 'İstanbul', text: 'Ailecek Bafra oteline gittik. Çocuk koltuğu hazırdı, araç genifldi. Gece geç saatte bile sorunsuz karşılandık. Teşekkürler Kıbrıs Taksi 24.' },
  { name: 'Cem Kaya', city: 'Lefkoşa', city2: true, text: 'Düzenli olarak havalimanı transferi için kullanıyorum. Her zaman dakik, her zaman güler yüzlü. WhatsApp\'tan 1 dakikada rezervasyon yapıyorum.' },
  { name: 'Zeynep Arslan', city: 'İzmir', text: 'VIP transfer aldık, Mercedes Vito ile karşılandık. Su ikramı ve profesyonel şoför ile tam bir premium deneyim. Bal ayımızın güzel başlangıcı oldu.' },
  { name: 'Burak Şahin', city: 'Bursa', text: 'DAÜ\'de okuyorum, aileleri her geldiğinde bu firmayı kullanıyoruz. Fiyatlar şeffaf, sürpriz yok. Ercan-Mağusa arası çok rahat.' },
  { name: 'Elif Çelik', city: 'Antalya', text: 'Larnaka\'dan giriş yaptık, sınır geçişi dahil her şey plan gibi gitti. İletişim mükemmeldi, sürekli bilgilendirildik. 5 yıldız az.' },
]

export function Reviews() {
  return (
    <section className="bg-secondary/40 py-16 sm:py-20">
      <div className="container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium shadow-sm">
            <span className="flex">{[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</span>
            <span className="text-ink">4.9/5 · 1287+ değerlendirme</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">Misafirlerimiz Ne Diyor?</h2>
          <p className="mt-3 text-muted-foreground">Binlerce mutlu yolcu, Google ve sosyal medyada bize güveniyor.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
              <div className="mb-3 flex">{[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
              <blockquote className="flex-1 text-sm leading-relaxed text-ink/80">“{r.text}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-semibold text-gold">{r.name.charAt(0)}</span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{r.name}</span>
                  <span className="block text-xs text-muted-foreground">{r.city}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
