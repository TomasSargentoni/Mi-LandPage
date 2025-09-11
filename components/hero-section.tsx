"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector("#proyectos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
  id="inicio"
  className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32"
>

      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background animate-gradient-shift">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5" />
        </div>

        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Interactive cursor glow */}
        <div
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal className="mb-12">
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />

            {/* Main profile container */}
            <div className="relative w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 hover-lift animate-float group-hover:scale-110 transition-all duration-500">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center glass border border-white/10">
                <img
                  src="/professional-developer-avatar.png"
                  alt="Foto de perfil"
                  className="w-36 h-36 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Floating sparkles */}
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary animate-pulse" />
            <Sparkles
              className="absolute -bottom-2 -left-2 w-4 h-4 text-accent animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="relative mb-8">
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-bold font-space-grotesk text-balance transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <span className="text-foreground block mb-2">Desarrollador</span>
              <span className="gradient-text block relative">
                Full Stack
                {/* Animated underline */}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
              </span>
            </h1>

            {/* Floating text decoration */}
            <div
              className="absolute -top-8 -right-8 text-primary/20 text-6xl font-bold animate-float"
              style={{ animationDelay: "2s" }}
            >
              {"</>"}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="space-y-4 mb-12">
            <p className="text-2xl md:text-3xl text-muted-foreground font-dm-sans text-balance font-light">
              Estudiante de Ingeniería en Sistemas
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1000}>
          <p className="text-xl md:text-2xl text-muted-foreground font-dm-sans text-balance mb-12 max-w-3xl mx-auto leading-relaxed">
            Apasionado por el estudio, los proyectos y el crecimiento continuo. Especializado en crear experiencias web
            modernas y funcionales que impactan positivamente a los usuarios.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 text-xl hover-lift pulse-glow neon-glow group overflow-hidden"
            >
              <span className="relative z-10">Ver Proyectos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-10 py-4 text-xl hover-lift glass group relative overflow-hidden"
            >
              <span className="relative z-10">Contactar</span>
              <div className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex justify-center space-x-8 mb-16">
            {[
              { icon: Github, href: "https://github.com/TomasSargentoni", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/tomas-sargentoni", label: "LinkedIn" },
              { icon: Mail, href: "mailto:tomassargentoni92@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={label}
                href={href}
                className="group relative p-4 glass rounded-full border border-white/10 text-muted-foreground hover:text-primary transition-all duration-300 hover-lift hover:scale-110"
                aria-label={label}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon size={28} className="relative z-10" />
                <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative">
            <div className="flex flex-col items-center space-y-2 animate-bounce">
              <span className="text-muted-foreground text-sm font-dm-sans">Descubre más</span>
              <ArrowDown className="text-primary" size={28} />
            </div>

            {/* Pulsing ring around arrow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-primary/30 rounded-full animate-ping" />
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
      <div
        className="absolute top-40 right-20 w-1 h-1 bg-accent/60 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-20 w-3 h-3 bg-primary/30 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-1 h-1 bg-accent/50 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
    </section>
  )
}
