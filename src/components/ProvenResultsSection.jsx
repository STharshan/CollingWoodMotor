import React from 'react';

const stats = [
  { value: '99%', label: 'On-Time Delivery' },
  { value: '5+', label: 'Expert Technicians' },
  { value: '4.7/5', label: 'Average Rating' },
];

function HighlightSymbol({ value }) {
  const match = value.match(/^([\d.]+)([%+])?(\/\d)?$/);
  if (!match) return value;
  const [, num, symbol, fraction] = match;

  return (
    <span>
      <span>{num}</span>
      {symbol && <span className="text-blue-500">{symbol}</span>}
      {fraction && <span>{fraction}</span>}
    </span>
  );
}

const ProvenResultsSection = () => {
  return (
    <section className="bg-white dark:bg-black py-10 px-4 text-center transition-colors">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-black dark:text-white">
        PROVEN RESULTS
      </h2>
      <p className="text-gray-500 dark:text-gray-300 mb-12 text-lg mt-2">
        Discover the stats that highlight our success and dedication
      </p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 max-w-7xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="w-56 h-40 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 rounded-md flex flex-col justify-center p-4 transition duration-300"
          >
            <div className="text-5xl font-bold text-black dark:text-white mb-4">
              <HighlightSymbol value={stat.value} />
            </div>
            <div className="text-gray-400 dark:text-gray-500 text-sm text-left mt-auto">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProvenResultsSection;
