import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProviderWrapper } from "@/components/theme-provider-wrapper"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Solixor Detailing | Luxury Auto Detailing Central Texas",
  description:
    "Premium ceramic coating, paint correction, and auto detailing services in Central Texas. Professional auto detailing for luxury vehicles.",
  generator: "v0.app",
  openGraph: {
    title: "Solixor Detailing | Ceramic Coating & Paint Correction",
    description: "Premium auto detailing services in Central Texas",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-inter antialiased`}>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        <Analytics />
      </body>
    </html>
  )
}
