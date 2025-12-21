import { FaExclamationTriangle, FaCircle } from "react-icons/fa";

const SectionCard = ({ title, description, items }) => (
  <div
    className="
      flex flex-col gap-6 rounded-xl border py-6 shadow-sm 
      bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)] text-[var(--aircon-heading)]
      transition-all duration-300
      hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
      hover:ring-2 hover:ring-[#028BFA] hover:ring-offset-2
    "
  >
    <div className="px-6">
      <div className="flex items-center space-x-2 mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-sm text-[var(--aircon-muted)]">{description}</p>
    </div>
    <div className="px-6">
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-[var(--aircon-heading)]/85 dark:text-[var(--aircon-muted)]"
          >
            <FaCircle className="h-2 w-2 mt-1 mr-2 text-[var(--aircon-check-icon)]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function DiagnosticsSigns() {
  return (
    <section className="py-1 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[var(--aircon-heading)]">
            Diagnostic Services We Offer
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[var(--aircon-muted)]">
            Comprehensive diagnostics for all vehicle systems
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <SectionCard
            title="Engine Diagnostics"
            description="Identify performance issues and engine faults quickly"
            items={[
              "Engine management fault code reading",
              "Live data analysis",
              "Sensor performance testing",
              "Misfire and fuel system diagnostics",
              "Emissions-related fault checks",
              "Warning light investigation",
            ]}
          />

          <SectionCard
            title="Electrical & System Diagnostics"
            description="Advanced testing for modern vehicle electronics"
            items={[
              "ABS & traction control diagnostics",
              "Airbag & safety system checks",
              "Battery, alternator & charging system testing",
              "ECU communication checks",
              "Wiring and module fault detection",
            ]}
          />

          <SectionCard
            title="Pre-Repair & Peace-of-Mind Diagnostics"
            description="Know the issue before committing to repairs"
            items={[
              "Pre-repair fault confirmation",
              "Dashboard warning light investigation",
              "Performance and efficiency checks",
              "Pre-trip vehicle health checks",
              "Clear fault explanations & advice",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
