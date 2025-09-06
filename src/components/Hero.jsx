import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ReportView from "./ReportView";

const Hero = () => {
  // Sidebar collapsed state
  const [collapsed, setCollapsed] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  return (
    <div>
      <section className="hero flex h-[calc(100vh-180px)] px-4 bg-white shadow">
        {/* Sidebar with collapse toggle */}
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          onReportClick={setSelectedReport}
        />

        {/* Hero Right Section */}
        <div
          className={`hero-right relative flex flex-col justify-center bg-[#FDE5D7] p-12 rounded-bl-3xl transition-all duration-500 ${
            collapsed ? "w-[calc(100%-4rem)] pr-72" : "w-2/3 pr-58"
          }`}
        >
          {selectedReport ? (
            <ReportView title={selectedReport} />
          ) : (
            <>
              {/* Hero Text */}
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug mb-4 transition-all duration-500">
                  Search your report by{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    selecting the modules
                  </span>
                </h2>

                <p className="mt-2 text-gray-600 text-lg transition-all duration-500">
                  Find compliance, licenses, notices, and litigation in seconds <br />
                  with a simple and intuitive dashboard.
                </p>

                <div className="mt-6 flex gap-4">
                  <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform">
                    Get Started
                  </button>
                  <button className="px-6 py-3 rounded-xl border-2 border-orange-400 text-orange-500 font-semibold bg-white hover:bg-orange-50 hover:scale-105 transition-transform">
                    View Reports
                  </button>
                </div>
              </div>

              {/* Corner Illustration */}
              <img
                src="/src/assets/hero.png"
                alt="illustration"
                className={`absolute bottom-0 right-0 max-h-[70%] transition-all duration-500 ${
                  collapsed ? "max-w-md" : "max-w-xs"
                }`}
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Hero;
