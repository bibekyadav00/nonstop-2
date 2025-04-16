import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingSocials from "@/components/floating-socials"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Non-stop | Where Learning Never Ends",
  description: "Personalized coaching for JEE Mains/Advanced, NEET, and CUCET aspirants by NIT Durgapur students.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <FloatingSocials />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'