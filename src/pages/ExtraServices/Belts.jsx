import React from 'react'
import GallerySlider from '../../components/GallerySlider'
import BeltHeader from '../../components/ExtraServices/Belts/BeltHeader'
import BeltService from '../../components/ExtraServices/Belts/BeltServices'
import PerfestionalCards from '../../components/ExtraServices/Belts/Perfestional'


const Belts = () => {
  return (
    <div>
      <BeltHeader />
      <BeltService />
      <GallerySlider />
    </div>
  )
}

export default Belts
