import { SITE } from '@/lib/site'

export default function manifest() {
  return {
    name: SITE.legalName,
    short_name: SITE.name,
    description: SITE.slogan,
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1F33',
    theme_color: '#0B1F33',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
    ],
  }
}
