import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Users, TrendingUp, Award } from 'lucide-react'
import TiltCard from './TiltCard'

const AboutSection = () => {
  const stats = [
    { label: 'Trusted Advice', value: 'Practical travel planning', icon: Users },
    { label: 'Efficient Process', value: 'Clear visa guidance', icon: Globe },
    { label: 'Smart Planning', value: 'Tailored trip coordination', icon: TrendingUp },
    { label: 'Reliable Support', value: 'Responsive client care', icon: Award },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-br from-white via-blue-50 to-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary-dark tracking-tight">
            About <span className="text-primary-main">KSA TRAVALS</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary-main to-accent-main"></div>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Professional international travel solutions combining modern planning with responsive client support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3 variants={itemVariants} className="text-4xl font-bold text-primary-dark mb-4 tracking-tight">
              Professional Travel Support
            </motion.h3>
            <motion.p variants={itemVariants} className="text-slate-600 leading-relaxed">
              KSA TRAVALS combines startup agility with thoughtful travel planning. We help clients navigate international travel, visa requirements, hotel coordination, and group arrangements with confidence.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="rounded-xl border border-primary-light bg-white/80 backdrop-blur-sm p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-primary-main mb-3">Our Vision</h4>
                <p className="text-slate-600 text-base leading-relaxed">
                  Deliver travel services built on transparency, reliability, and modern customer support.
                </p>
              </div>
              <div className="rounded-xl border border-primary-light bg-white/80 backdrop-blur-sm p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-primary-main mb-3">Our Mission</h4>
                <p className="text-slate-600 text-base leading-relaxed">
                  Provide practical travel guidance, efficient planning, and responsive service for travelers worldwide.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { title: 'Clear communication', desc: 'We keep every travel plan transparent and easy to follow.' },
              { title: 'Flexible coordination', desc: 'We adjust plans to match schedules, group needs, and evolving travel requirements.' },
              { title: 'Document support', desc: 'We provide clear guidance for visas, passports, and travel documentation.' },
              { title: 'Trusted planning', desc: 'We focus on practical logistics and a quality client experience.' }
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <div className="rounded-lg border border-primary-light/40 bg-white/70 backdrop-blur-lg p-6 shadow-glass hover:shadow-lg hover:bg-white/80 hover:border-primary-light transition-all duration-300 group">
                  <h4 className="text-lg font-bold text-primary-main mb-2 group-hover:text-primary-dark transition-colors">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-full"
              >
                <div className="rounded-lg border border-primary-light/40 bg-gradient-to-br from-white/80 to-blue-50/60 backdrop-blur-lg p-6 text-center shadow-glass hover:shadow-lg hover:bg-gradient-to-br hover:from-white/90 hover:to-blue-50/80 transition-all duration-300 h-full flex flex-col justify-center items-center group">
                  <div className="flex justify-center mb-3 text-primary-main group-hover:text-primary-dark group-hover:scale-110 transition-all duration-300">
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <p className="text-lg font-semibold text-primary-dark mb-2">{stat.value}</p>
                  <p className="text-slate-600 text-sm font-medium uppercase tracking-wide group-hover:text-slate-700 transition-colors">{stat.label}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
