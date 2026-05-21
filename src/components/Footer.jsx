import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HashLink as Link } from 'react-router-hash-link'
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [showCookies, setShowCookies] = useState(false)

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Destinations', path: '/#destinations' },
    { name: 'Contact', path: '/#contact' },
  ]

  const serviceLinks = [
    {
      name: 'Travel Consultation',
      path: '/#services',
    },
    {
      name: 'Visa Assistance',
      path: '/#services',
    },
    {
      name: 'Holiday Packages',
      path: '/#services',
    },
    {
      name: 'Hotel Booking',
      path: '/#services',
    },
    {
      name: 'Documentation Support',
      path: '/#services',
    },
  ]

  const socials = [
    {
      icon: Facebook,
      link: 'https://facebook.com',
    },
    {
      icon: Instagram,
      link: 'https://www.instagram.com/ksatravals?igsh=eTJ5Ymg0cTZtZDRz',
    },
    {
      icon: Linkedin,
      link: 'https://linkedin.com',
    },
  ]

  return (
    <>
      <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-slate-950 via-[#07152f] to-[#0f2f73] text-white">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

          {/* Top Section */}
          <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

            {/* Company */}
            <div>
              <Link
                smooth
                to="/"
                className="mb-6 inline-flex items-center gap-4"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-xl font-bold shadow-xl backdrop-blur-xl">
                  KT
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-wide">
                    KSA TRAVALS
                  </h2>

                  <p className="text-xs uppercase tracking-[0.25em] text-blue-200">
                    Worldwide Travel Services
                  </p>
                </div>
              </Link>

              <p className="max-w-sm text-sm leading-relaxed text-white/70">
                Professional travel consultation and premium worldwide
                travel solutions tailored for modern travelers.
              </p>

              {/* Social Icons */}
              <div className="mt-7 flex gap-3">
                {socials.map((social, index) => {
                  const Icon = social.icon

                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:bg-blue-500"
                    >
                      <Icon size={18} />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-lg font-bold text-white">
                Quick Links
              </h3>

              <ul className="space-y-4">

                {quickLinks.map((link) => (
                  <li key={link.name}>

                    <Link
                      smooth
                      to={link.path}
                      className="group flex items-center gap-2 text-sm text-white/70 transition-all duration-300 hover:text-white"
                    >
                      <ChevronRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />

                      {link.name}
                    </Link>

                  </li>
                ))}

              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-6 text-lg font-bold text-white">
                Services
              </h3>

              <ul className="space-y-4">

                {serviceLinks.map((service) => (
                  <li key={service.name}>

                    <Link
                      smooth
                      to={service.path}
                      className="group flex items-center gap-2 text-sm text-white/70 transition-all duration-300 hover:text-white"
                    >
                      <ChevronRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />

                      {service.name}
                    </Link>

                  </li>
                ))}

              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-6 text-lg font-bold text-white">
                Contact Information
              </h3>

              <div className="space-y-5">

                <a
                  href="tel:+917305257594"
                  className="flex items-start gap-3 text-sm text-white/70 transition hover:text-white"
                >
                  <Phone size={18} className="mt-0.5" />

                  <span>+91 7305257594</span>
                </a>

                <a
                  href="mailto:ksatravals@gmail.com"
                  className="flex items-start gap-3 text-sm text-white/70 transition hover:text-white"
                >
                  <Mail size={18} className="mt-0.5" />

                  <span>ksatravals@gmail.com</span>
                </a>

                <div className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin size={18} className="mt-0.5" />

                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="mailto:ksatravals@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-blue-500/40"
              >
                Contact Support
              </motion.a>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 border-t border-white/10 pt-8">

            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

              <p className="text-sm text-white/50">
                © {currentYear} KSA TRAVALS. All rights reserved.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm">

                <Link
                  smooth
                  to="/privacy-policy"
                  className="text-white/50 transition hover:text-white"
                >
                  Privacy Policy
                </Link>

                <Link
                  smooth
                  to="/terms-conditions"
                  className="text-white/50 transition hover:text-white"
                >
                  Terms & Conditions
                </Link>

                <button
                  onClick={() => setShowCookies(true)}
                  className="text-white/50 transition hover:text-white"
                >
                  Cookie Settings
                </button>

              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Popup */}
      {showCookies && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-md px-4">

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/95 shadow-2xl backdrop-blur-2xl">

            {/* Top Accent */}
            <div className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400"></div>

            <div className="p-7">

              {/* Header */}
              <div className="mb-5 flex items-start justify-between gap-4">

                <div>
                  <h3 className="mb-2 text-2xl font-bold text-slate-900">
                    Cookie Preferences
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-500">
                    We use cookies to improve website performance,
                    personalize content, and analyze traffic.
                  </p>
                </div>

                <button
                  onClick={() => setShowCookies(false)}
                  className="text-xl text-slate-400 transition hover:text-red-500"
                >
                  ×
                </button>
              </div>

              {/* Cookie Options */}
              <div className="mb-6 space-y-4">

                <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Essential Cookies
                    </h4>

                    <p className="mt-1 text-xs text-slate-500">
                      Required for secure website functionality.
                    </p>
                  </div>

                  <div className="relative h-6 w-11 rounded-full bg-blue-600">
                    <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Analytics Cookies
                    </h4>

                    <p className="mt-1 text-xs text-slate-500">
                      Helps improve performance and analytics.
                    </p>
                  </div>

                  <div className="relative h-6 w-11 rounded-full bg-slate-300">
                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">

                <button
                  onClick={() => setShowCookies(false)}
                  className="flex-1 rounded-2xl border border-slate-300 px-5 py-3 font-medium text-slate-600 transition hover:bg-slate-100"
                >
                  Reject
                </button>

                <button
                  onClick={() => setShowCookies(false)}
                  className="flex-1 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
                >
                  Accept All
                </button>
              </div>

              <p className="mt-5 text-center text-[11px] leading-relaxed text-slate-400">
                By clicking “Accept All”, you agree to our use of cookies
                in accordance with our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer