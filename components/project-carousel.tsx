"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, Github, Pause, Play } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

interface Project {
  id: number
  title: string
  description: string
  mainImage: string
  thumbnails: string[]
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico completa desarrollada con Next.js, TypeScript y Stripe. Incluye gestión de inventario, carrito de compras, procesamiento de pagos y panel de administración. Implementa autenticación segura y diseño responsive optimizado para conversiones.",
    mainImage: "/modern-ecommerce-interface.png",
    thumbnails: [
      "/ecommerce-product-grid.png",
      "/shopping-cart-interface.jpg",
      "/payment-checkout-form.jpg",
      "/admin-dashboard-analytics.jpg",
    ],
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas colaborativa con funcionalidades en tiempo real. Permite crear equipos, asignar tareas, establecer deadlines y hacer seguimiento del progreso. Incluye notificaciones push, chat integrado y reportes de productividad.",
    mainImage: "/task-management-dashboard.png",
    thumbnails: [
      "/kanban-board-tasks.jpg",
      "/team-collaboration-interface.png",
      "/calendar-view-tasks.jpg",
      "/productivity-analytics-charts.jpg",
    ],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "Herramienta de generación de contenido impulsada por IA que ayuda a crear textos, imágenes y código. Integra múltiples modelos de IA, ofrece plantillas personalizables y permite exportar en diversos formatos. Incluye sistema de créditos y colaboración en equipo.",
    mainImage: "/ai-content-generation-interface.jpg",
    thumbnails: [
      "/text-generation-editor.jpg",
      "/image-ai-generator.jpg",
      "/code-generation-tool.jpg",
      "/content-templates-library.png",
    ],
    technologies: ["Next.js", "OpenAI API", "Supabase", "Tailwind CSS", "Vercel AI SDK"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description:
      "Plataforma inmobiliaria moderna con búsqueda avanzada, tours virtuales 360° y sistema de gestión para agentes. Incluye mapas interactivos, calculadora de hipotecas, sistema de citas y CRM integrado para seguimiento de leads.",
    mainImage: "/real-estate-platform.png",
    thumbnails: [
      "/property-search-results.jpg",
      "/virtual-tour-interface.jpg",
      "/interactive-map-properties.jpg",
      "/agent-dashboard-crm.jpg",
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "Google Maps API", "Three.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectCarousel() {
  const [currentProject, setCurrentProject] = useState(0)
  const [selectedThumbnail, setSelectedThumbnail] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const SLIDE_DURATION = 5000 // 5 seconds

  useEffect(() => {
    if (isPlaying && !isHovered) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentProject((current) => (current + 1) % projects.length)
            setSelectedThumbnail(0)
            return 0
          }
          return prev + 100 / (SLIDE_DURATION / 100)
        })
      }, 100)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, isHovered])

  const goToProject = (index: number) => {
    setCurrentProject(index)
    setSelectedThumbnail(0)
    setProgress(0)
  }

  const nextProject = () => {
    goToProject((currentProject + 1) % projects.length)
  }

  const prevProject = () => {
    goToProject(currentProject === 0 ? projects.length - 1 : currentProject - 1)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const project = projects[currentProject]

  return (
    <section id="proyectos" className="py-20 bg-background relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk gradient-text mb-4">Mis Proyectos</h2>
            <p className="text-xl text-muted-foreground font-dm-sans max-w-2xl mx-auto">
              Una selección de proyectos que demuestran mi experiencia en desarrollo full-stack y diseño de experiencias
              de usuario.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mb-12 glass rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-foreground font-space-grotesk">
                  Proyecto {currentProject + 1} de {projects.length}
                </span>
                <span className="text-sm text-muted-foreground font-dm-sans">{project.title}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={togglePlayPause}
                className="text-primary hover:text-primary-foreground hover:bg-primary/20 hover-lift neon-glow"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </Button>
            </div>

            <div className="relative">
              <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary via-accent to-primary h-3 rounded-full transition-all duration-100 ease-linear shimmer neon-glow"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-50" />
            </div>

            <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
              <span>Progreso automático</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Main Carousel */}
        <ScrollReveal delay={100}>
          <div
            className="grid lg:grid-cols-2 gap-12 items-start"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Left Side - Images */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <img
                  src={project.thumbnails[selectedThumbnail] || "/placeholder.svg"}
                  alt={`${project.title} - Vista ${selectedThumbnail + 1}`}
                  className="relative w-full h-80 object-cover rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02] hover-lift glass border border-white/10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="grid grid-cols-4 gap-3">
                {project.thumbnails.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedThumbnail(index)}
                    className={`relative overflow-hidden rounded-lg transition-all duration-300 hover-lift group ${
                      selectedThumbnail === index
                        ? "ring-3 ring-primary ring-offset-2 ring-offset-background neon-glow scale-105"
                        : "hover:scale-105 hover:ring-2 hover:ring-white/30"
                    }`}
                  >
                    <img
                      src={thumb || "/placeholder.svg"}
                      alt={`Vista ${index + 1}`}
                      className="w-full h-20 object-cover transition-all duration-300 group-hover:brightness-110"
                    />
                    <div
                      className={`absolute inset-0 transition-all duration-300 ${
                        selectedThumbnail === index ? "bg-primary/20" : "bg-black/20 group-hover:bg-black/10"
                      }`}
                    />
                    {selectedThumbnail === index && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Project Info */}
            <div className="space-y-8">
              <div className="glass rounded-2xl p-8 border border-white/10">
                <h3 className="text-4xl font-bold font-space-grotesk gradient-text mb-6">{project.title}</h3>
                <p className="text-muted-foreground font-dm-sans leading-relaxed text-lg mb-6">{project.description}</p>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold font-space-grotesk text-foreground mb-4">Tecnologías</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={tech}
                        className={`px-4 py-2 glass rounded-full text-sm font-medium hover-lift animate-stagger-${(index % 4) + 1} border border-white/10 text-foreground hover:border-primary/50 transition-all duration-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift pulse-glow px-6 py-3 text-lg font-semibold">
                      <ExternalLink size={18} className="mr-2" />
                      Ver Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover-lift glass px-6 py-3 text-lg font-semibold bg-transparent"
                    >
                      <Github size={18} className="mr-2" />
                      Código
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

          <div className="flex justify-center items-center mt-16">
            <div className="glass rounded-2xl p-6 border border-white/10 flex items-center space-x-6">
              <Button
                variant="outline"
                size="lg"
                onClick={prevProject}
                className="hover-lift glass border-white/20 hover:border-primary/50 w-12 h-12 p-0 bg-transparent"
              >
                <ChevronLeft size={20} />
              </Button>

              <div className="flex space-x-3">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToProject(index)}
                    className={`transition-all duration-300 hover-lift rounded-full ${
                      index === currentProject
                        ? "w-12 h-4 bg-primary neon-glow"
                        : "w-4 h-4 bg-muted hover:bg-muted-foreground hover:scale-125"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="lg"
                onClick={nextProject}
                className="hover-lift glass border-white/20 hover:border-primary/50 w-12 h-12 p-0 bg-transparent"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>

      </div>
    </section>
  )
}
