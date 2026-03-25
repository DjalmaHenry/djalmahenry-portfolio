"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const links = [
  { href: "https://github.com/djalmahenry", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/djalmahenry", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:contato@djalmahenry.com", label: "E-mail", icon: Mail },
  { href: "https://wa.me/message/MGFIOCP73NHXI1", label: "WhatsApp", icon: Phone },
]

const copy = {
  pt: {
    description: "Desenvolvedor Full Stack com foco em microsserviços, cloud e aplicações escaláveis.",
  },
  en: {
    description: "Full Stack Developer focused on microservices, cloud architecture, and scalable applications.",
  },
} as const

export function Footer() {
  const { locale } = useLanguage()
  const text = copy[locale]

  return (
    <footer className="relative z-10 px-4 pb-8 pt-4 sm:px-6">
      <div className="container-custom">
        <div className="glass-panel flex flex-col gap-6 rounded-[28px] px-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/42">Djalma Henry</p>
            <p className="mt-2 text-sm text-white/66">{text.description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {links.map((item) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="button-icon"
                  aria-label={item.label}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
