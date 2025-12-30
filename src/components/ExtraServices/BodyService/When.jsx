import { FaCircle } from "react-icons/fa";

const SectionCard = ({ title, description, items }) => (
    <div
        className="
      flex flex-col gap-6 rounded-xl border py-6 shadow-sm 
      bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)] text-[var(--aircon-heading)]
      transition-all duration-300
      hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)]
      hover:ring-2 hover:ring-[#028BFA] hover:ring-offset-2
      active:ring-2 active:ring-[#028BFA] active:ring-offset-2
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
                        <FaCircle className="h-2 w-2 mt-1 mr-2 text-[#028BFA]" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default function EngineCleaningSigns() {
    return (
        <section className="py-16 bg-[var(--aircon-section-bg)] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-[#028BFA]">
                        When Does Your Car Need Servicing?
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto text-[var(--aircon-muted)]">
                        Recognise the signs that your vehicle needs professional attention
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <SectionCard
                        title="Performance Warning Signs"
                        description="Indicators your car may be overdue a service"
                        items={[
                            "Reduced engine performance",
                            "Poor fuel economy",
                            "Unusual noises or vibrations",
                            "Warning lights on dashboard",
                            "Rough idling or hesitation",
                        ]}
                    />

                    <SectionCard
                        title="Preventive Maintenance Indicators"
                        description="Why proactive servicing matters"
                        items={[
                            "Manufacturer service interval reached",
                            "High mileage usage",
                            "Seasonal checks (winter/summer)",
                            "Preparing for long journeys",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
