
export default function ProfessionalDiagnosticsProcess() {
  return (
    <section className="py-1 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side – Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#028BFA]">
              Professional Diagnostic Process
            </h2>
            <p className="text-lg mb-8 text-[var(--aircon-muted)]">
              Our structured approach ensures accurate and reliable results
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-[var(--aircon-primary)] text-black dark:text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="font-semibold text-[var(--aircon-heading)]">
                    Diagnostic Scan
                  </p>
                  <p className="text-sm text-[var(--aircon-muted)]">
                    Advanced diagnostic tools read fault codes and live vehicle data
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
                    Expert Analysis
                  </p>
                  <p className="text-sm text-[var(--aircon-muted)]">
                    Technicians interpret results to identify root causes
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
                    Clear Report & Advice
                  </p>
                  <p className="text-sm text-[var(--aircon-muted)]">
                    Detailed explanation with repair recommendations provided
                  </p>
                </div>
              </div>

              {/* Pro Tip */}
              <div className="mt-6 rounded-lg border border-[var(--aircon-border)] bg-[var(--aircon-soft)] p-4">
                <p className="font-semibold text-[#028BFA] mb-1">
                  CM Pro Tip
                </p>
                <p className="text-sm text-[var(--aircon-muted)]">
                  Even without a warning light, minor issues like sensor faults or efficiency
                  losses may still be present. Regular diagnostic checks help catch problems
                  early and protect long-term performance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side – Recommendations Table */}
          <div className="rounded-lg shadow-md p-8 border transition-colors duration-300 bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]">
            <h3 className="text-2xl font-bold mb-4 text-[#028BFA]">Service Recommendations</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center border-b pb-2 gap-13 border-[var(--aircon-card-border)]">
                <span className="text-[var(--aircon-muted)]">Diagnostic Check</span>
                <span className="font-semibold text-[var(--aircon-heading)]">As required or when warning lights appear</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2 border-[var(--aircon-card-border)]">
                <span className="text-[var(--aircon-muted)]">Preventive Diagnostic Scan</span>
                <span className="font-semibold text-[var(--aircon-heading)]">Annually or during servicing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
