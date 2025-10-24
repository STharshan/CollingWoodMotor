import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    title: "MECHANICAL",
    desc: "We handle all car and commercial repairs including engines, turbo replacement as well as being clutch specialist.",
    img: "/carpaint.avif",
    path: "/services/mechanical",
  },
  {
    title: "WINDOW TINT",
    desc: "We offer professional window tinting for a sleek look and enhanced comfort",
    img: "/bule.avif",
    path: "/services/window-tint",
  },
  {
    title: "WHEEL ALIGNMENT",
    desc: "We provide wheel alignment with the added benefit of improved vehicle performance and tire longevity",
    img: "/paint.webp",
    path: "/services/wheel-alignment",
  },
  {
    title: "MOT",
    desc: "Quick and reliable MOT tests to keep your vehicle roadworthy and compliant!",
    img: "/carmechanic.avif",
    path: "/services/mot",
  },
  {
    title: "SERVICE",
    desc: "Comprehensive car servicing to ensure your vehicle runs smoothly and efficiently!",
    img: "/gray.avif",
    path: "/services/service",
  },
  {
    title: "BELTS/CHAINS",
    desc: "Experts in timing chains, timing belts, and one of the few wet timing chain specialists",
    img: "/shine.webp",
    path: "/services/belts-chains",
  },
  {
    title: "DIAGNOSTICS",
    desc: "We offer the latest dealer-level diagnostics",
    img: "/homepaint.avif",
    path: "/services/diagnostics",
  },
];

const ServicesPage = () => {
  const isOdd = services.length % 2 !== 0;
  const mainServices = isOdd ? services.slice(0, -1) : services;
  const lastService = isOdd ? services[services.length - 1] : null;

  return (
    <div className="text-black dark:text-white bg-white dark:bg-black transition-colors">
      {/* Services Title */}
      <section className="text-center py-12 px-4 bg-white dark:bg-black text-black dark:text-white transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold">OUR SERVICES</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-10 text-xl max-w-xs mx-auto">
          From minor fixes to major repairs, we’ve got you covered.
        </p>
      </section>

      {/* Main Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-6 pb-20 max-w-6xl mx-auto h-290">
        {mainServices.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded bg-neutral-900 transition-colors flex flex-col justify-between"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-80 object-cover grayscale group-hover:grayscale-0 shadow-lg transition-transform duration-300 transform hover:scale-105"
            />
            <div className="absolute bottom-6 left-4 right-4 z-10">
              <h3 className="font-semibold text-lg mb-4 text-white dark:text-blue-400 drop-shadow">
                {service.title}
              </h3>
              <p className="text-sm text-white dark:text-gray-200 mb-10">{service.desc}</p>
              <Link to={service.path}>
                 <button className="relative bg-[#1a1a1a] text-white cursor-pointer font-semibold px-8 py-3 rounded-full inline-flex items-center gap-3 transition group overflow-hidden border border-white/10 hover:border-[#028BFA]/50">
                    <span className="text-[#028BFA] font-bold text-lg leading-none transition-transform duration-300 group-hover:rotate-75 inline-block">
                      /
                    </span>
                    <span className="tracking-wider text-sm group-hover:text-[#028BFA] transition-colors duration-300">
                      EXPLORE
                    </span>
                  </button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Last Card Centered */}
      {lastService && (
        <section className="flex justify-center px-6 pb-20 max-w-6xl mx-auto h-150">
          <div className="relative group overflow-hidden rounded bg-neutral-900 transition-colors flex flex-col justify-between w-full sm:w-1/2 lg:w-1/3">
            <img
              src={lastService.img}
              alt={lastService.title}
              className="w-full h-80 object-cover grayscale group-hover:grayscale-0 shadow-lg transition-transform duration-300 transform hover:scale-105"
            />
            <div className="absolute bottom-6 left-4 right-4 z-10">
              <h3 className="font-semibold text-lg mb-4 text-white dark:text-blue-400 drop-shadow">
                {lastService.title}
              </h3>
              <p className="text-sm text-white dark:text-gray-200 mb-10">{lastService.desc}</p>
              <Link to={lastService.path}>
                <button className="flex items-center space-x-4 px-6 py-2.5 border border-gray-600 dark:border-gray-400 bg-black rounded-full cursor-pointer text-xs transition duration-200 font-semibold text-white dark:text-gray-200">
                  <span className="transition-transform duration-300 group-hover:-translate-x-2">
                    EXPLORE
                  </span>
                  <FaArrowRight className="text-[#028BFA] dark:text-blue-400 transition-transform duration-300 group-hover:translate-x-2" size={12} />
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServicesPage;
