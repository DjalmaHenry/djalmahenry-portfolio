"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Workflow, Users, Phone } from "lucide-react"

const services = [
  {
    title: "Desenvolvimento Full Stack",
    description:
      "Criação de aplicações completas e responsivas com Angular, React, React Native e NestJS, garantindo experiências de usuário excepcionais e backends robustos.",
    icon: <Code className="h-10 w-10 text-primary" />,
  },
  {
    title: "Arquitetura de Microsserviços",
    description:
      "Implementação de arquiteturas escaláveis e resilientes utilizando as melhores práticas em GCP, AWS e Azure, otimizando performance e reduzindo custos.",
    icon: <Server className="h-10 w-10 text-primary" />,
  },
  {
    title: "Engenharia de Software",
    description:
      "Aplicação de Clean Code, testes automatizados com Jest/Jasmine e Design Patterns para garantir código manutenível, testável e de alta qualidade.",
    icon: <Workflow className="h-10 w-10 text-primary" />,
  },
  {
    title: "Metodologias Ágeis",
    description:
      "Experiência em times ágeis com Scrum e Kanban, facilitando entregas contínuas, colaboração eficiente e adaptação rápida às mudanças de requisitos.",
    icon: <Users className="h-10 w-10 text-primary" />,
  },
]

export function WhatIDoSection() {
  return (
    <section id="what-i-do" className="section-padding bg-secondary/30 pt-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">O Que Eu Faço</h2>
          <p className="section-subtitle">
            Ofereço soluções completas de desenvolvimento, desde a concepção até a implementação e manutenção, sempre
            com foco em qualidade, escalabilidade e experiência do usuário.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full card-hover">
                  <CardContent className="p-6">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6">
              Procurando um desenvolvedor que entregue resultados consistentes e de alta qualidade?
            </p>
            <a
              href="https://wa.me/5585984110301"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-primary"
            >
              <Phone className="mr-2 h-5 w-5" /> Vamos conversar sobre seu projeto
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
