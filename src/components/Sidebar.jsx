import React from "react";
import CategoryItem from "./CategoryItem";

const Sidebar = ({collapsed, setCollapsed, onReportClick}) => {
  
  return (
    <aside className={`${collapsed ? "w-34 items-center" : "w-1/3"} p-6 bg-[#fbf2ec] transition-all duration-500 flex flex-col`}>
      {/* Filter Title */}
      <div className="flex justify-between items-center mb-6">
        {!collapsed && (
        <div className="flex items-center gap-4 text-blue-600 font-medium">
          <img src="/src/assets/control.png" alt="control icon" className="h-4" />
          <span>Categories wise Filter</span>
        </div>
        )}
        {/* Menu button should always show */}
        <div className="p-3 cursor-pointer hover:bg-[#FDE5D7] rounded-lg" onClick={() => setCollapsed(!collapsed)}>
          <img src="/src/assets/menu.png" alt="menu icon" className={`h-6 w-6 transform transition-transform duration-300 ${
              collapsed ? "rotate-90" : ""
            }`} />
        </div>
      </div>

      {/* Categories List */}
      <ul className="space-y-4">
        <CategoryItem
          title="Compliance Report"
          color="bg-orange-100"
          items={[
            { label: "Finance Compliance", color: "blue" },
            { label: "Labour Compliance", color: "green" },
            { label: "Factory Compliance", color: "yellow" },
            { label: "Secretarial Compliance", color: "red" },
          ]}
          collapsed={collapsed}
          onReportClick={onReportClick}
        />
        <CategoryItem
          title="License Report"
          color="bg-green-100"
          items={[
            { label: "All license", color: "blue" },
            { label: "Expiry License", color: "green" },
          ]}
          collapsed={collapsed}
          onReportClick={onReportClick}
        />
        <CategoryItem
          title="Notice & Inspection"
          color="bg-yellow-100"
          items={[
            { label: "Notice A", color: "blue" },
            { label: "Notice B", color: "red" },
          ]}
          collapsed={collapsed}
          onReportClick={onReportClick}
        />
        <CategoryItem
          title="Litigation"
          color="bg-purple-100"
          items={[
            { label: "Case A", color: "purple" },
            { label: "Case B", color: "orange" },
          ]}
          collapsed={collapsed}
          onReportClick={onReportClick}
        />
      </ul>
    </aside>
  );
};

export default Sidebar;
