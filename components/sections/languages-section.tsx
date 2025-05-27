"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Globe } from "lucide-react"

const languages = [
  {
    language: "Português",
    level: "Nativo",
    proficiency: 100,
  },
  {
    language: "Inglês",
    level: "B1 - Intermediário",
    proficiency: 60,
  },
]

export function LanguagesSection() {
  return (
    <section id="languages" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Idiomas</h2>
          <p className="section-subtitle">
            Capacidade de comunicação em diferentes idiomas, facilitando a colaboração em equipes internacionais.
          </p>

          <div className="max-w-2xl mx-auto">
            {languages.map((language, index) => (
              <motion.div
                key={language.language}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="mb-8"
              >
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Globe className="h-6 w-6 text-primary mr-3" />
                      <div>
                        <h3 className="text-xl font-bold">{language.language}</h3>
                        <p className="text-muted-foreground">{language.level}</p>
                      </div>
                    </div>

                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <motion.div
                        className="bg-primary h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${language.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      ></motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
