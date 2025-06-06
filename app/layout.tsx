import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Mona_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Suspense } from "react"

const fontSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Configuração correta da fonte Bricolage Grotesque
const fontHeading = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  // Incluindo vários pesos para maior flexibilidade
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Djalma Henry | Desenvolvedor Full Stack",
  description:
    "Sua próxima contratação estratégica em tecnologia Full Stack. Há 5 anos entregando soluções escaláveis, inteligentes e sustentáveis para empresas inovadoras.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://djalmahenry.com",
    title: "Djalma Henry | Desenvolvedor Full Stack",
    description:
      "Sua próxima contratação estratégica em tecnologia Full Stack. Há 5 anos entregando soluções escaláveis, inteligentes e sustentáveis para empresas inovadoras.",
    siteName: "Djalma Henry",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontHeading.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <Suspense>{children}</Suspense>
            </main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
