"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Database, Globe, Server, Wrench } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

interface Skill {
  name: string
  level: number
  category: string
}

interface SkillCategory {
  name: string
  icon: React.ReactNode
  skills: Skill[]
  color: string
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    color: "text-blue-500",
    skills: [
      { name: "React", level: 90, category: "frontend" },
      { name: "Next.js", level: 85, category: "frontend" },
      { name: "TypeScript", level: 88, category: "frontend" },
      { name: "Tailwind CSS", level: 92, category: "frontend" },
      { name: "Vue.js", level: 75, category: "frontend" },
      { name: "HTML/CSS", level: 95, category: "frontend" },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="w-6 h-6" />,
    color: "text-green-500",
    skills: [
      { name: "Node.js", level: 85, category: "backend" },
      { name: "Python", level: 80, category: "backend" },
      { name: "Express.js", level: 82, category: "backend" },
      { name: "Laravel", level: 75, category: "backend" },
      { name: "API REST", level: 88, category: "backend" },
      { name: "GraphQL", level: 70, category: "backend" },
    ],
  },
  {
    name: "Base de Datos",
    icon: <Database className="w-6 h-6" />,
    color: "text-purple-500",
    skills: [
      { name: "PostgreSQL", level: 85, category: "database" },
      { name: "MongoDB", level: 80, category: "database" },
      { name: "MySQL", level: 88, category: "database" },
      { name: "Supabase", level: 82, category: "database" },
      { name: "Prisma", level: 78, category: "database" },
      { name: "Redis", level: 70, category: "database" },
    ],
  },
  {
    name: "DevOps & Herramientas",
    icon: <Wrench className="w-6 h-6" />,
    color: "text-orange-500",
    skills: [
      { name: "Git", level: 90, category: "tools" },
      { name: "Docker", level: 75, category: "tools" },
      { name: "Vercel", level: 88, category: "tools" },
      { name: "AWS", level: 70, category: "tools" },
      { name: "Linux", level: 80, category: "tools" },
      { name: "CI/CD", level: 72, category: "tools" },
    ],
  },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="habilidades" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-4">
              Habilidades Técnicas
            </h2>
            <p className="text-xl text-muted-foreground font-dm-sans max-w-2xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones completas y escalables.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover-lift ${
                  activeCategory === index
                    ? "bg-primary text-primary-foreground shadow-lg pulse-glow"
                    : "bg-background text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <span className={activeCategory === index ? "text-primary-foreground" : category.color}>
                  {category.icon}
                </span>
                {category.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <ScrollReveal delay={400}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <Card
                key={skill.name}
                className={`p-6 hover:shadow-lg transition-all duration-300 hover-lift animate-stagger-${(index % 4) + 1}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold font-space-grotesk text-foreground">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground font-dm-sans">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* Additional Skills Tags */}
        <ScrollReveal delay={600}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold font-space-grotesk text-foreground mb-6">Otras Tecnologías</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Figma",
                "Adobe XD",
                "Photoshop",
                "Stripe",
                "PayPal",
                "Socket.io",
                "Jest",
                "Cypress",
                "Webpack",
                "Vite",
                "Sass",
                "Bootstrap",
                "Material-UI",
                "Chakra UI",
                "Firebase",
                "Netlify",
              ].map((tech, index) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className={`px-3 py-1 text-sm hover-lift animate-stagger-${(index % 4) + 1}`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
