import React from 'react'
import PaintWorkSection from '../components/Gallery/PaintWorkSection'
import BodyWorkSection from '../components/Gallery/BodyWorkSection'
import GalleryHeader from '../components/Gallery/GalleryHeader'
import GallerySlider from '../components/GallerySlider'

const Gallery = () => {
  return (
    <div>
      <GalleryHeader />
      <BodyWorkSection />
      <GallerySlider />
    </div>
  )
}

export default Gallery
