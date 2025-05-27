"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone } from "lucide-react"

const experiences = [
  {
    company: "Manifesto Games",
    position: "Desenvolvedor Full Stack",
    period: "2021 - Atual",
    description:
      "Atuação no desenvolvimento de dashboards interativos com Angular e React, destinados à criação, gestão de níveis de jogos e acompanhamento de métricas de desempenho dos jogadores.\n\nResponsável pela construção de APIs e microsserviços em NestJS, garantindo integrações robustas e eficientes entre as ferramentas internas e a engine do jogo.\n\nForte atuação em arquitetura de microsserviços, com utilização da Google Cloud Platform (GCP), assegurando escalabilidade, segurança e alta disponibilidade.\n\nAplicação constante de boas práticas de engenharia de software, incluindo Clean Code, Design Patterns e testes automatizados — com Jasmine no front-end e Jest no back-end — assegurando a qualidade e a estabilidade das soluções.\n\nParticipação ativa em times ágeis, com utilização de Scrum e Kanban, contribuindo para o planejamento, execução e entrega contínua de funcionalidades.\n\nAtuação também voltada para a análise de dados e web analytics, com foco na melhoria contínua da usabilidade e da experiência das ferramentas desenvolvidas.",
    technologies: ["Angular", "React", "NestJS", "TypeScript", "Google Cloud/Firebase", "Jasmine", "Jest", "Bitbucket Pipelines"],
  },
  {
    company: "Unicap Icam TECH",
    position: "Pesquisador",
    period: "2020 - 2021",
    description:
      "Pesquisa científica com Python e OpenCV para desenvolvimento de soluções de visão computacional e processamento de imagens.",
    technologies: ["Python", "OpenCV", "Figma"],
  },
  {
    company: "RedLub Recioleo",
    position: "Desenvolvedor Web",
    period: "2019 - 2020",
    description:
      "Desenvolvimento de site institucional e landing pages com WordPress, otimização de SEO e implementação de estratégias de marketing digital.",
    technologies: ["WordPress", "PHP", "Elementor", "Figma"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experiência Profissional</h2>
          <p className="section-subtitle">
            Minha trajetória profissional inclui experiências diversificadas que me permitiram desenvolver habilidades
            técnicas e interpessoais valiosas.
          </p>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.company}</h3>
                        <p className="text-primary font-medium">{experience.position}</p>
                      </div>
                      <p className="text-muted-foreground mt-2 md:mt-0">{experience.period}</p>
                    </div>

                    <div className="mb-4 space-y-4">
                      {experience.description.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="tech-badge">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6">Procurando um profissional com experiência comprovada para sua equipe?</p>
            <a
              href="https://wa.me/message/MGFIOCP73NHXI1"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-primary"
            >
              <Phone className="mr-2 h-5 w-5" /> Vamos conversar sobre oportunidades
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
