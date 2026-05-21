import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(0)

  const sections = [
    {
      title: 'Introduction',
      content:
        'KSA TRAVALS is committed to protecting your privacy and ensuring a secure browsing experience for all users.',
    },

    {
      title: 'Information Collection',
      content:
        'We collect basic customer information including name, email address, phone number, travel preferences, and inquiry details for providing travel-related services.',
    },

    {
      title: 'Customer Data Usage',
      content:
        'Your information is used only for travel consultation, booking support, customer communication, and improving our services.',
    },

    {
      title: 'Data Security',
      content:
        'We use secure systems and protected servers to safeguard your personal information and prevent unauthorized access.',
    },

    {
      title: 'Third-Party Services',
      content:
        'Some services may involve trusted third-party providers such as airlines, hotels, or payment gateways for completing travel arrangements.',
    },

    {
      title: 'Cookies Policy',
      content:
        'Our website may use cookies to improve browsing experience, website performance, and analytics tracking.',
    },

    {
      title: 'Customer Rights',
      content:
        'Customers can request access, correction, or deletion of their personal data by contacting our support team.',
    },

    {
      title: 'Policy Updates',
      content:
        'We may update this Privacy Policy occasionally to reflect legal or operational changes.',
    },

    {
      title: 'Contact Information',
      content:
        'Email: ksatravals@gmail.com\nPhone: +91 7305257594\nLocation: Chennai, India',
    },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-primary-main/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-5 text-primary-dark">
            Privacy <span className="text-primary-main">Policy</span>
          </h1>

          <p className="text-slate-500 text-lg">
            Last updated: May 21, 2026
          </p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          className="bg-white/70 backdrop-blur-xl border border-primary-light/30 rounded-3xl p-8 mb-10 shadow-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-2xl font-bold text-primary-main mb-4">
            Important Notice
          </h3>

          <p className="text-slate-600 text-lg leading-relaxed">
            KSA TRAVALS never sells customer personal information to third parties.
            Your privacy and data protection are our highest priorities.
          </p>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          className="bg-white/70 backdrop-blur-xl border border-primary-light/30 rounded-3xl p-8 mb-10 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-primary-main">
            Table of Contents
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setExpandedSection(index)}
                className="flex items-center gap-3 text-slate-600 hover:text-primary-main transition-all text-left text-lg font-medium"
              >
                <ChevronRight
                  size={18}
                  className={
                    expandedSection === index
                      ? 'text-primary-main'
                      : 'text-slate-400'
                  }
                />

                {section.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Accordion Sections */}
        <div className="space-y-5">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-xl border border-primary-light/20 rounded-3xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={() =>
                  setExpandedSection(
                    expandedSection === index ? -1 : index
                  )
                }
                className="w-full p-7 flex items-center justify-between hover:bg-primary-main/5 transition-all"
              >
                <h3 className="text-2xl font-bold text-primary-dark text-left">
                  {section.title}
                </h3>

                <motion.div
                  animate={{
                    rotate: expandedSection === index ? 90 : 0,
                  }}
                >
                  <ChevronRight
                    className="text-primary-main"
                    size={24}
                  />
                </motion.div>
              </button>

              {expandedSection === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="px-7 pb-7 border-t border-primary-light/20"
                >
                  <p className="text-slate-600 leading-relaxed whitespace-pre-wrap text-lg pt-5">
                    {section.content}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="bg-white/70 backdrop-blur-xl border border-primary-light/20 rounded-3xl p-10 mt-14 text-center shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-4xl font-bold mb-5 text-primary-dark">
            Questions About Our Privacy Policy?
          </h3>

          <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            If you have any concerns or questions about how we handle your data,
            please feel free to contact our support team anytime.
          </p>

          <motion.a
            href="mailto:ksatravals@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-primary-main to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-blue-300/50 transition-all duration-300"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy