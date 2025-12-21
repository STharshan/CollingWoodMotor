'use client'

export default function ProfessionalDiagnosticsProcess() {
  return (
    <section className="py-1 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side – Technician Expertise */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#028BFA]">
              Qualified &amp; Experienced Technicians
            </h2>

            <p className="text-lg mb-8 text-[var(--aircon-muted)]">
              Our master technicians bring decades of experience to every job. Using
              the latest diagnostic equipment and proven repair methods, we ensure
              every vehicle receives professional, manufacturer-approved care.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--aircon-primary)]" />
                <p className="text-[var(--aircon-muted)]">
                  City &amp; Guilds qualified motor technicians
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--aircon-primary)]" />
                <p className="text-[var(--aircon-muted)]">
                  DVSA approved MOT testers
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--aircon-primary)]" />
                <p className="text-[var(--aircon-muted)]">
                  Master technicians with hands-on expertise
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--aircon-primary)]" />
                <p className="text-[var(--aircon-muted)]">
                  Commitment to high-quality, reliable repairs
                </p>
              </div>
            </div>
          </div>

          {/* Right Side – Service Intervals */}
          <div className="rounded-lg shadow-md p-8 border transition-colors duration-300 bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]">
            <h3 className="text-2xl font-bold mb-6 text-[#028BFA]">
              Service Intervals
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center border-b pb-2 border-[var(--aircon-card-border)]">
                <span className="text-[var(--aircon-muted)]">Basic Service</span>
                <span className="font-semibold text-[var(--aircon-heading)]">
                  Every 6 months
                </span>
              </div>

              <div className="flex justify-between items-center border-b pb-2 border-[var(--aircon-card-border)]">
                <span className="text-[var(--aircon-muted)]">Full Service</span>
                <span className="font-semibold text-[var(--aircon-heading)]">
                  Every 12 months
                </span>
              </div>

              <div className="flex justify-between items-center border-b gap-30 pb-2 border-[var(--aircon-card-border)]">
                <span className="text-[var(--aircon-muted)]">MOT Test</span>
                <span className="font-semibold text-[var(--aircon-heading)]">
                  Annually (vehicles over 3 years old)
                </span>
              </div>
              <div className="flex justify-between gap-15 items-center">
                <span className="text-[var(--aircon-muted)]">
                  Cambelt Replacement
                </span>
                <span className="font-semibold text-[var(--aircon-heading)]">
                  Every 60,000 – 100,000 miles
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
