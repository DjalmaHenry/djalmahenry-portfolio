import { HeroSection } from "@/components/sections/hero-section"
import { ResumeSection } from "@/components/sections/resume-section"
import { WhatIDoSection } from "@/components/sections/what-i-do-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { TechStackSection } from "@/components/sections/tech-stack-section"
import { LanguagesSection } from "@/components/sections/languages-section"
import { CtaSection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ResumeSection />
      <WhatIDoSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <TechStackSection />
      <LanguagesSection />
      <CtaSection />
    </div>
  )
}
