"use client";
import React, { useRef, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "MECHANICAL",
    desc:
      "We handle all car and commercial repairs including engines, turbo replacement as well as being clutch specialist.",
    img: "/auto.jpg",
    path: "/services/mechanical",
  },
  {
    title: "WINDOW TINT",
    desc:
      "We offer professional window tinting for a sleek look and enhanced comfort",
    img: "/tinit.jpg",
    path: "/services/window-tint",
  },
  {
    title: "WHEEL ALIGNMENT",
    desc:
      "We provide wheel alignment with the added benefit of improved vehicle performance and tire longevity",
    img: "/tyre.jpg",
    path: "/services/wheel-alignment",
  },
  {
    title: "MOT",
    desc:
      "Quick and reliable MOT tests to keep your vehicle roadworthy and compliant!",
    img: "/mot.jpg",
    path: "/services/mot",
  },
  {
    title: "SERVICE",
    desc:
      "Comprehensive car servicing to ensure your vehicle runs smoothly and efficiently!",
    img: "/service.jpg",
    path: "/services/service",
  },
  {
    title: "BELTS/CHAINS",
    desc:
      "Experts in timing chains, timing belts, and one of the few wet timing chain specialists",
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
    <section className="relative w-full bg-white dark:bg-black pt-10 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors">
      {/* Rating */}
      <div
        className="flex justify-center sm:justify-start items-center mb-8 gap-3"
        data-aos="fade-up"
      >
        <span className="text-yellow-400 text-2xl">★ ★ ★ ★ ★</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          4.7/5 from 91 Reviews
        </span>
      </div>

      {/* Title */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          From minor fixes to major repairs, we've got you covered.
        </p>
      </div>

      {/* Slider */}
      <div className="relative max-w-7xl mx-auto" data-aos="fade-up">
        {/* Side blur (hidden on mobile) */}
        <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
        <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20
          bg-black/60 dark:bg-white/20 hover:bg-[#028BFA]
          text-white p-3 rounded-full backdrop-blur-md transition shadow-lg"
        >
          <FaArrowLeft />
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
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                    {service.title}
                  </h3>
                </div>

                <div className="p-6 flex flex-col justify-between h-[220px]">
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  {/* SLASH STYLE BUTTON */}
                  <Link
                    to={service.path}
                    className="group inline-block"
                  >
                    <span
                      className="relative bg-[#1a1a1a] dark:bg-black text-white
    font-semibold px-8 py-3 rounded-full inline-flex items-center gap-3
    border border-white/10 hover:border-[#028BFA]/60
    transition overflow-hidden"
                    >
                      {/* Slash */}
                      <span
                        className="text-[#028BFA] font-bold text-lg leading-none
      inline-block transition-transform duration-300
      group-hover:rotate-75 group-active:rotate-75"
                      >
                        /
                      </span>

                      {/* Text */}
                      <span
                        className="tracking-wider text-sm
                            transition-colors duration-300
                              group-hover:text-[#028BFA] group-active:text-[#028BFA]"
                      >
                        EXPLORE
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20
          bg-black/60 dark:bg-white/20 hover:bg-[#028BFA]
          text-white p-3 rounded-full backdrop-blur-md transition shadow-lg"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
