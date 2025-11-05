"use client";
import React, { useEffect } from "react";
import { BiSolidTorch } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    icon: <FaRegStar className="text-black text-2xl" />,
    title: 'BEST OF LEICESTER',
    description:
      'We were proudly voted Best in Leicester by Preferred Mechanic—a testament to our expertise, reliable service, and commitment to putting our customers first.',
  },
  {
    icon: <BiSolidTorch className="text-black text-2xl" />,
    title: 'Best Family Run Vehicle Repair Garage 2024 - Leicester',
    description:
      'This award reflects our dedication to expert service, honest advice, and treating every customer like family.',
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section
      className="py-20 px-4 bg-white dark:bg-black text-center transition-colors duration-300"
      role="region"
      aria-label="Why Choose Us"
    >
      {/* Heading */}
      <h2 data-aos="fade-down" className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">
        WHY CHOOSE US
      </h2>
      <p data-aos="fade-up" className="text-gray-500 dark:text-gray-300 text-sm sm:text-base mb-12 max-w-xl mx-auto">
        Discover the top reasons to <br />
        choose our expert services.
      </p>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150} // Stagger effect
            className="relative bg-white dark:bg-neutral-900 border border-gray-200 dark:border-blue-900 p-8 w-full max-w-md mx-auto rounded-xl hover:shadow-lg transition-shadow duration-300"
          >
            {/* Corner borders */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#028BFA] dark:border-[#028BFA] rounded-tr-xl"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#028BFA] dark:border-[#028BFA] rounded-bl-xl"></div>

            {/* Icon */}
            <div className="inline-block bg-linear-to-b from-white to-[#028BFA] p-3 rounded mb-6 transition-colors duration-300">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg text-black dark:text-white mb-3">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
