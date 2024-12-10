"use client";

// import { FaCar, FaRegCalendarAlt, FaInbox } from "react-icons/fa";
// import { AiOutlineSetting } from "react-icons/ai";
// import { FiLogOut } from "react-icons/fi";
// import { MdInsights } from "react-icons/md";
// import { BiHelpCircle } from "react-icons/bi";
// import { BsToggleOn } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white px-4 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-blue-500 text-2xl font-bold">MORENT</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search something here"
              className="bg-gray-100 px-4 py-2 rounded-full outline-none text-sm"
            />
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-6 p-4 lg:p-8">
        {/* Sidebar */}
        <aside className="col-span-12 lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-6">Main Menu</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-blue-500 font-bold">
{/*               <FaCar /> */}
              <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-500 hover:text-blue-500">
{/*               <FaCar /> */}
              <span>Car Rent</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-500 hover:text-blue-500">
{/*               <MdInsights /> */}
              <span>Insight</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-500 hover:text-blue-500">
{/*               <FaRegCalendarAlt /> */}
              <span>Calendar</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-500 hover:text-blue-500">
{/*               <FaInbox /> */}
              <span>Inbox</span>
            </li>
          </ul>

          <h2 className="text-lg font-bold mt-8 mb-6">Preferences</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-gray-500 hover:text-blue-500">
{/*               <AiOutlineSetting /> */}
              <span>Settings</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-500 hover:text-blue-500">
{/*               <BiHelpCircle /> */}
              <span>Help & Center</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-500 hover:text-blue-500">
{/*               <BsToggleOn /> */}
              <span>Dark Mode</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-500 hover:text-blue-500">
{/*               <FiLogOut /> */}
              <span>Log Out</span>
            </li>
          </ul>
        </aside>

        {/* Main Section */}
        <main className="col-span-12 lg:col-span-9 space-y-6">
          {/* Details Rental */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Details Rental</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            
              {/* Map Section */}
<div className="bg-gray-200 h-48 lg:h-72 rounded-lg flex items-center justify-center relative">
  <img
    src="/Maps.png" // Replace with the path to your map image
    alt="Map"
    className="absolute inset-0 w-full h-full object-cover rounded-lg"
  />
  <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">

  </div>
</div>
             {/* Rental Info */}
<div>
  <div className="flex items-center space-x-4 mb-4">
    {/* Car Image */}
    <img
      src="/Look1.png" // Replace with actual image path
      alt="Nissan GT-R"
      className="w-16 h-16 object-cover rounded-lg"
    />
    <div>
      <h4 className="text-blue-500 font-bold">Nissan GT - R</h4>
      <p className="text-sm text-gray-500">Sport Car</p>
    </div>
  </div>
  <div className="space-y-2">
    <div className="grid grid-cols-2 gap-2">
      <div>
        <h5 className="text-sm font-bold">Pick - Up</h5>
        <p className="text-sm text-gray-500">Kota Semarang</p>
        <p className="text-sm text-gray-500">20 July 2022</p>
        <p className="text-sm text-gray-500">07:00</p>
      </div>
      <div>
        <h5 className="text-sm font-bold">Drop - Off</h5>
        <p className="text-sm text-gray-500">Kota Semarang</p>
        <p className="text-sm text-gray-500">21 July 2022</p>
        <p className="text-sm text-gray-500">01:00</p>
      </div>
    </div>
    <div className="mt-4">
      <h5 className="text-sm font-bold">Total Rental Price</h5>
      <p className="text-lg font-bold text-blue-500">$80.00</p>
    </div>
  </div>
</div>

            </div>
          </div>

          {/* Additional Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
           {/* Top 5 Car Rentals */}
<div className="bg-white p-6 rounded-lg shadow-md">
  <h3 className="text-lg font-bold mb-4"></h3>
  <div className="flex items-center justify-center">
    {/* Add Image Instead of Placeholder */}
    <img
      src="/Top5.png" // Replace with your image path
      alt="Top 5 Car Rentals"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>


           
            {/* Recent Transactions */}
<div className="bg-white p-6 rounded-lg shadow-md">
  <h3 className="text-lg font-bold mb-4">Recent Transactions</h3>
  <ul className="space-y-4">
    <li className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Car Image */}
        <img
          src="/car12.png" // Replace with actual image path
          alt="Nissan GT-R"
          className="w-12 h-12 object-cover rounded-lg"
        />
        <div>
          <h4 className="font-bold">Nissan GT - R</h4>
          <p className="text-sm text-gray-500">20 July</p>
        </div>
      </div>
      <p className="text-blue-500 font-bold">$80.00</p>
    </li>
    <li className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Car Image */}
        <img
          src="/car13.png" // Replace with actual image path
          alt="Koenigsegg"
          className="w-12 h-12 object-cover rounded-lg"
        />
        <div>
          <h4 className="font-bold">Koenigsegg</h4>
          <p className="text-sm text-gray-500">19 July</p>
        </div>
      </div>
      <p className="text-blue-500 font-bold">$99.00</p>
    </li>
    <li className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Car Image */}
        <img
          src="/car14.png" // Replace with actual image path
          alt="Rolls-Royce"
          className="w-12 h-12 object-cover rounded-lg"
        />
        <div>
          <h4 className="font-bold">Rolls-Royce</h4>
          <p className="text-sm text-gray-500">18 July</p>
        </div>
      </div>
      <p className="text-blue-500 font-bold">$96.00</p>
    </li>
  </ul>
  <a href="#" className="text-blue-500 text-sm mt-4 block hover:underline">
    View All
  </a>
</div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;





