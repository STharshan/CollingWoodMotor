import React, { useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  // ...same as your array
  {
    title: "MECHANICAL",
    desc: "We handle all car and commercial repairs including engines, turbo replacement as well as being clutch specialist.",
    image: "/carpaint.avif",
    path: "/services/mechanical",
  },
  {
    title: "SERVICE",
    desc: "Comprehensive car servicing to ensure your vehicle runs smoothly and efficiently!",
    image: "/gray.avif",
    path: "/services/service",
  },
  {
    title: "MOT",
    desc: "Quick and reliable MOT tests to keep your vehicle roadworthy and compliant!",
    image: "/carmechanic.avif",
    path: "/services/mot",
  },
  {
    title: "WHEEL ALIGNMENT",
    desc: "We provide wheel alignment with the added benifit of improved vehicle perfomance and tire longvity",
    image: "/paint.webp",
    path: "/services/wheel-alignment",
  },
  {
    title: "WINDOW TINT",
    desc: "We offer proffessional window tinting for a sleek look and enhanced comfort",
    image: "/bule.avif",
    path: "/services/window-tint",
  },
  {
    title: "BELTS/CHAINS",
    desc: "Experts in timing chains, timing belts and one of the few wet timing chain specialist",
    image: "/shine.webp",
    path: "/services/belts-chains",
  },
  {
    title: "DIAGNOSTICS",
    desc: "We offer the laest dealer-level diagnostics",
    image: "/homepaint.avif",
    path: "/services/diagnostics",
  },
];

const ServiceSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase">
          Our Services
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-8">
          From minor fixes to major repairs, we’ve got you covered.
        </p>

        <div className="relative overflow-hidden">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20
              bg-white/80 dark:bg-black/80 hover:bg-blue-600 dark:hover:bg-blue-500
              cursor-pointer text-black dark:text-white p-2 rounded-full shadow-md
              transition-colors duration-300"
            aria-label="Scroll Left"
          >
            <FaArrowLeft />
          </button>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20
              bg-white/80 dark:bg-black/80 hover:bg-blue-600 dark:hover:bg-blue-500
              cursor-pointer text-black dark:text-white p-2 rounded-full shadow-md
              transition-colors duration-300"
            aria-label="Scroll Right"
          >
            <FaArrowRight />
          </button>

          {/* Scrollable Service Cards */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth px-10 scrollbar-hide"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="relative min-w-[300px] md:min-w-[400px] h-[420px] rounded shadow-md overflow-hidden group flex-shrink-0 bg-white dark:bg-neutral-900 transition-colors duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/80 dark:bg-black/70 hover:bg-black/60 dark:hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 p-5 z-10 text-white">
                  <h3 className="text-lg font-bold text-blue-400 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-200 dark:text-gray-300 mb-4">{service.desc}</p>
                  <Link to={service.path}>
                    <button className="mt-auto px-4 py-2 text-xs border border-gray-300 dark:border-gray-500 rounded-full font-semibold cursor-pointer bg-white/20 dark:bg-black/30 hover:bg-blue-600 dark:hover:bg-blue-500 text-blue-600 dark:text-blue-400 hover:text-white transition-all duration-300">
                      <FaArrowRight className="inline mr-2" />
                      EXPLORE
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
