import React from 'react';
import { FaPhoneAlt, FaStar } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';

const DiagnosticsHeader = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
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
      <div className="relative z-10 text-center text-white max-w-3xl mt-20">
        {/* Rating Badge */}
        <div className="mb-6 inline-flex items-center gap-3 border border-gray-700 rounded-full px-5 py-2 text-sm font-medium">
          <div className="flex text-yellow-400 space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={14} />
            ))}
          </div>
          <span className="text-white">4.7/5 from</span>
          <span className="border border-gray-700 rounded-full px-2 py-1">91 Reviews</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-[#028BFA] mb-5 uppercase">Vehicle Diagnostics Specialists</h2>

        {/* Subtext */}
        <p className="text-gray-300 text-base md:text-lg font-semibold">
          Professional Diagnostic Services
Advanced vehicle diagnostics to accurately identify faults, warning lights, and performance issues. Cutting-edge diagnostic technology for fast, precise fault finding across all modern vehicles.
        </p>
        

        {/* Info Badges */}
        {/* <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 font-semibold px-4 py-2 rounded-md">
            <BsArrowRightShort size={20} className="bg-[#028BFA] text-black" />
            Dealer Level Diagnostics
          </div>
          <div className="flex items-center gap-2 font-semibold px-4 py-2 rounded-md">
            <BsArrowRightShort size={20} className="bg-[#028BFA] text-black " />
            Vehicle health
          </div>
        </div> */}
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
    </section>
  );
};

export default DiagnosticsHeader;
