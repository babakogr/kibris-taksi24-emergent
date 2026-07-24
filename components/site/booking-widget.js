'use client'

import { useState } from 'react'
import { waUrl, PLACES } from '@/lib/site'
import { useLang } from './lang-provider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { ArrowRightLeft, MapPin, Flag, CalendarDays, Clock, Users, Luggage, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export function BookingWidget({ defaultFrom = '', defaultTo = '', className = '' }) {
  const { t } = useLang()
  const [trip, setTrip] = useState('oneWay')
  const [from, setFrom] = useState(defaultFrom)
  const [to, setTo] = useState(defaultTo)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [retDate, setRetDate] = useState('')
  const [retTime, setRetTime] = useState('')
  const [pax, setPax] = useState('2')
  const [bags, setBags] = useState('2')
  const [child, setChild] = useState(false)
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const swap = () => { setFrom(to); setTo(from) }

  const submit = async () => {
    if (!from || !to) { toast.error('Lütfen kalkış ve varış noktasını seçin.'); return }
    if (from === to) { toast.error('Kalkış ve varış aynı olamaz.'); return }
    setLoading(true)

    const lines = [
      '🚕 Kıbrıs Taksi 24 – Rezervasyon Talebi',
      `📍 Nereden: ${from}`,
      `🏁 Nereye: ${to}`,
      `📅 Tarih: ${date || '-'}   🕐 Saat: ${time || '-'}`,
      `👥 Yolcu: ${pax}   🧳 Bavul: ${bags}`,
      `👶 Çocuk koltuğu: ${child ? 'Evet' : 'Hayır'}`,
      trip === 'roundTrip'
        ? `🔁 Gidiş-Dönüş (Dönüş: ${retDate || '-'} ${retTime || ''})`
        : '➡️ Tek Yön',
    ]
    if (name) lines.push(`🙍 Ad Soyad: ${name}`)
    lines.push('', 'Lütfen uygunluk ve sabit fiyat bilgisi verir misiniz?')
    const message = lines.join('\n')

    // Save lead (best-effort, non-blocking for the WhatsApp flow)
    try {
      await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ from, to, date, time, retDate, retTime, pax, bags, child, name, trip }),
      })
    } catch (e) {}

    window.open(waUrl(message), '_blank')
    setLoading(false)
    toast.success('WhatsApp\'a yönlendiriliyorsunuz...')
  }

  return (
    <div className={`rounded-2xl border border-border bg-white p-5 shadow-2xl shadow-ink/10 sm:p-6 ${className}`}>
      {/* Trip type */}
      <div className="mb-4 inline-flex rounded-full bg-secondary p-1 text-sm">
        <button onClick={() => setTrip('oneWay')} className={`rounded-full px-4 py-1.5 font-medium transition-colors ${trip === 'oneWay' ? 'bg-ink text-white' : 'text-ink/70'}`}>{t.oneWay}</button>
        <button onClick={() => setTrip('roundTrip')} className={`rounded-full px-4 py-1.5 font-medium transition-colors ${trip === 'roundTrip' ? 'bg-ink text-white' : 'text-ink/70'}`}>{t.roundTrip}</button>
      </div>

      <div className="grid gap-3">
        {/* From / To */}
        <div className="relative grid gap-3 sm:grid-cols-2">
          <div>
            <Label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-ink/70"><MapPin className="h-3.5 w-3.5 text-gold" /> {t.from}</Label>
            <Select value={from} onValueChange={setFrom}>
              <SelectTrigger className="h-11"><SelectValue placeholder={t.selectFrom} /></SelectTrigger>
              <SelectContent>{PLACES.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-ink/70"><Flag className="h-3.5 w-3.5 text-gold" /> {t.to}</Label>
            <Select value={to} onValueChange={setTo}>
              <SelectTrigger className="h-11"><SelectValue placeholder={t.selectTo} /></SelectTrigger>
              <SelectContent>{PLACES.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <button onClick={swap} type="button" aria-label="Yön değiştir" className="absolute left-1/2 top-[34px] hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-white text-ink shadow-sm transition hover:bg-secondary sm:flex">
            <ArrowRightLeft className="h-4 w-4" />
          </button>
        </div>

        {/* Date / Time */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <Label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-ink/70"><CalendarDays className="h-3.5 w-3.5 text-gold" /> {t.date}</Label>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="h-11" />
          </div>
          <div>
            <Label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-ink/70"><Clock className="h-3.5 w-3.5 text-gold" /> {t.time}</Label>
            <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="h-11" />
          </div>
        </div>

        {trip === 'roundTrip' && (
          <div className="grid gap-3 rounded-lg bg-secondary/60 p-3 sm:grid-cols-2">
            <div>
              <Label className="mb-1.5 block text-xs font-semibold text-ink/70">Dönüş Tarihi</Label>
              <Input type="date" value={retDate} onChange={(e) => setRetDate(e.target.value)} className="h-11 bg-white" />
            </div>
            <div>
              <Label className="mb-1.5 block text-xs font-semibold text-ink/70">Dönüş Saati</Label>
              <Input type="time" value={retTime} onChange={(e) => setRetTime(e.target.value)} className="h-11 bg-white" />
            </div>
          </div>
        )}

        {/* Pax / Bags */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <Label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-ink/70"><Users className="h-3.5 w-3.5 text-gold" /> {t.passengers}</Label>
            <Select value={pax} onValueChange={setPax}>
              <SelectTrigger className="h-11"><SelectValue /></SelectTrigger>
              <SelectContent>{[1,2,3,4,5,6,7,8].map((n) => <SelectItem key={n} value={String(n)}>{n} Yolcu</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-ink/70"><Luggage className="h-3.5 w-3.5 text-gold" /> {t.luggage}</Label>
            <Select value={bags} onValueChange={setBags}>
              <SelectTrigger className="h-11"><SelectValue /></SelectTrigger>
              <SelectContent>{[0,1,2,3,4,5,6,7,8].map((n) => <SelectItem key={n} value={String(n)}>{n} Bavul</SelectItem>)}</SelectContent>
            </Select>
          </div>
        </div>

        <Input placeholder="Ad Soyad (isteğe bağlı)" value={name} onChange={(e) => setName(e.target.value)} className="h-11" />

        <label className="flex cursor-pointer items-center gap-2 text-sm text-ink/80">
          <Checkbox checked={child} onCheckedChange={(v) => setChild(!!v)} /> {t.childSeat} istiyorum
        </label>

        <Button onClick={submit} disabled={loading} className="h-12 w-full bg-whatsapp text-base font-semibold text-white hover:bg-whatsapp-dark">
          {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
          {t.continueWhatsApp}
        </Button>
        <p className="text-center text-xs text-muted-foreground">{t.priceNote}</p>
      </div>
    </div>
  )
}
