import React from 'react'
import GallerySlider from '../../components/GallerySlider'
import DiagnosticsHeader from '../../components/ExtraServices/MOT/DiagnosticsHeader'
import DiagnosticsService from '../../components/ExtraServices/MOT/DiagnosticsServices'

const MOT = () => {
    return (
        <div>
            <DiagnosticsHeader />
            <DiagnosticsService />
            <GallerySlider />
        </div>
    )
}

export default MOT