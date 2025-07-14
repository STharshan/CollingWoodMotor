import React from 'react'
import Header from '../components/About/Header'
import OurStorySection from '../components/About/OurStorySection'
import ProvenResultsSection from '../components/ProvenResultsSection'
import GallerySlider from '../components/GallerySlider'


const About = () => {
  return (
    <div>
      <Header />
      <OurStorySection/>
      <ProvenResultsSection/>
      <GallerySlider />
    </div>
  )
}

export default About
