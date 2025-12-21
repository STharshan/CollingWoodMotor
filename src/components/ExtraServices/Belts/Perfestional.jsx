import React from "react";
import { FaBolt, FaFilter, FaTachometerAlt, FaCheckCircle } from "react-icons/fa";

export default function PerfestionalCards() {
  return (
    <section className="py-16 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-7">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--aircon-heading)]">
            Professional Timing System Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[var(--aircon-muted)]">
            Expert repairs to protect your engine and ensure long-term reliability
          </p>
        </div>

        {/* Cards */}
        <div className=" dark:text-white text-black text-center">
            At Collingwood Motors, we specialise in accurate timing system repairs and replacements. Whether your vehicle uses a timing belt or timing chain, our skilled technicians follow manufacturer specifications and use premium components to keep your engine running smoothly and safely.
        </div>

      </div>
    </section>
  );
}
