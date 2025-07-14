import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Side */}
        <div>
          <p className="text-xs uppercase text-gray-400 tracking-widest mb-2">
            / About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 leading-snug">
            DEDICATED<br />TO PERRFECTION
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-md">
            Experience top-notch service and unmatched expertise in every repair.
          </p>

          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FaArrowRight className="bg-blue-600 text-black rounded-sm p-1 w-5 h-5" />
              Reliable Work
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FaArrowRight className="bg-blue-600 text-black rounded-sm p-1 w-5 h-5" />
              Trusted Technicians
            </div>
          </div>

          {/* Learn More Button */}
          <button className="mt-6 text-blue-600 bg-black cursor-pointer font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition group">
            <span className="transition-transform duration-300 group-hover:-translate-x-2">LEARN MORE</span>
            <FaArrowRight className="text-blue-600 transition-transform duration-300 group-hover:translate-x-2" />
          </button>

          {/* Testimonial */}
          <div className="mt-30 text-md text-gray-600">
            <p className="italic mb-2">
              "Great garage, both myself and my husband have been coming here for the past 5-6 years. Never had any issues, Simon is always transparent regarding repairs and they are done as soon as the parts are in. Our car/van are always safe for us to drive. Honestly and reliability is what matters to us and that’s why we return every year. Highly recommend 5**"
            </p>
            <p className="text-black font-medium">Heidi Goodwin</p>
            <p className="text-black font-medium">Google Reviews</p>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="relative">
          {/* Main image */}
          <div className="relative z-10 rounded-lg shadow-lg">
            <img
              src="/green.webp"
              alt="Spray Work"
              className="w-full object-cover rounded-sm"
            />

            {/* Right full border */}
            <div className="absolute top-0 right-0 h-full w-[15px] bg-gradient-to-b from-transparent to-yellow-400"></div>

            {/* Bottom fixed half-border */}
            <div className="absolute bottom-0 left-0 w-full h-[15px] bg-gradient-to-r from-transparent to-yellow-400"></div>
          </div>

          {/* Overlapping small image */}
          <img
            src="/carmechanic.avif"
            alt="Detail work"
            className="absolute bottom-5 -left-5 w-32 md:w-30 h-30 z-20"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
