import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const FloatingWhatsApp = () => {
  const contactLink = 'https://wa.me/917305257594?text=Hello%20KSA%20TRAVALS%2C%20I%20need%20travel%20assistance'

  return (
    <motion.a
      href={contactLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 flex items-center gap-3 group"
    >
      {/* Text Label */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="bg-white border border-slate-200 shadow-lg px-4 py-3 rounded-lg text-slate-800 font-semibold hidden md:block"
      >
        Chat with us
      </motion.div>

      {/* Button */}
      <div className="relative">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-green-400 rounded-full opacity-20"
        ></motion.div>
        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
          <MessageCircle size={32} className="text-white" />
        </div>
      </div>
    </motion.a>
  )
}

export default FloatingWhatsApp
