import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const GallerySlider = () => {
  return (
    <section
      className="relative text-white opacity-120 h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/carmechanic.avif')" }} // Replace with your image path
    >
      {/* Overlay */}


      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <img
          src="/tittle.png" // Replace with your award logo
          alt="Best of Leicester 2024"
          className="mx-auto mb-6 w-32 sm:w-40"
        />
        <p className="text-sm sm:text-lg max-w-xs mx-auto mb-6">
          Quick and easy booking for all your car repair needs.
        </p>
        <button className="mt-6 bg-[#028BFA] text-black cursor-pointer font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition group">
          <span className="transition-transform duration-300 group-hover:-translate-x-2">CONTACT US</span>
          <FaArrowRight className="text-black transition-transform duration-300 group-hover:translate-x-2" />
        </button>
      </div>
    </section>
  );
};

export default GallerySlider;