import React from 'react'
import DiagnosticsHeader from '../../components/ExtraServices/Window/DiagnosticsHeader';
import GallerySlider from '../../components/GallerySlider';
import DiagnosticsService from '../../components/ExtraServices/Window/DiagnosticsServices';

const Window = () => {
    return (
        <div>
            <DiagnosticsHeader />
            <DiagnosticsService />
            <GallerySlider />
        </div>
    )
}

export default Window;
