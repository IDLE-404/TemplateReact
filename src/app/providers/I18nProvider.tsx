import { useEffect, useState, type ReactNode } from 'react'
import { I18nContext, type Lang } from '@/shared/i18n/I18nContext'
import { en } from '@/shared/i18n/en'
import { ru } from '@/shared/i18n/ru'

const dictionaries = { en, ru }

const getInitialLang = (): Lang => {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'ru') return saved
  } catch {
    return 'en'
  }
  return navigator.language.startsWith('ru') ? 'ru' : 'en'
}

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('lang', lang)
  }, [lang])

  return (
    <I18nContext.Provider value={{ lang, t: dictionaries[lang], setLang }}>
      {children}
    </I18nContext.Provider>
  )
}
