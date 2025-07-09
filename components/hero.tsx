"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Floating badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-8 animate-pulse">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping" />
            Available for work
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-white">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Alex Johnson
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 mb-6 font-light">
            Full Stack Developer & Creative Technologist
          </p>

          <p className="text-lg text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft exceptional digital experiences through code, design, and innovation. Specializing in modern web
            technologies and user-centered solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 w-12 h-12"
                asChild
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-6 w-6" />
                  <span className="sr-only">{label}</span>
                </a>
              </Button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="text-white/40 hover:text-white/80 transition-all duration-300 animate-bounce"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  )
}
