import React from "react";
import { Link, useLocation } from "react-router-dom";

const MOTService = () => {
  const location = useLocation();

  const sidebarItems = [
    { label: "MECHANICAL", path: "/services/mechanical" },
    { label: "MOT", path: "/services/mot" },
    { label: "WHEELALIGNMENT", path: "/services/wheel-alignment" },
    { label: "WINDOW TINT", path: "/services/window-tint" },
    { label: "SERVICE", path: "/services/service" },
    { label: "BELTS/CHAINS", path: "/services/belts-chains" },
    { label: "DIAGNOSTICS", path: "/services/diagnostics" },
  ];

  return (
    <div className="bg-white dark:bg-black transition-colors">
      <div className="flex flex-col-reverse lg:flex-row px-4 lg:px-16 py-30 gap-8 w-full max-w-screen-xl mx-auto">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/3">
          <h2 className="text-base font-medium text-gray-500 dark:text-gray-400 uppercase mb-4 lg:-ml-10">
            Browse Services
          </h2>
          <ul className="space-y-4 text-lg lg:text-xl ml-10 lg:-ml-0">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`block pl-2 transition-all duration-150 ${
                    location.pathname === item.path
                      ? "font-semibold border-l-4 border-blue-600 text-black dark:text-white"
                      : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-2/3 text-gray-800 dark:text-gray-100">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 uppercase tracking-wide">
            MOT (Ministry of Transport) Test
          </h1>

          <p className="mb-6 text-sm lg:text-base">
            At Collingwood Motors, we make your MOT test hassle-free and reliable. Our certified technicians thoroughly inspect your vehicle to ensure it meets all safety and environmental standards, giving you peace of mind on the road. With quick turnaround times, transparent pricing, and a commitment to quality, we make sure your car passes with confidence. Trust us to keep you and your vehicle safe—schedule your MOT with us today!
          </p>

          <div className="border-l-4 border-blue-600 p-4 text-sm lg:text-base mt-10 mb-6">
            <p className="text-xl">
              <strong>CM Pro Tip:</strong>
              To increase your chances of passing the MOT, make sure to do a pre-test check on key components like lights, tires, and brakes. Ensure your windscreen wipers are working and your car has enough fuel.
            </p>
          </div>

          <ol className="list-disc pl-6 space-y-2 text-sm lg:text-base">
            <li>
              <strong>Thorough Inspections for Peace of Mind:</strong> Our certified technicians perform comprehensive checks to ensure your vehicle meets all safety and environmental standards.
            </li>
            <li>
              <strong>Fast, Reliable Service: </strong>We offer quick turnaround times, so you can get back on the road without delay.
            </li>
            <li>
              <strong>Transparent Pricing and Quality: </strong>With clear pricing and a commitment to high-quality service, you can trust us for an honest and stress-free MOT experience.
            </li>
          </ol>
        </main>
      </div>
    </div>
  );
};

export default MOTService;
