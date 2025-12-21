import React from 'react'
import BodyServiceHeader from '../../components/ExtraServices/BodyService/BodyServiceHeader'
import BodyServiceServices from '../../components/ExtraServices/BodyService/BodyServiceServices'
import GallerySlider from '../../components/GallerySlider'
import BeltHeader from '../../components/ExtraServices/BodyService/BeltHeader'


const BodyService = () => {
  return (
    <div>
      <BeltHeader />
      <BodyServiceServices />
      <GallerySlider />
    </div>
  )
}

export default BodyService
