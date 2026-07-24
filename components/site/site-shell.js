'use client'

import { LangProvider } from './lang-provider'
import { Header } from './header'
import { Footer } from './footer'
import { WhatsAppFab } from './whatsapp-fab'
import { Toaster } from '@/components/ui/sonner'

export function SiteShell({ children }) {
  return (
    <LangProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFab />
      <Toaster position="top-center" richColors />
    </LangProvider>
  )
}
