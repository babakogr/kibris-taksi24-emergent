import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { Providers } from './providers'
import { SiteShell } from '@/components/site/site-shell'
import { JsonLd } from '@/components/site/jsonld'
import { SITE } from '@/lib/site'

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter', display: 'swap' })
const poppins = Poppins({ subsets: ['latin', 'latin-ext'], weight: ['500', '600', '700', '800'], variable: '--font-poppins', display: 'swap' })

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Kıbrıs Taksi | Kaliteli ve Uygun | +90 548 875 7731',
    template: '%s',
  },
  description:
    "Kıbrıs Taksi 24 — KKTC'nin premium taksi & transfer platformu. Ercan Havalimanı, Girne, Lefkoşa, Gazimağusa transferleri. 7/24 sabit fiyat, uçuş takipli karşılama, WhatsApp ile 60 saniyede rezervasyon.",
  keywords: ['kıbrıs taksi', 'kktc taksi', 'ercan havalimanı transfer', 'girne taksi', 'lefkoşa taksi', 'kıbrıs transfer', 'kıbrıs vip transfer'],
  authors: [{ name: SITE.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Kıbrıs Taksi & Transfer | Kıbrıs Taksi 24',
    description: "KKTC geneli 7/24 sabit fiyatlı, uçuş takipli premium taksi ve havalimanı transfer hizmeti.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kıbrıs Taksi & Transfer | Kıbrıs Taksi 24',
    description: "KKTC geneli 7/24 sabit fiyatlı premium taksi ve havalimanı transfer hizmeti.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: ['/icon.svg'],
    apple: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

const orgLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.legalName,
  url: SITE.url,
  telephone: `+${SITE.phoneRaw}`,
  email: SITE.email,
  areaServed: SITE.areaServed,
  slogan: SITE.slogan,
}

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'TaxiService',
  name: SITE.name,
  url: SITE.url,
  telephone: `+${SITE.phoneRaw}`,
  areaServed: SITE.areaServed,
  openingHours: 'Mo-Su 00:00-23:59',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: SITE.rating.value, reviewCount: SITE.rating.count },
  provider: { '@type': 'LocalBusiness', name: SITE.legalName, telephone: `+${SITE.phoneRaw}` },
}

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
  inLanguage: 'tr-TR',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/blog?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: 'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);' }} />
        <JsonLd data={orgLd} />
        <JsonLd data={localBusinessLd} />
        <JsonLd data={websiteLd} />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  )
}
