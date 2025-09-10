"use client"

import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Lenguajes de Programación",
    skills: [
      {
        name: "HTML",
        icon: "🌐",
        color: "from-orange-500 to-red-500",
      },
      {
        name: "CSS",
        icon: "🎨",
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "TypeScript",
        icon: "📘",
        color: "from-blue-600 to-blue-400",
      },
      {
        name: "PHP",
        icon: "🐘",
        color: "from-purple-600 to-indigo-500",
      },
      {
        name: "C++",
        icon: "⚡",
        color: "from-blue-700 to-blue-500",
      },
      {
        name: "C#",
        icon: "🔷",
        color: "from-purple-700 to-purple-500",
      },
    ],
  },
  {
    title: "Frameworks & Librerías",
    skills: [
      {
        name: "Tailwind CSS",
        icon: "💨",
        color: "from-cyan-500 to-teal-500",
      },
      {
        name: ".NET",
        icon: "🔵",
        color: "from-purple-600 to-blue-600",
      },
      {
        name: "Angular",
        icon: "🅰️",
        color: "from-red-600 to-red-400",
      },
    ],
  },
  {
    title: "Bases de Datos & Herramientas",
    skills: [
      {
        name: "PostgreSQL",
        icon: "🐘",
        color: "from-blue-600 to-blue-800",
      },
      {
        name: "Git",
        icon: "📚",
        color: "from-orange-600 to-red-600",
      },
      {
        name: "Docker",
        icon: "🐳",
        color: "from-blue-500 to-cyan-600",
      },
      {
        name: "Vercel",
        icon: "▲",
        color: "from-gray-800 to-black",
      },
      {
        name: "Supabase",
        icon: "⚡",
        color: "from-green-500 to-emerald-600",
      },
      {
        name: "Discord",
        icon: "🎮",
        color: "from-indigo-600 to-purple-600",
      },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="gradient-accent">Habilidades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tecnologías y herramientas que domino para crear soluciones innovadoras
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group"
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-center text-primary">{category.title}</h3>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="relative group/skill p-4 rounded-xl bg-background/50 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                      style={{
                        animationDelay: `${(categoryIndex * 3 + skillIndex) * 100}ms`,
                      }}
                    >
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300`}
                      />

                      <div className="relative z-10 text-center">
                        <div className="text-3xl mb-2 group-hover/skill:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>

                        <span className="font-semibold text-sm text-foreground group-hover/skill:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>

                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-0 group-hover/skill:opacity-20 blur-xl transition-opacity duration-500`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 border border-primary/30">
            <span className="text-sm font-medium text-foreground">¿Interesado en colaborar?</span>
            <span className="text-2xl">🚀</span>
          </div>
        </div>
      </div>
    </section>
  )
}
