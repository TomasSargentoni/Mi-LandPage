"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { ScrollReveal } from "@/components/scroll-reveal"

interface SocialPlatform {
  name: string
  icon: React.ReactNode
  href: string
  username: string
  description: string
  color: string
  bgGradient: string
  hoverEffect: string
}

const socialPlatforms: SocialPlatform[] = [
  {
    name: "GitHub",
    icon: <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">GH</div>,
    href: "https://github.com/TomasSargentoni",
    username: "@TomasSargentoni",
    description: "Código y proyectos open source",
    color: "text-white",
    bgGradient: "from-gray-800 to-gray-900",
    hoverEffect: "hover:from-gray-700 hover:to-gray-800 hover:scale-105",
  },
  {
    name: "LinkedIn",
    icon: <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold">in</div>,
    href: "https://linkedin.com/in/tomas-sargentoni",
    username: "Desarrollador Full Stack",
    description: "Experiencia profesional y networking",
    color: "text-white",
    bgGradient: "from-blue-600 to-blue-700",
    hoverEffect: "hover:from-blue-500 hover:to-blue-600 hover:scale-105",
  },
  {
    name: "Instagram",
    icon: <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">IG</div>,
    href: "https://www.instagram.com/tomassargentoni/",
    username: "@tomassargentoni",
    description: "Detrás de escenas del desarrollo",
    color: "text-white",
    bgGradient: "from-pink-500 via-purple-500 to-indigo-500",
    hoverEffect: "hover:from-pink-400 hover:via-purple-400 hover:to-indigo-400 hover:scale-105",
  },
  {
    name: "Facebook",
    icon: <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">F</div>,
    href: "https://www.facebook.com/tomas.sargentoni.2025/?locale=es_LA",
    username: "Desarrollador Profesional",
    description: "Actualizaciones y contenido técnico",
    color: "text-white",
    bgGradient: "from-blue-500 to-blue-600",
    hoverEffect: "hover:from-blue-400 hover:to-blue-500 hover:scale-105",
  },
  {
    name: "Gmail",
    icon: <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">M</div>,
    href: "mailto:tomassargentoni92@gmail.com",
    username: "tomassargentoni92@gmail.com",
    description: "Contacto directo para proyectos",
    color: "text-white",
    bgGradient: "from-red-500 to-red-600",
    hoverEffect: "hover:from-red-400 hover:to-red-500 hover:scale-105",
  },
  {
    name: "Discord",
    icon: <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">D</div>,
    href: "https://discord.com",
    username: "tomas.sargentoni",
    description: "Comunidad y colaboración en tiempo real",
    color: "text-white",
    bgGradient: "from-indigo-500 to-purple-600",
    hoverEffect: "hover:from-indigo-400 hover:to-purple-500 hover:scale-105",
  },
]

export function ContactSection() {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="contacto" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk gradient-text mb-6">Conectemos</h2>
            <p className="text-xl text-muted-foreground font-dm-sans max-w-3xl mx-auto leading-relaxed">
              Encuentra la mejor forma de contactarme según tu preferencia. Estoy activo en todas estas plataformas y
              respondo rápidamente.
            </p>
          </div>
        </ScrollReveal>

        {/* Social Media Hub */}
        <ScrollReveal delay={200}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {socialPlatforms.map((platform, index) => (
              <div
                key={platform.name}
                className={`animate-stagger-${(index % 4) + 1}`}
                onMouseEnter={() => setHoveredPlatform(platform.name)}
                onMouseLeave={() => setHoveredPlatform(null)}
              >
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    block relative group cursor-pointer
                    bg-gradient-to-br ${platform.bgGradient}
                    rounded-2xl p-8 transition-all duration-500
                    hover-lift ${platform.hoverEffect}
                    glass border border-white/10
                  `}
                >
                  {/* Platform Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`${platform.color} group-hover:scale-110 transition-transform duration-300`}>
                      {platform.icon}
                    </div>
                    <div className="w-3 h-3 bg-white/30 rounded-full group-hover:bg-white/60 transition-colors duration-300" />
                  </div>

                  {/* Platform Info */}
                  <div className="space-y-3">
                    <h3 className={`text-2xl font-bold font-space-grotesk ${platform.color}`}>{platform.name}</h3>
                    <p className={`text-lg font-medium ${platform.color} opacity-90`}>{platform.username}</p>
                    <p className={`text-sm ${platform.color} opacity-75 leading-relaxed`}>{platform.description}</p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300" />
                </a>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Floating Tooltip mounted in body */}
        {hoveredPlatform &&
          createPortal(
            <div
              className="fixed z-50 pointer-events-none"
              style={{
                left: Math.min(mousePosition.x + 12, window.innerWidth - 220),
                top: Math.min(mousePosition.y + 12, window.innerHeight - 80),
              }}
            >
              <div className="glass rounded-lg p-3 border border-white/20 max-w-xs shadow-lg">
                <h4 className="font-bold text-foreground font-space-grotesk text-sm mb-1">
                  Conectar en {hoveredPlatform}
                </h4>
                <p className="text-muted-foreground text-xs font-dm-sans">
                  Haz clic para abrir {hoveredPlatform}
                </p>
              </div>
            </div>,
            document.body
          )}

        {/* Call to Action */}
        <ScrollReveal delay={200}>
          <div className="mt-20 text-center">
            <div className="glass rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold font-space-grotesk gradient-text mb-4">¿Listo para colaborar?</h3>
              <p className="text-muted-foreground font-dm-sans text-lg leading-relaxed mb-6">
                Cada plataforma tiene su propósito. Elige la que mejor se adapte a tu tipo de proyecto o consulta.
                Respondo en menos de 24 horas en todas las plataformas.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="glass rounded-lg px-6 py-3 border border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-foreground font-semibold">Disponible ahora</span>
                  </div>
                </div>
                <div className="glass rounded-lg px-6 py-3 border border-white/10">
                  <span className="text-primary font-bold">&lt;24h&gt;</span>
                  <span className="text-muted-foreground ml-2">Tiempo de respuesta</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
