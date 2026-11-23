import React from "react";
import { Link } from "react-router";

// Data for the Interior Fan, based on the third item in the provided list.
const interiorFanData = {
  title: "VBREEZE Interior HVLS Fans",
  use: "Homes & Premium Interiors",
  // Using a placeholder image for a visually appealing, domestic, or high-end interior setting
  img: "/products/interiorfan.png",
  desc: "Elegant, quiet, and energy-efficient fans crafted for modern homes and lifestyle spaces. Experience superior air movement and whisper-quiet operation without sacrificing interior design elegance. Perfect for lofts, large living rooms, and open-plan concepts.",
  features: [
    "Ultra-Quiet Operation (<35dB)",
    "Sleek, Minimalist Blade Design",
    "Smart Home Integration Ready",
    "Year-Round Comfort (Summer Cooling & Winter Destratification)",
    "Optimized for Ceiling Heights up to 30ft",
  ],
};

export const InteriorProductDetailsPage = () => {
  const handleRequestQuote = () => {};

  const fan = interiorFanData;

  return (
    <div className="min-h-screen bg-white p-4 md:p-10 font-sans">
      {/* Custom Message Box for Action Feedback */}
      <div
        id="message-box"
        className="hidden fixed top-5 right-5 z-50 bg-green-500 text-white p-4 rounded-lg shadow-xl transition duration-300"
      >
        Message
      </div>

      <div className="max-w-6xl mx-auto bg-gray-50 shadow-2xl rounded-xl overflow-hidden border border-gray-100">
        {/* Header - Back Button */}
        <header className="p-6 border-b border-gray-200 md:flex items-center justify-between">
          <Link
            to="/products" // In a real app, this would be a link back to the main products page
            className="text-sky-600 hover:text-teal-800 transition duration-150 flex items-center text-sm font-medium pb-10 md:pb-0 "
          >
            <svg
              className="w-4 h-4 mr-1 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Back to Products
          </Link>
          <div className="text-xl font-bold text-gray-800">{fan.title}</div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-12">
          {/* Image Section */}
          <div className="lg:order-first">
            <img
              src={fan.img}
              alt={fan.title}
              className="w-full h-auto object-cover rounded-xl shadow-lg transform hover:scale-[1.01] transition duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/800x600/0f766e/ffffff?text=Image+Unavailable";
              }}
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col space-y-8">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
              {fan.title}
            </h1>

            <div className="space-y-4">
              <p className="text-xl font-semibold text-teal-600 uppercase tracking-wider">
                Ideal for:{" "}
                <span className="text-gray-700 font-normal">{fan.use}</span>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {fan.desc}
              </p>
            </div>

            {/* Key Features */}
            <div className="p-4 bg-teal-50 rounded-lg">
              <h3 className="text-xl font-bold text-teal-700 mb-3">
                Key Advantages
              </h3>
              <ul className="list-inside space-y-2 text-gray-700">
                {fan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-lime-500 mr-2 flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <Link
              to="/contact"
              //   onClick={handleRequestQuote}
              className="text-center mt-6 w-full md:w-auto px-8 py-4 bg-teal-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-4 focus:ring-teal-300"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
