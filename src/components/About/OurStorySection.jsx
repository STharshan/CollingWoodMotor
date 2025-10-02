import React from 'react';

const OurStorySection = () => {
  return (
    <section className="bg-white dark:bg-black py-20 px-6 md:px-12 lg:px-24 text-center transition-colors duration-300">
      {/* Tagline */}
      <div className="mb-4 flex justify-center items-center space-x-2">
        <span className="w-6 h-px bg-blue-600 rotate-135"></span>
        <span className="text-gray-500 dark:text-gray-300 uppercase text-sm tracking-widest font-bold">Our Story</span>
      </div>

      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-blue-100 leading-tight max-w-3xl mx-auto mb-8 uppercase">
        Experience top-tier auto repair services at a fraction of the cost
      </h2>

      {/* Paragraph */}
      <p className="max-w-md mx-auto text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
        Welcome to Collingwood Motors, proudly voted the
        <strong> Best Family-Run Repair Garage of 2024</strong> and recognized as
        the <strong> Best of Leicester</strong> by Preferred Mechanic. We’re more than just a repair shop — we’re a dedicated team
        with a passion for providing exceptional service and care for every customer who walks through our doors.
        With a <strong>Master Technician </strong>leading our skilled team, we deliver expert diagnostics, precise repairs,
        and reliable maintenance, all with the personalized touch only a family-run business can offer.
        At Collingwood Motors, our customers come first. We go the extra mile to ensure your safety, satisfaction,
        and peace of mind, making us your trusted partner for all your auto care needs.
      </p>
    </section>
  );
};

export default OurStorySection;
