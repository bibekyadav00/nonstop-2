"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/#courses" },
    { name: "Articles", href: "/articles" },
    { name: "Contact", href: "/#contact" },
  ]

  const isActive = (path: string) => {
    if (path.startsWith("/#")) {
      return pathname === "/"
    }
    return pathname === path
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-navy-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 z-10">
          <Image
            src="/images/nonstop-logo.png"
            alt="Non-stop Logo"
            width={150}
            height={50}
            className="h-10 w-auto mix-blend-multiply"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-400 relative group ${
                isActive(item.href) ? "text-gray-900" : "text-gray-800"
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex gap-4">
          <Button
            asChild
            variant="outline"
            className="border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
          >
            <Link href="/#contact">Contact Us</Link>
          </Button>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/#courses">Enroll Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-10" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-navy-900/95 backdrop-blur-md z-40 pt-20"
        >
          <nav className="flex flex-col p-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`py-4 text-lg font-medium transition-colors hover:text-blue-400 border-b border-gray-800 ${
                  isActive(item.href) ? "text-blue-600" : "text-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-6 pt-4">
              <Button
                asChild
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
              >
                <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/#courses" onClick={() => setIsMenuOpen(false)}>
                  Enroll Now
                </Link>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
