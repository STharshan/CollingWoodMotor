import React from "react";
import { Link, useLocation } from "react-router-dom";
import DiagnosticBenefits from "./DiagnosticBenefits";
import ProfessionalDiagnosticsProcess from "./ProfessionalDiagnosticsProcess";
import WheelAlignmentServices from "./DiagnosticServices";
import TyreServices from "./WhyServiceDiagnostics";
import WhyWheelAlignment from "./ProfessionalDiagnosticsProcess";

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
                    <WheelAlignmentServices />
                    <TyreServices />
                    <WhyWheelAlignment />

                </main>
            </div>
        </div>
    );
};

export default DiagnosticsService;
