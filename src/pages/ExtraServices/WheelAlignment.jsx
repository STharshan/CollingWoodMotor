import React from 'react'
import GallerySlider from '../../components/GallerySlider'
import DiagnosticsHeader from '../../components/ExtraServices/WheelAlignment/DiagnosticsHeader'
import DiagnosticsService from '../../components/ExtraServices/WheelAlignment/DiagnosticsServices'

const WheelAlignement = () => {
    return (
        <div>
            <DiagnosticsHeader />
            <DiagnosticsService />
            <GallerySlider />
        </div>
    )
}

export default WheelAlignement
