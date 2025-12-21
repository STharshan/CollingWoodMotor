"use client";
import React from "react";

export default function TyreServices() {
 const services = [
  {
    title: "Tyre Fitting",
    desc: "Expert tyre installation with precise mounting and secure sealing for reliable performance.",
  },
  {
    title: "Tyre Pressure Check",
    desc: "Complimentary tyre pressure inspection and adjustment to ensure safety and optimal handling.",
  },
  {
    title: "Wheel Balancing",
    desc: "Accurate wheel balancing to eliminate vibrations and provide a smooth, comfortable ride.",
  },
  {
    title: "Tyre Condition Check",
    desc: "Comprehensive tyre inspection to identify wear patterns, damage, and potential safety risks.",
  },
];


  return (
    <section className="py-16 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title + Subhead */}
        <div className="text-center mb-12">
          <h2
            className="font-heading font-bold tracking-tight mb-3 text-4xl md:text-5xl text-[#028BFA]"
          >
            Professional Tyre Services
          </h2>
          <p
            className="text-base md:text-lg font-body max-w-3xl mx-auto text-[var(--aircon-muted)]"
          >
            Expert tyre fitting, balancing, and maintenance services for all
            vehicle types
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="
                flex flex-col justify-between rounded-2xl border px-6 py-8 shadow-sm
                bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]
                transition-all duration-300
                hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
                hover:ring-2 hover:ring-[#028BFA] hover:ring-offset-2
                active:ring-2 active:ring-[#028BFA] active:ring-offset-2
              "
            >
              <div>
                <h3 className="text-2xl font-heading font-bold mb-3 text-center text-[var(--aircon-heading)]">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-6 text-center text-[var(--aircon-heading)]/90 dark:text-[var(--aircon-muted)]">
                  {s.desc}
                </p>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
