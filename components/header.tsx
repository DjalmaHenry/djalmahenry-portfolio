"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  BookOpen,
  BriefcaseBusiness,
  FolderKanban,
  GraduationCap,
  House,
  Layers3,
  Menu,
  MessageCircle,
  MessageSquareQuote,
  UserRound,
  X,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const navItems = {
  pt: [
    {
      name: "Início",
      href: "#intro",
      icon: House,
      description: "Resumo do posicionamento, frase principal e acessos rápidos para contato e currículo.",
    },
    {
      name: "Sobre",
      href: "#about",
      icon: UserRound,
      description: "Visão geral do perfil, forma de atuação e princípios que orientam as entregas.",
    },
    {
      name: "Experiência",
      href: "#experience",
      icon: BriefcaseBusiness,
      description: "Trajetória profissional com contexto, impacto, escopo e palavras-chave das principais atuações.",
    },
    {
      name: "Stack",
      href: "#stack",
      icon: Layers3,
      description: "Panorama das tecnologias, práticas e ferramentas usadas na construção e operação dos projetos.",
    },
    {
      name: "Projetos",
      href: "#projects",
      icon: FolderKanban,
      description: "Cases selecionados para mostrar produto, interface, solução técnica e potencial visual.",
    },
    {
      name: "Formação",
      href: "#education",
      icon: GraduationCap,
      description: "Formação acadêmica, especializações e certificações que reforçam a base técnica.",
    },
    {
      name: "Recomendações",
      href: "#recommendations",
      icon: MessageSquareQuote,
      description: "Resumo de feedbacks profissionais e depoimentos sobre colaboração, evolução e entrega.",
    },
    {
      name: "Contato",
      href: "#contact",
      icon: BookOpen,
      description: "Canais para iniciar conversa, acessar o LinkedIn e baixar o currículo.",
    },
  ],
  en: [
    {
      name: "Home",
      href: "#intro",
      icon: House,
      description: "Overview of positioning, main statement, and quick actions for contact and resume access.",
    },
    {
      name: "About",
      href: "#about",
      icon: UserRound,
      description: "A concise view of profile, working style, and principles that shape the delivery approach.",
    },
    {
      name: "Experience",
      href: "#experience",
      icon: BriefcaseBusiness,
      description: "Professional journey with context, impact, scope, and key terms from the main roles.",
    },
    {
      name: "Stack",
      href: "#stack",
      icon: Layers3,
      description: "An organized view of technologies, practices, and tools used to build and operate products.",
    },
    {
      name: "Projects",
      href: "#projects",
      icon: FolderKanban,
      description: "Selected cases that highlight product thinking, interface quality, and technical execution.",
    },
    {
      name: "Education",
      href: "#education",
      icon: GraduationCap,
      description: "Academic background, specializations, and certifications that reinforce the technical base.",
    },
    {
      name: "Recommendations",
      href: "#recommendations",
      icon: MessageSquareQuote,
      description: "A summary of professional feedback and testimonials about collaboration, growth, and delivery.",
    },
    {
      name: "Contact",
      href: "#contact",
      icon: BookOpen,
      description: "Channels to start a conversation, open LinkedIn, and download the resume.",
    },
  ],
} as const

const copy = {
  pt: {
    whatsapp: "WhatsApp",
    talk: "Falar no WhatsApp",
    menuLabel: "Abrir menu",
    languageLabel: "Idioma",
  },
  en: {
    whatsapp: "WhatsApp",
    talk: "Talk on WhatsApp",
    menuLabel: "Open menu",
    languageLabel: "Language",
  },
} as const

function LanguageToggle() {
  const { locale, setLocale } = useLanguage()
  const text = copy[locale]

  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-xs uppercase tracking-[0.24em] text-white/40 xl:block">{text.languageLabel}</span>
      <div className="glass-surface flex items-center rounded-full p-1">
        {(["pt", "en"] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setLocale(option)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
              locale === option ? "bg-white text-[#110c09]" : "text-white/58 hover:text-white"
            }`}
            aria-pressed={locale === option}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export function Header() {
  const { locale } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#intro")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navItems.pt.map((item) => item.href)
    const sections = sectionIds
      .map((href) => document.querySelector(href))
      .filter((element): element is HTMLElement => element instanceof HTMLElement)

    if (!sections.length) return

    const onScroll = () => {
      const viewportAnchor = window.innerHeight * 0.32
      let current = sectionIds[0]

      for (const section of sections) {
        const rect = section.getBoundingClientRect()

        if (rect.top <= viewportAnchor && rect.bottom >= viewportAnchor) {
          current = `#${section.id}` as typeof current
          break
        }

        if (rect.top < viewportAnchor) {
          current = `#${section.id}` as typeof current
        }
      }

      setActiveSection(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const items = navItems[locale]
  const text = copy[locale]

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className={`mx-auto max-w-[1400px] transition-all duration-500 ${scrolled ? "translate-y-0" : "translate-y-1"}`}>
        <div
          className={`glass-panel flex items-center justify-between rounded-[24px] px-4 py-3 sm:px-5 ${
            scrolled ? "border-white/14 bg-slate-950/42" : "bg-slate-950/28"
          }`}
        >
          <Link href="/" className="flex items-center" aria-label="Djalma Henry">
            <Image src="/dj.png" alt="DJ" width={1202} height={144} priority className="h-6 w-auto sm:h-7 lg:h-8" />
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {items.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.href

              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    aria-label={item.name}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-amber-200/40 bg-white text-[#140d08] shadow-[0_8px_24px_rgba(255,255,255,0.18)]"
                        : "border-white/10 bg-white/5 text-white/58 hover:border-white/18 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>

                  <div className="pointer-events-none absolute left-1/2 top-full z-20 hidden w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:opacity-100 lg:block">
                    <div className="rounded-[20px] border border-white/14 bg-[rgba(8,6,5,0.96)] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.52)] backdrop-blur-2xl">
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      <p className="mt-2 text-sm leading-6 text-white/78">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle />
            <Link
              href="https://wa.me/message/MGFIOCP73NHXI1"
              target="_blank"
              rel="noopener noreferrer"
              className="button-glass button-glass-primary !px-4 !py-2.5"
            >
              <MessageCircle className="h-4 w-4" />
              {text.whatsapp}
            </Link>
          </div>

          <button
            type="button"
            className="button-icon lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={text.menuLabel}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {isOpen && (
          <div className="glass-panel mt-3 rounded-[24px] p-4 lg:hidden">
            <div className="mb-4">
              <LanguageToggle />
            </div>
            <nav className="flex flex-col gap-2">
              {items.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-colors duration-300 ${
                      isActive ? "bg-white text-[#140d08]" : "text-white/72 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                )
              })}
              <Link
                href="https://wa.me/message/MGFIOCP73NHXI1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="button-glass button-glass-primary mt-2 justify-center"
              >
                <MessageCircle className="h-4 w-4" />
                {text.talk}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
