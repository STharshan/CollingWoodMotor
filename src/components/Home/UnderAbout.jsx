"use client";

import React, { useEffect, useState } from "react";

export default function WhatWeOffer() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

    const services = [
        {
            video: "/ford.mp4",
            title: "Certified Ford Specialist",
            description:
                "Manufacturer-trained expertise for all Ford models",
        },
        {
            video: "/master.mp4",
            title: "Master Technician",
            description:
                "Advanced diagnostics and repairs carried out to the highest standards",
        },
        {
            video: "/trust.mp4",
            title: "Trusted, Award-Winning Garage",
            description:
                "Proudly named Best Family-Run Repair Garage 2024 and Best of Leicester by Preferred Mechanic",
        },
    ];

    useEffect(() => {
        if (!hovered) {
            const timer = setInterval(() => {
                setActiveIndex((p) => (p + 1) % services.length);
            }, 4000);
            return () => clearInterval(timer);
        }
    }, [hovered]);

    const getCardStyle = (index) => {
        const total = services.length;
        const offset = (index - activeIndex + total) % total;

        switch (offset) {
            case 0:
                return "scale-100 opacity-100 z-30";
            case 1:
                return "translate-x-[50%] sm:translate-x-[60%] md:translate-x-[70%] scale-90 sm:scale-95 opacity-50 sm:opacity-70 z-20";
            case total - 1:
                return "translate-x-[-50%] sm:translate-x-[-60%] md:translate-x-[-70%] scale-90 sm:scale-95 opacity-50 sm:opacity-70 z-20";
            default:
                return "opacity-0 scale-90 z-0";
        }
    };

    return (
        <section className="relative py-12 px-4 sm:px-6 md:px-12 overflow-visible bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto text-center font-serif relative z-10">
                <span
                    data-aos="fade-down"
                    className={`inline-block text-sm font-medium px-4 py-1 rounded-full mb-4 dark:text-white text-black`}
                >
                    What We Offer
                </span>

                <h2
                    data-aos="fade-down"
                    className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 dark:text-white text-[#111111]
                        }`}
                >
                    At Collingwood Motors, You’re in Expert Hands
                </h2>

                <p
                    data-aos="fade-up"
                    data-aos-delay="150"
                    className={`text-lg max-w-2xl mx-auto mb-14 font-[Inter] transition-colors duration-500 dark:text-[#E9ECEC] text-[#333333]
                        }`}
                >
                    From routine servicing to specialist diagnostics, every vehicle is cared for with precision, experience, and trust.
                </p>

                {/* CARD SLIDER */}
                <div
                    className="relative flex items-center justify-center h-[450px] sm:h-[480px] md:h-[520px] overflow-visible"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className={`absolute top-0 left-0 right-0 mx-auto w-[85%] xs:w-[80%] sm:w-[70%] md:w-[60%] lg:w-[420px] 
                            transition-all duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] transform ${getCardStyle(i)}`}
                        >
                            <div className="rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 h-[380px] sm:h-[400px] md:h-[420px] flex flex-col 
                                border border-[#028BFA]/70 bg-white dark:bg-zinc-900 shadow-[#028BFA] shadow-xs
                                dark:shadow-[#028BFA] dark:border-[#028BFA]"
                            >
                                {/* VIDEO */}
                                <div className="relative h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden">
                                    <video
                                        src={s.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover opacity-90 dark:opacity-80"
                                    />
                                </div>

                                {/* CARD CONTENT */}
                                <div className="p-4 sm:p-5 md:p-6 text-left flex flex-col justify-between flex-grow font-[Inter]">
                                    <div>
                                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-black dark:text-white">
                                            {s.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm leading-relaxed text-[#333] dark:text-gray-300">
                                            {s.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* LEFT BUTTON */}
                    <button
                        onClick={() =>
                            setActiveIndex((prev) => (prev - 1 + services.length) % services.length)
                        }
                        aria-label="Previous slide"
                        className="absolute left-2 sm:left-4 md:left-6 mt-100 w-8 h-8 sm:w-10 sm:h-10 
                        rounded-full shadow-md text-base sm:text-lg font-bold transition-all duration-300 
                        hover:scale-110 active:scale-95 
                        bg-white text-black dark:bg-zinc-800 dark:text-white bg-opacity-80 hover:bg-opacity-100"
                    >
                        ‹
                    </button>

                    {/* RIGHT BUTTON */}
                    <button
                        onClick={() => setActiveIndex((prev) => (prev + 1) % services.length)}
                        aria-label="Next slide"
                        className="absolute right-2 sm:right-4 md:right-6 mt-100 w-8 h-8 sm:w-10 sm:h-10 
                        rounded-full shadow-md text-base sm:text-lg font-bold transition-all duration-300 
                        hover:scale-110 active:scale-95 
                        bg-white text-black dark:bg-zinc-800 dark:text-white bg-opacity-80 hover:bg-opacity-100"
                    >
                        ›
                    </button>
                </div>

                {/* DOT INDICATORS */}
                <div className="flex justify-center gap-2 mt-4">
                    {services.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 
                            ${i === activeIndex
                                    ? "bg-[#028BFA] dark:bg-[#028BFA] w-6 sm:w-8"
                                    : "bg-[#028BFA] dark:bg-[#028BFA]"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
