'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, ChevronDown, Phone } from 'lucide-react'
import { NAV, SITE, waUrl } from '@/lib/site'
import { useLang } from './lang-provider'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'

export function Header() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top bar */}
      <div className="hidden bg-ink text-white/90 md:block">
        <div className="container flex h-9 items-center justify-between text-xs">
          <span className="tracking-wide">{SITE.slogan} · 7/24 Kesintisiz Hizmet</span>
          <div className="flex items-center gap-4">
            <a href={`tel:+${SITE.phoneRaw}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="h-3.5 w-3.5" /> {SITE.phoneDisplay}
            </a>
            <div className="flex items-center gap-1 border-l border-white/20 pl-4">
              <button onClick={() => setLang('tr')} className={`px-1.5 py-0.5 rounded ${lang === 'tr' ? 'bg-gold text-ink font-semibold' : 'hover:text-gold'}`}>TR</button>
              <button onClick={() => setLang('en')} className={`px-1.5 py-0.5 rounded ${lang === 'en' ? 'bg-gold text-ink font-semibold' : 'hover:text-gold'}`}>EN</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/icon.svg" alt="Kıbrıs Taksi 24" width="36" height="36" className="h-9 w-9" />
            <span className="font-display text-lg font-extrabold leading-none tracking-tight text-ink">
              Kıbrıs<span className="text-gold">Taksi</span>24
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-ink">
                    {item.label}
                    <ChevronDown className="h-4 w-4 opacity-60 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="w-72 rounded-xl border border-border bg-white p-2 shadow-xl">
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href} className="block rounded-lg px-3 py-2 transition-colors hover:bg-secondary">
                          <span className="block text-sm font-semibold text-ink">{c.label}</span>
                          {c.desc && <span className="block text-xs text-muted-foreground">{c.desc}</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-ink">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a href={waUrl()} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
              <Button className="bg-whatsapp text-white hover:bg-whatsapp-dark">
                <Phone className="mr-1.5 h-4 w-4" /> {t.whatsapp}
              </Button>
            </a>
            <Link href="/rezervasyon" className="hidden sm:inline-flex">
              <Button className="bg-gold text-ink font-semibold hover:bg-gold-dark">{t.reserve}</Button>
            </Link>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden" aria-label="Menü">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm overflow-y-auto">
                <SheetTitle className="text-left font-display text-ink">Menü</SheetTitle>
                <div className="mt-4 flex flex-col gap-1">
                  {NAV.map((item) =>
                    item.children ? (
                      <div key={item.label} className="py-1">
                        <p className="px-2 py-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">{item.label}</p>
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="block rounded-md px-2 py-2 text-sm font-medium text-ink hover:bg-secondary">
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-sm font-semibold text-ink hover:bg-secondary">
                        {item.label}
                      </Link>
                    )
                  )}
                  <div className="mt-4 flex flex-col gap-2">
                    <a href={waUrl()} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-whatsapp text-white hover:bg-whatsapp-dark">WhatsApp Rezervasyon</Button>
                    </a>
                    <Link href="/rezervasyon" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-gold text-ink font-semibold hover:bg-gold-dark">Online Rezervasyon</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
