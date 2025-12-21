import React from 'react';
import { FaPhoneAlt, FaStar } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';

const BeltHeader = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('/gray.avif')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <span
            className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium mb-4"
            style={{
              backgroundColor: "var(--aircon-badge-bg)",
              color: "var(--aircon-badge-text)",
            }}
          >
            Vehicle Care Specialists
          </span>

          {/* Heading */}
          <h1
            className="text-4xl lg:text-5xl font-black mb-6"
            style={{ color: "var(--aircon-heading)" }}
          >
              Car Servicing Services
          </h1>

          {/* Subheading */}
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--aircon-muted)" }}
          >
            Comprehensive car servicing designed to keep your vehicle running at peak performance, improve reliability, and prevent costly repairs. Expert care using premium parts and modern diagnostic tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {/* Call Button */}
            <a href="tel:+441623623759" className="inline-block">
              <button
                className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-all"
                style={{
                  backgroundColor: "var(--aircon-primary)",
                  color: "#FFFFFF",
                }}
              >
                <FaPhoneAlt className="h-5 w-5" />
                Book Service: +44 1623 623 759
              </button>
            </a>

            {/* Get Quote Button */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-all duration-300"
              style={{
                backgroundColor: "var(--aircon-button-bg)",
                color: "var(--aircon-heading)",
                border: "1px solid var(--aircon-outline)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 0 3px rgba(47,125,51,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeltHeader;
