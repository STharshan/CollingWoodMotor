// src/components/EngineBenefits.jsx
import {
  FaChartLine,
  FaShieldAlt,
  FaFilter,
  FaTachometerAlt,
} from "react-icons/fa";

export default function DiagnosticBenefits() {
  return (
    <section className="py-16 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#028BFA]">
           Benefits of Window Tinting
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[var(--aircon-muted)]">
           Professional tinting delivers immediate and long-term benefits
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Box 1 */}
          <div
            className="
              flex flex-col gap-4 rounded-xl border py-6 shadow-sm text-center 
              bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]
              transition-all duration-300
              hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
              hover:ring-2 hover:ring-[#028BFA] hover:ring-offset-2
               active:ring-2  active:ring-[#028BFA]  active:ring-offset-2
            "
          >
            <div className="mx-auto w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--aircon-icon-bg)]">
              <FaChartLine className="w-6 h-6 text-[#028BFA]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--aircon-heading)]">
              Enhanced Comfort
            </h3>
            <p className="text-sm px-6 text-[var(--aircon-muted)]">
              Keeps your vehicle cooler by reducing heat and glare
            </p>
          </div>

          {/* Box 2 */}
          <div
            className="
              flex flex-col gap-4 rounded-xl border py-6 shadow-sm text-center 
              bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]
              transition-all duration-300
              hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
              hover:ring-2 hover:ring-[#028BFA] hover:ring-offset-2
            "
          >
            <div className="mx-auto w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--aircon-icon-bg)]">
              <FaShieldAlt className="w-6 h-6 text-[#028BFA]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--aircon-heading)]">
              Interior Protection
            </h3>
            <p className="text-sm px-6 text-[var(--aircon-muted)]">
             Blocks harmful UV rays that cause fading and damage
            </p>
          </div>

          {/* Box 3 */}
          <div
            className="
              flex flex-col gap-4 rounded-xl border py-6 shadow-sm text-center 
              bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]
              transition-all duration-300
              hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
              hover:ring-2 hover:ring-[#028BFA] hover:ring-offset-2
            "
          >
            <div className="mx-auto w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--aircon-icon-bg)]">
              <FaFilter className="w-6 h-6 text-[#028BFA]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--aircon-heading)]">
              Improved <br /> Privacy
            </h3>
            <p className="text-sm px-6 text-[var(--aircon-muted)]">
              Limits visibility into your vehicle for added security
            </p>
          </div>

          {/* Box 4 */}
          <div
            className="
              flex flex-col gap-4 rounded-xl border py-6 shadow-sm text-center 
              bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]
              transition-all duration-300
              hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
              hover:ring-2 hover:ring-[#028BFA] hover:ring-offset-2
            "
          >
            <div className="mx-auto w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--aircon-icon-bg)]">
              <FaTachometerAlt className="w-6 h-6 text-[#028BFA]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--aircon-heading)]">
              Stylish Appearance
            </h3>
            <p className="text-sm px-6 text-[var(--aircon-muted)]">
              Gives your car a sleek, modern, and premium look
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
