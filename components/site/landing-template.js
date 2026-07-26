import Link from 'next/link'
import { Car, Clock, Gauge, ThumbsUp, PlaneLanding, ArrowRight, Phone, MapPin, Check, Route as RouteIcon, Timer, Users, Luggage, Baby, Sparkles } from 'lucide-react'
import { SITE, waUrl, TRUST_BASE, AIRPORT_TRUST, FLEET } from '@/lib/site'
import { getPage } from '@/lib/data/locations'
import { getPost } from '@/lib/data/posts'
import { BookingWidget } from './booking-widget'
import { FaqAccordion } from './faq-accordion'
import { Reviews } from './reviews'
import { TrustBar } from './trust-bar'
import { Breadcrumbs } from './breadcrumbs'
import { JsonLd } from './jsonld'
import { Reveal } from './reveal'
import { Button } from '@/components/ui/button'

const ICONS = { Car, Clock, Gauge, ThumbsUp, PlaneLanding }

function titleCase(str) {
  return String(str).split(' ').map((w) => (w.match(/^[0-9]/) ? w : w.charAt(0).toLocaleUpperCase('tr-TR') + w.slice(1))).join(' ')
}

const CLUSTER_VARIANTS = [
  (kw, name) => `${name} bölgesinde ${kw} arayan misafirlerimize, bakımlı Mercedes E-Class ve Vito araçlarımızla 7/24 kesintisiz hizmet veriyoruz. Talebinizi WhatsApp'tan iletmeniz yeterli; müsaitlik ve yaklaşık bilgiyi dakikalar içinde paylaşıyoruz.`,
  (kw, name) => `${kw} talebiniz için yolculuğunuz taksimetre ile şeffaf biçimde ücretlendirilir; gizli masraf çıkmaz. ${name} ve çevresini iyi bilen şoförlerimiz sizi en kısa ve konforlu güzergâhtan ulaştırır.`,
  (kw, name) => `${name} için ${kw} hizmetimizde kapıdan kapıya karşılama sağlıyoruz. Bebek/çocuk koltuğu ve ek bagaj taleplerinizi önceden belirtmeniz halinde aracınızı buna göre hazırlıyoruz.`,
  (kw, name) => `Gece geç saatler dahil ${kw} ihtiyacınızı 7/24 karşılıyoruz. ${name} bölgesinde otel, adres veya terminalden alım yaparak güvenli ve zamanında ulaşımınızı sağlıyoruz.`,
  (kw, name) => `Aileler ve gruplar için ${kw} taleplerinde Mercedes Vito, bireysel yolculuklarda ise E-Class öneriyoruz. ${name} çevresindeki tüm otel ve noktalar için hızlı çözüm sunuyoruz.`,
  (kw, name) => `${kw} konusunda deneyimli ekibimiz, kurumsal ve turistik tüm talepleri profesyonelce yönetir. ${name} için hemen WhatsApp'tan yazın, size en uygun aracı ve saati birlikte planlayalım.`,
]

function clusterText(kw, page, i) {
  return CLUSTER_VARIANTS[i % CLUSTER_VARIANTS.length](kw, page.name)
}

export function LandingTemplate({ page }) {
  const url = `${SITE.url}/${page.slug}`
  const heroPrefillFrom = page.from === 'Ercan Havalimanı' ? 'Ercan Havalimanı' : ''
  const trust = page.isAirport ? [...TRUST_BASE.slice(0, 3), AIRPORT_TRUST, TRUST_BASE[3]] : TRUST_BASE
  const j = page.journey

  // ---- JSON-LD ----
  const breadcrumbLd = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: page.breadcrumb, item: url },
    ],
  }
  const faqLd = page.faqs?.length ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: page.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  } : null
  const serviceLd = {
    '@context': 'https://schema.org', '@type': 'Service',
    serviceType: page.kw, name: page.kw, description: page.metaDescription, url,
    areaServed: { '@type': 'Place', name: SITE.areaServed },
    provider: { '@id': `${SITE.url}/#organization` },
  }

  // ---- related links ----
  const relLink = (slug) => { const p = getPage(slug); return p ? { href: `/${p.slug}`, label: p.breadcrumb } : null }
  const relBlog = (slug) => { const p = getPost(slug); return p ? { href: `/blog/${p.slug}`, label: p.title } : null }
  const relatedGroups = [
    { title: 'İlgili Hizmetler', items: (page.related?.services || []).map(relLink).filter(Boolean) },
    { title: 'İlgili Rotalar', items: (page.related?.routes || []).map(relLink).filter(Boolean) },
    { title: 'İlgili Şehirler', items: (page.related?.cities || []).map(relLink).filter(Boolean) },
    { title: 'İlgili Yazılar', items: (page.related?.blog || []).map(relBlog).filter(Boolean) },
  ].filter((g) => g.items.length)

  return (
    <article>
      <JsonLd data={breadcrumbLd} />
      {faqLd && <JsonLd data={faqLd} />}
      <JsonLd data={serviceLd} />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-white">
        <div className="container py-3"><Breadcrumbs items={[{ name: page.breadcrumb, href: `/${page.slug}` }]} /></div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink">
        <img src={page.hero} alt={page.heroAlt || page.kw} title={page.kw} width="1600" height="900" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="container relative py-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="text-white">
              {(page.type === 'route' || page.isAirport) && j && (
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm"><RouteIcon className="h-3.5 w-3.5 text-gold" /> {j.distance}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm"><Timer className="h-3.5 w-3.5 text-gold" /> {j.duration}</span>
                </div>
              )}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">Kaliteli ve Uygun · 7/24 Hizmet</div>
              <h1 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{page.kw}</h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{page.lead}</p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
                {['Mercedes E-Class & Vito', 'Taksimetre ile şeffaf ücret', page.isAirport ? 'Ücretsiz uçuş takibi' : 'Lisanslı & sigortalı', '7/24 hizmet'].map((b) => (
                  <li key={b} className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> {b}</li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={waUrl(`Merhaba, ${page.kw} için bilgi ve müsaitlik almak istiyorum.`)} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-whatsapp text-white hover:bg-whatsapp-dark">WhatsApp'tan Bilgi Al</Button>
                </a>
                <a href={`tel:+${SITE.phoneRaw}`}>
                  <Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"><Phone className="mr-2 h-4 w-4" /> {SITE.phoneDisplay}</Button>
                </a>
              </div>
            </div>
            <div className="lg:pl-6"><BookingWidget defaultFrom={heroPrefillFrom} /></div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* GÜVEN BÖLÜMÜ */}
      <section className="py-14">
        <div className="container">
          <h2 className="sr-only">Neden Güvenilir Bir Seçim?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((h, i) => {
              const Icon = ICONS[h.icon] || ThumbsUp
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
        </div>
      </section>

      {/* İÇERİK */}
      <section className="border-t border-border bg-secondary/30 py-16">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">{page.kw} Hizmetimiz</h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink/80">
              {page.intro.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            {page.sections?.map((s, i) => (
              <div key={i} className="mt-8">
                <h3 className="font-display text-xl font-bold text-ink">{s.h2}</h3>
                <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink/80">
                  {s.body.map((p, k) => <p key={k}>{p}</p>)}
                </div>
              </div>
            ))}

            {page.subKeywords?.length > 0 && (
              <div className="mt-10">
                <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">{page.name} Taksi Hizmet Detayları</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/80">Aşağıda, {page.name} bölgesinde kullanıcıların Google'da en çok aradığı hizmet başlıklarını ve bu konudaki yaklaşımımızı bulabilirsiniz.</p>
                <div className="mt-5 space-y-6">
                  {page.subKeywords.map((kw, i) => (
                    <div key={kw}>
                      <h3 className="font-display text-lg font-bold text-ink">{titleCase(kw)}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink/80">{clusterText(kw, page, i)}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {page.points?.length > 0 && (
              <div className="mt-8">
                <h3 className="font-display text-xl font-bold text-ink">Popüler Noktalar ve Duraklar</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {page.points.map((l) => (
                    <span key={l} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-sm text-ink/80"><MapPin className="h-3.5 w-3.5 text-gold" /> {l}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h2 className="font-display text-lg font-bold text-ink">Neden Bizi Tercih Etmelisiniz?</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink/80">
                {['Bakımlı Mercedes E-Class & Vito filosu', 'Taksimetre ile şeffaf ücretlendirme', page.isAirport ? 'Ücretsiz uçuş takibi & isim tabelalı karşılama' : 'Kapıdan kapıya konforlu ulaşım', 'Türkçe & İngilizce konuşan şoförler', '7/24 canlı destek & anında dönüş'].map((b) => (
                  <li key={b} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-whatsapp" /> {b}</li>
                ))}
              </ul>
              <a href={waUrl(`Merhaba, ${page.kw} için hemen bilgi almak istiyorum.`)} target="_blank" rel="noopener noreferrer" className="mt-5 block">
                <Button className="w-full bg-gold font-semibold text-ink hover:bg-gold-dark">WhatsApp'tan Bilgi Al</Button>
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ARAÇ SEÇENEKLERİ */}
      <section className="py-16">
        <div className="container">
          <div className="mb-8 max-w-2xl">
            <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Araç Seçenekleri</h2>
            <p className="mt-2 text-muted-foreground">Her grup ve ihtiyaca uygun, bakımlı ve sigortalı Mercedes filosu.</p>
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

      {/* YOLCULUK BİLGİLERİ */}
      <section className="border-y border-border bg-secondary/30 py-16">
        <div className="container">
          <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Yolculuk Bilgileri</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-2xl border border-border bg-white p-5"><RouteIcon className="h-6 w-6 text-gold" /><h3 className="mt-3 font-display text-base font-bold text-ink">Mesafe</h3><p className="mt-1 text-sm text-muted-foreground">{j?.distance || 'Talebe göre değişir'}</p></div>
            <div className="rounded-2xl border border-border bg-white p-5"><Timer className="h-6 w-6 text-gold" /><h3 className="mt-3 font-display text-base font-bold text-ink">Süre</h3><p className="mt-1 text-sm text-muted-foreground">{j?.duration || 'Rotaya göre değişir'}</p></div>
            <div className="rounded-2xl border border-border bg-white p-5"><Sparkles className="h-6 w-6 text-gold" /><h3 className="mt-3 font-display text-base font-bold text-ink">Karşılama</h3><p className="mt-1 text-sm text-muted-foreground">{j?.pickup || 'Kapıdan karşılama'}</p></div>
            <div className="rounded-2xl border border-border bg-white p-5"><Luggage className="h-6 w-6 text-gold" /><h3 className="mt-3 font-display text-base font-bold text-ink">Bagaj</h3><p className="mt-1 text-sm text-muted-foreground">Geniş bagaj kapasitesi; ek bagaj için Vito.</p></div>
            <div className="rounded-2xl border border-border bg-white p-5"><Baby className="h-6 w-6 text-gold" /><h3 className="mt-3 font-display text-base font-bold text-ink">Çocuk Koltuğu</h3><p className="mt-1 text-sm text-muted-foreground">Talep üzerine bebek/çocuk koltuğu temin edilir.</p></div>
          </div>
        </div>
      </section>

      {/* POPÜLER İLGİLİ LİNKLER */}
      {relatedGroups.length > 0 && (
        <section className="py-16">
          <div className="container">
            <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Popüler İlgili Sayfalar</h2>
            <p className="mt-2 text-muted-foreground">İhtiyacınıza en uygun hizmet, rota ve rehber sayfalarına göz atın.</p>
            <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {relatedGroups.map((g) => (
                <div key={g.title}>
                  <h3 className="font-display text-base font-bold text-ink">{g.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {g.items.map((it) => (
                      <li key={it.href}>
                        <Link href={it.href} className="group inline-flex items-start gap-1.5 text-sm text-ink/80 hover:text-gold-dark">
                          <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold transition-transform group-hover:translate-x-1" /> {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Reviews />

      {/* SSS */}
      {page.faqs?.length > 0 && (
        <section className="py-16">
          <div className="container max-w-3xl">
            <div className="mb-8 text-center">
              <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Sıkça Sorulan Sorular</h2>
              <p className="mt-2 text-muted-foreground">{page.kw} hakkında merak edilenler</p>
            </div>
            <FaqAccordion faqs={page.faqs} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-ink">
        <div className="container flex flex-col items-center justify-between gap-6 py-12 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">{page.kw} için hemen bilgi alın</h2>
            <p className="mt-2 text-white/70">Müsaitlik ve ücret bilgisi için 60 saniyede WhatsApp'tan bize ulaşın.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={waUrl(`Merhaba, ${page.kw} için bilgi almak istiyorum.`)} target="_blank" rel="noopener noreferrer"><Button size="lg" className="bg-whatsapp text-white hover:bg-whatsapp-dark">WhatsApp'tan Bilgi Al</Button></a>
            <a href={`tel:+${SITE.phoneRaw}`}><Button size="lg" className="bg-gold font-semibold text-ink hover:bg-gold-dark"><Phone className="mr-2 h-4 w-4" /> Ara: {SITE.phoneDisplay}</Button></a>
          </div>
        </div>
      </section>
    </article>
  )
}
