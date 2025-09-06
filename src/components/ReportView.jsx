import React, { useState } from "react";
import {
  Download,
  FileSpreadsheet,
  Printer,
  FileText,
  Maximize2,
  X,
} from "lucide-react";

const ReportView = ({ title }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Extended dummy table data
  const rows = [
    {
      id: 1,
      name: "Alice Johnson",
      job: "UI Designer",
      dept: "Product",
      date: "05-Mar-2018",
      gender: "Female",
      salary: "$65,000",
      location: "New York",
      performance: "A",
      status: "Active",
    },
    {
      id: 2,
      name: "Bob Smith",
      job: "Product Manager",
      dept: "Product",
      date: "12-Jan-2019",
      gender: "Male",
      salary: "$88,000",
      location: "Chicago",
      performance: "B",
      status: "Active",
    },
    {
      id: 3,
      name: "Clara Lee",
      job: "QA Engineer",
      dept: "Marketing",
      date: "22-Jul-2020",
      gender: "Female",
      salary: "$54,000",
      location: "Los Angeles",
      performance: "A",
      status: "Inactive",
    },
    {
      id: 4,
      name: "David Brown",
      job: "Frontend Dev",
      dept: "Engineering",
      date: "01-Dec-2021",
      gender: "Male",
      salary: "$72,000",
      location: "Boston",
      performance: "C",
      status: "Active",
    },
    {
      id: 5,
      name: "Eva Green",
      job: "Backend Dev",
      dept: "Engineering",
      date: "15-Feb-2017",
      gender: "Female",
      salary: "$95,000",
      location: "San Francisco",
      performance: "A",
      status: "Active",
    },
    {
      id: 6,
      name: "Frank Wilson",
      job: "Data Analyst",
      dept: "Finance",
      date: "18-Aug-2018",
      gender: "Male",
      salary: "$61,000",
      location: "Austin",
      performance: "B",
      status: "Inactive",
    },
    {
      id: 7,
      name: "Grace Miller",
      job: "HR Specialist",
      dept: "HR",
      date: "29-Sep-2019",
      gender: "Female",
      salary: "$52,000",
      location: "Seattle",
      performance: "A",
      status: "Active",
    },
    {
      id: 8,
      name: "Henry Davis",
      job: "DevOps Engineer",
      dept: "Engineering",
      date: "03-Apr-2020",
      gender: "Male",
      salary: "$80,000",
      location: "Denver",
      performance: "B",
      status: "Active",
    },
    {
      id: 9,
      name: "Isabella White",
      job: "Content Strategist",
      dept: "Marketing",
      date: "08-Nov-2021",
      gender: "Female",
      salary: "$57,000",
      location: "Miami",
      performance: "C",
      status: "Active",
    },
    {
      id: 10,
      name: "Jack Taylor",
      job: "Cloud Architect",
      dept: "Engineering",
      date: "14-Jun-2017",
      gender: "Male",
      salary: "$120,000",
      location: "Dallas",
      performance: "A",
      status: "Active",
    },
    {
      id: 11,
      name: "Katherine Young",
      job: "UX Researcher",
      dept: "Product",
      date: "27-Jan-2019",
      gender: "Female",
      salary: "$68,000",
      location: "Houston",
      performance: "B",
      status: "Inactive",
    },
    {
      id: 12,
      name: "Liam Scott",
      job: "SEO Specialist",
      dept: "Marketing",
      date: "09-Mar-2020",
      gender: "Male",
      salary: "$59,000",
      location: "San Diego",
      performance: "A",
      status: "Active",
    },
    {
      id: 13,
      name: "Mia Adams",
      job: "Recruiter",
      dept: "HR",
      date: "21-Jul-2018",
      gender: "Female",
      salary: "$50,000",
      location: "New York",
      performance: "C",
      status: "Inactive",
    },
    {
      id: 14,
      name: "Noah Clark",
      job: "Data Scientist",
      dept: "Finance",
      date: "06-Sep-2019",
      gender: "Male",
      salary: "$110,000",
      location: "Boston",
      performance: "A",
      status: "Active",
    },
    {
      id: 15,
      name: "Olivia Martinez",
      job: "QA Tester",
      dept: "Product",
      date: "11-Dec-2020",
      gender: "Female",
      salary: "$55,000",
      location: "Seattle",
      performance: "B",
      status: "Active",
    },
    {
      id: 16,
      name: "Peter Lewis",
      job: "Fullstack Dev",
      dept: "Engineering",
      date: "24-Feb-2021",
      gender: "Male",
      salary: "$90,000",
      location: "Austin",
      performance: "C",
      status: "Active",
    },
    {
      id: 17,
      name: "Quinn Walker",
      job: "Marketing Lead",
      dept: "Marketing",
      date: "30-May-2017",
      gender: "Female",
      salary: "$73,000",
      location: "Los Angeles",
      performance: "A",
      status: "Inactive",
    },
    {
      id: 18,
      name: "Ryan Hall",
      job: "Support Engineer",
      dept: "Support",
      date: "02-Aug-2018",
      gender: "Male",
      salary: "$58,000",
      location: "Miami",
      performance: "B",
      status: "Active",
    },
    {
      id: 19,
      name: "Sophia Allen",
      job: "HR Coordinator",
      dept: "HR",
      date: "17-Oct-2019",
      gender: "Female",
      salary: "$53,000",
      location: "Denver",
      performance: "A",
      status: "Active",
    },
    {
      id: 20,
      name: "Thomas King",
      job: "Product Designer",
      dept: "Product",
      date: "12-Jan-2020",
      gender: "Male",
      salary: "$76,000",
      location: "Dallas",
      performance: "C",
      status: "Active",
    },
    {
      id: 21,
      name: "Uma Rivera",
      job: "UI Developer",
      dept: "Engineering",
      date: "25-Apr-2021",
      gender: "Female",
      salary: "$69,000",
      location: "San Francisco",
      performance: "B",
      status: "Active",
    },
    {
      id: 22,
      name: "Victor Perez",
      job: "QA Automation",
      dept: "Product",
      date: "08-Jun-2017",
      gender: "Male",
      salary: "$66,000",
      location: "New York",
      performance: "A",
      status: "Inactive",
    },
    {
      id: 23,
      name: "Wendy Cox",
      job: "Financial Analyst",
      dept: "Finance",
      date: "19-Nov-2018",
      gender: "Female",
      salary: "$84,000",
      location: "Boston",
      performance: "B",
      status: "Active",
    },
    {
      id: 24,
      name: "Xavier Brooks",
      job: "System Admin",
      dept: "Engineering",
      date: "07-Mar-2019",
      gender: "Male",
      salary: "$77,000",
      location: "Chicago",
      performance: "C",
      status: "Active",
    },
    {
      id: 25,
      name: "Yara Bennett",
      job: "Growth Marketer",
      dept: "Marketing",
      date: "16-Jul-2020",
      gender: "Female",
      salary: "$62,000",
      location: "Houston",
      performance: "A",
      status: "Active",
    },
    {
      id: 26,
      name: "Zachary Reed",
      job: "Solutions Architect",
      dept: "Engineering",
      date: "28-Dec-2021",
      gender: "Male",
      salary: "$115,000",
      location: "Seattle",
      performance: "A",
      status: "Active",
    },
    {
      id: 27,
      name: "Amelia Torres",
      job: "Operations Manager",
      dept: "Support",
      date: "03-Sep-2017",
      gender: "Female",
      salary: "$85,000",
      location: "Austin",
      performance: "B",
      status: "Inactive",
    },
    {
      id: 28,
      name: "Benjamin Price",
      job: "ML Engineer",
      dept: "Engineering",
      date: "13-Feb-2019",
      gender: "Male",
      salary: "$102,000",
      location: "Los Angeles",
      performance: "A",
      status: "Active",
    },
    {
      id: 29,
      name: "Charlotte Hughes",
      job: "Copywriter",
      dept: "Marketing",
      date: "20-May-2020",
      gender: "Female",
      salary: "$48,000",
      location: "Miami",
      performance: "C",
      status: "Active",
    },
    {
      id: 30,
      name: "Daniel Foster",
      job: "Technical Lead",
      dept: "Product",
      date: "04-Nov-2021",
      gender: "Male",
      salary: "$97,000",
      location: "San Diego",
      performance: "A",
      status: "Active",
    },
  ];

  // Table UI extracted so we can reuse inside modal
  const renderTable = () => (
    <div className="overflow-x-auto overflow-y-auto max-h-[500px]">
      <table className="w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100 sticky top-0">
          <tr>
            <th className="px-4 py-2 text-left border">ID</th>
            <th className="px-4 py-2 text-left border">Name</th>
            <th className="px-4 py-2 text-left border">Job Title</th>
            <th className="px-4 py-2 text-left border">Department</th>
            <th className="px-4 py-2 text-left border">Joining Date</th>
            <th className="px-4 py-2 text-left border">Gender</th>
            <th className="px-4 py-2 text-left border">Salary</th>
            <th className="px-4 py-2 text-left border">Location</th>
            <th className="px-4 py-2 text-left border">Performance</th>
            <th className="px-4 py-2 text-left border">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{row.id}</td>
              <td className="px-4 py-2 border">{row.name}</td>
              <td className="px-4 py-2 border">{row.job}</td>
              <td className="px-4 py-2 border">{row.dept}</td>
              <td className="px-4 py-2 border">{row.date}</td>
              <td className="px-4 py-2 border">{row.gender}</td>
              <td className="px-4 py-2 border">{row.salary}</td>
              <td className="px-4 py-2 border">{row.location}</td>
              <td className="px-4 py-2 border">{row.performance}</td>
              <td className="px-4 py-2 border">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="w-full flex flex-col">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title} Report</h2>

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

      {/* Report Table */}
      <div className="bg-white rounded-xl shadow p-6">
        {/* Action Bar */}
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center gap-2 bg-purple-600 text-white px-2 py-1 rounded-lg">
            <span>Add Report</span> <span className="text-lg font-bold">+</span>
          </button>
          <div className="flex items-center gap-3 text-gray-600">
            <FileSpreadsheet className="w-5 h-5 cursor-pointer hover:text-green-600" />
            <Download className="w-5 h-5 cursor-pointer hover:text-blue-600" />
            <Printer className="w-5 h-5 cursor-pointer hover:text-purple-600" />
            <FileText className="w-5 h-5 cursor-pointer hover:text-red-600" />
            <Maximize2
              className="w-5 h-5 cursor-pointer hover:text-gray-800"
              onClick={() => setIsFullscreen(true)}
            />
          </div>
        </div>

        {/* Table (normal view) */}
        <div className="overflow-auto max-h-[200px]">{renderTable()}</div>
      </div>

      {/* Footer Actions */}
      <div className="mt-6 flex gap-4">
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform">
          Download
        </button>
        <button className="px-6 py-3 rounded-xl border-2 border-orange-400 text-orange-500 font-semibold bg-white hover:bg-orange-50 hover:scale-105 transition-transform">
          Share
        </button>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-[#FDE5D7] z-50 flex flex-col p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">{title} Report - Fullscreen</h2>
            <X
              className="w-6 h-6 cursor-pointer hover:text-red-600"
              onClick={() => setIsFullscreen(false)}
            />
          </div>
          {/* Table */}
          <div className="overflow-auto bg-white">{renderTable()}</div>
          <div>
            {/* Footer Actions */}
      <div className="mt-6 flex gap-4">
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform">
          Download
        </button>
        <button className="px-6 py-3 rounded-xl border-2 border-orange-400 text-orange-500 font-semibold bg-white hover:bg-orange-50 hover:scale-105 transition-transform">
          Share
        </button>
      </div>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default ReportView;
