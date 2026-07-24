import Link from 'next/link'
import { Home, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <span className="font-display text-7xl font-extrabold text-gold">404</span>
      <h1 className="mt-4 font-display text-2xl font-bold text-ink">Sayfa bulunamadı</h1>
      <p className="mt-2 max-w-md text-muted-foreground">Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfadan devam edebilirsiniz.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/"><Button className="bg-ink text-white hover:bg-ink-light"><Home className="mr-2 h-4 w-4" /> Ana Sayfa</Button></Link>
        <Link href="/kibris-taksi"><Button variant="outline"><Search className="mr-2 h-4 w-4" /> Kıbrıs Taksi</Button></Link>
      </div>
    </div>
  )
}
