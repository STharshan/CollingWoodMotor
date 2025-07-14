import React from 'react';
import { FaArrowRight, FaFacebook, FaInstagram, FaStar } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t text-black text-sm">
      <div className="mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-50 items-start">
        {/* Left - Google Map */}
        <div className="w-full"> {/* Added left padding for larger screens */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=52.642, -1.1415&z=15&output=embed"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded border"
          ></iframe>
        </div>

        {/* Right - Contact + Socials */}
        <div className="flex flex-col justify-between mx-auto"> {/* Added right padding for larger screens */}
          <div className="space-y-4">
            <div className="group flex justify-between items-center border-b border-gray-300 pb-2 hover:border-blue-600 cursor-pointer">
              <span className="transition-transform duration-500 group-hover:translate-x-2">0116 251 2661</span>
              <FaArrowRight className="text-gray-500 transition-transform duration-500 group-hover:-translate-x-2" size={12} />
            </div>
            <div className="group flex justify-between items-center border-b border-gray-300 pb-2 hover:border-blue-600 cursor-pointer">
              <span className="transition-transform duration-500 group-hover:translate-x-2">07564693973</span>
              <FaArrowRight className="text-gray-500 transition-transform duration-500 group-hover:-translate-x-2" size={12} />
            </div>
          </div>

          <div className="mt-10 space-y-4">
            {/* Reviews Section */}
            <div className="flex items-center gap-4 border border-gray-300 px-4 py-4 rounded-full w-max">
              <div className="flex items-center text-yellow-400">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="text-gray-700 font-semibold text-sm">4.7/5 from</span>
              <span className="bg-white rounded-full px-2 py-0.5 text-xs font-semibold text-gray-600">84+ Reviews</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 justify-start sm:justify-start lg:justify-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={32} className="text-blue-600 w-15 h-15" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={32} className="text-pink-500 w-15 h-15" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t mt-10 text-center text-xs text-gray-500 py-4">
        © 2024 Collingwood Motors. All rights reserved. <span className="mx-2">|</span> Partnered With Ansely
      </div>
    </footer>
  );
};

export default Footer;
