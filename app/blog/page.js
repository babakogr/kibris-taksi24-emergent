import Link from 'next/link'
import { Breadcrumbs } from '@/components/site/breadcrumbs'
import { POSTS } from '@/lib/data/posts'
import { ArrowRight, CalendarDays } from 'lucide-react'

export const metadata = {
  title: 'Blog | Kıbrıs Seyahat & Transfer Rehberi — Kıbrıs Taksi 24',
  description: 'KKTC seyahat, ulaşım ve transfer rehberleri. Ercan Havalimanı transfer ipuçları, Girne gezi rehberi, fiyatlandırma ve daha fazlası.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return (
    <div>
      <div className="border-b border-border bg-white"><div className="container py-3"><Breadcrumbs items={[{ name: 'Blog' }]} /></div></div>
      <section className="bg-ink py-14">
        <div className="container text-white">
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Kıbrıs Seyahat & Transfer Blog</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">KKTC'de ulaşım, gezi rehberleri ve transfer ipuçları. Yolculuğunuzu planlamak için bilmeniz gereken her şey.</p>
        </div>
      </section>
      <section className="container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <img src={p.cover} alt={p.title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="flex flex-1 flex-col p-6">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><CalendarDays className="h-3.5 w-3.5" /> {new Date(p.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <h2 className="mt-2 font-display text-lg font-bold leading-snug text-ink">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark">Devamını oku <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
