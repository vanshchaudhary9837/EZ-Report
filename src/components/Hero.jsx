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
          className={`hero-right relative flex flex-col justify-center bg-[#FDE5D7] p-12 rounded-bl-3xl transition-all duration-300 ${
            collapsed ? "w-[calc(100%-4rem)]" : "w-2/3"
          }`}
        >
          {selectedReport ? (
            // Show Report when clicked
            <ReportView title={selectedReport} />
          ) : (
            // Default hero message
            <>
              <h2 className="text-3xl font-bold text-gray-800 leading-snug">
                Search your report by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  selecting the modules
                </span>
              </h2>
              <p className="mt-3 text-gray-600 text-base">
                Find compliance, licenses, notices, and litigation in seconds
              </p>
              <img
                src="/src/assets/hero.png"
                alt="illustration"
                className="max-w-xs absolute bottom-0 right-0"
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Hero;
