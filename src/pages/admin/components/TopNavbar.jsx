import React from "react";
import { MessageSquare, Bell } from "lucide-react";

const TopNavbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white px-6 py-4 shadow-sm">
      {/* Left: Logo */}
      <div className="text-xl font-bold text-gray-900 cursor-pointer">
        MyDashboard
      </div>

      {/* Right: Icons + Profile */}
      <div className="flex items-center space-x-6">
        <button
          aria-label="Messages"
          className="relative text-gray-600 hover:text-gray-900"
        >
          <MessageSquare size={24} />
          {/* Example badge */}
          <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
            3
          </span>
        </button>

        <button
          aria-label="Notifications"
          className="relative text-gray-600 hover:text-gray-900"
        >
          <Bell size={24} />
          {/* Example badge */}
          <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
            5
          </span>
        </button>

        {/* Profile */}
        <div className="w-10 h-10 rounded-full bg-gray-400 cursor-pointer flex items-center justify-center text-white font-semibold">
          JD
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
