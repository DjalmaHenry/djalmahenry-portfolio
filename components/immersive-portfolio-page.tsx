"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Download,
  GraduationCap,
  MapPin,
  MessageCircle,
  Presentation,
  Quote,
  ServerCog,
  Sparkles,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"

type PortfolioCopy = typeof portfolioCopy.pt

const portfolioCopy = {
  pt: {
    hero: {
      location: "Fortaleza, Ceará, Brasil",
      role: "Desenvolvedor Full Stack",
      titleLead: "Engenharia de software com visão de produto.",
      titleRest: "Arquitetura sólida e escalável que fortalece a evolução do seu produto.",
      description:
        "Engenheiro de software com 5 anos de experiência, atuando de ponta a ponta na construção de produtos digitais com foco em arquitetura, escalabilidade e segurança. Combina visão de negócio, atenção aos detalhes e versatilidade técnica para transformar problemas reais em soluções robustas, sustentáveis e cada vez mais inteligentes.",
      actions: {
        whatsapp: "Falar no WhatsApp",
        linkedin: "Ver LinkedIn",
        resume: "Baixar currículo",
      },
      stats: [
        { value: "5 anos", label: "desenvolvendo produtos digitais com foco em escala, segurança e consistência técnica" },
        { value: "Multicloud", label: "arquitetura e operação em GCP, AWS e Azure" },
        { value: "Full Stack", label: "Node.js, Python, NestJS, React.js e Vue.js como base da atuação" },
      ],
      noteTop: "Graduado em Ciência da Computação pela UNICAP",
      noteBottom: "Prêmio de inovação no STARTUP WAY e experiência como palestrante",
    },
    about: {
      eyebrow: "Sobre",
      title: "Engenharia consistente, visão prática e foco no que gera resultado.",
      description:
        "Hoje a atuação está menos sobre uma stack específica e mais sobre tomar boas decisões de engenharia para construir software confiável, escalável e útil de verdade. O foco está em arquitetura, clareza técnica, entendimento do negócio e capacidade de adaptar a solução ao problema certo.",
      highlights: [
        {
          title: "Arquitetura orientada à realidade do produto",
          description:
            "Decisões técnicas guiadas por contexto, maturidade do produto e necessidade real de escala, segurança e evolução.",
          icon: ServerCog,
        },
        {
          title: "Versatilidade para resolver problemas",
          description:
            "Atuação de ponta a ponta entre front-end, back-end, arquitetura e integrações, sempre com atenção à experiência e ao impacto da entrega.",
          icon: BriefcaseBusiness,
        },
        {
          title: "Qualidade técnica com visão de negócio",
          description:
            "Boas práticas, testes, observabilidade e leitura de negócio combinados para entregar software robusto e sustentável no dia a dia.",
          icon: Cloud,
        },
      ],
      visualTitle: "Arquitetura, stack ou bastidores",
      visualDescription:
        "Espaço pensado para um diagrama simples de arquitetura, collage de tecnologias ou screenshot de algum fluxo técnico representativo.",
    },
    experience: {
      eyebrow: "Experiência",
      title: "Trajetória construída com evolução contínua e contexto real de produto.",
      description:
        "A seção foi reorganizada para ficar mais fluida e mais próxima de uma leitura executiva: menos listas extensas e mais contexto sobre escopo, impacto e tecnologias-chave.",
      recognitionsTitle: "Reconhecimentos",
      recognitions: [
        "Aluno laureado em Ciência da Computação na UNICAP",
        "Minicurso ministrado sobre microsserviços na AWS",
        "Prêmio de inovação no Hackathon STARTUP WAY",
      ],
      locationLabel: "Local",
      impactLabel: "Impacto",
      keywordsLabel: "Palavras-chave",
      relatedLabel: "Projeto relacionado",
      entries: [
        {
          company: "Luizalabs (Magazine Luiza)",
          role: "Desenvolvedor Full Stack Pleno",
          employment: "Tempo integral",
          period: "Julho de 2025 – Atual",
          duration: "9 meses",
          location: "Remoto (Brasil)",
          summary:
            "Atua em uma squad estratégica de logística e fulfillment dentro do ecossistema Magalu, contribuindo na construção de soluções altamente escaláveis e resilientes para gestão inteligente de estoque. O escopo envolve sistemas críticos com alta volumetria, iniciativas de agentes de inteligência artificial voltados ao seller e participação ativa em decisões de arquitetura, observabilidade, performance e integração contínua.",
          impact:
            "Esse trabalho apoia diretamente a eficiência operacional de milhares de sellers, reduz gargalos logísticos e amplia a confiabilidade dos fluxos centrais da plataforma.",
          keywords: ["Fulfillment", "Microsserviços", "IA aplicada", "CI/CD", "Observabilidade", "Jest", "TypeScript"],
          related: "Portal de logística do Seller",
        },
        {
          company: "Manifesto Games",
          role: "Desenvolvedor Full Stack",
          employment: "Meio período",
          period: "Fevereiro de 2023 – Julho de 2025",
          duration: "2 anos e 6 meses",
          location: "Remoto (Recife, PE)",
          summary:
            "Atuou no desenvolvimento de dashboards interativos com Angular e React voltados para criação, gestão de funcionalidades internas e acompanhamento de métricas de uso. Também foi responsável pela construção de APIs e microsserviços com NestJS, pela integração entre sistemas internos e plataformas interativas e pela evolução de uma arquitetura em Google Cloud Platform com foco em escalabilidade, segurança e alta disponibilidade.",
          impact:
            "O trabalho fortaleceu a qualidade das entregas, elevou a robustez das integrações entre sistemas e ajudou a melhorar a experiência do usuário por meio de analytics, dashboards e uma base técnica mais confiável.",
          keywords: ["Angular", "React", "NestJS", "GCP", "Jasmine", "Jest", "Web Analytics"],
          related: "Plataforma Geppetto",
        },
        {
          company: "Manifesto Games",
          role: "Estagiário – Desenvolvedor Full Stack",
          employment: "Estágio",
          period: "Agosto de 2021 – Janeiro de 2023",
          duration: "1 ano e 6 meses",
          location: "Remoto",
          summary:
            "Iniciou a trajetória na empresa desenvolvendo dashboards para uso interno e para clientes, criando interfaces interativas, colaborando com APIs e lógica de back-end e ganhando rapidamente mais responsabilidade técnica em projetos com impacto direto no cliente.",
          impact:
            "Esse ciclo marcou a evolução acelerada de estagiário para desenvolvedor full stack, com entregas consistentes e contribuição real para a produtividade do time.",
          keywords: ["Dashboards", "Front-end", "Back-end", "JavaScript", "Jest"],
        },
        {
          company: "Manifesto Games",
          role: "Residência Júnior – Manifesto Power Up! Tools",
          employment: "Aprendiz",
          period: "Abril de 2021 – Julho de 2021",
          duration: "4 meses",
          location: "Remoto",
          summary:
            "Participou do programa de residência focado no desenvolvimento de soluções internas, com forte aprendizado prático em desenvolvimento web, construção de dashboards e implementação de funcionalidades front-end e back-end em um ambiente colaborativo.",
          impact:
            "Foi a base para consolidar a mentalidade de engenharia de software e a primeira experiência prática com sistemas reais.",
          keywords: ["Dashboard interno", "TypeScript", "JavaScript", "Aprendizado prático"],
        },
        {
          company: "Unicap Icam TECH",
          role: "Pesquisador Científico",
          employment: "Voluntário (PIBIC/CNPq)",
          period: "Agosto de 2021 – Março de 2022",
          duration: "8 meses",
          location: "Recife, PE",
          summary:
            "Atuou em pesquisa científica voltada para processamento de imagens aplicado a cidades inteligentes, desenvolvendo soluções com Python e OpenCV e trabalhando com análise técnica em um contexto acadêmico estruturado.",
          impact:
            "A experiência consolidou pensamento analítico, base sólida em visão computacional e repertório em inovação tecnológica.",
          keywords: ["Python", "OpenCV", "Pesquisa científica", "Visão computacional"],
        },
        {
          company: "RedLub Recioleo",
          role: "Desenvolvedor Front-end",
          employment: "Freelancer",
          period: "Janeiro de 2021 – Junho de 2021",
          duration: "6 meses",
          location: "Híbrido (PE)",
          summary:
            "Atuou no desenvolvimento da página institucional e da página de vendas da empresa, com foco em experiência do usuário, conversão e alinhamento direto com as necessidades de negócio do cliente.",
          impact:
            "A entrega reforçou a presença digital da empresa e trouxe experiência prática com projetos reais, interface comercial e relacionamento com cliente.",
          keywords: ["Front-end", "Elementor", "Figma", "Conversão", "Landing page"],
        },
      ],
    },
    stack: {
      eyebrow: "Stack",
      title: "Tecnologia escolhida para construir, escalar e sustentar produto.",
      description:
        "O repertório técnico foi organizado para destacar o que realmente importa: base forte em desenvolvimento Full Stack, cloud, testes e operação.",
      groups: [
        { title: "Destaque", items: ["Node.js", "Python", "NestJS", "React.js", "Vue.js"] },
        { title: "Front-end", items: ["React", "Next.js", "Vue.js", "Angular", "TypeScript"] },
        { title: "Back-end", items: ["Node.js", "NestJS", "Python"] },
        { title: "Testes", items: ["Jest", "Jasmine", "K6"] },
        { title: "Cloud e dados", items: ["GCP", "AWS", "Azure", "MongoDB", "Oracle Cloud"] },
        { title: "DevOps", items: ["Terraform", "Grafana", "GitHub", "GitLab", "Bitbucket", "Pipelines de CI/CD"] },
      ],
    },
    projects: {
      eyebrow: "Projetos",
      title: "Cases selecionados para evidenciar produto, interface e solução.",
      description:
        "Os projetos abaixo foram mantidos porque comunicam melhor a combinação entre construção técnica, clareza de proposta e potencial visual.",
      items: [
        {
          title: "Shoryu",
          stack: "Vue.js + Python",
          href: "https://shoryu.co/",
          description:
            "Plataforma para gerenciamento de torneios esportivos, reunindo venda de ingressos, chaveamento, registro de partidas e controle de premiações em um único fluxo.",
          imageSrc: "/shoryu.png",
          imageAlt: "Interface do projeto Shoryu",
        },
        {
          title: "Vitrine Visuh Ótica",
          stack: "Next.js + Supabase",
          href: "https://www.visuhotica.com.br/",
          description:
            "Sistema que conecta vitrine digital e dashboard de estoque, com customização de produtos, integração com WhatsApp e leitura de métricas de vendas.",
          imageSrc: "/visuh.png",
          imageAlt: "Interface do projeto Vitrine Visuh Ótica",
        },
      ],
    },
    education: {
      educationEyebrow: "Formação",
      educationTitle: "Base acadêmica forte e especialização prática.",
      educationDescription:
        "Formação que combina excelência acadêmica, reconhecimento por desempenho e aprofundamento técnico orientado ao mercado.",
      certificationEyebrow: "Certificações",
      certificationTitle: "Atualização contínua em engenharia, performance e metodologia.",
      certificationDescription:
        "A seleção prioriza certificações que reforçam domínio técnico, cultura de qualidade e capacidade de operar em times maduros.",
      certificationHighlightsLabel: "Destaques",
      certificationExtrasLabel: "Outras certificações",
      items: [
        {
          institution: "Universidade Católica de Pernambuco (UNICAP)",
          title: "Bacharelado em Ciência da Computação",
          period: "2020 – 2023",
          details: [
            "Aluno laureado, com a maior nota da turma.",
            "Premiado com inovação no Hackathon STARTUP WAY.",
            "Palestrante em minicurso sobre microsserviços na AWS.",
          ],
        },
        {
          institution: "Rocketseat",
          title: "Especialização Full Stack (Ignite)",
          period: "2022 – 2023",
          details: ["Foco em React.js, Node.js, Next.js, TypeScript e Design Systems com Storybook."],
        },
      ],
      certificationHighlights: [
        "Plataforma de Dados: O Início - Magalu",
        "Kanban Force Jedi - Luizalabs",
        "Teste de Performance com K6 - Udemy",
        "Ignite ReactJS - Rocketseat",
      ],
      certificationExtras: [
        "Linux para Desenvolvedores - Magalu",
        "Segurança da Informação - Magalu",
        "Extração de Dados com Python - Udemy",
        "Métodos Ágeis - Unicap",
        "API REST com SpringBoot e MongoDB - Unicap",
        "React Avançado com TypeScript - Unicap",
      ],
    },
    recommendations: {
      eyebrow: "Recomendações",
      title: "Feedback recorrente sobre disciplina, evolução e capacidade de entrega.",
      description:
        "As recomendações apontam para um padrão consistente: crescimento rápido, colaboração forte e compromisso real com qualidade de engenharia.",
      summaryLabel: "Resumo",
      highlights: [
        "Profissional dedicado, disciplinado e comprometido com evolução contínua.",
        "Aprendizado rápido e ganho consistente de maturidade técnica.",
        "Capacidade forte de resolver problemas complexos com clareza.",
        "Boa colaboração em equipe e ética de trabalho reconhecida.",
      ],
      testimonials: [
        {
          name: "Susiane Santos",
          role: "UI/UX Designer @ Manifesto Games",
          quote:
            "Profissional dedicada, séria e em constante aperfeiçoamento, com evolução técnica muito rápida e entregas cada vez mais fortes.",
        },
        {
          name: "Fernando Bellelis",
          role: "Senior AI Engineer @ Telus Digital",
          quote:
            "Engenheiro altamente competente, com forte domínio de boas práticas, excelente ética de trabalho e grande capacidade para resolver problemas complexos.",
        },
        {
          name: "Lucas dos Santos Amorim Rego",
          role: "Pesquisador Cyber Threat Intelligence @ CESAR",
          quote:
            "Destaca-se pelo comprometimento em aprender, crescer e colaborar bem, mantendo disciplina e motivação para superar desafios.",
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Se existe um problema real para resolver, vamos construir a solução certa.",
      description:
        "Atuo com visão de produto, atenção à arquitetura e foco em soluções que fazem sentido para o negócio e para quem usa o software no dia a dia.",
      actions: {
        whatsapp: "Conversar agora",
        linkedin: "Abrir LinkedIn",
        resume: "Baixar currículo",
      },
    },
  },
  en: {
    hero: {
      location: "Fortaleza, Ceará, Brazil",
      role: "Full Stack Developer",
      titleLead: "Software engineering with product vision.",
      titleRest: "Solid, scalable architecture that strengthens your product's evolution.",
      description:
        "Software engineer with 5 years of experience, building digital products end to end with a focus on architecture, scalability, and security. Combines business awareness, attention to detail, and technical versatility to turn real problems into robust, sustainable, and increasingly intelligent solutions.",
      actions: {
        whatsapp: "Talk on WhatsApp",
        linkedin: "View LinkedIn",
        resume: "Download resume",
      },
      stats: [
        { value: "5 years", label: "building digital products with a focus on scale, security, and technical consistency" },
        { value: "Multicloud", label: "architecture and operations across GCP, AWS, and Azure" },
        { value: "Full Stack", label: "Node.js, Python, NestJS, React.js, and Vue.js as the core of day-to-day work" },
      ],
      noteTop: "Computer Science graduate from UNICAP",
      noteBottom: "Innovation award at STARTUP WAY and experience as a technical speaker",
    },
    about: {
      eyebrow: "About",
      title: "Consistent engineering, practical thinking, and focus on what drives results.",
      description:
        "At this stage, the work is less about a specific stack and more about making sound engineering decisions to build reliable, scalable, and genuinely useful software. The focus is on architecture, technical clarity, business understanding, and adapting the solution to the right problem.",
      highlights: [
        {
          title: "Architecture grounded in product reality",
          description: "Technical decisions shaped by context, product maturity, and the actual need for scale, security, and long-term evolution.",
          icon: ServerCog,
        },
        {
          title: "Versatility to solve problems",
          description: "End-to-end work across front-end, back-end, architecture, and integrations, always with attention to experience and delivery impact.",
          icon: BriefcaseBusiness,
        },
        {
          title: "Technical quality with business awareness",
          description: "Best practices, testing, observability, and business understanding combined to deliver robust and sustainable software in real operations.",
          icon: Cloud,
        },
      ],
      visualTitle: "Architecture, stack, or behind the scenes",
      visualDescription:
        "A space for a simple architecture diagram, technology collage, or screenshot of a representative technical flow.",
    },
    experience: {
      eyebrow: "Experience",
      title: "A career shaped by continuous growth and real product context.",
      description:
        "This section was reorganized to feel more executive and more readable: fewer long lists and more context around scope, impact, and core technologies.",
      recognitionsTitle: "Highlights",
      recognitions: [
        "Top graduate in Computer Science at UNICAP",
        "Speaker for a short course on microservices in AWS",
        "Innovation award at the STARTUP WAY Hackathon",
      ],
      locationLabel: "Location",
      impactLabel: "Impact",
      keywordsLabel: "Keywords",
      relatedLabel: "Related project",
      entries: [
        {
          company: "Luizalabs (Magazine Luiza)",
          role: "Mid-Level Full Stack Developer",
          employment: "Full-time",
          period: "July 2025 – Present",
          duration: "9 months",
          location: "Remote (Brazil)",
          summary:
            "Works in a strategic logistics and fulfillment squad within the Magalu ecosystem, contributing to highly scalable and resilient solutions for intelligent inventory management. The scope includes critical high-volume systems, AI agent initiatives focused on seller support, and active participation in architecture, observability, performance, and continuous integration decisions.",
          impact:
            "This work directly supports the operational efficiency of thousands of sellers, reduces logistics bottlenecks, and increases the reliability of core platform flows.",
          keywords: ["Fulfillment", "Microservices", "Applied AI", "CI/CD", "Observability", "Jest", "TypeScript"],
          related: "Seller logistics portal",
        },
        {
          company: "Manifesto Games",
          role: "Full Stack Developer",
          employment: "Part-time",
          period: "February 2023 – July 2025",
          duration: "2 years and 6 months",
          location: "Remote (Recife, PE)",
          summary:
            "Worked on interactive dashboards with Angular and React for feature management, internal workflows, and usage metrics. Also led the development of APIs and microservices with NestJS, system integrations, and the evolution of a Google Cloud Platform architecture focused on scalability, security, and high availability.",
          impact:
            "The work improved delivery quality, strengthened system integrations, and enhanced user experience through analytics, dashboards, and a more reliable technical foundation.",
          keywords: ["Angular", "React", "NestJS", "GCP", "Jasmine", "Jest", "Web Analytics"],
          related: "Geppetto platform",
        },
        {
          company: "Manifesto Games",
          role: "Full Stack Developer Intern",
          employment: "Internship",
          period: "August 2021 – January 2023",
          duration: "1 year and 6 months",
          location: "Remote",
          summary:
            "Started the journey at the company by building dashboards for internal teams and clients, creating interactive interfaces, collaborating on APIs and back-end logic, and quickly taking on more technical responsibility in projects with direct client impact.",
          impact:
            "This cycle marked a fast transition from intern to full stack developer, with consistent deliveries and real contribution to team productivity.",
          keywords: ["Dashboards", "Front-end", "Back-end", "JavaScript", "Jest"],
        },
        {
          company: "Manifesto Games",
          role: "Junior Residency – Manifesto Power Up! Tools",
          employment: "Trainee",
          period: "April 2021 – July 2021",
          duration: "4 months",
          location: "Remote",
          summary:
            "Joined a residency program focused on internal solutions, with strong practical learning in web development, dashboard building, and front-end and back-end feature implementation in a collaborative environment.",
          impact:
            "It laid the foundation for a software engineering mindset and provided the first hands-on experience with real systems.",
          keywords: ["Internal dashboard", "TypeScript", "JavaScript", "Hands-on learning"],
        },
        {
          company: "Unicap Icam TECH",
          role: "Scientific Researcher",
          employment: "Volunteer (PIBIC/CNPq)",
          period: "August 2021 – March 2022",
          duration: "8 months",
          location: "Recife, PE",
          summary:
            "Worked on scientific research focused on image processing for smart cities, building solutions with Python and OpenCV and handling technical analysis in a structured academic environment.",
          impact:
            "The experience strengthened analytical thinking, provided a solid foundation in computer vision, and expanded exposure to technology innovation projects.",
          keywords: ["Python", "OpenCV", "Scientific research", "Computer vision"],
        },
        {
          company: "RedLub Recioleo",
          role: "Front-end Developer",
          employment: "Freelancer",
          period: "January 2021 – June 2021",
          duration: "6 months",
          location: "Hybrid (PE)",
          summary:
            "Developed the company's institutional page and sales page, with a focus on user experience, conversion, and direct alignment with client business needs.",
          impact:
            "The delivery strengthened the company's digital presence and added hands-on experience with real projects, commercial interfaces, and client collaboration.",
          keywords: ["Front-end", "Elementor", "Figma", "Conversion", "Landing page"],
        },
      ],
    },
    stack: {
      eyebrow: "Stack",
      title: "Technology chosen to build, scale, and sustain product delivery.",
      description:
        "The technical repertoire was organized to highlight what matters most: a strong Full Stack base, cloud, testing, and operations.",
      groups: [
        { title: "Highlights", items: ["Node.js", "Python", "NestJS", "React.js", "Vue.js"] },
        { title: "Front-end", items: ["React", "Next.js", "Vue.js", "Angular", "TypeScript"] },
        { title: "Back-end", items: ["Node.js", "NestJS", "Python"] },
        { title: "Testing", items: ["Jest", "Jasmine", "K6"] },
        { title: "Cloud and data", items: ["GCP", "AWS", "Azure", "MongoDB", "Oracle Cloud"] },
        { title: "DevOps", items: ["Terraform", "Grafana", "GitHub", "GitLab", "Bitbucket", "CI/CD pipelines"] },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected cases that communicate product, interface, and solution quality.",
      description:
        "The projects below were kept because they better represent the combination of technical execution, positioning clarity, and visual potential.",
      items: [
        {
          title: "Shoryu",
          stack: "Vue.js + Python",
          href: "https://shoryu.co/",
          description:
            "A sports tournament management platform combining ticket sales, brackets, match tracking, and prize management within a single flow.",
          imageSrc: "/shoryu.png",
          imageAlt: "Shoryu project interface",
        },
        {
          title: "Vitrine Visuh Ótica",
          stack: "Next.js + Supabase",
          href: "https://www.visuhotica.com.br/",
          description:
            "A system that connects a digital storefront and stock dashboard, with product customization, WhatsApp integration, and sales metric visibility.",
          imageSrc: "/visuh.png",
          imageAlt: "Vitrine Visuh Ótica project interface",
        },
      ],
    },
    education: {
      educationEyebrow: "Education",
      educationTitle: "Strong academic foundation with practical specialization.",
      educationDescription:
        "An educational path that combines academic excellence, performance recognition, and market-oriented technical depth.",
      certificationEyebrow: "Certifications",
      certificationTitle: "Continuous learning in engineering, performance, and methodology.",
      certificationDescription:
        "This selection prioritizes certifications that reinforce technical depth, quality culture, and the ability to work in mature teams.",
      certificationHighlightsLabel: "Highlights",
      certificationExtrasLabel: "Other certifications",
      items: [
        {
          institution: "Catholic University of Pernambuco (UNICAP)",
          title: "Bachelor's Degree in Computer Science",
          period: "2020 – 2023",
          details: [
            "Top graduate, with the highest score in the class.",
            "Innovation award winner at the STARTUP WAY Hackathon.",
            "Speaker for a short course on microservices in AWS.",
          ],
        },
        {
          institution: "Rocketseat",
          title: "Full Stack Specialization (Ignite)",
          period: "2022 – 2023",
          details: ["Focused on React.js, Node.js, Next.js, TypeScript, and Design Systems with Storybook."],
        },
      ],
      certificationHighlights: [
        "Data Platform: The Beginning - Magalu",
        "Kanban Force Jedi - Luizalabs",
        "Performance Testing with K6 - Udemy",
        "Ignite ReactJS - Rocketseat",
      ],
      certificationExtras: [
        "Linux for Developers - Magalu",
        "Information Security - Magalu",
        "Data Extraction with Python - Udemy",
        "Agile Methods - Unicap",
        "REST API with SpringBoot and MongoDB - Unicap",
        "Advanced React with TypeScript - Unicap",
      ],
    },
    recommendations: {
      eyebrow: "Recommendations",
      title: "Recurring feedback around discipline, growth, and delivery quality.",
      description:
        "The recommendations point to a consistent pattern: fast growth, strong collaboration, and a real commitment to engineering quality.",
      summaryLabel: "Summary",
      highlights: [
        "Dedicated professional with discipline and commitment to continuous growth.",
        "Fast learning curve and steady technical maturity.",
        "Strong ability to solve complex problems with clarity.",
        "Well-recognized collaboration and work ethic.",
      ],
      testimonials: [
        {
          name: "Susiane Santos",
          role: "UI/UX Designer @ Manifesto Games",
          quote:
            "A dedicated and serious professional, constantly improving, with very fast technical evolution and increasingly strong deliveries.",
        },
        {
          name: "Fernando Bellelis",
          role: "Senior AI Engineer @ Telus Digital",
          quote:
            "A highly competent engineer with strong command of best practices, excellent work ethic, and a remarkable ability to solve complex problems.",
        },
        {
          name: "Lucas dos Santos Amorim Rego",
          role: "Cyber Threat Intelligence Researcher @ CESAR",
          quote:
            "Stands out for the commitment to learn, grow, and collaborate well, with discipline and motivation to overcome challenges.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "If there is a real problem to solve, let's build the right solution.",
      description:
        "I work with product awareness, attention to architecture, and a focus on solutions that make sense for the business and for the people using the software every day.",
      actions: {
        whatsapp: "Start a conversation",
        linkedin: "Open LinkedIn",
        resume: "Download resume",
      },
    },
  },
} as const

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="max-w-3xl">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-white/68 sm:text-lg">{description}</p>
    </div>
  )
}

function VisualPlaceholder({
  visualId,
  title,
  description,
  className = "",
}: {
  visualId: string
  title: string
  description: string
  className?: string
}) {
  const { locale } = useLanguage()

  return (
    <div
      className={`glass-surface relative overflow-hidden rounded-[28px] border border-dashed border-white/15 p-6 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,190,120,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
      <div className="relative z-10 flex h-full min-h-[14rem] flex-col justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">{visualId}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/60">{description}</p>
        </div>
        <span className="glass-chip w-fit">
          {locale === "pt" ? "Espaço reservado para conteúdo visual" : "Reserved space for visual content"}
        </span>
      </div>
    </div>
  )
}

function ExperienceCard({
  entry,
  copy,
  index,
}: {
  entry: PortfolioCopy["experience"]["entries"][number]
  copy: PortfolioCopy["experience"]
  index: number
}) {
  return (
    <motion.article
      className="glass-panel rounded-[32px] p-6 sm:p-7"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">{entry.role}</h3>
              <p className="mt-1 text-base text-amber-200">{entry.company}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="glass-chip">{entry.employment}</span>
              <span className="glass-chip">{entry.duration}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/60">
            <span className="glass-chip">{entry.period}</span>
            <span className="glass-chip">
              {copy.locationLabel}: {entry.location}
            </span>
          </div>

          <p className="mt-6 text-sm leading-8 text-white/72 sm:text-base">{entry.summary}</p>
        </div>

        <div className="space-y-4">
          <div className="glass-surface rounded-[26px] p-5">
            <p className="text-sm uppercase tracking-[0.28em] text-white/42">{copy.impactLabel}</p>
            <p className="mt-4 text-sm leading-7 text-white/70">{entry.impact}</p>
          </div>

          <div className="glass-surface rounded-[26px] p-5">
            <p className="text-sm uppercase tracking-[0.28em] text-white/42">{copy.keywordsLabel}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {entry.keywords.map((keyword) => (
                <span key={keyword} className="glass-chip">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {entry.related ? (
            <div className="glass-surface rounded-[26px] p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-white/42">{copy.relatedLabel}</p>
              <p className="mt-4 text-sm leading-7 text-white/70">{entry.related}</p>
            </div>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}

export function ImmersivePortfolioPage() {
  const { locale } = useLanguage()
  const copy = portfolioCopy[locale]

  return (
    <div className="relative overflow-clip pb-10">
      <div className="page-mesh" />

      <section id="intro" className="container-custom pt-[calc(var(--header-offset)+2.5rem)]">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            className="space-y-7"
            initial="hidden"
            animate="show"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-wrap gap-2">
              <span className="glass-chip">
                <MapPin className="h-3.5 w-3.5" />
                {copy.hero.location}
              </span>
              <span className="glass-chip">
                <Code2 className="h-3.5 w-3.5" />
                {copy.hero.role}
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-[2.3rem] font-semibold leading-[1] text-white sm:text-[3rem] lg:text-[3.55rem]">
                <span className="block gradient-text">{copy.hero.titleLead}</span>
                {copy.hero.titleRest}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-white/72 sm:text-lg">{copy.hero.description}</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://wa.me/message/MGFIOCP73NHXI1"
                target="_blank"
                rel="noopener noreferrer"
                className="button-glass button-glass-primary"
              >
                <MessageCircle className="h-5 w-5" />
                {copy.hero.actions.whatsapp}
              </Link>
              <Link
                href="https://linkedin.com/in/djalmahenry"
                target="_blank"
                rel="noopener noreferrer"
                className="button-glass"
              >
                <ArrowUpRight className="h-5 w-5" />
                {copy.hero.actions.linkedin}
              </Link>
              <Link href="/curriculo-djalma-henry.pdf" download className="button-glass">
                <Download className="h-5 w-5" />
                {copy.hero.actions.resume}
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="mx-auto w-full max-w-[34rem]"
            initial="hidden"
            animate="show"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          >
            <div className="hero-card-shell">
              <div className="hero-card-halo" />
              <div className="glass-panel relative overflow-hidden rounded-[34px] p-3 sm:p-4">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0906]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(243,196,113,0.22),_transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
                  <Image
                    src="/djalmahenry.jpeg"
                    alt="Djalma Henry"
                    width={720}
                    height={920}
                    priority
                    className="h-[min(48svh,34rem)] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 grid gap-3 sm:grid-cols-3"
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
        >
          {copy.hero.stats.map((stat) => (
            <div key={stat.label} className="glass-panel rounded-[28px] p-4">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section id="about" className="container-custom pt-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="glass-panel rounded-[34px] p-6 sm:p-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <SectionHeading eyebrow={copy.about.eyebrow} title={copy.about.title} description={copy.about.description} />

            <div className="mt-8 grid gap-4">
              {copy.about.highlights.map((item) => {
                const Icon = item.icon

                return (
                  <div key={item.title} className="glass-surface rounded-[26px] p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-200/15 bg-amber-200/10">
                        <Icon className="h-5 w-5 text-amber-200" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-white/64">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          >
            <VisualPlaceholder
              visualId="Visual 02"
              title={copy.about.visualTitle}
              description={copy.about.visualDescription}
              className="h-full"
            />
          </motion.div>
        </div>
      </section>

      <section id="experience" className="container-custom pt-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow={copy.experience.eyebrow}
            title={copy.experience.title}
            description={copy.experience.description}
          />
        </motion.div>

        <motion.div
          className="mt-8 glass-panel rounded-[30px] p-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
        >
          <p className="section-kicker">{copy.experience.recognitionsTitle}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {copy.experience.recognitions.map((item) => (
              <span key={item} className="glass-chip">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 space-y-4">
          {copy.experience.entries.map((entry, index) => (
            <ExperienceCard key={`${entry.company}-${entry.period}`} entry={entry} copy={copy.experience} index={index} />
          ))}
        </div>
      </section>

      <section id="stack" className="container-custom pt-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <SectionHeading eyebrow={copy.stack.eyebrow} title={copy.stack.title} description={copy.stack.description} />
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {copy.stack.groups.map((group, index) => (
            <motion.article
              key={group.title}
              className="glass-panel rounded-[28px] p-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
            >
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="glass-chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="container-custom pt-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow={copy.projects.eyebrow}
            title={copy.projects.title}
            description={copy.projects.description}
          />
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {copy.projects.items.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass-panel rounded-[34px] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            >
              <Link href={project.href} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative overflow-hidden rounded-[28px]">
                  <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
                  <div className="relative h-[15rem] sm:h-[18rem] lg:h-[20rem]">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-amber-100">
                      {project.title}
                    </h3>
                    <span className="glass-chip">{project.stack}</span>
                    <ArrowUpRight className="h-4 w-4 text-white/52 transition-colors duration-300 group-hover:text-amber-200" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/68 sm:text-base">{project.description}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="education" className="container-custom pt-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            className="glass-panel rounded-[34px] p-6 sm:p-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <SectionHeading
              eyebrow={copy.education.educationEyebrow}
              title={copy.education.educationTitle}
              description={copy.education.educationDescription}
            />

            <div className="mt-8 space-y-4">
              {copy.education.items.map((item) => (
                <article key={item.institution} className="glass-surface rounded-[28px] p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-200/15 bg-amber-200/10">
                      <GraduationCap className="h-5 w-5 text-amber-200" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-white/42">{item.period}</p>
                      <h3 className="mt-2 text-lg font-semibold text-white">{item.institution}</h3>
                      <p className="mt-1 text-sm text-amber-200">{item.title}</p>
                      <div className="mt-4 grid gap-3">
                        {item.details.map((detail) => (
                          <div key={detail} className="glass-strip text-sm leading-6">
                            <BadgeCheck className="h-4 w-4 shrink-0 text-amber-200" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-panel rounded-[34px] p-6 sm:p-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInUp}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          >
            <SectionHeading
              eyebrow={copy.education.certificationEyebrow}
              title={copy.education.certificationTitle}
              description={copy.education.certificationDescription}
            />

            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.28em] text-white/42">{copy.education.certificationHighlightsLabel}</p>
              <div className="mt-4 grid gap-3">
                {copy.education.certificationHighlights.map((item) => (
                  <div key={item} className="glass-strip text-sm leading-6">
                    <Award className="h-4 w-4 shrink-0 text-amber-200" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.28em] text-white/42">{copy.education.certificationExtrasLabel}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {copy.education.certificationExtras.map((item) => (
                  <span key={item} className="glass-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="recommendations" className="container-custom pt-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow={copy.recommendations.eyebrow}
            title={copy.recommendations.title}
            description={copy.recommendations.description}
          />
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            className="glass-panel rounded-[34px] p-6 sm:p-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="section-kicker">{copy.recommendations.summaryLabel}</p>
            <div className="mt-6 grid gap-3">
              {copy.recommendations.highlights.map((item) => (
                <div key={item} className="glass-strip text-sm leading-6">
                  <BadgeCheck className="h-4 w-4 shrink-0 text-amber-200" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4">
            {copy.recommendations.testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                className="glass-panel rounded-[30px] p-6"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-200/15 bg-amber-200/10">
                    <Quote className="h-5 w-5 text-amber-200" />
                  </div>
                  <div>
                    <p className="text-base leading-7 text-white/74">{item.quote}</p>
                    <p className="mt-4 text-sm font-medium text-white">{item.name}</p>
                    <p className="text-sm text-white/48">{item.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="container-custom pb-8 pt-20">
        <motion.div
          className="glass-panel overflow-hidden rounded-[38px] p-6 sm:p-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(219,165,97,0.16),transparent_24%),radial-gradient(circle_at_80%_30%,rgba(132,83,43,0.18),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.08),transparent_32%)]" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="section-kicker">{copy.contact.eyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-6xl">{copy.contact.title}</h2>
              <p className="mt-5 text-base leading-8 text-white/68 sm:text-lg">{copy.contact.description}</p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/66">
                <span className="glass-chip">contato@djalmahenry.com</span>
                <span className="glass-chip">(85) 99192-7780</span>
                <span className="glass-chip">{copy.hero.location}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:min-w-[18rem]">
              <Link
                href="https://wa.me/message/MGFIOCP73NHXI1"
                target="_blank"
                rel="noopener noreferrer"
                className="button-glass button-glass-primary"
              >
                <MessageCircle className="h-5 w-5" />
                {copy.contact.actions.whatsapp}
              </Link>
              <Link
                href="https://linkedin.com/in/djalmahenry"
                target="_blank"
                rel="noopener noreferrer"
                className="button-glass"
              >
                <ArrowUpRight className="h-5 w-5" />
                {copy.contact.actions.linkedin}
              </Link>
              <Link href="/curriculo-djalma-henry.pdf" download className="button-glass">
                <Download className="h-5 w-5" />
                {copy.contact.actions.resume}
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
