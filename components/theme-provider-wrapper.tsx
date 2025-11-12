"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Preloader } from "@/components/preloader"

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Preloader />
      {children}
    </ThemeProvider>
  )
}
