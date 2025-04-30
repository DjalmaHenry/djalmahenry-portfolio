"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, Phone } from "lucide-react"

const navItems = [
  { name: "O que eu faço", href: "#what-i-do" },
  { name: "Projetos", href: "#projects" },
  { name: "Experiência", href: "#experience" },
  { name: "Stack", href: "#tech-stack" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent",
      )}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-heading font-bold gradient-text">
            Djalma Henry
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild size="sm" className="ml-2">
              <Link href="https://wa.me/5585984110301" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" /> WhatsApp
              </Link>
            </Button>
            <Button asChild size="sm" variant="outline" className="ml-2">
              <Link href="/cv-djalma-henry.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> Currículo
              </Link>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 px-4 py-6 bg-background/95 backdrop-blur-md border-b">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium py-2 transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link
                href="https://wa.me/5585984110301"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="mr-2 h-4 w-4" /> WhatsApp
              </Link>
            </Button>
            <Button asChild variant="outline" className="mt-2">
              <Link
                href="/cv-djalma-henry.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <Download className="mr-2 h-4 w-4" /> Currículo
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
