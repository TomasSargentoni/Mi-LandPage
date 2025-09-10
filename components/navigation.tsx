"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code2 } from "lucide-react"

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Cursos", href: "#cursos" },
  { name: "Contacto", href: "#contacto" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const [scrollWidth, setScrollWidth] = useState(0) // 👈 nuevo estado

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // progreso de scroll
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrollWidth(Math.min(100, (scrolled / maxScroll) * 100))

      // detectar sección activa
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // inicializar en el primer render

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass border-b border-white/10 shadow-2xl" : "bg-transparent"
      }`}
    >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 group">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Code2 className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-2xl font-bold font-space-grotesk gradient-text">DevPortafolio</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-2 glass rounded-full px-6 py-3 border border-white/10">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 hover-lift ${
                      isActive
                        ? "text-primary-foreground bg-primary neon-glow"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="glass border border-white/10 hover:border-primary/50 w-12 h-12 p-0 hover-lift"
            >
              <div className="relative">
                {isMobileMenuOpen ? (
                  <X size={20} className="text-primary" />
                ) : (
                  <Menu size={20} className="text-foreground" />
                )}
              </div>
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="glass rounded-2xl m-4 p-6 border border-white/10 shadow-2xl">
              <div className="space-y-3">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1)
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 hover-lift animate-stagger-${(index % 4) + 1} ${
                        isActive
                          ? "text-primary-foreground bg-primary neon-glow"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {isActive && <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />}
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Mobile menu footer */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <p className="text-muted-foreground text-sm font-dm-sans">Desarrollador Full Stack</p>
                  <div className="flex justify-center mt-2">
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{ width: `${scrollWidth}%` }} // 👈 ahora usamos estado
        />
      </div>
    </nav>
  )
}
