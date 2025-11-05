import React from 'react';
import { FaArrowRight, FaFacebook, FaInstagram, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 text-black dark:text-gray-200 text-sm transition-colors duration-300">
      <div className="mx-auto px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-50 items-start">
        {/* Left - Google Map */}
        <div className="w-full">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.9594955207062!2d-1.1421484!3d52.6426448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48775e237ecb4db7%3A0x33c3b6bb1581a022!2sCollingwood%20motors!5e0!3m2!1sen!2slk!4v1762369325631!5m2!1sen!2slk"
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
              href="https://wa.me/+447564693973"
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
       <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Collingwood Motors. All rights reserved.</p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 mb-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
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

          {/* Center: Powered by Ansely (unchanged) */}
          <p className="text-center font-semibold text-gray-400">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#028BFA] hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>
    </footer>
  );
};

export default Footer;
