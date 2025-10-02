import React from 'react';
import { FaStar } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';

const ServiceHero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-180 flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('/car.avif')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl mt-40">
        {/* Rating Badge */}
        <div className="mb-6 inline-flex items-center gap-3 bg-black border-gray-900 border-1 bg-opacity-80 rounded-full px-5 py-3 text-sm font-medium">
          <div className="flex text-yellow-400 space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={14} />
            ))}
          </div>
          <span className="text-white">4.7/5 from</span>
          <span className="bg-black border-1 border-gray-900 rounded-full px-2 py-1">84+ Reviews</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-7xl font-semibold mb-10">SERVICES</h2>

        {/* Subtext */}
        <p className="text-gray-300 text-base md:text-xl mb-8 font-semibold max-w-xs">
          Find out more about the wide range of services we offer
        </p>

        {/* Info Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 font-semibold px-4 py-2 rounded-md">
            <BsArrowRightShort size={20} className="bg-blue-600 text-black rounded" />
            Full Range
          </div>
          <div className="flex items-center gap-2 font-semibold px-4 py-2 rounded-md">
            <BsArrowRightShort size={20} className="bg-blue-600 text-black rounded" />
            Skilled Team
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
