import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="bg-white dark:bg-black px-4 py-16 md:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Side */}
        <div>
          <p className="text-xs uppercase text-gray-400 dark:text-gray-500 tracking-widest mb-2">
            <span className='text-[#028BFA]'>/</span> About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4 leading-snug">
            DEDICATED<br />TO PERFECTION
          </h2>
          <p className="text-gray-500 dark:text-gray-300 text-sm mb-6 max-w-md">
            Experience top-notch service and unmatched expertise in every repair.
          </p>

          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-black dark:text-white">
              <FaArrowRight className="bg-[#028BFA] text-black   p-1 w-5 h-5" />
              Reliable Work
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-black dark:text-white">
              <FaArrowRight className="bg-[#028BFA] text-black  p-1 w-5 h-5" />
              Trusted Technicians
            </div>
          </div>

          {/* Learn More Button */}
          <a href='/about'>
            <button className="mt-6 relative bg-[#1a1a1a] text-white cursor-pointer font-semibold px-8 py-3 rounded-full inline-flex items-center gap-3 transition group overflow-hidden border border-white/10 hover:border-[#028BFA]/50">
              <span className="text-[#028BFA] font-bold text-lg leading-none transition-transform duration-300 group-hover:rotate-75 inline-block">
                /
              </span>
              <span className="tracking-wider text-sm text-[#028BFA] transition-colors duration-300">
                LEARN MORE
              </span>
            </button>
          </a>

          {/* Testimonial */}
          <div className="mt-10 text-md text-gray-600 dark:text-gray-400">
            <p className="mb-2 max-w-md">
              "Great garage, both myself and my husband have been coming here for the past 5-6 years. Never had any issues, Simon is always transparent regarding repairs and they are done as soon as the parts are in. Our car/van are always safe for us to drive. Honestly and reliability is what matters to us and that’s why we return every year. Highly recommend 5**"
            </p>
            <p className="text-black dark:text-white font-medium mt-10">Heidi Goodwin</p>
            <p className="text-black dark:text-gray-500 font-medium">Google Reviews</p>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="relative">
          {/* Main image */}
          <div className="relative z-10 rounded-lg shadow-lg overflow-hidden">
            <img
              src="/green.webp"
              alt="Spray Work"
              className="w-full object-cover rounded-sm"
            />

            {/* Right full border */}
            <div className="absolute top-0 right-0 h-full w-[15px] bg-gradient-to-b from-transparent to-[#028BFA]"></div>

            {/* Bottom fixed half-border */}
            <div className="absolute bottom-0 left-0 w-full h-[15px] bg-gradient-to-r from-transparent to-[#028BFA]"></div>
          </div>

          {/* Overlapping small image */}
          <img
            src="/carmechanic.avif"
            alt="Detail work"
            className="absolute bottom-5 -left-5 w-32 md:w-30 h-30 z-20 rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
