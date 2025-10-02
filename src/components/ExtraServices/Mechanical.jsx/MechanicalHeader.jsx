import React from 'react';
import { FaStar } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';

const MechanicalHeader = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('/gray.avif')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl mt-50">
        {/* Rating Badge */}
        <div className="mb-6 inline-flex items-center gap-3 border border-gray-700 rounded-full px-5 py-2 text-sm font-medium">
          <div className="flex text-yellow-400 space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={14} />
            ))}
          </div>
          <span className="text-white">4.7/5 from</span>
          <span className="border border-gray-700 rounded-full px-2 py-1">84+ Reviews</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold mb-10">MECHANICAL</h2>

        {/* Subtext */}
        <p className="text-gray-300 text-base md:text-lg font-semibold">
          No matter the issue, our master 
        </p>
        <p className='text-gray-300 text-base md:text-lg mb-8 font-semibold'>technicians are ready to tackle it</p>

        {/* Info Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 font-semibold px-4 py-2 rounded-md">
            <BsArrowRightShort size={20} className="bg-blue-600 text-black" />
            Reliable & High-Quality
          </div>
          <div className="flex items-center gap-2 font-semibold px-4 py-2 rounded-md">
            <BsArrowRightShort size={20} className="bg-blue-600 text-black " />
            Master Technician
          </div>
        </div>
      </div>
    </section>
  );
};

export default MechanicalHeader;
