export default function ProfessionalDiagnosticsProcess() {
  return (
    <section className="py-1 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side – Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#028BFA]">
              MOT Testing Process
            </h2>
            <p className="text-lg mb-8 text-[var(--aircon-muted)]">
              Our straightforward MOT process keeps things simple and stress-free
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-[var(--aircon-primary)] text-black dark:text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="font-semibold text-[var(--aircon-heading)]">
                    Vehicle Inspection
                  </p>
                  <p className="text-sm text-[var(--aircon-muted)]">
                    Full DVSA-compliant inspection of all MOT test items
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
                    Results &amp; Report
                  </p>
                  <p className="text-sm text-[var(--aircon-muted)]">
                    Clear explanation of pass, advisories, or failures
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
                    Repairs &amp; Re-Test
                  </p>
                  <p className="text-sm text-[var(--aircon-muted)]">
                    On-site repairs available with free or reduced re-test
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side – Recommendations Table */}
          <div className="rounded-lg shadow-md p-8 border transition-colors duration-300 bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]">
            <h3 className="text-2xl font-bold mb-4 text-[#028BFA]">
              MOT Service Recommendations
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center gap-17 border-b pb-2 border-[var(--aircon-card-border)]">
                <span className="text-[var(--aircon-muted)]">MOT Test</span>
                <span className="font-semibold text-[var(--aircon-heading)]">
                  Annually (vehicles over 3 years old)
                </span>
              </div>
              <div className="flex justify-between items-center gap-7 border-b pb-2 border-[var(--aircon-card-border)]">
                <span className="text-[var(--aircon-muted)]">Pre-MOT Health Check</span>
                <span className="font-semibold text-[var(--aircon-heading)]">
                  Recommended 2–4 weeks before expiry
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}