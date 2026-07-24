import { Breadcrumbs } from '@/components/site/breadcrumbs'
import { ContactForm } from '@/components/site/contact-form'
import { SITE, waUrl } from '@/lib/site'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata = {
  title: 'İletişim | Kıbrıs Taksi 24',
  description: 'Kıbrıs Taksi 24 iletişim: 7/24 telefon, WhatsApp ve e-posta ile bize ulaşın. KKTC geneli taksi ve transfer rezervasyonu için anında destek.',
  alternates: { canonical: '/iletisim' },
}

const CARDS = [
  { icon: Phone, title: 'Telefon', value: SITE.phoneDisplay, href: `tel:+${SITE.phoneRaw}` },
  { icon: MessageCircle, title: 'WhatsApp', value: '7/24 Anında Rezervasyon', href: waUrl() },
  { icon: Mail, title: 'E-posta', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, title: 'Hizmet Bölgesi', value: SITE.areaServed, href: null },
]

export default function IletisimPage() {
  return (
    <div>
      <div className="border-b border-border bg-white"><div className="container py-3"><Breadcrumbs items={[{ name: 'İletişim' }]} /></div></div>
      <section className="bg-ink py-14">
        <div className="container text-white">
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Bize Ulaşın</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">7/24 buradayız. Rezervasyon, fiyat teklifi ve tüm sorularınız için en hızlı yol WhatsApp.</p>
        </div>
      </section>

      <section className="container -mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((c) => {
          const inner = (
            <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold-dark"><c.icon className="h-6 w-6" /></span>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-muted-foreground">{c.title}</h3>
              <p className="mt-1 font-medium text-ink">{c.value}</p>
            </div>
          )
          return c.href ? <a key={c.title} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{inner}</a> : <div key={c.title}>{inner}</div>
        })}
      </section>

      <section className="container grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-extrabold text-ink">Mesaj Gönderin</h2>
          <p className="mt-2 text-muted-foreground">Formu doldurun, en kısa sürede size dönüş yapalım.</p>
          <div className="mt-6"><ContactForm /></div>
        </div>
        <div className="flex flex-col">
          <div className="mb-4 flex items-center gap-2 text-ink"><Clock className="h-5 w-5 text-gold" /> <span className="font-medium">7/24 Açık — Bayram & tatil dahil</span></div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="KKTC Harita"
              src="https://www.google.com/maps?q=Ercan%20Havalimanı%20KKTC&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="mt-4"><Button className="w-full bg-whatsapp text-white hover:bg-whatsapp-dark">WhatsApp'tan Yazın</Button></a>
        </div>
      </section>
    </div>
  )
}
