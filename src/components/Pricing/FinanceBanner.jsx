import React from "react";


const FinanceBanner = () => {
  return (
    <div className="bg-black px-6 py-10 md:py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/call.png"
            alt="Call us today"
            className="w-full rounded-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">0% Finance</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Join our happy customers and spread the cost over easy monthly instalments
            for auto service and repair
          </p>
          <a 
             href="https://wa.me/447564693973"
             target="_blank"
            className="bg-[#028BFA] hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default FinanceBanner;
