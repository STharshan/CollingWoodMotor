import React from 'react';

const stats = [
  { value: '99%', label: 'On-Time Delivery' },
  { value: '5+', label: 'Expert Technicians' },
  { value: '4.7/5', label: 'Average Rating' },
];

function HighlightSymbol({ value }) {
  // Match number(s) + symbol(s)
  const match = value.match(/^([\d.]+)([%+])?(\/\d)?$/);
  if (!match) return value;
  const [, num, symbol, fraction] = match;

  return (
    <span>
      <span>{num}</span>
      {symbol && (
        <span className="text-blue-500">{symbol}</span>
      )}
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
      <p className="text-gray-500 dark:text-gray-300 mb-12 text-lg mt-8">
        Discover the stats that highlight<br className="hidden sm:block" />
        our success and dedication
      </p>

      {/* Cards */}
     <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="w-80  h-80 md:w-150 md:h-80 bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center justify-center"
          >
            <div className="text-4xl sm:text-5xl font-bold text-black dark:text-white">
              <HighlightSymbol value={stat.value} />
            </div>
            <div className="text-lg text-gray-500 dark:text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProvenResultsSection;
