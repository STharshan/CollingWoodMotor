import React from "react";
import { FaBolt, FaFilter, FaTachometerAlt, FaCheckCircle } from "react-icons/fa";

const services = [
  {
    title: "Interim Service",
    description:
      "Essential maintenance for high-mileage or city-driven vehicles",
    duration: "6 months / 6,000 miles",
    items: [
      "Engine oil & filter change",
      "Fluid level checks & top-ups",
      "Brake inspection",
      "Tyre condition & pressure check",
      "Battery & electrical check",
      "Safety inspection",
    ],
  },
  {
    title: "Full Service",
    description:
      "Comprehensive annual vehicle servicing",
    duration: "12 months / 12,000 miles",
    items: [
      "Engine oil & filter replacement",
      "Air, cabin & fuel filter checks",
      "Brake system inspection",
      "Suspension & steering check",
      "Cooling system inspection",
      "Battery & charging system test",
      "Vehicle health report",
    ],
  },
  {
    title: "Major Service",
    description:
      "In-depth servicing for long-term reliability",
    duration: "24 months / manufacturer schedule",
    items: [
      "All full service items included",
      "Spark plug replacement (where required)",
      "Timing system inspection",
      "Transmission & drivetrain checks",
      "Comprehensive diagnostics",
      "Manufacturer service schedule followed",
    ],
  },
];


export default function EngineCleaningCards() {
  return (
    <section className="py-1 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--aircon-heading)]">
            Car Servicing Options
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[var(--aircon-muted)]">
            Tailored servicing solutions for all vehicle types
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="
                flex flex-col gap-6 rounded-xl py-6 text-center border shadow-sm
                bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]
                transition-all duration-300
                hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
                hover:ring-2 hover:ring-[#028BFA] hover:ring-offset-2
              "
            >
              <div className="px-6">
                <div className="flex items-center space-x-3 mb-2">
                
                  <h3 className="text-xl font-bold text-[var(--aircon-heading)]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-base text-left mb-2 text-[var(--aircon-muted)]">
                  {service.description}
                </p>
              </div>

              <div className="px-6">
                <ul className="space-y-2">
                  {service.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-left text-sm text-[var(--aircon-heading)]/85 dark:text-[var(--aircon-muted)]"
                    >
                      <FaCheckCircle className="mr-2 h-4 w-4 text-[var(--aircon-check-icon)]" />
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
