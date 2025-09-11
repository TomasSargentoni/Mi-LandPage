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
    title: "Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL",
    institution: "Udemy",
    date: "2023",
    duration: "150 horas",
    description:
      "Curso completo de desarrollo web moderno incluyendo React, Node.js, bases de datos y deployment en la nube.",
    skills: ["React", "Node.js", "HTM", "Express", "JWT","CSS","PHP","MySQL","JavaScript","API Keys","Microservices"],
    certificateUrl: "https://www.udemy.com/certificate/UC-157bb29b-4aeb-49dc-b200-353c93a54224/",
    status: "completed",
  },
  {
    title: "Laravel 9 - Crea Aplicaciones y Sitios Web con PHP 8 y MVC",
    institution: "Udemy",
    date: "2024",
    duration: "20 horas",
    description:
      "Aprendizaje de Framework de trabajo Laravel para mejor manejo de PHP y MVC",
    skills: ["Frameworks", "SOLID","PHP", "Design Patterns", "Microservices"],
    certificateUrl: "#",
    status: "in-progress",
  },
  {
    title: "Beginning C++ Programming - From Beginner to Beyond",
    institution: "Udemy",
    date: "2022",
    duration: "60 horas",
    description: "Curso sobre C++ moderno, que abarca desde conceptos básicos hasta temas avanzados como herencia y funciones polimórficas, incluyendo el uso de Visual Studio Code, expresiones lambda y ejercicios prácticos con quizzes y desafíos de codificación.",
    skills: ["C++", "Herencia y Polimorfismo", "Visual Studio Code", "Expresiones Lambda"],
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
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-4">
            Formación Continua
          </h2>
          <p className="text-xl text-muted-foreground font-dm-sans max-w-2xl mx-auto">
            Cursos y certificaciones que complementan mi formación académica y mantienen mis conocimientos actualizados.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <Card 
              key={course.title} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-space-grotesk text-foreground mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-primary font-medium font-dm-sans mb-1">
                    {course.institution}
                  </p>
                </div>
                <Badge className={`${getStatusColor(course.status)} flex-shrink-0 ml-3`}>
                  {getStatusText(course.status)}
                </Badge>
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
                {course.certificateUrl && course.certificateUrl !== "#" && (
                  <div className="flex items-center gap-1">
                    <Award size={14} />
                    <a
                      href={course.certificateUrl}
                      className="text-primary hover:underline transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Certificado
                    </a>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground font-dm-sans mb-4 leading-relaxed text-sm">
                {course.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}