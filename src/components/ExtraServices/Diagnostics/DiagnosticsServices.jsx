import React from "react";
import { Link, useLocation } from "react-router-dom";

const DiagnosticsService = () => {

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
                    <h2 className="text-base font-medium text-gray-500 dark:text-gray-400 uppercase mb-4 lg:-ml-10">Browse Services</h2>
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
                        Professional Diagnostics 
                    </h1>

                    <p className="mb-6 text-sm lg:text-base">
                        Don't guess—know what's going on under the hood! Our advanced car diagnostics give you a clear, accurate picture of your vehicle's health, saving you time, money, and stress. Whether it’s an odd noise, a dashboard warning light, or just peace of mind before a road trip, our cutting-edge tools pinpoint problems quickly and precisely. What We Offer
                    </p>

                    <div className="border-l-4 border-blue-600 p-4 text-sm lg:text-base mt-10 mb-6">
                        <p className="text-xl">
                            <strong>CM Pro Tip: </strong>
                            Regularly check your car’s diagnostic system, even if there’s no warning light on. Some issues, like reduced fuel efficiency or minor sensor problems, may not trigger an alert but can still affect performance. 
                        </p>
                    </div>
                    
                    <ol className="list-disc pl-6 space-y-2 text-sm lg:text-base">
                        <li><strong>Precision You Can Trust:</strong> Our cutting-edge diagnostic tools quickly and accurately identify issues, saving you time and money on unnecessary repairs.</li>
                        <li><strong>Fast, Reliable Service:</strong> With our expert technicians and advanced technology, we get to the root of the problem fast, so you’re back on the road sooner</li>
                        <li><strong>Confidence in Every Drive:</strong> Enjoy peace of mind knowing your vehicle is running safely and efficiently, with solutions tailored to extend its life and performance.</li>
                    </ol>

                </main>
            </div>
        </div>
    );
};

export default DiagnosticsService;
