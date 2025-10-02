import React, { useState } from 'react';
import { FaArrowRight, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'Do you cover land rover timing chains?',
    answer: 'Yes, we specialise in Land Rover timing chains, delivering exceptional expertise and quality service you can count on. '
  },
  {
    question: 'Do you provide warranties on your services?',
    answer: 'We proudly offer comprehensive warranties on all our services to guarantee your peace of mind and satisfaction. Warranties using OEM parts cover 12 months or 12,000 miles, ensuring reliability you can trust.'
  },
  {
    question: 'How can I book an appointment?',
    answer: 'You can easily book an appointment by clicking contact us to be directed to Whatsapp. Alternatively please find our contact details below.'
  },
  {
    question: 'What are your operating hours?',
    answer: 'We are open Monday to Friday from 8:30 AM to 7:30 PM, and Saturday from 9 AM to 3 PM. We are closed on Sundays.'
  },
  {
    question: 'Do you cater to vans?',
    answer: 'Yes, we cater to vans, leveraging our specialized expertise to provide top-quality service tailored to your needs.'
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-black py-20 px-6 sm:px-10 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <div className="mb-4 flex space-x-2">
            <span className="w-6 h-px bg-blue-600 rotate-135 mt-2"></span>
            <span className="uppercase text-sm tracking-widest font-bold text-gray-400 dark:text-gray-500">Help</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-3">FAQ'S</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-8 max-w-xs">
            Find answers to common questions about our services and policies.
          </p>

          <button className="mt-6 bg-blue-600 text-black dark:text-white cursor-pointer font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition group">
            <span className="transition-transform duration-300 group-hover:-translate-x-2">CONTACT US</span>
            <FaArrowRight className="text-black dark:text-white transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center bg-gray-50 dark:bg-neutral-900 hover:bg-gray-100 dark:hover:bg-neutral-800 px-5 py-4 text-left cursor-pointer"
              >
                <span className="text-sm text-gray-800 dark:text-gray-100 font-medium hover:translate-x-5.5 transition-transform duration-500">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-blue-600 dark:text-blue-400 text-sm" />
                ) : (
                  <FaChevronDown className="text-blue-600 dark:text-blue-400 text-sm" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-5 py-3 text-gray-600 dark:text-gray-300 text-sm bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
