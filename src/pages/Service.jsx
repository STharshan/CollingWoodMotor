import React from 'react'
import ServicesHero from '../components/Service/ServicesHero'
import ServicesPage from '../components/Service/ServicesPage'
import TestimonialsSection from '../components/Home/TestimonialsSection'
import ServiceScrolling from '../components/Service/ServiceScrolling'

const Service = () => {
  return (
    <div>
      <ServicesHero/>
      <ServicesPage />
      <TestimonialsSection />
      <ServiceScrolling />
    </div>
  )
}

export default Service
