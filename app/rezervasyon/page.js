import { BookingWidget } from '@/components/site/booking-widget'
import { TrustBar } from '@/components/site/trust-bar'
import { Breadcrumbs } from '@/components/site/breadcrumbs'
import { waUrl, SITE } from '@/lib/site'
import { Button } from '@/components/ui/button'
import { MessageSquare, CheckCircle2, Car, ShieldCheck, Clock, Phone } from 'lucide-react'

export const metadata = {
  title: 'Online Rezervasyon | Kıbrıs Taksi 24',
  description: 'Kıbrıs taksi & transfer online rezervasyon: nereden-nereye, tarih, saat ve yolcu bilgilerinizi girin, WhatsApp\'tan sabit fiyat teklifinizi anında alın.',
  alternates: { canonical: '/rezervasyon' },
}

const STEPS = [
  { icon: MessageSquare, title: 'Bilgileri Girin', text: 'Rota, tarih, saat ve yolcu sayınızı seçin.' },
  { icon: CheckCircle2, title: 'Sabit Fiyat Alın', text: 'WhatsApp\'tan anında net fiyat ve onay alın.' },
  { icon: Car, title: 'Yolculuk', text: 'Şoförünüz sizi zamanında karşılar.' },
]

export default function RezervasyonPage() {
  return (
    <div>
      <div className="border-b border-border bg-white"><div className="container py-3"><Breadcrumbs items={[{ name: 'Online Rezervasyon' }]} /></div></div>
      <section className="bg-ink py-14">
        <div className="container grid items-start gap-10 lg:grid-cols-2">
          <div className="text-white">
            <h1 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Online Rezervasyon</h1>
            <p className="mt-4 max-w-lg text-lg text-white/80">Formu doldurun, talebiniz WhatsApp'a hazır mesaj olarak aktarılsın. Sabit fiyatınızı dakikalar içinde onaylayalım.</p>
            <div className="mt-8 space-y-5">
              {STEPS.map((s) => (
                <div key={s.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gold text-ink"><s.icon className="h-5 w-5" /></span>
                  <div><h3 className="font-display font-bold">{s.title}</h3><p className="text-sm text-white/70">{s.text}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Lisanslı & sigortalı</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> 7/24 hizmet</span>
            </div>
            <a href={`tel:+${SITE.phoneRaw}`} className="mt-6 inline-flex"><Button variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"><Phone className="mr-2 h-4 w-4" /> {SITE.phoneDisplay}</Button></a>
          </div>
          <BookingWidget />
        </div>
      </section>
      <TrustBar />
    </div>
  )
}
