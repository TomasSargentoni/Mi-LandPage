"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#proyectos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern-geometric-lines.jpg')] opacity-5 bg-cover bg-center" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <ScrollReveal className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 hover-lift animate-float">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <img
                src="/professional-developer-avatar.png"
                alt="Foto de perfil"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Main Heading */}
        <ScrollReveal delay={200}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-space-grotesk text-balance mb-6">
            <span className="text-foreground">Desarrollador</span>
            <br />
            <span className="gradient-text">Full Stack</span>
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={400}>
          <p className="text-xl md:text-2xl text-muted-foreground font-dm-sans text-balance mb-4">
            Estudiante de Ingeniería en Sistemas en último año
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <p className="text-lg md:text-xl text-muted-foreground font-dm-sans text-balance mb-8 max-w-2xl mx-auto">
            Apasionado por el estudio, los proyectos y el crecimiento continuo. Especializado en crear experiencias web
            modernas y funcionales.
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg hover-lift pulse-glow"
            >
              Ver Proyectos
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 text-lg hover-lift"
            >
              Contactar
            </Button>
          </div>
        </ScrollReveal>

        {/* Social Links */}
        <ScrollReveal delay={1000}>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover-lift"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover-lift"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover-lift"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </ScrollReveal>

        {/* Scroll Indicator */}
        <ScrollReveal delay={1200}>
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-muted-foreground" size={24} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
