import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-heading font-bold gradient-text">
              Djalma Henry
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">Desenvolvedor Full Stack Sênior</p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://github.com/djalmahenry"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://linkedin.com/in/djalmahenry"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:contato@djalmahenry.com" aria-label="E-mail">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://wa.me/message/MGFIOCP73NHXI1" target="_blank" aria-label="Telefone">
                  <Phone className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>E-mail: contato@djalmahenry.com | Telefone: (85) 99192-7780 | Fortaleza/CE</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Djalma Henry. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
