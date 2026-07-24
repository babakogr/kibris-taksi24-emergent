import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="breadcrumb" className="w-full">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="flex items-center gap-1 hover:text-ink transition-colors">
            <Home className="h-3.5 w-3.5" /> Ana Sayfa
          </Link>
        </li>
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 opacity-50" />
            {it.href && i < items.length - 1 ? (
              <Link href={it.href} className="hover:text-ink transition-colors">{it.name}</Link>
            ) : (
              <span className="text-ink font-medium">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
