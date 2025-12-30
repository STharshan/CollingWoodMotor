import React from "react";

export default function PerfestionalCards() {
  return (
    <section className="py-16 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-7">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#028BFA]">
            Professional Car Servicing Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[var(--aircon-muted)]">
            Reliable maintenance for performance, safety, and peace of mind
          </p>
        </div>

        {/* Cards */}
        <div className=" text-black dark:text-white text-center">
            At Collingwood Motors, we go beyond basic checks. Our experienced technicians deliver thorough, manufacturer-recommended servicing using high-quality parts and advanced equipment—ensuring your vehicle remains safe, efficient, and dependable.
        </div>
      </div>
    </section>
  );
}
