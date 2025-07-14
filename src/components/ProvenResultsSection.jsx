import React from 'react';

const stats = [
  { value: '99%', label: 'On-Time Delivery' },
  { value: '5+', label: 'Expert Technicians' },
  { value: '4.7/5', label: 'Average Rating' },
];

const ProvenResultsSection = () => {
  return (
    <section className="bg-white py-20 px-4 text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        PROVEN RESULTS
      </h2>
      <p className="text-gray-500 mb-12 text-lg mt-8">
        Discover the stats that highlight<br className="hidden sm:block" />
        our success and dedication
      </p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-7xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="w-150 h-100 bg-gray-50 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center justify-center"
          >
            <div className="text-4xl sm:text-5xl font-bold text-black">{stat.value}</div>
            <div className="text-lg text-gray-500 ">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProvenResultsSection;
