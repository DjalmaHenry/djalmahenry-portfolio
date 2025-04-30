"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, Phone, Linkedin } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const rect = containerRef.current.getBoundingClientRect()

      const x = clientX - rect.left
      const y = clientY - rect.top

      containerRef.current.style.setProperty("--mouse-x", `${x}px`)
      containerRef.current.style.setProperty("--mouse-y", `${y}px`)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden"
      ref={containerRef}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(59, 130, 246, 0.15),
            transparent 40%
          )`,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Sua próxima <span className="gradient-text">contratação estratégica</span> em tecnologia Full Stack.
              </motion.h1>
              <motion.p
                className="mt-6 text-xl md:text-2xl text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Mais de 5 anos entregando soluções escaláveis, inteligentes e sustentáveis para empresas inovadoras.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                href="https://wa.me/message/MGFIOCP73NHXI1"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-primary"
              >
                <Phone className="mr-2 h-5 w-5" /> Falar via WhatsApp
              </Link>
              <Link
                href="https://linkedin.com/in/djalmahenry"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-secondary"
              >
                <Linkedin className="mr-2 h-5 w-5" /> Ver Perfil no LinkedIn
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative pl-16 w-full h-[550px] animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-card border rounded-2xl overflow-hidden h-full gradient-border">
                <Image
                  src="/djalmahenry.jpg?height=500&width=500"
                  alt="Djalma Henry - Desenvolvedor Full Stack Sênior"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-sm bg-background/70 backdrop-blur-sm px-4 py-2 rounded-full text-foreground mb-2">
          Conheça mais
        </span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.div>
    </section>
  )
}
