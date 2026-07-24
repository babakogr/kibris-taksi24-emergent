import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/site/breadcrumbs'
import { JsonLd } from '@/components/site/jsonld'
import { POSTS, getPost } from '@/lib/data/posts'
import { SITE, waUrl } from '@/lib/site'
import { Button } from '@/components/ui/button'
import { CalendarDays, ArrowLeft } from 'lucide-react'

export const dynamicParams = false
export async function generateStaticParams() { return POSTS.map((p) => ({ slug: p.slug })) }

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: 'article', title: post.title, description: post.excerpt, images: [post.cover], url: `${SITE.url}/blog/${slug}` },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt, images: [post.cover] },
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.cover,
    datePublished: post.date,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.legalName },
  }

  return (
    <article>
      <JsonLd data={articleLd} />
      <div className="border-b border-border bg-white"><div className="container py-3"><Breadcrumbs items={[{ name: 'Blog', href: '/blog' }, { name: post.title }]} /></div></div>
      <div className="container max-w-3xl py-12">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark hover:text-gold"><ArrowLeft className="h-4 w-4" /> Tüm yazılar</Link>
        <span className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground"><CalendarDays className="h-4 w-4" /> {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        <h1 className="mt-2 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">{post.title}</h1>
        <img src={post.cover} alt={post.title} className="mt-6 h-72 w-full rounded-2xl object-cover shadow-sm" />
        <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink/80">
          {post.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="mt-10 rounded-2xl bg-ink p-8 text-center text-white">
          <h2 className="font-display text-xl font-bold">Transfer mi lazım?</h2>
          <p className="mt-2 text-white/70">7/24 sabit fiyatlı Kıbrıs taksi & transfer için hemen rezervasyon yapın.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href={waUrl()} target="_blank" rel="noopener noreferrer"><Button className="bg-whatsapp text-white hover:bg-whatsapp-dark">WhatsApp Rezervasyon</Button></a>
            <Link href="/rezervasyon"><Button className="bg-gold font-semibold text-ink hover:bg-gold-dark">Online Rezervasyon</Button></Link>
          </div>
        </div>
      </div>
    </article>
  )
}
