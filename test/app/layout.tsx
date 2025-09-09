import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "PM ARCHITEKCI",
  description: "Bielsko-Biała",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <header className="w-full fixed top-0 left-0 right-0 z-50">
          <nav className="flex items-center justify-between px-8 py-6">
            <a href="/" className="font-mono text-sm text-white/80 hover:text-white transition-colors">
              PM architekci – Rafał Mazur
            </a>
            <div className="flex items-center gap-8 font-mono text-sm text-white/80">
              <a href="/" className="hover:text-white transition-colors">home</a>
              <a href="/portfolio" className="hover:text-white transition-colors">portfolio</a>
            </div>
          </nav>
        </header>
        <main className="pt-24">{children}</main>
      </body>
    </html>
  )
}
