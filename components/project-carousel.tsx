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
    <section id="proyectos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-4">Mis Proyectos</h2>
            <p className="text-xl text-muted-foreground font-dm-sans max-w-2xl mx-auto">
              Una selección de proyectos que demuestran mi experiencia en desarrollo full-stack y diseño de experiencias
              de usuario.
            </p>
          </div>
        </ScrollReveal>

        {/* Progress Bar */}
        <ScrollReveal delay={200}>
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground font-dm-sans">
                Proyecto {currentProject + 1} de {projects.length}
              </span>
              <Button variant="ghost" size="sm" onClick={togglePlayPause} className="text-muted-foreground hover-lift">
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </Button>
            </div>
            <div className="w-full bg-muted rounded-full h-1">
              <div
                className="bg-primary h-1 rounded-full transition-all duration-100 ease-linear shimmer"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Main Carousel */}
        <ScrollReveal delay={400}>
          <div
            className="grid lg:grid-cols-2 gap-8 items-start"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Left Side - Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative group">
                <img
                  src={project.thumbnails[selectedThumbnail] || "/placeholder.svg"}
                  alt={`${project.title} - Vista ${selectedThumbnail + 1}`}
                  className="w-full h-80 object-cover rounded-lg shadow-lg transition-all duration-500 group-hover:scale-[1.02] hover-lift"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg" />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {project.thumbnails.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedThumbnail(index)}
                    className={`relative overflow-hidden rounded-md transition-all duration-300 hover-lift ${
                      selectedThumbnail === index
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background pulse-glow"
                        : "hover:opacity-80"
                    }`}
                  >
                    <img
                      src={thumb || "/placeholder.svg"}
                      alt={`Vista ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Project Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold font-space-grotesk text-foreground mb-4 gradient-text">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-dm-sans leading-relaxed text-lg">{project.description}</p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold font-space-grotesk text-foreground mb-3">Tecnologías</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium hover-lift animate-stagger-${(index % 4) + 1}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {project.liveUrl && (
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift pulse-glow">
                    <ExternalLink size={16} className="mr-2" />
                    Ver Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift bg-transparent"
                  >
                    <Github size={16} className="mr-2" />
                    Código
                  </Button>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Navigation Controls */}
        <ScrollReveal delay={600}>
          <div className="flex justify-center items-center mt-12 space-x-4">
            <Button variant="outline" size="sm" onClick={prevProject} className="hover-lift bg-transparent">
              <ChevronLeft size={16} />
            </Button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover-lift ${
                    index === currentProject ? "bg-primary pulse-glow" : "bg-muted hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={nextProject} className="hover-lift bg-transparent">
              <ChevronRight size={16} />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
