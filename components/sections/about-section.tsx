"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Cloud, Users, Lightbulb, Cpu, Layers, GitBranch } from "lucide-react"

const skills = [
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "NestJS", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "AWS", category: "cloud" },
  { name: "Docker", category: "devops" },
  { name: "Kubernetes", category: "devops" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Redis", category: "database" },
  { name: "GraphQL", category: "api" },
  { name: "REST", category: "api" },
  { name: "CI/CD", category: "devops" },
  { name: "Git", category: "devops" },
  { name: "TDD", category: "practices" },
  { name: "Agile", category: "practices" },
]

const strengths = [
  {
    title: "Desenvolvimento Full Stack",
    description: "Experiência sólida em desenvolvimento frontend e backend, criando aplicações completas e escaláveis.",
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: "Arquitetura de Sistemas",
    description:
      "Capacidade de projetar sistemas robustos, escaláveis e de alta performance para necessidades complexas.",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    title: "Cloud & DevOps",
    description: "Implementação e gerenciamento de infraestrutura em nuvem com práticas modernas de DevOps.",
    icon: <Cloud className="h-6 w-6" />,
  },
  {
    title: "Liderança Técnica",
    description: "Experiência em liderar times de desenvolvimento, estabelecendo boas práticas e mentoria.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Inovação com IA",
    description: "Integração de soluções de inteligência artificial para resolver problemas complexos de negócio.",
    icon: <Cpu className="h-6 w-6" />,
  },
  {
    title: "Engenharia de Software",
    description: "Aplicação de princípios sólidos de engenharia para criar código limpo, testável e manutenível.",
    icon: <GitBranch className="h-6 w-6" />,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.p
              className="text-lg mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Sou um desenvolvedor de software sênior com mais de 10 anos de experiência, especializado em criar
              soluções escaláveis e de alta performance. Minha jornada inclui trabalhar com startups inovadoras e
              empresas estabelecidas, sempre buscando aplicar as melhores práticas de engenharia de software.
            </motion.p>

            <motion.p
              className="text-lg mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Tenho experiência sólida em desenvolvimento full-stack, arquitetura de sistemas e liderança técnica. Minha
              abordagem combina excelência técnica com uma compreensão profunda das necessidades de negócio, resultando
              em soluções que realmente geram impacto.
            </motion.p>

            <motion.p
              className="text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Atualmente, estou focado em explorar como a inteligência artificial pode transformar o desenvolvimento de
              software e criar experiências mais intuitivas e eficientes para os usuários.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {skills.map((skill) => (
                <Badge key={skill.name} variant="secondary" className="text-sm py-1">
                  {skill.name}
                </Badge>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Card className="gradient-border h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                  Pontos Fortes
                </h3>
                <ul className="space-y-4">
                  {strengths.map((strength, index) => (
                    <motion.li
                      key={strength.title}
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    >
                      <div className="mt-1 text-primary">{strength.icon}</div>
                      <div>
                        <h4 className="font-medium">{strength.title}</h4>
                        <p className="text-sm text-muted-foreground">{strength.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
