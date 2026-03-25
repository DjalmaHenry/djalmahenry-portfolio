"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

export type Locale = "pt" | "en"

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = "portfolio-locale"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt")

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(STORAGE_KEY)

    if (storedLocale === "pt" || storedLocale === "en") {
      setLocale(storedLocale)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en"
  }, [locale])

  return <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }

  return context
}
