"use client";

import {
  FaCar,
  FaWrench,
  FaTools,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

export default function AutomotiveSign() {
  const services = [
  {
    title: "Full Car Service",
    desc: "Comprehensive vehicle inspection and maintenance service",
    icon: <FaCar className="h-5 w-5 text-[color:var(--auto-icon)]" />,
    points: [
      "Engine oil & filter change",
      "Brake system inspection",
      "Suspension and steering check",
      "Battery & electrical system test",
      "Fluid level checks & top-ups",
      "Tyre condition & pressure assessment",
      "Vehicle safety inspection",
    ],
  },
  {
    title: "MOT Testing",
    desc: "Official MOT testing by qualified MOT testers (Class 4 & Class 7)",
    icon: <FaWrench className="h-5 w-5 text-[color:var(--auto-icon)]" />,
    points: [
      "DVSA-approved MOT testers",
      "Same-day testing available",
      "Detailed failure reports",
      "Clear repair estimates",
      "Free re-test included",
      "Digital MOT certificate issued",
    ],
  },
  {
    title: "Brake Service",
    desc: "Professional brake system maintenance and repair",
    icon: <FaTools className="h-5 w-5 text-[color:var(--auto-icon)]" />,
    points: [
      "Brake pad replacement",
      "Brake disc inspection & replacement",
      "Brake fluid change",
      "Handbrake adjustment",
      "Brake pipe inspection",
      "Brake performance testing",
    ],
  },
  {
    title: "Exhaust Systems",
    desc: "Complete exhaust system servicing and replacement",
    icon: <FaClock className="h-5 w-5 text-[color:var(--auto-icon)]" />,
    points: [
      "Full exhaust inspection",
      "Silencer replacement",
      "Catalytic converter repair & replacement",
      "Emissions testing",
      "Custom exhaust fabrication",
      "Performance exhaust systems",
    ],
  },
];


  return (
    <section
      className="py-16 transition-colors duration-300"
      style={{ backgroundColor: "var(--auto-section-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4 text-[color:var(--auto-heading)]">
            What Services We Offer
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 rounded-xl py-6 px-6 shadow-sm border transition-all duration-300 
                         hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)] hover:ring-2 hover:ring-[#028BFA] hover:ring-offset-2"
              style={{
                backgroundColor: "var(--auto-card-bg)",
                borderColor: "var(--auto-card-border)",
              }}
            >
              <div className="grid auto-rows-min items-start gap-1.5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "var(--auto-icon-bg)" }}
                    >
                      {s.icon}
                    </div>
                    <div className="text-xl font-heading font-bold text-[color:var(--auto-heading)]">
                      {s.title}
                    </div>
                  </div>
                </div>
                <div className="text-[color:var(--auto-muted)] font-body text-base">
                  {s.desc}
                </div>
              </div>

              <div>
                <ul className="space-y-2">
                  {s.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex items-center text-sm font-body text-[color:var(--auto-muted)]"
                    >
                      <FaCheckCircle
                        className="h-4 w-4 mr-2 flex-shrink-0 text-[color:var(--auto-check-icon)]"
                      />
                      {p}
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
