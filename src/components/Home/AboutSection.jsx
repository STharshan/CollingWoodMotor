import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="bg-white dark:bg-black px-4 py-16 md:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Side */}
        <div>
          <p className="text-xs uppercase text-gray-400 dark:text-gray-500 tracking-widest mb-2">
            / About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4 leading-snug">
            DEDICATED<br />TO PERFECTION
          </h2>
          <p className="text-gray-500 dark:text-gray-300 text-sm mb-6 max-w-md">
            Experience top-notch service and unmatched expertise in every repair.
          </p>

          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-black dark:text-white">
              <FaArrowRight className="bg-blue-600 text-black dark:text-white rounded-sm p-1 w-5 h-5" />
              Reliable Work
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-black dark:text-white">
              <FaArrowRight className="bg-blue-600 text-black dark:text-white rounded-sm p-1 w-5 h-5" />
              Trusted Technicians
            </div>
          </div>

          {/* Learn More Button */}
          <a href='/about'>
            <button className="mt-6 text-blue-600 dark:text-blue-400 bg-black dark:bg-white cursor-pointer font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition group border border-blue-600 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-black">
              <span className="transition-transform duration-300 group-hover:-translate-x-2">
                LEARN MORE
              </span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </a>

          {/* Testimonial */}
          <div className="mt-10 text-md text-gray-600 dark:text-gray-400">
            <p className="italic mb-2">
              "Great garage, both myself and my husband have been coming here for the past 5-6 years. Never had any issues, Simon is always transparent regarding repairs and they are done as soon as the parts are in. Our car/van are always safe for us to drive. Honestly and reliability is what matters to us and that’s why we return every year. Highly recommend 5**"
            </p>
            <p className="text-black dark:text-white font-medium">Heidi Goodwin</p>
            <p className="text-black dark:text-white font-medium">Google Reviews</p>
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
            <div className="absolute top-0 right-0 h-full w-[15px] bg-gradient-to-b from-transparent to-blue-600"></div>

            {/* Bottom fixed half-border */}
            <div className="absolute bottom-0 left-0 w-full h-[15px] bg-gradient-to-r from-transparent to-blue-600"></div>
          </div>

          {/* Overlapping small image */}
          <img
            src="/carmechanic.avif"
            alt="Detail work"
            className="absolute bottom-5 -left-5 w-32 md:w-30 h-30 z-20 rounded shadow-lg border-4 border-white dark:border-black"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
