import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const TermsConditions = () => {
  const [expandedSection, setExpandedSection] = useState(0)

  const sections = [
    {
      title: 'Acceptance of Terms',
      content:
        'By accessing and using KSA TRAVALS services, you agree to comply with these Terms and Conditions.',
    },

    {
      title: 'Website Usage',
      content:
        'Users must use this website lawfully and responsibly without attempting to disrupt services or misuse information.',
    },

    {
      title: 'Service Information Accuracy',
      content:
        'We strive to provide accurate travel information, but travel requirements, prices, and availability may change without notice.',
    },

    {
      title: 'Customer Responsibilities',
      content:
        'Customers are responsible for providing accurate information and maintaining valid travel documents including passports and visas.',
    },

    {
      title: 'Third-Party Links',
      content:
        'Our website may contain links to third-party services such as airlines or hotels. We are not responsible for their content or services.',
    },

    {
      title: 'Limitation of Liability',
      content:
        'KSA TRAVALS is not liable for travel delays, cancellations, third-party service issues, or unforeseen travel disruptions.',
    },

    {
      title: 'Intellectual Property',
      content:
        'All website content including logos, text, images, and branding belongs to KSA TRAVALS and may not be copied without permission.',
    },

    {
      title: 'Cancellation & Refunds',
      content:
        'Refund and cancellation policies depend on the service provider and booking conditions. Processing may take 7–14 business days.',
    },

    {
      title: 'Governing Law',
      content:
        'These Terms and Conditions are governed by applicable local and international travel regulations.',
    },

    {
      title: 'Dispute Resolution',
      content:
        'In case of disputes, both parties agree to attempt resolution through communication before legal action.',
    },

    {
      title: 'Severability',
      content:
        'If any provision of these Terms is found invalid, the remaining provisions will remain fully effective.',
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
      <div className="absolute top-10 left-0 w-72 h-72 bg-primary-main/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-5 text-primary-dark">
            Terms & <span className="text-primary-main">Conditions</span>
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
            These Terms & Conditions form a binding agreement between users and
            KSA TRAVALS. Please read them carefully before using our services.
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div
          className="bg-white/70 backdrop-blur-xl border border-primary-light/30 rounded-3xl p-8 mb-10 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-5 text-primary-main">
            Overview
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            KSA TRAVALS provides travel consultation and informational services
            for customers worldwide.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed">
            By using this website, you agree to follow all applicable laws,
            regulations, and policies stated in these Terms & Conditions.
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

        {/* Accordion */}
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
            Questions About Our Terms?
          </h3>

          <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            If you have any questions regarding these Terms & Conditions,
            feel free to contact our support team anytime.
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

export default TermsConditions