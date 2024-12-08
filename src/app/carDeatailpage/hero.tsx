import { AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import Image from "next/image";
import veiw from "@/app/assests/View.png"
import veiw1 from "@/app/assests/View 1.png"
import veiw2 from "@/app/assests/View 2.png"
import veiw3 from "@/app/assests/View 3.png"
import image from "@/app/assests/Image.png"
import Navbar from "../Homepage/navbar";
import review from "@/app/assests/Reviews (1).png"
import recent from "@/app/assests/Recent Car.png"


<Navbar />
const HeroSection = () => {
  return (
    <div className="bg-gray-100 py-8 px-6 sm:px-10 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
        {/* Left Content */}
        <div className="lg:col-span-7 bg-blue-100 rounded-lg p-6 flex flex-col">
          <h2 className="text-blue-900 text-2xl font-bold mb-4">
            Sports car with the best design and acceleration
          </h2>
          <p className="text-gray-700 mb-6">
            Safety and comfort while driving a futuristic and elegant sports car
          </p>
          <Image
            src={veiw} // Replace with your car image path
            alt="Sports Car"
            width={600}
            height={300}
            className="rounded-lg"
          />
          {/* Car Thumbnails - Small images showcasing different views */}
          {/* Car Thumbnails */}
          <div className="flex mt-4 gap-4">
            <Image
              src={veiw1}// Replace with the interior image path
              alt="Interior"
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-md cursor-pointer border hover:border-blue-500"
            />
            <Image
              src={veiw2} // Replace with another thumbnail image
              alt="Dashboard"
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-md cursor-pointer border hover:border-blue-500"
            />
            <Image
              src={veiw3} // Replace with another thumbnail image
              alt="Seat"
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-md cursor-pointer border hover:border-blue-500"
            />
          </div>
        </div>

        {/* Right Content - Car details and pricing */}
        {/* Right Content */}
        <div className="lg:col-span-5 bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-blue-900 text-2xl font-bold mb-2">
              Nissan GT - R
            </h3>
            <p className="text-sm text-gray-500 mb-6">440+ Reviewer</p>
            <p className="text-gray-600 mb-6">
              NISMO has become the embodiment of Nissan's outstanding
              performance, inspired by the most unforgiving proving ground, the
              "race track".
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="text-sm text-gray-500 font-bold mr-2">
                  Type Car:
                </span>
                <span className="text-sm text-gray-700">Sport</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 font-bold mr-2">
                  Capacity:
                </span>
                <span className="text-sm text-gray-700">2 Person</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 font-bold mr-2">
                  Steering:
                </span>
                <span className="text-sm text-gray-700">Manual</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 font-bold mr-2">
                  Gasoline:
                </span>
                <span className="text-sm text-gray-700">70L</span>
              </div>
            </div>
          </div>
          {/* Pricing and Button */}
          <div className="flex items-center justify-between mt-6">
            <div>
              <p className="text-blue-500 text-2xl font-bold">$80.00/ days</p>
              <p className="text-sm text-gray-400 line-through">$100.00</p>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              Rent Now
            </button>
          </div>
        </div>

      </div>

      <div>
                <Image
                src={review}
                alt="Car Image"
                className="w-full h-auto rounded-lg"/> 
            </div>
           
           <div>
            <Image
                src={recent}
                alt="Car Image"/>
           </div>
           
           
           
           
            {/* footer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Vision */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">MORENT</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">About</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:underline">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Featured
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Partnership
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Business Relation
              </a>
            </li>
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Community</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Podcast
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Invite a friend
              </a>
            </li>
          </ul>
        </div>

        {/* Socials Section */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Socials</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:underline">
                Discord
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider and Bottom Footer Section */}
      <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm text-gray-500 text-center md:text-left">
          ©2022 MORENT. All rights reserved
        </p>

        {/* Links */}
        <div className="flex space-x-6 text-sm text-gray-500 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy & Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Condition
          </a>
        </div>
      </div>

    </div>
    
    
  );    
};
export default HeroSection;





