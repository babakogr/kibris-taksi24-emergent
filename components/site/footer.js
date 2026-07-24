'use client'

import Link from 'next/link'
import { Car, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SITE, waUrl } from '@/lib/site'

const cols = [
  {
    title: 'Hizmetler',
    links: [
      { label: 'Kıbrıs Taksi', href: '/kibris-taksi' },
      { label: 'Kıbrıs Transfer', href: '/kibris-transfer' },
      { label: 'Ercan Havalimanı Transfer', href: '/ercan-havalimani-transfer' },
      { label: 'VIP Transfer', href: '/vip-transfer' },
      { label: 'Online Rezervasyon', href: '/rezervasyon' },
    ],
  },
  {
    title: 'Şehirler',
    links: [
      { label: 'Girne Taksi', href: '/girne-taksi' },
      { label: 'Lefkoşa Taksi', href: '/lefkosa-taksi' },
      { label: 'Gazimağusa Taksi', href: '/gazimagusa-taksi' },
      { label: 'İskele Taksi', href: '/iskele-taksi' },
      { label: 'Lapta Taksi', href: '/lapta-taksi' },
      { label: 'Alsancak Taksi', href: '/alsancak-taksi' },
    ],
  },
  {
    title: 'Popüler Rotalar',
    links: [
      { label: 'Ercan → Girne', href: '/ercan-girne-taksi' },
      { label: 'Ercan → Lefkoşa', href: '/ercan-lefkosa-taksi' },
      { label: 'Ercan → İskele', href: '/ercan-iskele-transfer' },
      { label: 'Ercan → Bafra', href: '/ercan-bafra-transfer' },
      { label: 'Ercan → Merit Royal', href: '/ercan-merit-royal-transfer' },
    ],
  },
  {
    title: 'Kurumsal',
    links: [
      { label: 'Hakkımızda / Kurumsal', href: '/kurumsal' },
      { label: 'Blog', href: '/blog' },
      { label: 'İletişim', href: '/iletisim' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="mt-20 bg-ink text-white/80">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gold">
                <Car className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-extrabold text-white">
                Kıbrıs<span className="text-gold">Taksi</span>24
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              KKTC'nin premium taksi ve havalimanı transfer platformu. 7/24 sabit fiyatlı, uçuş takipli, güvenilir ulaşım.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={`tel:+${SITE.phoneRaw}`} className="flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4 text-gold" /> {SITE.phoneDisplay}</a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-gold"><Mail className="h-4 w-4 text-gold" /> {SITE.email}</a>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> {SITE.areaServed}</p>
              <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> 7/24 Açık</p>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wide text-white">{col.title}</h3>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/60 transition-colors hover:text-gold">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.legalName} · Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            <Link href="/kibris-taksi" className="hover:text-gold">Kıbrıs Taksi</Link>
            <Link href="/kibris-transfer" className="hover:text-gold">Kıbrıs Transfer</Link>
            <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
