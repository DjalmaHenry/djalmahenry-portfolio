"use client"

import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"

export function ResumeSection() {
  return (
    <section className="py-8 bg-gradient-to-r from-primary/5 to-secondary/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold">Meu Currículo</h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              Baixe meu currículo completo para conhecer em detalhes minha formação, experiência e habilidades técnicas.
            </p>
          </div>

          <a
            href="/curriculo-djalma-henry.pdf"
            download
            className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300"
          >
            <FileText className="h-5 w-5" />
            <span className="flex flex-col">
              <span className="text-sm opacity-90">Formato PDF</span>
              <span className="font-bold">Baixar Currículo</span>
            </span>
            <Download className="h-5 w-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
