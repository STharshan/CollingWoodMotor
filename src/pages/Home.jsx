import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import AboutSection from '../components/Home/AboutSection'
import ServiceSection from '../components/Home/ServiceSection/ServiceSection'
import TestimonialsSection from '../components/Home/TestimonialsSection'
import GallerySlider from '../components/GallerySlider'
import PrecisionRepairs from '../components/Home/PrecisionRepairs'
import ScrollingTestimonials from '../components/Home/Testimonial/ScrollTest'
import WhyChooseUs from '../components/About/WhyChooseUs'
import WhatWeOffer from '../components/Home/UnderAbout'
import FindUs from '../components/Findus'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TestimonialsSection />
      <ScrollingTestimonials />
      <WhatWeOffer />
      <ServiceSection />
      <AboutSection/>
      <WhyChooseUs />
      <GallerySlider />
      <FindUs />
    </div>
  )
}

export default Home
