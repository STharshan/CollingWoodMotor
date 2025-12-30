"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {


  return (
    <section className="relative w-full h-screen min-h-[720px] sm:min-h-[600px] lg:h-[90vh] xl:h-[140vh] text-white overflow-hidden">
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
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-100px)] pt-8 sm:pt-12 lg:pt-0">
        {/* Title Image */}
        <a
          href="https://preferredmechanic.co.uk/engine-repair-rebuild-services/leicester-eng/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-aos="fade-down"
            src="/tittle.png"
            alt="title"
            className="mb-3 sm:mb-5 w-48 sm:w-64 md:w-72 lg:max-w-md mt-6 sm:mt-8 lg:mt-20"
          />
        </a>

        {/* Logo Title */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest mb-3 sm:mb-4 mt-8 sm:mt-12 lg:mt-20"
        >
          WELCOME TO
        </h1>

        <p
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-wide mb-1 sm:mb-2"
        >
          COLLINGWOOD
        </p>

        <p
          data-aos="fade-up"
          className="text-xl sm:text-2xl md:text-3xl uppercase font-extrabold tracking-widest text-[#028BFA] mb-3 sm:mb-4"
        >
          MOTORS
        </p>

        <p
          data-aos="fade-up"
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mb-4 sm:mb-6 px-4"
        >
          Dealer level service at a fraction of the cost
        </p>

        {/* CTA Button */}
        <a
          data-aos="zoom-in"
          href="https://wa.me/447564693973"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#1a1a1a] text-[#028BFA] mt-4 sm:mt-6 lg:mt-10 cursor-pointer font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full inline-flex items-center gap-2 sm:gap-3 transition group overflow-hidden hover:bg-[#028BFA]/10"
        >
          <span className="text-[#028BFA] font-bold text-base sm:text-lg leading-none transition-transform duration-300 group-hover:rotate-45 inline-block">
            /
          </span>
          <span className="tracking-wider text-xs sm:text-sm transition-colors duration-300">
            GET A QUOTE
          </span>
        </a>

        {/* Badge Row */}
        <div
          data-aos="fade-up"
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-10 text-white text-xs sm:text-sm md:text-[15px] font-semibold"
        >
          {/* Fast Service */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#028BFA] flex items-center justify-center rounded-sm flex-shrink-0">
              <FaArrowRight className="text-black text-xs sm:text-sm" />
            </div>
            <span>Fast Service</span>
          </div>

          {/* Quality Care */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#028BFA] flex items-center justify-center rounded-sm flex-shrink-0">
              <FaArrowRight className="text-black text-xs sm:text-sm" />
            </div>
            <span>Quality Care</span>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div
        data-aos="fade-up"
        className="absolute bottom-0 left-0 w-full z-20 "
      >
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-white text-xs sm:text-sm font-semibold gap-3 sm:gap-0">
          {/* Rating Section */}
          <a
            href="https://www.google.com/search?sca_esv=28538b201051a5f8&rlz=1C1KNTJ_enLK1089LK1089&sxsrf=AE3TifPLa8HZbM1PfaEJ7M8fvtBn-qV8jw:1766164276995&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMQpWj96m5OTtFudyl816UYflGpZP1UBOO2Qaflyy13wx1WDY38wh-Otav68_eceElxBrnkHxLJunnakDArXaaS1SYpmMGQGNzFKjL0Yb5DNR8_vlfA%3D%3D&q=Collingwood+motors+Reviews&sa=X&ved=2ahUKEwi9oeHSksqRAxV50jQHHc5EK2sQ0bkNegQIIxAE&biw=1366&bih=633&dpr=1"
            target="_blank"
          >
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full order-1 sm:order-2 bg-black/50">
              <div className="flex text-yellow-400 text-sm sm:text-base lg:text-lg">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
                4.7/5 from
              </span>
              <span className="border border-white/50 px-2 sm:px-3 py-1 rounded-full text-white text-[10px] sm:text-xs font-medium whitespace-nowrap">
                91 Reviews
              </span>
            </div>
          </a>

          {/* TRC Logo */}
          <div className="flex items-center order-2 sm:order-1">
            <img
              src="trc.png"
              alt="TRC Logo"
              className="w-32 h-16 sm:w-36 sm:h-18 md:w-40 md:h-20 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;