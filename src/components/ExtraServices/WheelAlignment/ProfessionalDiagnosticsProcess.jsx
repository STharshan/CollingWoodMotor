import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const WhyWheelAlignment = () => {
  return (
    <section className="py-1 bg-[var(--aircon-section-bg)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6 leading-snug text-[#028BFA]">
              Why Choose Professional <br /> Wheel Alignment?
            </h2>
            <p className="text-lg mb-8 text-[var(--aircon-muted)]">
              Proper wheel alignment is key to safety, comfort, and vehicle longevity. Our advanced tools and skilled technicians ensure your wheels are perfectly aligned, maximizing performance, reducing tyre wear, and saving you money in the long run.
            </p>

            {/* Bullet Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Boost fuel efficiency',
                'Extend tyre lifespan',
                'Enhance vehicle handling',
                'Minimize uneven tyre wear',
                'Increase driving safety',
                'Enjoy a smoother, stable ride',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-[#028BFA]" />
                  <span className="text-[var(--aircon-heading)]">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="rounded-xl p-8 shadow-sm border bg-[var(--aircon-card-bg)] border-[var(--aircon-card-border)]">
            <h3 className="text-2xl font-bold mb-4 text-[#028BFA]">
              Signs Your Vehicle Needs Alignment
            </h3>
            <ul className="space-y-4 text-[var(--aircon-muted)]">
              {[
                'Vehicle drifts or pulls to one side',
                'Steering wheel off-center when driving straight',
                'Uneven or rapid tyre wear',
                'Vibrations in steering wheel or seat',
                'Squealing or unusual tyre noises',
              ].map((sign, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full flex-shrink-0 bg-[var(--aircon-check-icon)]" />
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyWheelAlignment;
