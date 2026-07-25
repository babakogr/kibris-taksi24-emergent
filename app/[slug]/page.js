import { getPage, getAllSlugs } from '@/lib/data/locations'
import { LandingTemplate } from '@/components/site/landing-template'
import { notFound } from 'next/navigation'
import { SITE } from '@/lib/site'

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const page = getPage(slug)
  if (!page) return {}
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: [page.kw, ...(page.subKeywords || [])],
    alternates: { canonical: `/${slug}` },
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url: `${SITE.url}/${slug}`,
      siteName: SITE.name,
      title: page.metaTitle,
      description: page.metaDescription,
      images: [{ url: page.hero }],
    },
    twitter: { card: 'summary_large_image', title: page.metaTitle, description: page.metaDescription, images: [page.hero] },
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  const page = getPage(slug)
  if (!page) notFound()
  return <LandingTemplate page={page} />
}
