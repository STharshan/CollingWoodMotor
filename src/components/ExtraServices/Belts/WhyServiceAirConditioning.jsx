import React from "react";
import { FaBolt, FaFilter, FaTachometerAlt, FaCheckCircle } from "react-icons/fa";

const services = [
  {
    title: "Timing Belt Replacement",
    description:
      "Essential maintenance to prevent catastrophic engine failure",
    duration: "3-5 hours",
    items: [
      "Timing belt replacement",
      "Tensioner & pulley replacement",
      "Water pump replacement ",
      "Manufacturer-specified intervals",
      "Engine timing reset & calibration",
      "Full system inspection",
    ],
  },
  {
    title: "Timing Chain Service",
    description:
      "Professional timing chain inspection and repair",
    duration: "Inspection based",
    items: [
      "Timing chain inspection",
      "Chain tensioner assessment",
      "Guide rail inspection",
      "Oil system checks",
      "Noise and wear diagnostics",
      "Timing system calibration",
    ],
  },
];


export default function EngineCleaningCards() {
  return (
    <section className="py-1 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#028BFA]">
            Timing Belt & Chain Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[var(--aircon-muted)]">
            Specialist solutions for critical engine components
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="
                flex flex-col gap-6 rounded-xl py-6 text-center border shadow-sm
                bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]
                transition-all duration-300
                hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
                hover:ring-2 hover:ring-[#028BFA] hover:ring-offset-2
                active:ring-2 active:ring-[#028BFA] active:ring-offset-2
              "
            >
              <div className="px-6">
                <div className="flex items-center space-x-3 mb-2">
                
                  <h3 className="text-xl font-bold text-[var(--aircon-heading)]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-base mb-2 text-[var(--aircon-muted)]">
                  {service.description}
                </p>
              </div>

              <div className="px-6">
                <ul className="space-y-2">
                  {service.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-[var(--aircon-heading)]/85 dark:text-[var(--aircon-muted)]"
                    >
                      <FaCheckCircle className="mr-2 h-4 w-4 text-[#028BFA]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
