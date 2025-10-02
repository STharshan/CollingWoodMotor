import React from "react";

const headers = ["What's Included", "Interim", "Full"];

const services = [
  { name: "Replace Oil Filter", interim: true, full: true },
  { name: "Oil Change", interim: true, full: true },
  { name: "Interior Pollen Filter", interim: false, full: true },
  { name: "Replace Air Filter", interim: false, full: true },
  { name: "Replace Spark Plugs", interim: false, full: true },
  { name: "Check All Fluid Levels", interim: true, full: true },
  { name: "Window Wash Top Up", interim: true, full: true },
  { name: "Antifreeze Top Up", interim: true, full: true },
  { name: "Transmission Fluid Top Up", interim: false, full: true },
  { name: "Dashboard Warning Light Check", interim: true, full: true },
  { name: "Check Lights", interim: true, full: true },
  { name: "Check Wipers", interim: true, full: true },
  { name: "Check Air Con System", interim: true, full: true },
  { name: "Check Battery Performance", interim: true, full: true },
  { name: "Check Exhaust", interim: true, full: true },
  { name: "Check For Fluid Leaks", interim: false, full: true },
  { name: "Check For Corrosion & Report", interim: true, full: true },
  { name: "Check Roof Tank Condition", interim: true, full: true },
  { name: "Check Steering", interim: true, full: true },
  { name: "Check Suspension", interim: true, full: true },
  { name: "Check Tyre Condition", interim: true, full: true },
  { name: "Set Tyre Pressures", interim: true, full: true },
  { name: "Visual Brake Inspection", interim: true, full: true },
  { name: "Brake Fluid Condition", interim: true, full: true },
  { name: "Remove Wheels", interim: false, full: true },
  { name: "Full Brake Inspection", interim: false, full: true },
  { name: "Handbrake Check & Adjust", interim: false, full: true },
  { name: "Check Brake Pipes", interim: false, full: true },
  { name: "Wheel Nuts Torqued", interim: "N/A", full: true },
  { name: "Road Test", interim: true, full: true },
  { name: "Full Written Report", interim: true, full: true },
  { name: "Reset Service Light", interim: true, full: true },
  { name: "Stamp Service Book", interim: true, full: true },
];

const StatusCell = ({ value }) => {
  if (value === true)
    return <div className="bg-green-600 h-6 w-6 rounded-sm mx-auto" />;
  if (value === false)
    return <div className="bg-red-600 h-6 w-6 rounded-sm mx-auto" />;
  return <div className="text-sm text-white dark:text-black text-center">N/A</div>;
};

const notes = [
  { text: "Oil Changes: Up to 7.5 litres used" },
  { text: "Pollen Filters: Up to maximum of 30 minutes labour" },
  { text: "Spark Plugs: Excludes platinum and iridium plugs" },
  { text: "Fuel Filters: Quote for separately if required" },
];

const ServiceTable = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-10 px-2 sm:px-6 transition-colors">
      {/* Eco Pro Box */}
      <div className="bg-black dark:bg-neutral-900 text-white dark:text-white text-center mx-auto py-8 px-4 rounded-md shadow-md mb-12 w-full sm:w-1/2">
        <h3 className="text-lg sm:text-xl font-bold mb-2">
          Why not upgrade to Eco Pro and take your performance to the next level!?
        </h3>
        <p className="text-3xl sm:text-4xl font-extrabold text-[#0093FF] dark:text-blue-400 mb-4">
          £29.95
        </p>
        <ul className="list-disc list-outside pl-6 space-y-2 text-sm sm:text-base font-semibold text-center">
          <li>Improve fuel economy up to 20%</li>
          <li>Reduce emissions & decrease your carbon footprint</li>
          <li>Smoother running</li>
          <li>Reduce engine wear</li>
        </ul>
      </div>

      {/* Service Table Container */}
      <div className="max-w-5xl mx-auto w-full bg-black dark:bg-neutral-900 rounded-md pt-10 px-4 py-4 transition-colors">
        {/* Table Header */}
        <div className="grid grid-cols-3 text-center text-base sm:text-lg font-bold mb-4 bg-[#0093FF] dark:bg-blue-500 text-white rounded-md overflow-hidden max-w-4xl mx-auto">
          {headers.map((header, i) => (
            <div key={i} className="py-3 px-2">
              {header}
            </div>
          ))}
        </div>

        {/* Rows */}
        <div className="space-y-2 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-3 text-sm sm:text-base bg-[#1a1a1a] dark:bg-neutral-900 border border-gray-700 dark:border-gray-400 rounded-md transition-colors"
            >
              <div className="py-3 px-2 text-white dark:text-white">{service.name}</div>
              <div className="py-3">
                <StatusCell value={service.interim} />
              </div>
              <div className="py-3">
                <StatusCell value={service.full} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div className="max-w-xl mx-auto my-10 border border-black dark:border-white shadow-md rounded-md">
        {/* Header */}
        <div className="bg-blue-500 dark:bg-blue-700 text-white text-center font-semibold py-3 px-4 text-base sm:text-lg underline rounded-t">
          Please note following
        </div>
        {/* Content */}
        <div className="bg-black dark:bg-neutral-900 text-white dark:text-white text-sm sm:text-base">
          {notes.map((item, index) => (
            <div
              key={index}
              className="border-t border-blue-500 dark:border-blue-700 py-4 px-4 text-center"
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTable;
