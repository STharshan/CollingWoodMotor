import React from 'react'
import GallerySlider from '../../components/GallerySlider';
import WindowHeader from '../../components/ExtraServices/Window/WindowHeader';
import WindowService from '../../components/ExtraServices/Window/WindowServices';

const Window = () => {
    return (
        <div>
            <WindowHeader />
            <WindowService />
            <GallerySlider />
        </div>
    )
}

export default Window;
