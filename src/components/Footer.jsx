import React from 'react';
import { FaArrowRight, FaFacebook, FaInstagram, FaStar } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 text-black dark:text-gray-200 text-sm transition-colors duration-300">
      <div className="mx-auto px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-50 items-start">
        {/* Left - Google Map */}
        <div className="w-full">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=52.642,-1.1415&z=15&output=embed"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border border-gray-300 dark:border-gray-800"
          ></iframe>
        </div>

        {/* Right - Contact + Socials */}
        <div className="flex flex-col justify-between mx-auto w-80">
          <div className="space-y-4">
            {/* Phone number 1 */}
            <a
              href="tel:+441162512661"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-between items-center border-b border-gray-300 dark:border-gray-700 pb-2 hover:border-[#028BFA] dark:hover:border-blue-400 cursor-pointer"
            >
              <span className="transition-transform duration-500 group-hover:translate-x-2">
                0116 251 2661
              </span>
              <FaArrowRight
                className="text-gray-500 dark:text-gray-300 transition-transform duration-500 group-hover:-translate-x-2"
                size={12}
              />
            </a>

            {/* Phone number 2 */}
            <a
              href="https://wa.me/+447564693973?text=Hi%20I%20would%20like%20to%20contact%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-between items-center border-b border-gray-300 dark:border-gray-700 pb-2 hover:border-[#028BFA] dark:hover:border-blue-400 cursor-pointer"
            >
              <span className="transition-transform duration-500 group-hover:translate-x-2">
                07564693973
              </span>
              <FaArrowRight
                className="text-gray-500 dark:text-gray-300 transition-transform duration-500 group-hover:-translate-x-2"
                size={12}
              />
            </a>
          </div>

          {/* Reviews + Socials stacked but aligned right */}
          <div className="mt-35 w-full relative">
            {/* Reviews Section */}
            <div className="flex items-center gap-4 border border-gray-300 dark:border-gray-700 px-4 py-4 rounded-full w-max bg-white dark:bg-neutral-900 transition-colors duration-300">
              <div className="flex items-center text-yellow-400">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="text-gray-700 dark:text-gray-200 font-semibold text-sm">4.7/5 from</span>
              <span className="rounded-full px-2 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800">
                84+ Reviews
              </span>
            </div>

            {/* Social Icons - under review, right aligned */}
            <div className="flex items-center gap-4 justify-end mr-10 mt-6">
              <a
                href="https://web.facebook.com/Collingwoodmotorsmotcentre/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={32} className="text-[#028BFA] w-15 h-15" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={32} className="text-pink-500 w-15 h-15" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-200 dark:border-gray-700 mt-10 text-center font-semibold text-sm text-gray-500 dark:text-gray-400 py-6">
        © 2025 Collingwood Motors. All rights reserved. <span className="mx-2">|</span>
        Partnered With{' '}
        <a
          href="https://www.ansely.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-[#028BFA] dark:hover:text-blue-400 transition-colors"
        >
          Ansely
        </a>
      </div>
    </footer>
  );
};

export default Footer;
