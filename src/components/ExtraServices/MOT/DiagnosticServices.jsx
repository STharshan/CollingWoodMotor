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
      className="py-1 transition-colors duration-300"
      style={{ backgroundColor: "var(--aircon-section-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4 text-[#028BFA]">
           Professional MOT Testing Services
          </h2>
          <p className="text-lg font-body max-w-2xl mx-auto text-[color:var(--aircon-muted)]">
            Thorough inspections for safety, compliance, and peace of mind
          </p>
        </div>

        {/* Grid */}
        <div className="text-center ">
          Our MOT testing service is designed to be hassle-free, transparent, and efficient. We carry out comprehensive checks using DVSA-approved procedures, ensuring your vehicle is road-legal, safe, and compliant with UK regulations.
        </div>
      </div>
    </section>
  );
}
