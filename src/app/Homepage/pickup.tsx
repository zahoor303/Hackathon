import React from "react";

import DropOffSection from "../Homepage/drop";

const PickUpSection = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mx-auto sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
      {/* Pick-Up Header */}
      <div className="flex items-center mb-4">
        <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
        <h3 className="text-lg font-bold text-gray-900">Pick - Up</h3>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Locations Dropdown */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700 mb-1">
            Locations
          </label>
          <div className="relative">
            <select
              className="border border-gray-300 text-gray-500 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled selected>
                Select your city
              </option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
            <span className="absolute inset-y-0 right-4 flex items-center text-gray-500 pointer-events-none">
              ▼
            </span>
          </div>
        </div>

        {/* Date Picker */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700 mb-1">Date</label>
          <div className="relative">
            <input
              type="date"
              className="border border-gray-300 text-gray-500 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Time Picker */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700 mb-1">Time</label>
          <div className="relative">
            <input
              type="time"
              className="border border-gray-300 text-gray-500 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Drop-Off Section */}
      <DropOffSection />
    </div>
  );
};

export default PickUpSection;
