"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Linkedin } from "lucide-react"

const techCategories = [
  {
    name: "Frontend",
    technologies: ["Angular", "React", "Next.js", "React Native", "Flutter", "HTML/CSS", "JavaScript", "TypeScript"],
  },
  {
    name: "Backend",
    technologies: ["Node.js", "NestJS", "Ruby on Rails", "PHP", "Java", "Python", "Go", "C#", "C++"],
  },
  {
    name: "DevOps",
    technologies: ["Docker", "Terraform", "Grafana", "Git", "CI/CD", "GitHub Actions", "Jenkins"],
  },
  {
    name: "Cloud",
    technologies: ["Google Cloud/Firebase", "AWS", "Azure", "Vercel", "Heroku"],
  },
  {
    name: "Testes",
    technologies: ["Jest", "Jasmine", "Selenium", "K6"],
  },
  {
    name: "Banco de Dados",
    technologies: ["MongoDB", "PostgreSQL", "Supabase", "MySQL", "Redis"],
  },
]

export function TechStackSection() {
  return (
    <section id="tech-stack" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Stack de Tecnologias</h2>
          <p className="section-subtitle">
            Domino um conjunto diversificado de tecnologias que me permitem desenvolver soluções completas e eficientes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05, duration: 0.3 }}
                    >
                      <Badge className="tech-badge">{tech}</Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6">Procurando um desenvolvedor versátil com domínio em múltiplas tecnologias?</p>
            <a
              href="https://linkedin.com/in/djalmahenry"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-secondary"
            >
              <Linkedin className="mr-2 h-5 w-5" /> Veja meu perfil completo no LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
