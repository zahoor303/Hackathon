"use client";

import Image from "next/image";
import { useState } from "react";
import look from "@/app/assests/Look.png"

const PaymentPage = () => {
  const [promoCode, setPromoCode] = useState("");

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white px-4 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-blue-500 text-2xl font-bold">MORENT</h1>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 py-8 lg:px-8">
        {/* Left Content */}
        <div className="lg:col-span-8 space-y-6">
          {/* Billing Info */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Billing Info
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Please enter your billing info
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Address"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Town / City"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Rental Info */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Rental Info
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Please select your rental date
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Pick-Up Info */}
              <div>
                <h4 className="text-sm font-bold text-gray-700 mb-2">Pick-Up</h4>
                <div className="space-y-2">
                  <select
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Select your city</option>
                  </select>
                  <input
                    type="date"
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="time"
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Drop-Off Info */}
              <div>
                <h4 className="text-sm font-bold text-gray-700 mb-2">
                  Drop-Off
                </h4>
                <div className="space-y-2">
                  <select
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Select your city</option>
                  </select>
                  <input
                    type="date"
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="time"
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Payment Method
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Please enter your payment method
            </p>
            <div className="space-y-4">
              {/* Credit Card */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-gray-700">Credit Card</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Card number"
                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Expiration Date"
                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Card Holder"
                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Other Payment Options */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment" className="form-radio" />
                  <span>PayPal</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment" className="form-radio" />
                  <span>Bitcoin</span>
                </label>
              </div>
            </div>
          </div>

          {/* Confirmation */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Confirmation
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              We are getting to the end. Just a few clicks and your rental is
              ready!
            </p>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm text-gray-600">
                  I agree with sending marketing and newsletter emails. No spam,
                  promised!
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm text-gray-600">
                  I agree with our terms and conditions and privacy policy.
                </span>
              </label>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-6 hover:bg-blue-600 transition">
              Rent Now
            </button>
          </div>
        </div>

        {/* Right Content - Rental Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Rental Summary
            </h3>
            <div className="flex items-center mb-4">
              <Image
                src={look}
                alt="Nissan GT - R"
                width={100}
                height={60}
                className="rounded-md"
              />
              <div className="ml-4">
                <h4 className="text-gray-900 font-bold">Nissan GT - R</h4>
                <p className="text-sm text-gray-500">440+ Reviewer</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </p>
            <div className="flex justify-between text-sm text-gray-700">
              <p>Subtotal</p>
              <p>$80.00</p>
            </div>
            <div className="flex justify-between text-sm text-gray-700 mb-4">
              <p>Tax</p>
              <p>$0</p>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="text"
                placeholder="Apply promo code"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Apply now
              </button>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900">
              <p>Total Rental Price</p>
              <p>$80.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-10 px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-blue-500 text-2xl font-bold">MORENT</h2>
            <p className="text-sm text-gray-500 mt-2">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">About</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Community</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Socials</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 flex justify-between items-center">
          <p className="text-sm text-gray-500">©2022 MORENT. All rights reserved</p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#">Privacy & Policy</a>
            <a href="#">Terms & Condition</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PaymentPage;
