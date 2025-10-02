import React from "react";
import { Link, useLocation } from "react-router-dom";

const BodyServiceServices = () => {
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
                        Your peace of mind
                    </h1>

                    <p className="mb-6 text-sm lg:text-base">
                        Keep your car running at its best with our comprehensive and reliable car servicing. At Collingwood motors, we go beyond routine checks—our experienced technicians use top-quality parts and cutting-edge tools to ensure your vehicle stays in peak condition. From maximizing performance to preventing costly repairs, we’re committed to your car’s health and your peace of mind. Trust us to deliver expert care tailored to your vehicle’s needs—schedule your service today!
                    </p>

                    <div className="border-l-4 border-blue-600 p-4 text-sm lg:text-base mt-10 mb-6">
                        <p className="text-xl">
                            <strong>CM Pro Tip: </strong>
                            Regular servicing helps prevent breakdowns, extends your car’s lifespan, and ensures optimal performance, saving you money on costly repairs down the line.
                        </p>
                    </div>

                    <ol className="list-disc pl-6 space-y-2 text-sm lg:text-base">
                        <li><strong>Expert Technicians You Can Rely On: </strong> Our experienced team ensures your car gets the professional care it deserves, keeping it running smoothly and safely</li>
                        <li><strong>Top-Quality Parts and Tools:</strong> We use premium parts and cutting-edge equipment to maximize your vehicle’s performance and reliability</li>
                        <li><strong>Proactive Maintenance, Long-Term Savings:</strong> Our thorough servicing helps prevent costly breakdowns, extending your car’s life and saving you money over time.</li>
                    </ol>
                </main>
            </div>
        </div>
    );
};

export default BodyServiceServices;
