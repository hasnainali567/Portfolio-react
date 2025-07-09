import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Alex Johnson
            </h3>
            <p className="text-white/60 text-lg">Full Stack Developer & Creative Technologist</p>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                className="text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 w-12 h-12"
                asChild
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </a>
              </Button>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-white/40 flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Alex Johnson. Made with
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              and lots of coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
