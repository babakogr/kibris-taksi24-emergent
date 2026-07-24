'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.message) { toast.error('Lütfen adınızı ve mesajınızı girin.'); return }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error()
      toast.success('Mesajınız alındı! En kısa sürede dönüş yapacağız.')
      setForm({ name: '', phone: '', email: '', message: '' })
    } catch (err) {
      toast.error('Bir hata oluştu. Lütfen WhatsApp\'tan ulaşın.')
    } finally { setLoading(false) }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div><Label className="mb-1.5 block text-sm font-medium text-ink">Ad Soyad</Label><Input value={form.name} onChange={set('name')} placeholder="Adınız" className="h-11" /></div>
        <div><Label className="mb-1.5 block text-sm font-medium text-ink">Telefon</Label><Input value={form.phone} onChange={set('phone')} placeholder="+90..." className="h-11" /></div>
      </div>
      <div><Label className="mb-1.5 block text-sm font-medium text-ink">E-posta</Label><Input type="email" value={form.email} onChange={set('email')} placeholder="ornek@mail.com" className="h-11" /></div>
      <div><Label className="mb-1.5 block text-sm font-medium text-ink">Mesajınız</Label><Textarea value={form.message} onChange={set('message')} placeholder="Rota, tarih ve talebinizi yazın..." rows={5} /></div>
      <Button type="submit" disabled={loading} className="h-12 w-full bg-ink text-white hover:bg-ink-light">
        {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null} Mesaj Gönder
      </Button>
    </form>
  )
}
