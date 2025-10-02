import React from "react";
import { Link, useLocation } from "react-router-dom";

const MechanicalService = () => {
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
                                    className={`block pl-2 transition-all duration-150 ${location.pathname === item.path
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
                        We Do It All!
                    </h1>

                    <p className="mb-6 text-sm lg:text-base">
                        No matter the issue, our master technicians are ready to tackle it. From routine maintenance to complex mechanical repairs, we have the skills and expertise to handle it all. Nothing is too hard for us—we take pride in delivering high-quality, reliable repairs to keep your vehicle running at its best. Trust us to get you back on the road with confidence!
                    </p>

                    <div className="border-l-4 border-blue-600 p-4 text-sm lg:text-base mt-10 mb-6">
                        <p className="text-xl">
                            <strong>CM Pro Tip: </strong>
                            Regular maintenance is key to preventing mechanical issues. Stay on top of oil changes, tire checks, and fluid levels, and address small problems before they turn into big ones.
                        </p>
                    </div>

                    <ol className="list-disc pl-6 space-y-2 text-sm lg:text-base">
                        <li>
                            <strong>Master Technicians at Your Service:</strong> Our expert technicians have the skills and experience to handle any mechanical repair, no matter how complex.
                        </li>
                        <li>
                            <strong>Comprehensive Repair Solutions: </strong>From routine maintenance to major repairs, we do it all, ensuring your vehicle gets the care it needs.
                        </li>
                        <li>
                            <strong>Reliable, High-Quality Service: </strong>We take pride in delivering top-notch repairs that keep your vehicle running smoothly and safely for the long haul.
                        </li>
                    </ol>
                </main>
            </div>
        </div>
    );
};

export default MechanicalService;
