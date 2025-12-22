import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    title: "MECHANICAL",
    desc: "We handle all car and commercial repairs including engines, turbo replacement as well as being clutch specialist.",
    img: "/auto.jpg",
    path: "/services/mechanical",
  },
  {
    title: "WINDOW TINT",
    desc: "We offer professional window tinting for a sleek look and enhanced comfort",
    img: "/tinit.jpg",
    path: "/services/window-tint",
  },
  {
    title: "WHEEL ALIGNMENT",
    desc: "We provide wheel alignment with the added benefit of improved vehicle performance and tire longevity",
    img: "/tyre.jpg",
    path: "/services/wheel-alignment",
  },
  {
    title: "MOT",
    desc: "Quick and reliable MOT tests to keep your vehicle roadworthy and compliant!",
    img: "/mot.jpg",
    path: "/services/mot",
  },
  {
    title: "SERVICE",
    desc: "Comprehensive car servicing to ensure your vehicle runs smoothly and efficiently!",
    img: "/service.jpg",
    path: "/services/service",
  },
  {
    title: "BELTS/CHAINS",
    desc: "Experts in timing chains, timing belts, and one of the few wet timing chain specialists",
    img: "/timing.jpg",
    path: "/services/belts-chains",
  },
  {
    title: "DIAGNOSTICS",
    desc: "We offer the latest dealer-level diagnostics",
    img: "/daignostic.jpg",
    path: "/services/diagnostics",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen text-black dark:text-white bg-white dark:bg-black transition-colors">
      {/* Services Title */}
      <section className="text-center py-8 sm:py-12 md:py-16 px-4 bg-white dark:bg-black text-black dark:text-white transition-colors">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          OUR SERVICES
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 sm:mt-6 md:mt-10 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
          From minor fixes to major repairs, we've got you covered.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg sm:rounded-xl bg-neutral-900 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6 z-10">
                <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-white group-hover:text-[#028BFA] transition-colors duration-300 drop-shadow-lg">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 dark:text-gray-300 mb-4 sm:mb-5 md:mb-6 line-clamp-2 sm:line-clamp-3">
                  {service.desc}
                </p>
                
                {/* Explore Button */}
                <Link to={service.path} className="inline-block">
                  <button className="relative bg-[#1a1a1a]/80 backdrop-blur-sm text-white cursor-pointer font-semibold px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full inline-flex items-center gap-2 sm:gap-3 transition-all duration-300 group/btn overflow-hidden border border-white/10 hover:border-[#028BFA]/50 hover:bg-[#1a1a1a] hover:scale-105 active:scale-95">
                    <span className="text-[#028BFA] font-bold text-base sm:text-lg leading-none transition-transform duration-300 group-hover/btn:rotate-75 group-active/btn:rotate-90  inline-block">
                      /
                    </span>
                    <span className="tracking-wider text-xs sm:text-sm group-hover/btn:text-[#028BFA] group-active/btn:text-[#028BFA] transition-colors duration-300">
                      EXPLORE
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;