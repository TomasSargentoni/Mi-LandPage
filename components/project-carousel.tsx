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
    title: "Bienes Raices",
    description:
      "Plataforma integral para la gestión de propiedades, que permite al administrador gestionar el inventario inmobiliario y a los usuarios explorar viviendas disponibles, conocer la trayectoria de la empresa y establecer contacto de manera eficiente.",
    mainImage: "/modern-ecommerce-interface.png",
    thumbnails: [
      "/bienesraices1.png",
      "/bienesraices2.png",
      "/bienesraices3.png",
      "/bienesraices4.png",
    ],
    technologies: ["HTML", "CSS", "SASS", "JavaScript", "PHP"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Black Lyon - Gim",
    description:
      "Plataforma integral para la gestión de gimnasios, que permite a los clientes crear cuentas, gestionar pases y acceder a rutinas con instrucciones visuales. Los administradores y moderadores pueden controlar clientes, precios, ejercicios, notificaciones y supervisar la actividad del equipo, optimizando la operación del gimnasio.",
    mainImage: "/modern-ecommerce-interface.png",
    thumbnails: [
      "/blacklyon1.png",
      "/blacklyon2.png",
      "/blacklyon3.png",
      "/blacklyon4.png",
    ],
    technologies: ["Next.Js","Vercel","SupaBase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AppSalon",
    description:
      "Plataforma de gestión de servicios y turnos para salones, que permite al administrador administrar los servicios y su agenda, mientras que los clientes pueden seleccionar servicios, programar turnos y visualizar un resumen detallado de su reserva.",
    mainImage: "/task-management-dashboard.png",
    thumbnails: [
      "/appsalon1.png",
      "/appsalon2.png",
      "/appsalon3.png",
      "/appsalon4.png",
    ],
    technologies: ["HTML", "CSS", "SASS", "JavaScript", "PHP"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "DevWebCamp",
    description:
      "Plataforma para la gestión y participación en eventos de desarrollo web, donde los clientes pueden explorar conferencias y workshops, adquirir pases con beneficios adicionales mediante PayPal, y los administradores pueden gestionar eventos, controlar inscripciones y acceder a estadísticas completas.",
    mainImage: "/ai-content-generation-interface.jpg",
    thumbnails: [
      "/devwebcamp1.png",
      "/devwebcamp2.png",
      "/devwebcamp3.png",
      "/devwebcamp4.png",
    ],
    technologies: ["HTML", "CSS", "SASS", "JavaScript", "PHP", "Google Maps API", "PayPal"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "UpTask",
    description:
      "Plataforma de gestión de proyectos y tareas, que permite crear proyectos, agregar y organizar tareas, actualizar su estado y eliminar elementos, facilitando un seguimiento eficiente del progreso de cada proyecto.",
    mainImage: "/real-estate-platform.png",
    thumbnails: [
      "/uptask1.png",
      "/uptask2.png",
      "/uptask3.png",
      "/uptask4.png",
    ],
    technologies: ["HTML", "CSS", "SASS", "JavaScript", "PHP"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Blog de Cafe",
    description:
      "Plataforma informativa sobre el mundo del café, que ofrece historia, precios, disponibilidad en distintos locales y la posibilidad de contactar directamente con los establecimientos.",
    mainImage: "/real-estate-platform.png",
    thumbnails: [
      "/blogdecafe1.png",
      "/blogdecafe2.png",
      "/blogdecafe3.png",
      "/blogdecafe4.png",
    ],
    technologies: ["HTML", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Rock & EDM Festival",
    description:
      "Plataforma informativa sobre festivales musicales, que permite conocer artistas, bandas, horarios de presentación y explorar la galería de imágenes del evento.",
    mainImage: "/real-estate-platform.png",
    thumbnails: [
      "/festival1.png",
      "/festival2.png",
      "/festival3.png",
      "/festival4.png",
    ],
    technologies: ["HTML", "CSS", "SASS", "JavaScript", "PHP"],
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
  const [isModalOpen, setIsModalOpen] = useState(false)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const SLIDE_DURATION = 5000 // 5 seconds

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
  handleResize(); // set initial value
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  useEffect(() => {
    if (isPlaying && !isHovered && !isModalOpen) {
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
                {/* Fondo brillante */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />

                <img
                  src={project.thumbnails[selectedThumbnail] || "/placeholder.svg"}
                  alt={`${project.title} - Vista ${selectedThumbnail + 1}`}
                  className="relative w-full h-80 object-cover rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02] hover-lift glass border border-white/10 cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                />


                {/* Flechas para móvil */}
                {isMobile && (
                  <>
                    <button
                      onClick={prevProject}
                      className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextProject}
                      className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
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
            <div className="space-y-8 h-auto sm:h-[500px] overflow-y-visible sm:overflow-y-auto">
              <div className="glass rounded-2xl p-8 border border-white/10 h-full flex flex-col justify-between">
                <div>
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

          <div className={`flex justify-center items-center mt-16 ${isMobile ? "hidden" : ""}`}>
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

{isModalOpen && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
    onClick={() => setIsModalOpen(false)} // cerrar al hacer click fuera
  >
    <div
      className="max-w-[90%] max-h-[90%] relative"
      onClick={(e) => e.stopPropagation()} // evitar que se cierre al clickear la imagen
    >
      <img
        src={project.thumbnails[selectedThumbnail] || "/placeholder.svg"}
        alt="Imagen ampliada"
        className="w-full h-full object-contain rounded-lg"
      />
      <button
        className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-4xl p-2 font-bold"
        onClick={() => setIsModalOpen(false)}
        aria-label="Cerrar imagen"
      >
        &times;
      </button>
    </div>
  </div>
)}



    </section>
  )
}
