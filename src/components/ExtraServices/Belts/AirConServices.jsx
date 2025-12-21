'use client'

export default function ProfessionalCleaningProcess() {
  return (
    <section className="py-16 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side – Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[var(--aircon-heading)]">
              Professional Repair Process
            </h2>
            <p className="text-lg mb-8 text-[var(--aircon-muted)]">
              Our precise repair process ensures safe and reliable results
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-[var(--aircon-primary)] text-black dark:text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="font-semibold text-[var(--aircon-heading)]">
                    Diagnostic Assessment
                  </p>
                  <p className="text-sm text-[var(--aircon-muted)]">
                    Comprehensive inspection to identify wear and service requirements
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-[var(--aircon-primary)] text-black dark:text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <p className="font-semibold text-[var(--aircon-heading)]">
                    Precision Repair
                  </p>
                  <p className="text-sm text-[var(--aircon-muted)]">
                    Timing system serviced or replaced using manufacturer-approved methods
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-[var(--aircon-primary)] text-black dark:text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <p className="font-semibold text-[var(--aircon-heading)]">
                    Final Testing
                  </p>
                  <p className="text-sm text-[var(--aircon-muted)]">
                    Engine timing verified and performance tested before handover
                  </p>
                </div>
              </div>

              {/* Pro Tip */}
              <div className="mt-6 rounded-lg border border-[var(--aircon-border)] bg-[var(--aircon-soft)] p-4">
                <p className="font-semibold text-[var(--aircon-heading)] mb-1">
                  CM Pro Tip
                </p>
                <p className="text-sm text-[var(--aircon-muted)]">
                  While timing chains typically last longer than belts, they still wear over time.
                  Regular oil changes and maintaining correct oil levels help extend chain life
                  and prevent expensive repairs.
                </p>
              </div>
            </div>

          </div>

          {/* Right Side – Recommendations Table */}
          <div className="rounded-lg shadow-md p-8 border transition-colors duration-300 bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]">
            <h3 className="text-2xl font-bold mb-4 text-[var(--aircon-heading)]">
              Service Recommendations
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center border-b pb-2 border-[var(--aircon-card-border)]">
                <span className="text-[var(--aircon-muted)]">
                  Timing Belt Replacement
                </span>
                <span className="font-semibold text-[var(--aircon-heading)]">
                  Every 60,000–100,000 miles
                </span>
              </div>

              <div className="flex justify-between items-center gap-8 border-b pb-2 border-[var(--aircon-card-border)]">
                <span className="text-[var(--aircon-muted)]">
                  Timing Chain Inspection
                </span>
                <span className="font-semibold text-[var(--aircon-heading)]">
                  As required or if warning signs appear
                </span>
              </div>

              <div className="flex justify-between gap-3 items-center">
                <span className="text-[var(--aircon-muted)]">
                  Preventive Inspection
                </span>
                <span className="font-semibold text-[var(--aircon-heading)]">
                  Annually during servicing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
