import Link from 'next/link'
import { Clock, BadgeCheck, PlaneLanding, ShieldCheck, ArrowRight, Phone, MapPin, Check, Route, Timer } from 'lucide-react'
import { SITE, waUrl, DEFAULT_HIGHLIGHTS } from '@/lib/site'
import { getPage } from '@/lib/data/locations'
import { BookingWidget } from './booking-widget'
import { FaqAccordion } from './faq-accordion'
import { Reviews } from './reviews'
import { TrustBar } from './trust-bar'
import { Breadcrumbs } from './breadcrumbs'
import { JsonLd } from './jsonld'
import { Reveal } from './reveal'
import { Button } from '@/components/ui/button'

const ICONS = { Clock, BadgeCheck, PlaneLanding, ShieldCheck }

export function LandingTemplate({ page }) {
  const url = `${SITE.url}/${page.slug}`
  const heroPrefillFrom = page.from === 'Ercan Havalimanı' ? 'Ercan Havalimanı' : ''

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: page.breadcrumb, item: url },
    ],
  }

  const faqLd = page.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  const businessLd = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: `${SITE.name} — ${page.breadcrumb}`,
    description: page.description,
    url,
    telephone: `+${SITE.phoneRaw}`,
    areaServed: SITE.areaServed,
    provider: { '@type': 'LocalBusiness', name: SITE.legalName, telephone: `+${SITE.phoneRaw}` },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: SITE.rating.value, reviewCount: SITE.rating.count },
  }

  return (
    <article>
      <JsonLd data={breadcrumbLd} />
      {faqLd && <JsonLd data={faqLd} />}
      <JsonLd data={businessLd} />

      {/* Breadcrumb bar */}
      <div className="border-b border-border bg-white">
        <div className="container py-3">
          <Breadcrumbs items={[{ name: page.breadcrumb, href: `/${page.slug}` }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <img src={page.hero} alt={page.h1} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="container relative py-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="text-white">
              {page.type === 'route' && (
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm"><Route className="h-3.5 w-3.5 text-gold" /> {page.distance}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm"><Timer className="h-3.5 w-3.5 text-gold" /> {page.duration}</span>
                </div>
              )}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                7/24 Premium Taksi & Transfer
              </div>
              <h1 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{page.h1}</h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{page.description}</p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
                {['Sabit & şeffaf fiyat', 'Ücretsiz uçuş takibi', 'Lisanslı şoförler', '7/24 hizmet'].map((b) => (
                  <li key={b} className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> {b}</li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={waUrl(`Merhaba, ${page.breadcrumb} için fiyat ve müsaitlik bilgisi almak istiyorum.`)} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-whatsapp text-white hover:bg-whatsapp-dark">WhatsApp'tan Fiyat Sor</Button>
                </a>
                <a href={`tel:+${SITE.phoneRaw}`}>
                  <Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                    <Phone className="mr-2 h-4 w-4" /> {SITE.phoneDisplay}
                  </Button>
                </a>
              </div>
            </div>
            <div className="lg:pl-6">
              <BookingWidget defaultFrom={heroPrefillFrom} />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Highlights */}
      <section className="py-14">
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DEFAULT_HIGHLIGHTS.map((h, i) => {
            const Icon = ICONS[h.icon] || BadgeCheck
            return (
              <Reveal key={h.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold-dark"><Icon className="h-6 w-6" /></span>
                  <h3 className="font-display text-lg font-bold text-ink">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Content + Why card */}
      <section className="border-t border-border bg-secondary/30 py-16">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">{page.name} Hakkında</h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink/80">
              {page.intro.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            {page.landmarks?.length > 0 && (
              <div className="mt-8">
                <h3 className="font-display text-lg font-bold text-ink">Hizmet Verdiğimiz Bölge & Noktalar</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {page.landmarks.map((l) => (
                    <span key={l} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-sm text-ink/80">
                      <MapPin className="h-3.5 w-3.5 text-gold" /> {l}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-ink">Neden Kıbrıs Taksi 24?</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink/80">
                {['20 dakikada onaylı rezervasyon', 'Havalimanında isim tabelalı karşılama', 'Klimalı, geniş bagajlı modern araçlar', 'Türkçe & İngilizce konuşan şoförler', 'Kredi kartı / nakit ödeme'].map((b) => (
                  <li key={b} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-whatsapp" /> {b}</li>
                ))}
              </ul>
              <a href={waUrl(`Merhaba, ${page.breadcrumb} için hemen rezervasyon yapmak istiyorum.`)} target="_blank" rel="noopener noreferrer" className="mt-5 block">
                <Button className="w-full bg-gold font-semibold text-ink hover:bg-gold-dark">Ücretsiz Fiyat Teklifi Al</Button>
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Popular routes */}
      {page.popularRoutes?.length > 0 && (
        <section className="py-16">
          <div className="container">
            <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Popüler Rotalar</h2>
            <p className="mt-2 text-muted-foreground">En çok tercih edilen transfer güzergâhları için hazır fiyat teklifi alın.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.popularRoutes.map((r) => (
                <Link key={r.slug} href={`/${r.slug}`} className="group flex items-center justify-between rounded-xl border border-border bg-white p-5 shadow-sm transition-all hover:border-gold hover:shadow-md">
                  <span className="font-medium text-ink">{r.label}</span>
                  <ArrowRight className="h-5 w-5 text-gold transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Reviews />

      {/* FAQ */}
      {page.faqs?.length > 0 && (
        <section className="py-16">
          <div className="container max-w-3xl">
            <div className="mb-8 text-center">
              <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Sıkça Sorulan Sorular</h2>
              <p className="mt-2 text-muted-foreground">{page.breadcrumb} hakkında merak edilenler</p>
            </div>
            <FaqAccordion faqs={page.faqs} />
          </div>
        </section>
      )}

      {/* Nearby internal links */}
      {page.nearby?.length > 0 && (
        <section className="border-t border-border bg-secondary/30 py-12">
          <div className="container">
            <h2 className="font-display text-lg font-bold text-ink">İlgili Sayfalar</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {page.nearby.map((slug) => {
                const p = getPage(slug)
                if (!p) return null
                return (
                  <Link key={slug} href={`/${slug}`} className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:border-gold hover:text-ink">
                    {p.breadcrumb}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA band */}
      <section className="bg-ink">
        <div className="container flex flex-col items-center justify-between gap-6 py-12 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">Yolculuğunuza şimdi başlayın</h2>
            <p className="mt-2 text-white/70">Sabit fiyat ve müsaitlik için 60 saniyede WhatsApp'tan rezervasyon yapın.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={waUrl(`Merhaba, ${page.breadcrumb} rezervasyonu yapmak istiyorum.`)} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-whatsapp text-white hover:bg-whatsapp-dark">WhatsApp Rezervasyon</Button>
            </a>
            <Link href="/rezervasyon">
              <Button size="lg" className="bg-gold font-semibold text-ink hover:bg-gold-dark">Online Rezervasyon</Button>
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
