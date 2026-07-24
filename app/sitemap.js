import { getAllSlugs } from '@/lib/data/locations'
import { POSTS } from '@/lib/data/posts'
import { SITE } from '@/lib/site'

export default function sitemap() {
  const base = SITE.url
  const now = new Date()
  const staticPages = ['', 'rezervasyon', 'kurumsal', 'blog', 'iletisim']
  const entries = [
    ...staticPages.map((p) => ({ url: `${base}/${p}`, lastModified: now, changeFrequency: 'weekly', priority: p === '' ? 1 : 0.7 })),
    ...getAllSlugs().map((s) => ({ url: `${base}/${s}`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 })),
    ...POSTS.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 })),
  ]
  return entries
}
