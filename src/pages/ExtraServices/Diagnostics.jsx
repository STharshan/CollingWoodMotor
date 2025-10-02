import React from 'react'
import DiagnosticsHeader from '../../components/ExtraServices/Diagnostics/DiagnosticsHeader'
import DiagnosticsService from '../../components/ExtraServices/Diagnostics/DiagnosticsServices'
import GallerySlider from '../../components/GallerySlider'


const Diagnostics = () => {
  return (
    <div>
      <DiagnosticsHeader />
      <DiagnosticsService />
      <GallerySlider />
    </div>
  )
}

export default Diagnostics
