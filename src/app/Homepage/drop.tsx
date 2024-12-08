const DropOffSection = () => {
  return (
    <div className="mt-8">
      {/* Drop-Off Header */}
      <div className="flex items-center mb-4">
        <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
        <h3 className="text-lg font-bold text-gray-900">Drop - Off</h3>
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
          </div>
        </div>

        {/* Date Picker */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700 mb-1">Date</label>
          <input
            type="date"
            className="border border-gray-300 text-gray-500 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Time Picker */}
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700 mb-1">Time</label>
          <input
            type="time"
            className="border border-gray-300 text-gray-500 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default DropOffSection;
