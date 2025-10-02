import React from "react";
import { Link, useLocation } from "react-router-dom";

const WindowService = () => {
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
                    <h1 className="text-2xl lg:text-4xl font-bold mb-4 uppercase">
                        Professional Window Tinting
                    </h1>

                    <p className="mb-6 text-sm lg:text-base">
                        Upgrade your vehicle's style, comfort, and protection with our expert window tinting services! At Collingwood Motors, we offer high-quality, precision-applied tint films that reduce heat, protect your interior from UV damage, and enhance privacy—all while giving your car a sleek, modern look. Our experienced technicians ensure a flawless finish, and we use top-tier materials for long-lasting results. Choose us for a cooler, safer, and more stylish ride—schedule your window tinting today!
                    </p>

                    <div className="border-l-4 border-blue-600 p-4 text-sm lg:text-base mb-6">
                        <p className="text-xl">
                            <strong>CM Pro Tip: </strong>
                            Always choose a reputable professional to ensure high-quality installation that lasts and looks great.
                        </p>
                    </div>

                    <ol className="list-disc pl-6 space-y-2 text-sm lg:text-base">
                        <li><strong>Enhanced Comfort and Protection:</strong> Our window tinting reduces heat and blocks harmful UV rays, keeping your car cooler and protecting your interior from fading.</li>
                        <li><strong>Privacy and Security: </strong>Enjoy added privacy with tinting that makes it harder for others to see inside, enhancing your security on the go.</li>
                        <li><strong>Expert Installation and Premium Quality: </strong>Our skilled technicians use top-quality materials for a flawless, long-lasting finish that enhances your car’s style and performance.</li>
                    </ol>
                </main>
            </div>
        </div>
    );
};

export default WindowService;
