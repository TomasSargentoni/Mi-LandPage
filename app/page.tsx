import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectCarousel } from "@/components/project-carousel"
import { SkillsSection } from "@/components/skills-section"
import { CoursesSection } from "@/components/courses-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectCarousel />
      <SkillsSection />
      <CoursesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
