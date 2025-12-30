import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const DiagnosticsHeader = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('/tinit.jpg')`,
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
        <span
          className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium mb-4"
          style={{
            backgroundColor: "#028BFA",
            color: "var(--aircon-badge-text)",
          }}
        >
          Vehicle Styling Specialists
        </span>

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-[#028BFA] mb-5 uppercase">Window Tinting Services</h2>

        {/* Subtext */}
        <p className="text-gray-300 text-base md:text-lg font-semibold">
          Professional window tinting solutions to enhance vehicle comfort, improve privacy, reduce heat, and protect your interior from harmful UV rays. Precision-applied tint films for a sleek, modern finish.
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
                backgroundColor: "#028BFA",
                color: "#FFFFFF",
              }}
            >
              <FaPhoneAlt className="h-5 w-5" />
              Book Service: +44 7564 693973            </button>
          </a>

          {/* Get Quote Button */}
          <a
            href="https://wa.me/447564693973"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-gray-300 text-black items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-all duration-300"
            style={{
              border: "1px solid var(--aircon-outline)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 3px #028BFA";
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
