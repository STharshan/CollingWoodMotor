"use client";
import React, { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
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
    desc: "We provide wheel alignment with the added benefit of improved vehicle performance and tire longevity.",
    image: "/paint.webp",
    path: "/services/wheel-alignment",
  },
  {
    title: "WINDOW TINT",
    desc: "We offer professional window tinting for a sleek look and enhanced comfort.",
    image: "/bule.avif",
    path: "/services/window-tint",
  },
  {
    title: "BELTS/CHAINS",
    desc: "Experts in timing chains, timing belts and one of the few wet timing chain specialists.",
    image: "/shine.webp",
    path: "/services/belts-chains",
  },
  {
    title: "DIAGNOSTICS",
    desc: "We offer the latest dealer-level diagnostics.",
    image: "/homepaint.avif",
    path: "/services/diagnostics",
  },
];

export default function ServiceSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth + 24;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -cardWidth * 3 : cardWidth * 3,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 px-4 bg-black text-white relative overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-5">
        <div className="mx-auto backdrop-blur-sm flex flex-col sm:flex-row items-center justify-center px-6 py-3 text-white text-sm font-semibold">
          {/* Rating Section */}
          <div className="flex items-center gap-3 dark:bg-black border border-gray-600 px-4 py-2 rounded-full order-1 sm:order-2 mb-3 sm:mb-0">
            {/* Stars */}
            <div className="flex text-yellow-400 text-lg">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            {/* Rating Text */}
            <span className=" text-sm font-medium text-black dark:text-white">5/5 from</span>
            {/* Reviews Badge */}
            <span className="bg-secondary border text-black dark:text-white border-gray-600 px-3 py-1 rounded-full text-xs font-medium">
              84+ Reviews
            </span>
          </div>

          {/* TRC Logo */}
          {/* <div className="flex items-center order-2 sm:order-1">
            <img
              src="trc.png"
              alt="TRC Logo"
              className="w-42 h-20 object-contain md:w-40 md:h-20"
            />
          </div> */}
        </div>
      </div>
      <div className="max-w-7xl mb-20 mx-auto relative">
        {/* Section Title */}
        <h2
          className="text-center text-3xl md:text-4xl font-bold text-primary dark:text-primary mb-2 uppercase"
          data-aos="fade-down"
        >
          Our <span className="dark:text-white text-gray-700">Services</span>
        </h2>
        <p
          className="text-center text-lg dark:text-white mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          From minor fixes to major repairs, <br /> we’ve got you covered.
        </p>
      </div>

      {/* Wrapper */}
      <div className="relative max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-[#028BFA]/80 text-white p-3 rounded-full backdrop-blur-md transition-all duration-300"
        >
          <FaArrowLeft />
        </button>

        {/* Scroll Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-6 px-16 snap-x snap-mandatory"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="relative snap-start min-w-[360px] md:min-w-[400px] h-[430px] flex-shrink-0 border border-white/10 rounded-sm bg-neutral-900 overflow-hidden group"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover object-center brightness-[1.1] contrast-[1.05] transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 group-hover:via-black/30 group-hover:to-black/60 transition-all duration-700"></div>

              {/* Content */}
              <div className="absolute bottom-8 left-6 right-6 z-10">
                <h3 className="text-lg font-bold mb-2 tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  {service.desc}
                </p>
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
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-[#028BFA] text-white p-3 rounded-full backdrop-blur-md transition-all duration-300"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
