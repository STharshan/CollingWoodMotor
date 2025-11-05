import React from "react";
import { Link, useLocation } from "react-router-dom";

const BeltService = () => {

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
                                            ? "font-semibold border-l-4 border-[#028BFA] text-black dark:text-white"
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
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4 uppercase tracking-wide">
                        Expert Timing Belt & Chain Repairs
                    </h1>

                    <p className="mb-6 text-sm lg:text-base">
                        Don’t let a worn timing belt or chain derail your engine’s performance! At Collingwood Motors, we specialise in precise, reliable timing system repairs that keep your engine running smoothly and prevent costly damage. Whether it’s replacing a timing belt or servicing a timing chain, our skilled technicians use top-quality parts and advanced techniques to ensure your vehicle’s peak performance. Trust us to keep your car on schedule—drive with confidence by booking your repair today!
                    </p>

                    <div className="border-l-4 border-[#028BFA] p-4 text-sm lg:text-base mt-10 mb-6">
                        <p className="text-xl">
                            <strong>CM Pro Tip:</strong> While timing chains typically last longer than belts, they can still wear over time. Regular oil changes and ensuring your engine has the right oil level can help prolong the life of your timing chain and prevent expensive repairs.
                        </p>
                    </div>

                    <ol className="list-disc pl-6 space-y-2 text-sm lg:text-base">
                        <li><strong>Expertise You Can Trust:</strong>  Our skilled technicians specialize in timing belt and chain repairs, ensuring your engine stays in perfect sync</li>
                        <li><strong>Top-Quality Parts and Service: </strong> We use only the best parts and advanced techniques to provide long-lasting, reliable repairs.</li>
                        <li><strong>Prevent Costly Damage:</strong>Don’t wait for a failure—our timely repairs protect your engine and save you money in the long run.</li>
                    </ol>
                </main>
            </div>
        </div>
    );
};

export default BeltService;
