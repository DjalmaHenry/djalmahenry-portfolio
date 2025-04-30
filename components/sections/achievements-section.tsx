"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Lightbulb } from "lucide-react"

const achievements = [
  {
    title: "Formando Laureado UNICAP",
    description:
      "Reconhecimento por excelência acadêmica e contribuições significativas para a instituição durante o curso de graduação.",
    icon: <Award className="h-8 w-8 text-primary" />,
  },
  {
    title: "Minicurso de Microsserviços na AWS",
    description:
      "Desenvolvimento e ministração de minicurso sobre arquitetura de microsserviços utilizando serviços da Amazon Web Services.",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
  },
  {
    title: "Prêmio de Inovação no Hackathon STARTUP WAY",
    description:
      "Reconhecimento pelo desenvolvimento da startup Gerassol, focada em soluções sustentáveis para geração de energia.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Conquistas</h2>
          <p className="section-subtitle">
            Reconhecimentos e realizações que demonstram meu compromisso com a excelência e inovação.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full card-hover">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-primary/10 rounded-full">{achievement.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
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
