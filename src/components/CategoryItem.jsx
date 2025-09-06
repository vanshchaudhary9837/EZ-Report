import React, { useState } from "react";

const CategoryItem = ({ title, color, items, collapsed, onReportClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle toggle only if not collapsed
  const handleToggle = () => {
    if (!collapsed) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <li
      className="relative group cursor-pointer hover:bg-[#FDE5D7] p-3 rounded-lg"
      onClick={handleToggle}
    >
      {/* Category Header  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Colored Icon (always visible) */}
          <span
            className={`rounded-lg p-3 flex items-center justify-center ${color} transition-transform duration-300 group-hover:scale-110`}
          >
            <img
              src="/src/assets/document.png"
              alt="doc-icon"
              className="h-5"
            />
          </span>

          {/* Title (hidden when collapsed) */}
          {!collapsed && <span className="font-medium">{title}</span>}
        </div>

        {/* Chevron only when expanded view */}
        {!collapsed && (
          <img
            src="/src/assets/down-chevron.png"
            alt="drop-icon"
            className={`h-4 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {/* Tooltip (when collapsed) */}
      {collapsed && (
        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 text-xs text-white bg-black rounded shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all whitespace-nowrap z-80">
          {title}
        </span>
      )}

      {/* Dropdown content (hidden when collapsed)*/}
      {!collapsed && isOpen && (
        <ul
          className={`mt-3 ml-12 space-y-3 text-sm font-medium transform origin-top transition-all duration-1000 ${
      isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
    }`}
        >
          {items.map((item, idx) => (
            <li key={idx} className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full`}
                  style={{ backgroundColor: item.color }}
                ></span>
                {item.label}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="px-3 py-1 rounded-lg cursor-pointer border-2 border-orange-400 text-orange-500  bg-[#fbf2ec] hover:bg-orange-50 hover:scale-105 transition-transform"
                >
                  Goto Page
                </a>
                <button
                  className="px-3 py-1 rounded-lg cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 text-white  shadow-md hover:shadow-lg hover:scale-105 transition-transform"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent toggling dropdown when clicking
                    onReportClick(item.label); // send report name to Hero
                  }}
                >
                  Report
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default CategoryItem;
