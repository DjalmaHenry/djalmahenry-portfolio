"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { Suspense } from "react"

function AnalyticsContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      // Aqui você pode adicionar seu código de analytics
      // Por exemplo, Google Analytics, Plausible, etc.
      console.log(`Página visitada: ${pathname}`)
    }
  }, [pathname, searchParams])

  return null
}

export function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  )
}
