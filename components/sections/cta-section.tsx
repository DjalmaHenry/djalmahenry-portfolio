"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle, User } from "lucide-react"

export function CtaSection() {
  return (
    <section id="cta" className="section-padding bg-primary/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos construir algo incrível juntos?</h2>
          <p className="text-xl mb-8">
            Estou disponível para novos projetos, consultorias e oportunidades de trabalho. Entre em contato e vamos
            discutir como posso ajudar a transformar suas ideias em realidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="https://wa.me/5585984110301"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-primary text-lg py-4 px-8"
            >
              <MessageCircle className="mr-2 h-5 w-5" /> Conversar pelo WhatsApp
            </Link>
            <Link
              href="https://linkedin.com/in/djalmahenry"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-secondary text-lg py-4 px-8"
            >
              <User className="mr-2 h-5 w-5" /> Ver perfil no LinkedIn
            </Link>
          </div>

          <div className="text-muted-foreground">
            <p>Email: contato@djalmahenry.com</p>
            <p>Telefone: (85) 98411-0301</p>
            <p>Fortaleza/CE</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
