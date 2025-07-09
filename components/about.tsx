import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative">
                <img
                  src="/placeholder.svg?height=500&width=400"
                  alt="Profile"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience crafting digital solutions that
                  bridge the gap between design and functionality. My journey began with curiosity and has evolved into
                  a deep love for creating meaningful user experiences.
                </p>

                <p>
                  I specialize in modern web technologies and have a keen eye for design. When I'm not coding, you'll
                  find me exploring new frameworks, contributing to open-source projects, or mentoring aspiring
                  developers.
                </p>
              </div>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl text-white mb-6">Quick Facts</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: "🎓", text: "CS Graduate" },
                      { icon: "💼", text: "5+ Years Experience" },
                      { icon: "🌍", text: "San Francisco, CA" },
                      { icon: "☕", text: "Coffee Enthusiast" },
                    ].map((fact, index) => (
                      <div key={index} className="flex items-center space-x-3 text-white/70">
                        <span className="text-2xl">{fact.icon}</span>
                        <span>{fact.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
