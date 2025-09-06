"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Clock } from "lucide-react"

interface Course {
  title: string
  institution: string
  date: string
  duration: string
  description: string
  skills: string[]
  certificateUrl?: string
  status: "completed" | "in-progress" | "planned"
}

const courses: Course[] = [
  {
    title: "Desarrollo Full Stack con React y Node.js",
    institution: "Platzi",
    date: "2024",
    duration: "120 horas",
    description:
      "Curso completo de desarrollo web moderno incluyendo React, Node.js, bases de datos y deployment en la nube.",
    skills: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    certificateUrl: "#",
    status: "completed",
  },
  {
    title: "Arquitectura de Software y Patrones de Diseño",
    institution: "Universidad Nacional",
    date: "2024",
    duration: "80 horas",
    description:
      "Estudio profundo de patrones de diseño, arquitecturas limpias y principios SOLID para desarrollo escalable.",
    skills: ["Clean Architecture", "SOLID", "Design Patterns", "Microservices"],
    certificateUrl: "#",
    status: "completed",
  },
  {
    title: "DevOps y Contenedores con Docker",
    institution: "Udemy",
    date: "2023",
    duration: "60 horas",
    description: "Implementación de pipelines CI/CD, containerización con Docker y orquestación con Kubernetes.",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Jenkins"],
    certificateUrl: "#",
    status: "completed",
  },
  {
    title: "Inteligencia Artificial y Machine Learning",
    institution: "Coursera - Stanford",
    date: "2024",
    duration: "100 horas",
    description: "Fundamentos de IA, algoritmos de ML, redes neuronales y aplicaciones prácticas en desarrollo web.",
    skills: ["Python", "TensorFlow", "Scikit-learn", "Neural Networks"],
    status: "in-progress",
  },
  {
    title: "Ciberseguridad para Desarrolladores",
    institution: "edX - MIT",
    date: "2024",
    duration: "90 horas",
    description: "Principios de seguridad en aplicaciones web, autenticación, autorización y mejores prácticas.",
    skills: ["Web Security", "OAuth", "Encryption", "Penetration Testing"],
    status: "planned",
  },
  {
    title: "Cloud Computing con AWS",
    institution: "AWS Training",
    date: "2023",
    duration: "150 horas",
    description: "Servicios de AWS, arquitecturas serverless, bases de datos en la nube y optimización de costos.",
    skills: ["AWS Lambda", "S3", "RDS", "CloudFormation", "API Gateway"],
    certificateUrl: "#",
    status: "completed",
  },
]

export function CoursesSection() {
  const getStatusColor = (status: Course["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "planned":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getStatusText = (status: Course["status"]) => {
    switch (status) {
      case "completed":
        return "Completado"
      case "in-progress":
        return "En Progreso"
      case "planned":
        return "Planificado"
      default:
        return "Desconocido"
    }
  }

  return (
    <section id="cursos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-4">Formación Continua</h2>
          <p className="text-xl text-muted-foreground font-dm-sans max-w-2xl mx-auto">
            Cursos y certificaciones que complementan mi formación académica y mantienen mis conocimientos actualizados.
          </p>
        </div>

        {/* Courses Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border"></div>

          <div className="space-y-12">
            {courses.map((course, index) => (
              <div
                key={course.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                </div>

                {/* Course Card */}
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold font-space-grotesk text-foreground mb-2">{course.title}</h3>
                        <p className="text-primary font-medium font-dm-sans mb-1">{course.institution}</p>
                      </div>
                      <Badge className={getStatusColor(course.status)}>{getStatusText(course.status)}</Badge>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {course.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {course.duration}
                      </div>
                      {course.certificateUrl && (
                        <div className="flex items-center gap-1">
                          <Award size={14} />
                          <a
                            href={course.certificateUrl}
                            className="text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Certificado
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground font-dm-sans mb-4 leading-relaxed">{course.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold font-space-grotesk text-primary mb-2">15+</div>
            <div className="text-muted-foreground font-dm-sans">Cursos Completados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-space-grotesk text-primary mb-2">500+</div>
            <div className="text-muted-foreground font-dm-sans">Horas de Estudio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-space-grotesk text-primary mb-2">8</div>
            <div className="text-muted-foreground font-dm-sans">Certificaciones</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-space-grotesk text-primary mb-2">3</div>
            <div className="text-muted-foreground font-dm-sans">En Progreso</div>
          </div>
        </div>
      </div>
    </section>
  )
}
