import React from "react";

const ReportView = ({ title }) => {
  return (
    <div className="w-full">
      {/* Heading */}
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        {title} Report
      </h2>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6">
        <select className="border px-4 py-2 rounded-md">
          <option>Search by State</option>
        </select>
        <select className="border px-4 py-2 rounded-md">
          <option>Year</option>
        </select>
        <select className="border px-4 py-2 rounded-md">
          <option>Month</option>
        </select>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg cursor-pointer">
          Search
        </button>
      </div>

      {/* Report Placeholder */}
      <div className="bg-white rounded-xl shadow p-6">
        <img
          src="/src/assets/report-placeholder.png"
          alt="Report Preview"
          className="w-full h-64 object-contain"
        />
      </div>
    </div>
  );
};

export default ReportView;
