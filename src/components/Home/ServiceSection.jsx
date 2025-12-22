"use client";
import React, { useRef, useEffect } from "react";
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa";
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
      
      {/* ⭐ REVIEW SECTION */}
      <div className="w-full flex justify-center mb-8 px-4">
        <div
          className="
            inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3
            px-4 sm:px-5 py-2
            rounded-full
            border border-gray-300 dark:border-gray-700
            bg-white/80 dark:bg-black/60
            backdrop-blur-md
            shadow-sm
            transition-colors
          "
          data-aos="fade-up"
        >
          <div className="flex text-yellow-400 space-x-1 leading-none">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={14} />
            ))}
          </div>

          <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-none">
            4.7/5 from
          </span>

          <span
            className="
              px-2 py-0.5
              rounded-full
              text-xs sm:text-sm
              border border-gray-300 dark:border-gray-600
              text-gray-800 dark:text-gray-200
              bg-gray-100 dark:bg-black
              leading-none
            "
          >
            91 Reviews
          </span>
        </div>
      </div>

      {/* TITLE */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          From minor fixes to major repairs,
          <br /> we've got you covered.
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative max-w-7xl mx-auto" data-aos="fade-up">
        {/* Side Blur */}
        <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
        <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />

        {/* LEFT ARROW */}
        <button
          onClick={() => scroll("left")}
          className="
            absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20
            bg-black/60 dark:bg-white/20 hover:bg-[#028BFA]
            text-white p-3 rounded-full backdrop-blur-md
            transition shadow-lg
          "
        >
          <FaArrowLeft />
        </button>

        {/* CARDS */}
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
              <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all h-full">
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

                  <Link to={service.path} className="group inline-block">
                    <span
                      className="
                        relative bg-[#1a1a1a] dark:bg-black text-white
                        font-semibold px-8 py-3 rounded-full inline-flex items-center gap-3
                        border border-white/10 hover:border-[#028BFA]/60
                        transition overflow-hidden
                      "
                    >
                      <span
                        className="
                          text-[#028BFA] font-bold text-lg leading-none
                          transition-transform duration-300
                          group-hover:rotate-75
                        "
                      >
                        /
                      </span>
                      <span className="tracking-wider text-sm group-hover:text-[#028BFA]">
                        EXPLORE
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scroll("right")}
          className="
            absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20
            bg-black/60 dark:bg-white/20 hover:bg-[#028BFA]
            text-white p-3 rounded-full backdrop-blur-md
            transition shadow-lg
          "
        >
          <FaArrowRight />
        </button>
      </div>

      {/* SCROLLBAR HIDE */}
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
