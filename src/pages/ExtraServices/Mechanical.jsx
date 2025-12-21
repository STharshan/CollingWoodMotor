import React from 'react'
import GallerySlider from '../../components/GallerySlider'
import DiagnosticsHeader from '../../components/ExtraServices/Mechanical/DiagnosticsHeader'
import DiagnosticsService from '../../components/ExtraServices/Mechanical/DiagnosticsServices'


const Mechanical = () => {
  return (
    <div>
      <DiagnosticsHeader />
      <DiagnosticsService />
      <GallerySlider />
    </div>
  )
}

export default Mechanical
