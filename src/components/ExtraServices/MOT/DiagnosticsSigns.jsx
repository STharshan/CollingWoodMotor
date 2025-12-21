import { FaExclamationTriangle, FaCircle } from "react-icons/fa";

const SectionCard = ({ title, description, items }) => (
  <div
    className="
      flex flex-col gap-6 rounded-xl border py-6 shadow-sm 
      bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)] text-[var(--aircon-heading)]
      transition-all duration-300
      hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
      hover:ring-2 hover:ring-[#028BFA] hover:ring-offset-2 active:ring-[#028BFA] active:ring-offset-2
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
            <FaCircle className="h-2 w-2 mt-1 mr-2  text-[#028BFA]" />
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
          <h2 className="text-4xl font-bold mb-4 mt-8 text-[#028BFA]">
            MOT Services We Offer
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Section 1 – MOT Test Overview */}
          <SectionCard
            title="MOT (Ministry of Transport) Test"
            description="Official MOT testing by qualified technicians"
            items={[
              "DVSA-approved MOT testers",
              "Comprehensive safety & emissions inspection",
              "Class 4 & Class 7 vehicles",
              "Same-day testing available",
              "Digital MOT certificate issued",
              "Clear pass or fail outcome",
            ]}
          />

          {/* Section 2 – MOT Inspection Areas */}
          <SectionCard
            title="MOT Inspection Areas"
            description="Key components checked during your MOT"
            items={[
              "Brakes & braking efficiency",
              "Tyres, wheels & suspension",
              "Lights, indicators & electrical systems",
              "Steering & alignment",
              "Exhaust & emissions",
              "Seatbelts & safety systems",
              "Windscreen, wipers & washers",
            ]}
          />

          {/* Section 3 – CM Pro Tip */}
          <SectionCard
            title="CM Pro Tip"
            description="Improve your chances of passing your MOT"
            items={[
              "Ensure all lights are working",
              "Check tyre tread depth and pressure",
              "Make sure brakes feel responsive",
              "Top up washer fluid and check wipers",
              "Arrive with sufficient fuel",
            ]}
          />
        </div>

      </div>
    </section>
  );
}
