"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Internship Manager",
    description:
      "Plataforma de gestão de estagiários desenvolvida para a UNICAP, facilitando o acompanhamento, avaliação e comunicação entre supervisores e estagiários.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/djalmahenry/internship-manager",
  },
  {
    id: 2,
    title: "Daily Journey",
    description:
      "Aplicativo de produtividade com sistema Kanban para gerenciamento de tarefas diárias, incluindo métricas de produtividade e lembretes personalizados.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Firebase", "Redux", "Styled Components"],
    link: "https://github.com/djalmahenry/daily-journey",
  },
  {
    id: 3,
    title: "Multicloud Serverless",
    description:
      "Estudo comparativo de APIs com Node.js, utilizando K6 para testes de carga e Grafana para visualização de métricas em diferentes provedores de nuvem.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Node.js", "AWS Lambda", "GCP Functions", "K6", "Grafana"],
    link: "https://github.com/djalmahenry/multicloud-serverless",
  },
]

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projetos em Destaque</h2>
          <p className="section-subtitle">
            Conheça alguns dos projetos que desenvolvi, demonstrando minha capacidade de criar soluções completas e
            eficientes para diferentes necessidades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Card className="h-full flex flex-col card-hover">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform duration-500 ease-in-out"
                      style={{
                        transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                  </div>

                  <CardContent className="flex-grow p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:underline"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Ver projeto
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6">Interessado em ver como posso contribuir para o seu próximo projeto?</p>
            <a
              href="https://linkedin.com/in/djalmahenry"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-secondary"
            >
              <Linkedin className="mr-2 h-5 w-5" /> Conecte-se comigo no LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
