import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from React Router

const services = [
  {
    title: "MECHANICAL",
    desc: "We handle all car and commercial repairs including engines, turbo replacement as well as being clutch specialist.",
    img: "/carpaint.avif",
    path: "/services/mechanical",
  },
  {
    title: "WINDOW TINT",
    desc: "We offer proffessional window tinting for a sleek look and enhanced comfor",
    img: "/bule.avif",
    path: "/services/window-tint",
  },
  {
    title: "WHEEL ALIGNMENT",
    desc: "We provide wheel alignment with the added benifit of improved vehicle perfomance and tire longvity",
    img: "/paint.webp",
    path: "/services/wheel-alignment",
  },
  {
    title: "MOT",
    desc: "Quick and reliable MOT tests to keep your vehicle roadworthy and compliant!",
    img: "/carmechanic.avif",
    path: "/services/mot",
  },
  {
    title: "SERVICE",
    desc: "Comprehensive car servicing to ensure your vehicle runs smoothy and efficiently!",
    img: "/gray.avif",
    path: "services/service",
  },
  {
    title: "BELTS/CHAINS",
    desc: "Experts in timing chains, timing belts and one of the few wet timing chain specialist",
    img: "/shine.webp",
    path: "/services/belts-chains",
  },
  {
    title: "DIAGNOSTICS",
    desc: "We offer the laest dealer-level diagnostics",
    img: "/homepaint.avif",
    path: "services/diagnostics",
  },

];

const ServicesPage = () => {
  return (
    <div className="text-white">

      {/* Services Title */}
      <section className="text-center py-12 px-4 bg-white text-black">
        <h2 className="text-3xl md:text-4xl font-bold ">
          OUR SERVICES
        </h2>
        <p className="text-gray-600 mt-10 text-xl max-w-xs mx-auto">
          From minor fixes to major repairs, we’ve got you covered.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-6 pb-20 max-w-6xl mx-auto h-1050 md:h-400">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded bg-black"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-60 object-cover grayscale group-hover:grayscale-0 shadow-lg transition-transform duration-300 transform hover:scale-105 "
            />
            <div className="absolute mt-10 left-4 right-4 z-10">
              <h3 className=" font-semibold text-lg mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-white mb-10">{service.desc}</p>
              <Link to={service.path}>
                <button className="flex items-center space-x-4 px-6 py-2.5 border border-gray-600 rounded-full cursor-pointer text-xs transition duration-200 font-semibold">
                  <span className="transition-transform duration-300 group-hover:-translate-x-2">EXPLORE</span>
                  <FaArrowRight className="text-blue-600 transition-transform duration-300 group-hover:translate-x-2" size={12} />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ServicesPage;
