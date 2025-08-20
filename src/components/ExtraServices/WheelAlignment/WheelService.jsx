import React from "react";
import { Link, useLocation } from "react-router-dom";

const WheelService = () => {
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
            Keep Your Ride Smooth with <br /> Expert Wheel Alignment
          </h1>

          <p className="mb-6 text-sm lg:text-base">
            Is your car pulling to one side or do you notice uneven tire wear? It might be time for a wheel alignment! At Collingwood Motors, we specialize in precise wheel alignment services that ensure your vehicle drives smoothly, improves fuel efficiency, and extends the life of your tires. Our skilled technicians use state-of-the-art equipment to get your wheels perfectly aligned, so you can enjoy better handling and safety on every drive.
          </p>

          <div className="border-l-4 border-blue-600 p-4 text-sm lg:text-base mt-10 mb-6">
            <p className="text-xl">
              <strong>CM Pro Tip:</strong>
              Even if you don’t notice any obvious issues, it’s a good idea to get a wheel alignment every 12,000 miles or if you’ve recently hit a pothole or curb.
            </p>
          </div>

          <ol className="list-disc pl-6 space-y-2 text-sm lg:text-base">
            <li>
              <strong>Precise, Expert Alignment:</strong> Our skilled technicians use advanced equipment to ensure your wheels are perfectly aligned for smooth, safe driving.
            </li>
            <li>
              <strong>Enhanced Tire Longevity and Fuel Efficiency:</strong> Proper alignment helps your tires wear evenly, saving you money on replacements and improving fuel efficiency.
            </li>
            <li>
              <strong>Improved Handling and Safety:</strong> Get better control and a smoother ride, with alignment that enhances your vehicle's overall performance and safety.
            </li>
          </ol>
        </main>
      </div>
    </div>
  );
};

export default WheelService;
