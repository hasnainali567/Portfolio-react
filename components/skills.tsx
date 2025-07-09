import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion", "Three.js"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "Docker", "AWS"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Tools & Design",
      icon: "🛠️",
      skills: ["Git", "Figma", "Vite", "Jest", "Cypress", "Vercel", "Linear"],
      color: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Skills &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                  <div className={`w-16 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`} />
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-white/10 text-white/80 hover:bg-white/20 transition-all duration-300 hover:scale-110 border-white/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
