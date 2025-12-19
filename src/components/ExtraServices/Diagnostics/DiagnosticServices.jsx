"use client";

import {
  FaSnowflake,
  FaThermometerHalf,
  FaTools,
  FaShieldAlt,
  FaRegCheckCircle,
} from "react-icons/fa";

export default function DiagnosticServices() {

  return (
    <section
      className="py-16 transition-colors duration-300"
      style={{ backgroundColor: "var(--aircon-section-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4 text-[color:var(--aircon-heading)]">
           Professional Diagnostic Services
          </h2>
          <p className="text-lg font-body max-w-2xl mx-auto text-[color:var(--aircon-muted)]">
            Accurate fault detection for confidence, safety, and performance
          </p>
        </div>

        {/* Grid */}
        <div className="text-center ">
          Don’t guess — know exactly what’s going on under the bonnet. At Collingwood Motors, our advanced diagnostic systems give you a clear, accurate picture of your vehicle’s health, helping prevent unnecessary repairs and saving you time and money.
        </div>
      </div>
    </section>
  );
}
