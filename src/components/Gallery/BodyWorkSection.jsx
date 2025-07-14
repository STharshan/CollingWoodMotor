import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BodyWorkSection = () => {
  return (
    <section className="bg-white py-20 px-4 text-center relative">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-3">COMING SOON</h2>
      <p className="text-gray-500 text-lg mb-8">
        Keep your eyes peeled for the big announcement
      </p>

      {/* Scrolling Banner */}
      <div className="overflow-hidden">
        <div className="flex w-max animate-slide-left gap-4 px-2">
          {Array(10)
            .fill('/comesoon.webp') // 👈 your image path
            .map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="Coming Soon"
                className="w-[500px] h-auto object-contain flex-shrink-0"
              />
            ))}
        </div>
      </div>
      {/* Contact Button */}
      <button className="mt-6 text-blue-600 bg-black cursor-pointer font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition group">
        <span className="transition-transform duration-300 group-hover:-translate-x-2">CONTACT US</span>
        <FaArrowRight className="text-blue-600 transition-transform duration-300 group-hover:translate-x-2" />
      </button>
    </section>
  );
};

export default BodyWorkSection;
