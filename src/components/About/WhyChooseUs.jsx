import React from 'react';
import { BiSolidTorch } from 'react-icons/bi';
import { FaRegStar } from 'react-icons/fa';

const features = [
  {
    icon: <FaRegStar className="text-black text-xl" />,
    title: 'BEST OF LEICESTER',
    description:
      'We were proudly voted Best in Leicester by Preferred Mechanic—a testament to our expertise, reliable service, and commitment to putting our customers first.',
  },
  {
    icon: <BiSolidTorch className="text-black text-xl" />,
    title: 'Best Family Run Vehicle Repair Garage 2024 - Leicester',
    description:
      'This award reflects our dedication to expert service, honest advice, and treating every customer like family.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">WHY CHOOSE US</h2>
      <p className="text-gray-500 text-sm sm:text-base mb-12 max-w-xl mx-auto">
        Discover the top reasons to <br />
        choose our expert services.
      </p>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 p-8 w-full max-w-md mx-auto rounded-sm hover:shadow-lg transition"
          >
            {/* Corner borders */}
            <div className="absolute top-0 right-0 w-13 h-13 border-t-2 border-r-2 border-blue-600 "></div>
            <div className="absolute bottom-0 left-0 w-13 h-13 border-b-2 border-l-2 border-blue-600"></div>

            {/* Icon */}
            <div className="inline-block bg-gradient-to-b from-yellow-100 to-blue-600  p-3 rounded mb-6">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg text-black mb-3">{feature.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default WhyChooseUs;
