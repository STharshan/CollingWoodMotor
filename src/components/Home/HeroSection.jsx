import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen text-white mb-20">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video.mp4" // 🔁 Your actual video path
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-60 z-10"></div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 min-h-screen">
        {/* Title Image */}
        <img
          src="/tittle.png"
          alt="title"
          className="mb-5 max-w-xs sm:max-w-sm md:max-w-md mt-20"
        />

        {/* Logo Title */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest mb-4">
          WELCOME TO
        </h1>

        {/* EST */}
        <p className="text-4xl font-bold leading-tight tracking-wide mb-4">
          COLLINGWOOD
        </p>

        {/* Services */}
        <p className="text-3xl md:text-3xl uppercase font-extrabold tracking-widest text-blue-400 mb-4">
          MOTORS
        </p>

        {/* Sub Text */}
        <p className="text-xl sm:text-xl text-gray-200 max-w-xs sm:max-w-md mb-6">
          Dealer level service at a fraction of the cost
        </p>

        {/* CTA Button */}
        <button className="bg-gray-900 text-blue-600 cursor-pointer font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition group mb-8">
          <span className="transition-transform duration-300 group-hover:-translate-x-2">
            GET A QUOTE
          </span>
          <FaArrowRight className="text-blue-600 transition-transform duration-300 group-hover:translate-x-2" />
        </button>

        {/* Badge Row */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-2 font-semibold px-3 py-1 rounded">
            <FaArrowRight className="text-blue-600 w-5 h-5" /> Fast Service
          </div>
          <div className="flex items-center gap-2 font-semibold px-3 py-1 rounded">
            <FaArrowRight className="text-blue-600 w-5 h-5" /> Quality Care
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute left-0 w-full z-20 border-t border-gray-700">
        <div className="mx-auto bg-black bg-opacity-70 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between px-6 py-3 text-white text-sm font-semibold shadow-lg">
          {/* Rating Section */}
          <div className="flex items-center gap-3 bg-black border border-gray-600 px-4 py-2 rounded-full order-1 sm:order-2 mb-3 sm:mb-0">
            {/* Stars */}
            <div className="flex text-yellow-400 text-lg">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            {/* Rating Text */}
            <span className="text-white text-sm font-medium">4.7/5 from</span>
            {/* Reviews Badge */}
            <span className="bg-gray-800 border border-gray-600 px-3 py-1 rounded-full text-white text-xs font-medium">
              84+ Reviews
            </span>
          </div>

          {/* TRC Logo */}
          <div className="flex items-center order-2 sm:order-1">
            <img
              src="trc.png"
              alt="TRC Logo"
              className="w-42 h-20 object-contain md:w-40 md:h-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
