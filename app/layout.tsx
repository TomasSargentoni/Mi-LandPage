import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Portafolio - Desarrollador Full Stack",
  description: "Estudiante de Ingeniería en Sistemas especializado en desarrollo web moderno",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <div className="fixed inset-0 bg-background grid-pattern">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        </div>
        <div className="relative z-10">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
