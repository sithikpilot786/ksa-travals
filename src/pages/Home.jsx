import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import LeadershipSection from '../components/LeadershipSection'
import ServicesSection from '../components/ServicesSection'
import DestinationsSection from '../components/DestinationsSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <LeadershipSection />
      <ServicesSection />
      <DestinationsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}

export default Home
