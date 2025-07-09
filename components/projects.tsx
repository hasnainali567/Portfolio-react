import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "A comprehensive analytics platform with real-time data visualization, machine learning insights, and predictive analytics for business intelligence.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "TypeScript", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "Collaborative Design System",
      description:
        "A comprehensive design system and component library used across multiple products, featuring automated testing and documentation.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Storybook", "Figma API", "Jest", "Chromatic"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "Real-time Chat Application",
      description:
        "A modern chat application with end-to-end encryption, file sharing, and video calling capabilities.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Socket.io", "WebRTC", "Redis", "Prisma"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with advanced search, payment processing, and inventory management.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Vue.js", "Node.js", "Stripe", "Elasticsearch", "Docker"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
          </div>

          <div className="space-y-12">
            {/* Featured Projects */}
            <div className="grid lg:grid-cols-2 gap-8">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] group"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-white/60">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-white/20 text-white/70 hover:bg-white/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-white/20 text-white/70 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {/* Other Projects */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] group"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white">{project.title}</CardTitle>
                      <CardDescription className="text-white/60">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-white/20 text-white/70 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white/70 hover:bg-white/10 flex-1"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Demo
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white/70 hover:bg-white/10 flex-1"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3 mr-1" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
