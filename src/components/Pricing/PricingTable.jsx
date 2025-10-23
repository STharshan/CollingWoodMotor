import React from "react";

const headers = [
  "Up to 1299cc",
  "1300cc -1799cc",
  "1800cc -2299cc",
  "Above 2299cc",
];

const services = [
  {
    label: "Interim",
    prices: ["£127", "£147", "£167", "£187"],
    bg: "bg-[#B67D5A]",
    text: "text-white",
  },
  {
    label: "Full",
    prices: ["£217", "£227", "£267", "£297"],
    bg: "bg-[#9CA6B3]",
    text: "text-black",
  },
  {
    label: "Major",
    prices: ["£249", "£249", "£249", "£349"],
    bg: "bg-[#EACD3E]",
    text: "text-black",
  },
];

const PricingTable = () => {
  return (
    <section className="dark:bg-black  dark:text-white py-10 px-4">
      <div className="w-full max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-xl sm:text-2xl mb-2 tracking-wide">Pricing</h2>
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-[#0093FF] mb-2 tracking-wide">
          SERVICING
        </h2>
        <p className="text-center text-sm sm:text-base dark:text-gray-200 mb-10">
          Prices include up to 7.5 litres of premium-grade oil, ensuring the best performance in the game.
        </p>

        {/* Table without scroll */}
        <div className="w-full">
          <div className="w-full space-y-6 sm:space-y-10">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-2 sm:gap-6">
              <div className="py-2 px-2 sm:py-3 sm:px-4 font-bold text-left text-xs sm:text-base">Engine size</div>
              {headers.map((h, i) => (
                <div
                  key={i}
                  className="py-2 px-2 sm:py-4 sm:px-4 text-center font-semibold bg-[#0093FF] text-white rounded-md text-xs sm:text-base"
                >
                  {h}
                </div>
              ))}
            </div>

            {/* Service Rows */}
            {services.map((service, i) => (
              <div key={i} className="grid grid-cols-5 gap-2 sm:gap-6">
                <div className="py-2 px-2 sm:py-4 sm:px-4 font-semibold text-xs sm:text-base">{service.label}</div>
                {service.prices.map((price, j) => (
                  <div
                    key={j}
                    className={`py-2 px-2 sm:py-4 sm:px-4 text-center font-bold rounded-md ${service.bg} ${service.text} text-xs sm:text-base`}
                  >
                    {price}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
