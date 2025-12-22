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
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const gap = 24;
    let cardsToScroll = 1;

    if (window.innerWidth >= 1024) cardsToScroll = 3;
    else if (window.innerWidth >= 768) cardsToScroll = 2;

    const cardWidth = container.firstChild?.offsetWidth || 0;
    const scrollAmount = (cardWidth + gap) * cardsToScroll;

    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full bg-white dark:bg-black pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors">
      {/* Header */}
      <div
        className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 gap-4"
        data-aos="fade-up"
      >
        <div className="flex items-center gap-3">
          <span className="text-yellow-400 text-2xl sm:text-3xl">★ ★ ★ ★ ★</span>
          <span className="text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base">
            4.7/5 from 91 Reviews
          </span>
        </div>
      </div>

      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
          From minor fixes to major repairs, we've got you covered.
        </p>
      </div>

      {/* Scrollable Cards */}
      <div className="relative max-w-7xl mx-auto" data-aos="fade-up">
        {/* Side Blur – hidden on mobile */}
        <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
        <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 
            bg-black/60 dark:bg-white/20 hover:bg-[#028BFA] 
            text-white p-2 sm:p-3 rounded-full backdrop-blur-md 
            transition-all duration-300 shadow-lg"
          aria-label="Scroll left"
        >
          <FaArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2 sm:px-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              style={{ scrollSnapAlign: "start" }}
            >
              <Link
                to={service.path}
                className="block bg-white dark:bg-gray-900 rounded-2xl overflow-hidden 
                shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl sm:text-2xl">
                    {service.title}
                  </h3>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4 line-clamp-3">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-[#028BFA] font-semibold text-sm gap-2 hover:gap-3 transition-all">
                    <span>EXPLORE</span>
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 
            bg-black/60 dark:bg-white/20 hover:bg-[#028BFA] 
            text-white p-2 sm:p-3 rounded-full backdrop-blur-md 
            transition-all duration-300 shadow-lg"
          aria-label="Scroll right"
        >
          <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
