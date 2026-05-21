import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import TiltCard from './TiltCard'

const HeroSection = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Subtle parallax effect for background blobs
  const bgBlob1X = useTransform(mouseX, [-500, 500], [-25, 25])
  const bgBlob1Y = useTransform(mouseY, [-500, 500], [-25, 25])
  
  const bgBlob2X = useTransform(mouseX, [-500, 500], [35, -35])
  const bgBlob2Y = useTransform(mouseY, [-500, 500], [35, -35])

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    mouseX.set(clientX - centerX)
    mouseY.set(clientY - centerY)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const handleScroll = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
      style={{ perspective: 1200 }}
    >
      {/* Premium Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&auto=format&fit=crop&q=80"
          alt="Travel background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/50 to-primary-dark/40"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-main/20 to-transparent opacity-30"></div>
      </div>
      {/* Subtle accent blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-[15%] w-80 h-80 rounded-full bg-primary-main/5 blur-[80px]" />
        <div className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-accent-main/5 blur-[100px]" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white tracking-tight drop-shadow-lg"
        >
          From Takeoff To Touchdown — We Travel With You
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
        >
          KSA TRAVALS supports every traveler with friendly planning, visa guidance, expert coordination, and reliable support for journeys anywhere in the world.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => handleScroll('#services')}
            className="bg-primary-main text-white px-8 py-3.5 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          >
            Explore Services
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="px-8 py-3.5 border border-white/30 bg-white/20 backdrop-blur-md text-white rounded-lg text-sm font-semibold hover:bg-white/30 hover:border-white/50 hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </button>
        </motion.div>

        {/* 3D Features Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="rounded-xl border border-white/30 bg-white/10 backdrop-blur-md p-6 text-left h-full shadow-glass hover:bg-white/20 hover:border-white/50 transition-all duration-300 group">
            <p className="text-lg font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors">Personalized travel planning</p>
            <p className="text-white/80 text-sm">Tailored travel solutions for families, solo explorers, and business travelers alike.</p>
          </div>
          
          <div className="rounded-xl border border-white/30 bg-white/10 backdrop-blur-md p-6 text-left h-full shadow-glass hover:bg-white/20 hover:border-white/50 transition-all duration-300 group">
            <p className="text-lg font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors">Transparent support</p>
            <p className="text-white/80 text-sm">Clear guidance and responsive assistance during every step of your trip.</p>
          </div>
          
          <div className="rounded-xl border border-white/30 bg-white/10 backdrop-blur-md p-6 text-left h-full shadow-glass hover:bg-white/20 hover:border-white/50 transition-all duration-300 group">
            <p className="text-lg font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors">Trusted expertise</p>
            <p className="text-white/80 text-sm">Experienced travel coordination for visas, bookings, and on-the-ground logistics.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
