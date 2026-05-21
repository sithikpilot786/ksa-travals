import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Services', href: '#services' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleScroll = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-lg ${
        isScrolled ? 'bg-white/95 shadow-glass border-b border-white/20' : 'bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-md border-b border-white/10'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-main/10 flex items-center justify-center">
              <span className="text-primary-main font-bold">KT</span>
            </div>
            <span className="text-lg font-bold text-slate-900">KSA TRAVALS</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleScroll(link.href)}
                className="text-slate-700 hover:text-primary-main transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll('#contact')}
              className="bg-primary-main text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-sm hover:bg-primary-dark transition"
            >
              Contact
            </motion.button>
          </div>

          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-white/95 border-t border-slate-200 shadow-sm"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleScroll(link.href)}
                className="block w-full text-left text-slate-700 hover:text-primary-main transition-colors py-2 font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={() => handleScroll('#contact')}
                className="w-full bg-primary-main text-white rounded-lg py-3 text-sm font-semibold"
              >
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
