import React from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

const LeadershipSection = () => {
  const leaders = [
    {
      name: 'Sheik Asmutheen K',
      position: 'Founder & CEO',
      description:
        'Where Leadership Meets Exceptional Travel Service  Guiding Every Journey With Professional Excellence.',
      email: 'sheikasmutheen@gmail.com'
    },
    {
      name: 'Abubakkarsithik K',
      position: 'Chief Technical Officer',
      description:
        'Driving Technology Behind Seamless Travel ExperiencesFocused On Innovation, Performance, And User Satisfaction.',
      email: 'sithikpilot786@gmail.com',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="leadership"
      className="py-24 px-4 relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#0f62fe_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary-dark tracking-tight">
            Our <span className="text-primary-main">Leadership</span>
          </h2>

          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary-main to-accent-main"></div>

          <p className="text-slate-600 text-xl leading-relaxed">
            Experienced leaders guiding our company with a professional and client-focused approach.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full"
            >
              <div className="rounded-2xl border border-primary-light/40 bg-white/70 backdrop-blur-lg p-8 shadow-xl h-full flex flex-col justify-between hover:shadow-2xl hover:bg-white/80 hover:border-primary-light/60 transition-all duration-300 group">
                
                <div>
                  <h3 className="text-2xl font-bold text-center text-primary-dark mb-2 group-hover:text-primary-main transition-colors">
                    {leader.name}
                  </h3>

                  <p className="text-primary-main text-center font-semibold text-lg mb-4 group-hover:text-primary-dark transition-colors">
                    {leader.position}
                  </p>

                  <p className="text-slate-600 text-center leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
                    {leader.description}
                  </p>
                </div>

                {/* Mail Button */}
                <div className="flex justify-center mt-auto">
                  <motion.a
                    href={`mailto:${leader.email}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-xl border border-primary-light/40 bg-white/70 backdrop-blur-md text-primary-main hover:bg-primary-main hover:text-white hover:border-primary-main transition-all duration-300 shadow-md"
                  >
                    <Mail size={22} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default LeadershipSection