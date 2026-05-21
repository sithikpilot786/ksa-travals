import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      timeoutRef.current = null
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: 'chennai',
      value: 'Tamil nadu, India',
      link: '#contact',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7305257594',
      link: 'tel:+917305257594',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Ksa.travals@gmail.com',
      link: 'mailto:iKsa.travals@gmail.com',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Contact us for support',
      link: '#contact',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-24 px-4 relative bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-main/5 rounded-full blur-3xl"></div>

        {/* Section Title */}
        <motion.div
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary-dark tracking-tight">
            Get In <span className="text-primary-main">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-main to-accent-main mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions? We're here to help you plan your perfect travel experience
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12 relative z-10 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8 text-primary-dark">Contact Information</h3>

            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="block rounded-lg border border-primary-light/40 bg-white/70 backdrop-blur-lg p-5 hover:bg-white/80 hover:border-primary-light/60 hover:shadow-lg transition-all group cursor-pointer shadow-glass"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-light to-blue-100 flex items-center justify-center group-hover:shadow-md transition-all flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-main" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-slate-500 mb-1 font-medium">{info.label}</p>
                      <p className="text-base font-semibold text-primary-dark group-hover:text-primary-main transition-colors break-words">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              )
            })}

            {/* Office Location Info */}
            <motion.div
              variants={itemVariants}
              className="rounded-lg border border-primary-light/40 bg-white/70 backdrop-blur-lg p-8 mt-8 shadow-glass hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold mb-3 text-primary-dark">Office Location</h3>
              <p className="text-slate-600">
                Our office location is available on request. Please use the contact form to request current address details and appointment information.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg border border-primary-light/40 bg-white/70 backdrop-blur-lg p-8 shadow-glass hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-8 text-primary-dark">Send Us a Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Send className="w-8 h-8 text-primary-main" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-primary-dark">Message Sent!</h4>
                  <p className="text-slate-600">
                    Thank you for your inquiry. We'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold mb-2 text-primary-dark uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-primary-dark placeholder-slate-400 focus:outline-none focus:border-primary-main focus:ring-1 focus:ring-primary-main/20 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold mb-2 text-primary-dark uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-primary-dark placeholder-slate-400 focus:outline-none focus:border-primary-main focus:ring-1 focus:ring-primary-main/20 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold mb-2 text-primary-dark uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-primary-dark placeholder-slate-400 focus:outline-none focus:border-primary-main focus:ring-1 focus:ring-primary-main/20 transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-bold mb-2 text-primary-dark uppercase tracking-wide">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this about?"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-primary-dark placeholder-slate-400 focus:outline-none focus:border-primary-main focus:ring-1 focus:ring-primary-main/20 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold mb-2 text-primary-dark uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message"
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-primary-dark placeholder-slate-400 focus:outline-none focus:border-primary-main focus:ring-1 focus:ring-primary-main/20 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full gradient-btn flex items-center justify-center gap-2 mt-6 text-white font-semibold"
                  >
                    <Send size={20} />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
