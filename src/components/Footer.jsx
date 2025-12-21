import React from "react";
import { FaFacebookF, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  // Define services with correct routes
  const services = [
    { name: "MOT Repair", path: "/services/mot" },
    { name: "Mechanical", path: "/services/mechanical" },
    { name: "Car Services", path: "/services/service" },
    { name: "Diagnostics", path: "/services/diagnostics" },
    { name: "Wheel Alignment", path: "/services/wheel-alignment" },
    { name: "Window Tint", path: "/services/window-tint" },
    { name: "Belts & Chains", path: "/services/belts-chains" },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-[#028BFA]">
                Collingwood Motors
              </span>
            </div>
            <p className="text-gray-400 mb-4 mt-3 leading-relaxed">
              From oil changes to engine diagnostics, our fully equipped vans ensure your vehicle runs smoothly without the hassle of visiting a workshop.
            </p>
            <div className="flex flex-cols space-x-4">
              <a
                href="https://www.facebook.com/Collingwoodmotorsmotcentre/?_rdc=2&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF
                  className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-300"
                  size={20}
                />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-[#028BFA]">
              Services
            </h3>
            <ul className="space-y-2 text-gray-400">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-[#028BFA]">
              Contact Info
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#028BFA] mt-1" size={18} />
                <a
                  href="https://maps.app.goo.gl/5rdryp9E2DvgAmUr5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  21 Slater St, Leicester LE3 5AS, <br /> United Kingdom
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-[#028BFA] " size={18} />
                <a
                  href="tel:+44 7564 693973"
                  className="hover:text-white transition-colors duration-300"
                >
                  +44 7564 693973
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#028BFA] " size={18} />
                <a
                  href="mailto:info@collingwoodmotors.com"
                  className="hover:text-white transition-colors duration-300 break-all"
                >
                  info@collingwoodmotors.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Collingwood Motors. All rights reserved.</p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
          {/* Left: Terms & Privacy */}
          <div className="flex gap-4 text-sm">
            <Link
              to="/terms"
              className="text-gray-400 hover:text-[#028BFA] transition duration-300"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-[#028BFA] transition duration-300"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Center: Powered by Ansely */}
          <p className="text-center font-semibold text-gray-400">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#028BFA]  hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
