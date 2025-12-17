"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/results', label: 'Results' },
    { href: '/consultation', label: 'Get Started' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a1f36]/95 backdrop-blur-md shadow-lg' : 'bg-[#1a1f36]'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00bfff] to-[#20b2aa] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-white font-bold text-xl font-['Montserrat']">
              Machtech Enterprises
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#00bfff] transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/consultation"
              className="bg-gradient-to-r from-[#00bfff] to-[#20b2aa] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,191,255,0.5)] transition-all duration-300"
            >
              Book Strategy Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-[#00bfff] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-[#00bfff] transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/consultation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-to-r from-[#00bfff] to-[#20b2aa] text-white px-6 py-2.5 rounded-lg font-semibold text-center hover:shadow-[0_0_20px_rgba(0,191,255,0.5)] transition-all duration-300"
              >
                Book Strategy Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
