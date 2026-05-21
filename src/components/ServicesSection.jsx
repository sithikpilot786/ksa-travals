import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe,
  FileText,
  Plane,
  Heart,
  Hotel,
  Briefcase,
  Shield,
  FileCheck,
  Map,
} from 'lucide-react'

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      icon: Globe,
      title: 'Worldwide Travel Consultation',
      description:
        'Receive professional guidance on international travel protocols, country-specific entry requirements, customized route planning, transit details, and comprehensive travel advisory support for any destination globally.',
      details:
        'Our travel experts help you plan international trips efficiently with route planning, visa guidance, airline suggestions, and destination-specific travel advice for smooth global travel experiences.',
    },
    {
      icon: FileText,
      title: 'Visa Assistance',
      description:
        'Get end-to-end support for visa applications. We guide you through document preparation, application filling, visa interview preparation, appointment booking, and submission.',
      details:
        'We provide complete visa support including document verification, application filing, appointment scheduling, interview guidance, and travel documentation for Schengen, US, UK, Canada, and Asian countries.',
    },
    {
      icon: Plane,
      title: 'Holiday Tour Guidance',
      description:
        'We design custom vacation packages and holiday tours tailored to your travel preferences.',
      details:
        'Our holiday experts create personalized tour packages with hotel booking, sightseeing plans, transport coordination, and destination recommendations for memorable vacations.',
    },
    {
      icon: Heart,
      title: 'Umrah & Hajj Support',
      description:
        'Dedicated assistance for holy pilgrimages including visa processing and hotel arrangements.',
      details:
        'We arrange pilgrimage packages including visa support, hotel reservations near Haram, transport coordination, and complete travel assistance for Umrah and Hajj journeys.',
    },
    {
      icon: Hotel,
      title: 'Hotel Recommendations',
      description:
        'Access our curated selection of verified boutique, luxury, and family-friendly hotels.',
      details:
        'We recommend trusted hotels based on your budget and travel preferences while ensuring comfort, safety, location convenience, and quality customer experiences.',
    },
    {
      icon: Briefcase,
      title: 'Corporate Travel',
      description:
        'Tailored travel management solutions for businesses and corporate teams.',
      details:
        'Our corporate travel solutions include flight booking, accommodation management, team coordination, expense tracking, and flexible itinerary planning for businesses.',
    },
    {
      icon: Shield,
      title: 'Travel Insurance Guidance',
      description:
        'Navigate travel insurance options with ease and confidence.',
      details:
        'We help travelers select suitable insurance policies covering medical emergencies, cancellations, baggage loss, flight delays, and international travel risks.',
    },
    {
      icon: FileCheck,
      title: 'Passport Assistance',
      description:
        'Professional guidance for passport applications, renewals, and corrections.',
      details:
        'We simplify passport processes including new applications, renewals, document verification, corrections, and appointment support to avoid delays.',
    },
    {
      icon: Map,
      title: 'International Planning',
      description:
        'Complete international travel planning and destination coordination.',
      details:
        'From airport transfers to sightseeing arrangements and local travel coordination, we manage every aspect of your international travel experience professionally.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="services"
      className="py-24 px-4 relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-main/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary-dark tracking-tight">
            Our <span className="text-primary-main">Services</span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-main to-accent-main mx-auto mb-6 rounded-full"></div>

          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Professional travel services managed by specialists to ensure a smooth and organized journey.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-full"
              >
                <div className="rounded-2xl border border-primary-light/40 bg-white/70 backdrop-blur-lg p-8 h-full flex flex-col justify-between hover:bg-white/80 hover:border-primary-light/60 hover:shadow-2xl transition-all duration-300 group shadow-lg">
                  
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary-main" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-primary-dark group-hover:text-primary-main transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => setSelectedService(service)}
                    className="text-primary-main font-semibold text-sm flex items-center gap-2 hover:text-primary-dark transition-colors"
                  >
                    Learn More →
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 text-slate-500 hover:text-red-500 text-3xl transition"
              >
                ×
              </button>

              <div className="mb-6">
                <h2 className="text-4xl font-bold text-primary-dark mb-5">
                  {selectedService.title}
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed">
                  {selectedService.details}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h3 className="text-primary-main font-semibold mb-3 text-lg">
                  Why Choose KSA TRAVALS?
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  We provide trusted travel solutions with personalized support,
                  professional guidance, transparent communication, and smooth
                  coordination to ensure stress-free travel experiences for all clients.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ServicesSection