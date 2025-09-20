import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "FormationPro - Plateforme de Formation en Ligne",
  description: "Développez vos compétences avec notre plateforme de formation en ligne moderne et interactive",
  generator: "v0.app",
  keywords: "formation, apprentissage, cours en ligne, développement professionnel",
  authors: [{ name: "FormationPro" }],
  openGraph: {
    title: "FormationPro - Plateforme de Formation en Ligne",
    description: "Développez vos compétences avec notre plateforme de formation en ligne moderne et interactive",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
