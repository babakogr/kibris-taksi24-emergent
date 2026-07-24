import Link from 'next/link'
import { Breadcrumbs } from '@/components/site/breadcrumbs'
import { TrustBar } from '@/components/site/trust-bar'
import { SITE, waUrl, IMG } from '@/lib/site'
import { Button } from '@/components/ui/button'
import { ShieldCheck, Building2, Users, Award, Clock, Check, Phone } from 'lucide-react'

export const metadata = {
  title: 'Kurumsal | Hakkımızda — Kıbrıs Taksi 24',
  description: 'Kıbrıs Taksi 24 kurumsal: KKTC\'nin güvenilir premium transfer markası. Kurumsal müşteriler için faturalı, sözleşmeli ve düzenli transfer çözümleri.',
  alternates: { canonical: '/kurumsal' },
}

const VALUES = [
  { icon: ShieldCheck, title: 'Güven', text: 'Lisanslı, sigortalı araç ve şeffaf fiyat politikası.' },
  { icon: Clock, title: 'Dakiklik', text: 'Uçuş takibi ve zamanında karşılama garantisi.' },
  { icon: Award, title: 'Kalite', text: 'Bakımlı araçlar ve eğitimli profesyonel şoförler.' },
  { icon: Users, title: 'Müşteri Odaklı', text: '7/24 canlı destek ve kişiye özel çözümler.' },
]

const CORP = [
  'Otel & tur operatörleri için toplu transfer anlaşmaları',
  'Kurumsal misafir ağırlama ve VIP karşılama',
  'Aylık cari hesap ve KDV\'li faturalandırma',
  'Etkinlik, kongre ve organizasyon lojistiği',
  'Düzenli personel ve öğrenci servis çözümleri',
  'Tam günlük / saatlik şoförlü araç kiralama',
]

export default function KurumsalPage() {
  return (
    <div>
      <div className="border-b border-border bg-white"><div className="container py-3"><Breadcrumbs items={[{ name: 'Kurumsal' }]} /></div></div>
      <section className="relative overflow-hidden bg-ink py-16">
        <img src={IMG.chauffeur} alt="Profesyonel şoför" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="container relative max-w-3xl text-white">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold"><Building2 className="h-3.5 w-3.5" /> Kurumsal Çözümler</div>
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">KKTC'nin Güvenilir Transfer Markası</h1>
          <p className="mt-4 text-lg text-white/80">Kıbrıs Taksi 24, yılların tecrübesiyle turistlere, iş insanlarına ve kurumlara premium ulaşım sunar. Misyonumuz; her yolculuğu güvenli, konforlu ve dakik kılmak.</p>
        </div>
      </section>

      <TrustBar />

      <section className="container py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-gold"><v.icon className="h-6 w-6" /></span>
              <h3 className="font-display text-lg font-bold text-ink">{v.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-16">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Kurumsal Müşterilere Özel</h2>
            <p className="mt-3 text-muted-foreground">Şirketiniz için ölçeklenebilir, faturalandırılabilir ve güvenilir ulaşım çözümleri sunuyoruz.</p>
            <ul className="mt-6 space-y-3">
              {CORP.map((c) => (<li key={c} className="flex items-start gap-2.5 text-ink/80"><Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-whatsapp" /> <span>{c}</span></li>))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waUrl('Merhaba, kurumsal transfer anlaşması hakkında bilgi almak istiyorum.')} target="_blank" rel="noopener noreferrer"><Button className="bg-whatsapp text-white hover:bg-whatsapp-dark">Kurumsal Teklif Al</Button></a>
              <a href={`tel:+${SITE.phoneRaw}`}><Button variant="outline"><Phone className="mr-2 h-4 w-4" /> {SITE.phoneDisplay}</Button></a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <img src={IMG.luxuryCar2} alt="VIP araç filosu" className="h-full max-h-[420px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-gold">
        <div className="container flex flex-col items-center justify-between gap-6 py-12 text-center md:flex-row md:text-left">
          <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Kurumsal ulaşımınızı bize emanet edin</h2>
          <a href={waUrl('Merhaba, kurumsal transfer için görüşmek istiyorum.')} target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-ink text-white hover:bg-ink-light">Hemen İletişime Geçin</Button></a>
        </div>
      </section>
    </div>
  )
}
