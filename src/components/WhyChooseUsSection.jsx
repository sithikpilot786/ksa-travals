import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Shield, Users, Globe, Award, HeartHandshake } from 'lucide-react'
import TiltCard from './TiltCard'

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Trusted International',
      description: 'Trusted international travel company with proven track record and industry recognition.',
    },
    {
      icon: Users,
      title: 'Professional Support',
      description: 'Professional customer support available 24/7 for all your travel inquiries and assistance.',
    },
    {
      icon: Globe,
      title: 'Worldwide Guidance',
      description: 'Worldwide travel guidance covering multiple countries with local expertise and global network.',
    },
    {
      icon: CheckCircle,
      title: 'Reliable Services',
      description: 'Reliable visa assistance with dedicated officers ensuring smooth documentation process.',
    },
    {
      icon: Award,
      title: 'Experienced Team',
      description: 'Experienced team of travel professionals with industry expertise and certifications.',
    },
    {
      icon: HeartHandshake,
      title: 'Global Knowledge',
      description: 'Global travel knowledge with partnerships, insights, and resources for seamless experiences.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="why-choose-us" className="py-24 px-4 relative bg-gradient-to-br from-white via-blue-50 to-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background Effects */}
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary-main/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Section Title */}
        <motion.div
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary-dark tracking-tight">
            Why Choose <span className="text-primary-main">KSA TRAVALS</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-main to-accent-main mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Experience professional travel services with a trusted partner
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-full"
              >
                <div className="rounded-lg border border-primary-light/40 bg-white/70 backdrop-blur-lg p-8 text-center h-full hover:bg-white/80 hover:border-primary-light/60 hover:shadow-lg transition-all duration-300 group shadow-glass">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-blue-100 rounded-lg flex items-center justify-center group-hover:shadow-md group-hover:scale-110 transition-all duration-300\">
                      <Icon className="w-8 h-8 text-primary-main group-hover:text-primary-dark transition-colors\" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 text-primary-dark group-hover:text-primary-main transition-colors\">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors\">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Value Proposition Badges */}
        <motion.div
          className="mt-20 grid md:grid-cols-4 gap-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-lg border border-primary-light bg-white/80 backdrop-blur-sm p-6 text-center hover:shadow-md transition-all">
            <p className="text-2xl font-bold text-primary-main mb-2">Worldwide</p>
            <p className="text-slate-600 text-sm font-medium uppercase tracking-wide">Travel Coverage</p>
          </div>
          <div className="rounded-lg border border-primary-light bg-white/80 backdrop-blur-sm p-6 text-center hover:shadow-md transition-all">
            <p className="text-2xl font-bold text-primary-main mb-2">Dedicated</p>
            <p className="text-slate-600 text-sm font-medium uppercase tracking-wide">Client Support</p>
          </div>
          <div className="rounded-lg border border-primary-light bg-white/80 backdrop-blur-sm p-6 text-center hover:shadow-md transition-all">
            <p className="text-2xl font-bold text-primary-main mb-2">Professional</p>
            <p className="text-slate-600 text-sm font-medium uppercase tracking-wide">Travel Advisory</p>
          </div>
          <div className="rounded-lg border border-primary-light bg-white/80 backdrop-blur-sm p-6 text-center hover:shadow-md transition-all">
            <p className="text-2xl font-bold text-primary-main mb-2">24/7</p>
            <p className="text-slate-600 text-sm font-medium uppercase tracking-wide">Customer Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
