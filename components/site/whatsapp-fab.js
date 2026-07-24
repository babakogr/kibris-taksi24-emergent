'use client'

import { useEffect, useState } from 'react'
import { waUrl, SITE } from '@/lib/site'
import { Phone } from 'lucide-react'

export function WhatsAppFab() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <a
        href={`tel:+${SITE.phoneRaw}`}
        aria-label="Telefon ile ara"
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-lg shadow-ink/30 transition-all duration-300 hover:scale-105 ${show ? 'opacity-100' : 'pointer-events-none translate-y-2 opacity-0'}`}
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={waUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile rezervasyon"
        className="group flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-white shadow-xl shadow-whatsapp/40 transition-all duration-300 hover:bg-whatsapp-dark hover:scale-105"
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.66 4.55 1.8 6.42L4 29l7.76-1.75a12 12 0 0 0 4.26.78h.01C22.64 28.03 28 22.63 28 16.02 28 9.4 22.64 3 16.02 3Zm0 21.9h-.01c-1.3 0-2.58-.35-3.7-1l-.27-.16-4.6 1.04 1.06-4.48-.18-.29a9.9 9.9 0 0 1-1.52-5.24c0-5.48 4.46-9.94 9.94-9.94 2.66 0 5.15 1.04 7.03 2.92a9.86 9.86 0 0 1 2.91 7.03c0 5.48-4.46 9.94-9.93 9.94Zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.48.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        </svg>
        <span className="font-semibold">WhatsApp Rezervasyon</span>
      </a>
    </div>
  )
}
