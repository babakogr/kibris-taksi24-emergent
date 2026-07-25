import Link from 'next/link'
import { Car, Plane, Crown, Route as RouteIcon, MapPinned, Compass, ArrowRight, Check, Phone, MessageSquare, CheckCircle2, Users, Star } from 'lucide-react'
import { SITE, waUrl, IMG, FLEET } from '@/lib/site'
import { SERVICES, CITIES, ROUTES } from '@/lib/data/locations'
import { BookingWidget } from '@/components/site/booking-widget'
import { Reviews } from '@/components/site/reviews'
import { FaqAccordion } from '@/components/site/faq-accordion'
import { TrustBar } from '@/components/site/trust-bar'
import { Reveal } from '@/components/site/reveal'
import { JsonLd } from '@/components/site/jsonld'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Kıbrıs Taksi | Kaliteli ve Uygun | +90 548 875 7731',
  description: "Kıbrıs taksi & KKTC transfer: Ercan, Girne, Lefkoşa ve tüm ada için 7/24 Mercedes araçlarla kaliteli, uygun ulaşım. Uçuş takipli karşılama. WhatsApp'tan bilgi alın!",
  alternates: { canonical: '/' },
}

const SERVICE_ICONS = { 'kibris-taksi': Car, 'kibris-transfer': RouteIcon, 'ercan-havalimani-transfer': Plane, 'kibris-vito-transfer': Users, 'vip-transfer': Crown, 'kibris-gunluk-turlar': Compass }

const HOME_FAQS = [
  { q: "Kıbrıs'ta taksi / transfer nasıl ayarlanır?", a: "En hızlı yol WhatsApp'tır. Nereden-nereye, tarih ve saati yazın; ekibimiz dakikalar içinde aracınızı ayarlar. Havalimanı karşılamalarında şoförünüz isim tabelasıyla sizi bekler." },
  { q: "Ercan Havalimanı'ndan Girne'ye ne kadar sürer?", a: 'Trafik durumuna göre yaklaşık 35-45 dakikadır. Lefkoşa\'ya 20 dakika, Gazimağusa ve İskele\'ye 45-55 dakika içinde ulaşırsınız.' },
  { q: 'Ücretlendirme nasıl yapılıyor?', a: 'Yolculuğunuz taksimetre ile şeffaf biçimde ücretlendirilir; gizli masraf yoktur. Yaklaşık bilgi ve müsaitlik için WhatsApp\'tan bize ulaşın.' },
  { q: 'Hangi araçlarla hizmet veriyorsunuz?', a: 'Bakımlı ve sigortalı Mercedes E-Class sedan, Mercedes Vito minivan ve gruplar için minibüs araçlarımız bulunmaktadır.' },
  { q: 'Gece geç saatte transfer yapıyor musunuz?', a: 'Evet, 7/24 hizmet veriyoruz. Gece yarısı iniş yapan uçuşlar dahil her saatte güvenli transfer sağlıyoruz.' },
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: HOME_FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }

const STEPS = [
  { icon: MessageSquare, title: '1. Talebinizi Gönderin', text: 'WhatsApp veya online formdan rota, tarih ve saatinizi iletin.' },
  { icon: CheckCircle2, title: '2. Anında Onay', text: 'Aracınızı ve müsaitliği dakikalar içinde onaylıyoruz.' },
  { icon: Car, title: '3. Konforlu Yolculuk', text: 'Şoförünüz sizi kapıda/terminalde karşılar, konforla ulaştırır.' },
]

export default function HomePage() {
  return (
    <div>
      <JsonLd data={faqLd} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink">
        <img src={IMG.heroHarbour} alt="Kıbrıs Girne sahili taksi ve transfer" title="Kıbrıs Taksi" width="1600" height="900" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/95 to-ink/60" />
        <div className="container relative py-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="text-white">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-semibold text-gold">
                <Star className="h-4 w-4 fill-gold" /> KKTC'nin #1 Taksi & Transfer Platformu
              </div>
              <h1 className="font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
                Kıbrıs Taksi <span className="text-gold">Kaliteli ve Uygun</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
                Ercan Havalimanı, Girne, Lefkoşa, Gazimağusa ve tüm KKTC için 7/24 Mercedes araçlarla konforlu taksi ve transfer. WhatsApp ile 60 saniyede bilgi alın.
              </p>
              <ul className="mt-7 grid max-w-lg grid-cols-2 gap-y-3 text-sm">
                {['Mercedes E-Class & Vito filo', 'Taksimetre ile şeffaf ücret', 'Lisanslı & sigortalı', '7/24 canlı destek'].map((b) => (
                  <li key={b} className="flex items-center gap-2 text-white/90"><Check className="h-4 w-4 text-gold" /> {b}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={waUrl()} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="h-12 bg-whatsapp px-6 text-base text-white hover:bg-whatsapp-dark">WhatsApp'tan Bilgi Al</Button>
                </a>
                <a href={`tel:+${SITE.phoneRaw}`}>
                  <Button size="lg" variant="outline" className="h-12 border-white/30 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white">
                    <Phone className="mr-2 h-4 w-4" /> {SITE.phoneDisplay}
                  </Button>
                </a>
              </div>
            </div>
            <div className="lg:pl-6">
              <div className="mb-3 text-center text-sm font-medium text-white/70">Hemen bilgi & müsaitlik alın ↓</div>
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* SERVICES */}
      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">Hizmetlerimiz</h2>
            <p className="mt-3 text-muted-foreground">Her ihtiyaca uygun, Mercedes konforunda ulaşım çözümleri.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[s.slug] || Car
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.05}>
                  <Link href={`/${s.slug}`} className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-gold transition-colors group-hover:bg-gold group-hover:text-ink"><Icon className="h-6 w-6" /></span>
                    <h3 className="font-display text-lg font-bold text-ink">{s.kw}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.lead}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark">Detaylar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="border-y border-border bg-secondary/40 py-16 sm:py-20">
        <div className="container">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">Popüler Transfer Rotaları</h2>
              <p className="mt-3 text-muted-foreground">En çok tercih edilen güzergâhlar için anında bilgi alın.</p>
            </div>
            <Link href="/kibris-transfer" className="hidden sm:inline-flex"><Button variant="outline">Tüm Transferler <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ROUTES.map((r) => (
              <Link key={r.slug} href={`/${r.slug}`} className="group flex items-center justify-between rounded-xl border border-border bg-white p-5 shadow-sm transition-all hover:border-gold hover:shadow-md">
                <div>
                  <span className="block font-semibold text-ink">{r.name}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">{r.journey?.distance} · {r.journey?.duration}</span>
                </div>
                <ArrowRight className="h-5 w-5 text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">Hizmet Verdiğimiz Şehirler</h2>
            <p className="mt-3 text-muted-foreground">KKTC'nin dört bir yanında, kapıdan kapıya taksi ve transfer.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CITIES.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 4) * 0.05}>
                <Link href={`/${c.slug}`} className="group relative block overflow-hidden rounded-2xl shadow-sm">
                  <img src={c.hero} alt={c.heroAlt || `${c.name} taksi`} title={c.kw} width="600" height="400" loading="lazy" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5 text-white">
                    <span className="flex items-center gap-1.5 text-xs text-gold"><MapPinned className="h-3.5 w-3.5" /> KKTC</span>
                    <h3 className="mt-1 font-display text-xl font-bold">{c.kw}</h3>
                    <span className="mt-1 inline-flex items-center gap-1 text-sm text-white/80">Bilgi Al <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-border bg-ink py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center text-white">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">3 Adımda Yolculuk</h2>
            <p className="mt-3 text-white/70">Karmaşık süreç yok. Dakikalar içinde yola hazırsınız.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.title} className="text-center text-white">
                <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold text-ink"><s.icon className="h-8 w-8" /></span>
                <h3 className="font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">Mercedes Araç Filomuz</h2>
            <p className="mt-3 text-muted-foreground">Her grup ve bütçeye uygun, bakımlı ve sigortalı araçlar.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {FLEET.map((f) => (
              <div key={f.name} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                <img src={f.img} alt={f.alt} title={f.name} width="940" height="600" loading="lazy" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold text-ink">{f.name}</h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-dark"><Users className="h-3.5 w-3.5" /> {f.cap}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="container max-w-3xl">
          <div className="mb-8 text-center">
            <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">Sıkça Sorulan Sorular</h2>
            <p className="mt-3 text-muted-foreground">Merak edilenlere hızlı yanıtlar.</p>
          </div>
          <FaqAccordion faqs={HOME_FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold">
        <div className="container flex flex-col items-center justify-between gap-6 py-12 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Bir sonraki yolculuğunuz bir mesaj uzağınızda</h2>
            <p className="mt-2 text-ink/80">7/24 Mercedes konforu ve uçuş takipli karşılama. Hemen bilgi alın.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={waUrl()} target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-ink text-white hover:bg-ink-light">WhatsApp'tan Bilgi Al</Button></a>
            <Link href="/rezervasyon"><Button size="lg" variant="outline" className="border-ink/30 bg-white text-ink hover:bg-white/80">Online Talep</Button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
