'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { DICT } from '@/lib/site'

const LangCtx = createContext({ lang: 'tr', setLang: () => {}, t: DICT.tr })

export function LangProvider({ children }) {
  const [lang, setLang] = useState('tr')

  useEffect(() => {
    try {
      const s = localStorage.getItem('kt_lang')
      if (s === 'en' || s === 'tr') setLang(s)
    } catch (e) {}
  }, [])

  const change = (l) => {
    setLang(l)
    try { localStorage.setItem('kt_lang', l) } catch (e) {}
  }

  return (
    <LangCtx.Provider value={{ lang, setLang: change, t: DICT[lang] }}>
      {children}
    </LangCtx.Provider>
  )
}

export const useLang = () => useContext(LangCtx)
