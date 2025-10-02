import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="bg-white dark:bg-black px-4 py-16 transition-colors">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Side */}
        <div>
          <div className="mb-4 flex space-x-2">
            <span className="w-6 h-px bg-blue-600 rotate-135 mt-3"></span>
            <span className="text-gray-500 dark:text-gray-400 uppercase text-sm tracking-widest font-bold">
              raving reviews
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug text-gray-900 dark:text-white">
            THOUSANDS OF <br />HAPPY DRIVERS
          </h2>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            {/* Rating Box */}
            <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-5 py-2 rounded-full bg-white dark:bg-black">
              {/* Stars */}
              <div className="flex text-yellow-400 text-sm space-x-1">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              {/* Score */}
              <span className="text-gray-600 dark:text-gray-300 text-sm">4.7/5 from</span>
              {/* Reviews */}
              <span className="px-3 py-1 rounded-full text-gray-600 dark:text-gray-300 text-xs">84+ Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
