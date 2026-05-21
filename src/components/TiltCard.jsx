import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const TiltCard = ({ children, className = '', depth = 40 }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Map normalized mouse position (-0.5 to 0.5) to tilt rotation (-15 to 15 degrees)
  const rotateX = useTransform(y, [-0.5, 0.5], [12, -12])
  const rotateY = useTransform(x, [-0.5, 0.5], [-12, 12])

  // Map mouse positions to shadow translation and shine effects if wanted
  const shadowX = useTransform(x, [-0.5, 0.5], [-10, 10])
  const shadowY = useTransform(y, [-0.5, 0.5], [-10, 10])

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    // Normalized mouse position coordinates from -0.5 to 0.5
    const mouseX = (event.clientX - rect.left) / width - 0.5
    const mouseY = (event.clientY - rect.top) / height - 0.5
    
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`relative transition-all duration-200 ease-out ${className}`}
      whileHover={{
        scale: 1.02,
        z: 10,
      }}
    >
      {/* 3D Depth Child Container */}
      <div 
        style={{ 
          transform: `translateZ(${depth}px)`, 
          transformStyle: 'preserve-3d' 
        }}
        className="h-full w-full"
      >
        {children}
      </div>
    </motion.div>
  )
}

export default TiltCard
