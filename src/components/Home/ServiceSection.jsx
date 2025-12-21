"use client";
import React, { useRef, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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

export default function ServiceSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth + 24; // card + gap
      scrollRef.current.scrollBy({
        left: dir === "left" ? -cardWidth * 3 : cardWidth * 3,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="py-20 px-4 bg-black text-white relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-5">
        <div className="mx-auto backdrop-blur-sm flex flex-col sm:flex-row items-center justify-center px-6 py-3 text-white text-sm font-semibold">
          <div className="flex items-center gap-3 dark:bg-black border border-gray-600 px-4 py-2 rounded-full order-1 sm:order-2 mb-3 sm:mb-0">
            <div className="flex text-yellow-400 text-lg">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <span className="text-sm font-medium text-white">4.7/5 from</span>
            <span className="bg-secondary border text-white border-gray-600 px-3 py-1 rounded-full text-xs font-medium">
              91 Reviews
            </span>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="max-w-7xl mb-20 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary mb-2 uppercase">
          Our Services
        </h2>
        <p className="text-lg dark:text-white mb-8">
          From minor fixes to major repairs, <br /> we’ve got you covered.
        </p>
      </div>

      {/* Scrollable Cards */}
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4">
        {/* Left Shadow */}
        <div className="absolute left-0 top-0 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
        {/* Right Shadow */}
        <div className="absolute right-0 top-0 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-[#028BFA]/80 text-white p-3 rounded-full backdrop-blur-md transition-all duration-300"
        >
          <FaArrowLeft />
        </button>

        {/* Cards Wrapper */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-6 snap-x snap-mandatory relative z-0 pl-6 sm:pl-8 md:pl-10"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="relative snap-start w-[300px] sm:w-[340px] md:w-[400px]  h-[520px] md:h-[570px] flex-shrink-0 border border-white/10 rounded-sm bg-neutral-900 overflow-hidden group flex flex-col"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-72 md:h-80 object-cover grayscale group-hover:grayscale-0 shadow-lg transition-transform duration-300 transform hover:scale-105"
              />
              <div className="flex flex-col flex-1 justify-between p-4 relative">
                <h3 className="font-semibold text-lg mb-2 text-white dark:text-blue-400 drop-shadow">
                  {service.title}
                </h3>
                <p className="text-sm text-white dark:text-gray-200 flex-1">
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
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-[#028BFA] text-white p-3 rounded-full backdrop-blur-md transition-all duration-300"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
