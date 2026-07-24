import { TRUST_STATS } from '@/lib/site'

export function TrustBar() {
  return (
    <section className="border-y border-border bg-white">
      <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
        {TRUST_STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-2xl font-extrabold text-ink sm:text-3xl">{s.value}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
