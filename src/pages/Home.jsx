import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import AboutSection from '../components/Home/AboutSection'
import ServiceSection from '../components/Home/ServiceSection'
import TestimonialsSection from '../components/Home/TestimonialsSection'
import GallerySlider from '../components/GallerySlider'
import PrecisionRepairs from '../components/Home/PrecisionRepairs'
import ScrollingTestimonials from '../components/Home/ScrollTest'
import WhyChooseUs from '../components/About/WhyChooseUs'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TestimonialsSection />
      <ScrollingTestimonials />
      <ServiceSection />
      <AboutSection/>
      <WhyChooseUs />
      <GallerySlider />
    </div>
  )
}

export default Home
