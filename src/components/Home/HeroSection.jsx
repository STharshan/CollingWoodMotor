"use client";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative w-full h-[140vh] text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 min-h-screen">
        {/* Title Image */}
        <a
          href="https://preferredmechanic.co.uk/engine-repair-rebuild-services/leicester-eng/"
          target="_blank"
        >
          <img
            data-aos="fade-down"
            src="/tittle.png"
            alt="title"
            className="mb-5 max-w-xs sm:max-w-sm md:max-w-md mt-20"
          />
        </a>

        {/* Logo Title */}
        <h1
          data-aos="fade-up"
          className="text-5xl md:text-6xl font-bold tracking-widest mb-4 mt-20"
        >
          WELCOME TO
        </h1>

        <p data-aos="fade-up" className="text-4xl font-bold leading-tight tracking-wide mb-2">
          COLLINGWOOD
        </p>

        <p data-aos="fade-up" className="text-3xl md:text-3xl uppercase font-extrabold tracking-widest text-[#028BFA] mb-4">
          MOTORS
        </p>

        <p data-aos="fade-up" className="text-xl sm:text-xl text-gray-200 max-w-75 mb-6">
          Dealer level service at a fraction of the cost
        </p>

        {/* CTA Button */}
        <a
          data-aos="zoom-in"
          href="https://wa.me/447564693973" // 👈 replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#1a1a1a] text-[#028BFA] mt-10 cursor-pointer font-semibold px-8 py-3 rounded-full inline-flex items-center gap-3 transition group overflow-hidden hover:bg-[#028BFA]/10"
        >
          <span className="text-[#028BFA] font-bold text-lg leading-none transition-transform duration-300 group-hover:rotate-75 inline-block">
            /
          </span>
          <span className="tracking-wider text-sm transition-colors duration-300">
            GET A QUOTE
          </span>
        </a>

        {/* Badge Row */}
        <div data-aos="fade-up" className="flex justify-center gap-8 mt-10 text-white text-[15px] font-semibold ">
          {/* Fast Service */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#028BFA] flex items-center justify-center rounded-sm">
              <FaArrowRight className="text-black text-sm" />
            </div>
            <span>Fast Service</span>
          </div>

          {/* Quality Care */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#028BFA] flex items-center justify-center rounded-sm">
              <FaArrowRight className="text-black text-sm" />
            </div>
            <span>Quality Care</span>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div data-aos="fade-up" className="absolute left-0 w-full z-20 mt-10 border-t border-gray-500">
        <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between px-6 py-3 text-white text-sm font-semibold">
          {/* Rating Section */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-full order-1 sm:order-2 mb-3 sm:mb-0 bg-black/50">
            <div className="flex text-yellow-400 text-lg">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <span className="text-white text-sm font-medium">4.7/5 from</span>
            <span className="border border-white/50 px-3 py-1 rounded-full text-white text-xs font-medium">
              84+ Reviews
            </span>
          </div>

          {/* TRC Logo */}
          <div className="flex items-center order-2 sm:order-1">
            <img
              src="trc.png"
              alt="TRC Logo"
              className="w-42 h-20 object-contain md:w-40 md:h-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
