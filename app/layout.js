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
    icon: [{ url: '/icon.svg', type: 'image/svg+xml', sizes: '96x96' }],
  },
}

const organizationId = `${SITE.url}/#organization`
const localBusinessId = `${SITE.url}/#localbusiness`

const orgLd = {
  '@context': 'https://schema.org',
  '@id': organizationId,
  '@type': 'Organization',
  name: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/logo.svg`,
  telephone: `+${SITE.phoneRaw}`,
  email: SITE.email,
  areaServed: SITE.areaServed,
  slogan: SITE.slogan,
}

const hasPhysicalBusinessAddress = Boolean(
  SITE.address?.streetAddress && SITE.address?.addressLocality
)

const localBusinessLd = hasPhysicalBusinessAddress ? {
  '@context': 'https://schema.org',
  '@id': localBusinessId,
  '@type': 'LocalBusiness',
  name: SITE.legalName,
  url: SITE.url,
  telephone: `+${SITE.phoneRaw}`,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.streetAddress,
    addressLocality: SITE.address.addressLocality,
    addressRegion: SITE.address.addressRegion || undefined,
    postalCode: SITE.address.postalCode || undefined,
    addressCountry: SITE.address.addressCountry,
  },
  parentOrganization: { '@id': organizationId },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '$$',
} : null

const taxiServiceLd = {
  '@context': 'https://schema.org',
  '@id': `${SITE.url}/#taxi-service`,
  '@type': 'TaxiService',
  name: `${SITE.name} Taxi & Transfer`,
  url: SITE.url,
  provider: { '@id': localBusinessLd ? localBusinessId : organizationId },
  serviceType: 'Taxi and private transfer',
  areaServed: SITE.areaServed,
  availableChannel: {
    '@type': 'ServiceChannel',
    servicePhone: {
      '@type': 'ContactPoint',
      telephone: `+${SITE.phoneRaw}`,
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English'],
    },
  },
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  providerMobility: 'dynamic',
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
        {localBusinessLd && <JsonLd data={localBusinessLd} />}
        <JsonLd data={taxiServiceLd} />
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
