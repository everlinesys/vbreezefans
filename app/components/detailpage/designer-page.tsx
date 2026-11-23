import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

// 1. Data Structure for the four Designer/Premium HVLS Fan models
// Note: Adjusted specs for a "Designer" line to be smaller, quieter, and higher-tech
const fanSpecs = [
  {
    diameter: "11ft",
    ratedCurrent: "1.5A",
    ratedTorque: "50 N.m @ 100 RPM",
    speed: "100 Maximum RPM",
    ratedPower: "0.4kW",
    airVolume: "5530m³/Min",
    weight: "38kg(Approximate)",
    controls: "Variable Speed",
  },
  {
    diameter: "16ft",
    ratedCurrent: "3.2A",
    ratedTorque: "90 N.m @ 80 RPM",
    speed: "80 Maximum RPM",
    ratedPower: "0.75KW or 1hp",
    airVolume: "12670m³/min",
    weight: "60kg(Approximate)",
    controls: "Variable Speed / Remote Controls",
  },
  {
    diameter: "20ft",
    ratedCurrent: "4.5A",
    ratedTorque: "150 N.m @ 60 RPM",
    speed: "60 Maximum RPM",
    ratedPower: "1.1KW or 1.5hp",
    airVolume: "14650m³/min",
    weight: "92kg(Approximate)",
    controls: "Variable Speed / Remote Controls",
  },
  {
    diameter: "24ft",
    ratedCurrent: "6A",
    ratedTorque: "270 N.m @ 50 RPM",
    speed: "50 Maximum RPM",
    ratedPower: "1.5KW or 2hp",
    airVolume: "15500m³/Min",
    weight: "103kg(Approximate)",
    controls: "Variable Speed",
  },
];

// 2. Main Component (renamed to DesignerFanDetailPage)
export const DesignerProductDetails = () => {
  let Navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  // Updated common specs for a premium/designer model
  const commonSpecs = {
    make: "V BREEZE SIGNATURE",
    blade: "High-Grade Aviation Aluminium (Sleek, Matte Finish)",
    ratedVoltage: "220V Single Phase",
    ratedEfficiency: "90% (Ultra-Efficient)",
    noOfBlades: "7 (Aerodynamic Profile)",
    phase: "Single Phase (Focus on low-power, high-efficiency)",
    motor: "Permanent Magnet Synchronous Motor (PMSM) - Direct Drive",
    mountingHeight: "Minimum 12ft Finished floor to Fan",
    safety:
      "Triple-Security System: Anti-Drop Plate, Safety Cable, and Blade Retention Clips.",
    noise: "35dB (Whisper Quiet Operation)", // Lower noise for designer spaces
    aesthetics:
      "Slim Motor Hub and Customizable Finishes (e.g., Brushed Nickel, Matte Black)",
    warranty: "5-Year Full Warranty",
  };

  const tableHeaders = [
    "Diameter",
    "Rated Current",
    "Rated Torque",
    "Maximum Speed",
    "Rated Power",
    "Air Volume",
    "Weight",
    "Controls",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10 font-['Inter',_sans-serif] antialiased">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header - Back Button and Title Area */}
        <header className="p-6 border-b border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between">
          <Link
            to="/products"
            className="text-sky-600 hover:text-sky-800 transition duration-150 flex items-center text-sm font-medium pb-4 md:pb-0"
            // onClick={(e) => { e.preventDefault(); console.log("Navigating back to product list."); }}
          >
            <svg
              className="w-4 h-4 mr-1"
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
            Back
          </Link>
          <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
            VBREEZE Signature Designer HVLS Series
          </h1>
        </header>

        <div className="p-8 md:p-12">
          {/* Introduction & Image (Updated for Designer) */}
          <div className="mb-12 text-center">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Experience the perfect blend of **uncompromising performance** and{" "}
              **architectural elegance**. The Signature Series is engineered to
              provide **whisper-quiet**, powerful air movement for{" "}
              <span className="font-extrabold text-slate-900">
                corporate lobbies, high-end commercial spaces, and modern
                venues.
              </span>{" "}
            </p>

            <div className="mx-auto max-w-4xl">
              <img
                src="/products/designerfan.png" // Changed image source
                alt="Signature Designer HVLS Fan in Modern Commercial Space"
                className="w-full h-48 sm:h-64 rounded-xl shadow-xl border-4 border-white object-cover transition duration-300 hover:shadow-2xl"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/1000x300/0f172a/ffffff?text=Designer+HVLS+Fan+in+Modern+Space"; // Placeholder reflects designer focus
                }}
              />
            </div>
          </div>

          {/* DESKTOP TABLE VERSION */}
          <div className="shadow-xl rounded-xl border border-gray-200 bg-white hidden md:block mt-10">
            <h2 className="text-2xl font-bold p-6 bg-slate-700 text-white rounded-t-xl">
              Technical Specifications Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider sticky left-0 bg-slate-50 z-20">
                      Parameter
                    </th>
                    {fanSpecs.map((spec) => (
                      <th
                        key={spec.diameter}
                        className="py-4 px-6 text-lg font-extrabold text-slate-800 text-center"
                      >
                        {spec.diameter}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-100">
                  {tableHeaders.map((header, rowIndex) => (
                    <tr
                      key={header}
                      className="hover:bg-slate-50 transition-colors duration-150"
                    >
                      <td className="py-4 px-6 text-sm font-bold text-gray-900 whitespace-nowrap sticky left-0 bg-white z-10 border-r border-gray-100">
                        {header}
                      </td>

                      {fanSpecs.map((spec, colIndex) => {
                        const value =
                          {
                            Diameter: spec.diameter,
                            "Rated Current": spec.ratedCurrent,
                            "Rated Torque": spec.ratedTorque,
                            "Maximum Speed": spec.speed,
                            "Rated Power": spec.ratedPower,
                            "Air Volume": spec.airVolume,
                            Weight: spec.weight,
                            Controls: spec.controls,
                          }[header] || "-";

                        return (
                          <td
                            key={colIndex}
                            className="py-4 px-6 text-sm text-gray-800 text-center"
                          >
                            {value}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* MOBILE VERSION: STACKED CARDS */}
          {/* <div className="md:hidden grid grid-cols-1 gap-6 mt-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Model Specifications</h2>
            {fanSpecs.map((spec) => (
              <div
                key={spec.diameter}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-200" data-aos="slide-up"
              >
                <h3 className="text-xl font-bold text-slate-700 mb-4 border-b pb-2">
                  {spec.diameter} Model
                </h3>

                <ul className="space-y-3 text-gray-700 text-base">
                  {Object.entries(spec).map(([key, value]) => (
                    <li key={key} className="flex justify-between items-center border-b border-gray-50/50 pb-2">
                      <strong className="text-gray-900 ">{key.replace(/([A-Z])/g, ' $1').trim()}:</strong>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}
          <div className="md:hidden grid grid-cols-1 gap-4 mt-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Model Specifications
            </h2>

            {fanSpecs.map((spec) => (
              <div
                key={spec.diameter}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-200"
                data-aos="slide-up"
              >
                <h3 className="text-lg font-semibold text-slate-700 mb-3 border-b pb-1">
                  {spec.diameter} Model
                </h3>

                <ul className="space-y-2 text-gray-700 text-sm">
                  {Object.entries(spec).map(([key, value]) => (
                    <li
                      key={key}
                      className="flex justify-between items-center border-b border-gray-100 pb-1"
                    >
                      <strong className="text-gray-900 text-sm">
                        {key.replace(/([A-Z])/g, " $1").trim()}:
                      </strong>
                      <span className="text-[13px] text-gray-600">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* COMMON SPECIFICATIONS */}
          {/* <div className="mt-20 p-8 bg-gray-50 rounded-xl shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-slate-700 mb-8 border-b pb-4 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              **Premium Features** Across All Signature HVLS Models
            </h2>

            <div className="grid md:grid-cols-2 gap-y-6 gap-x-12 text-lg text-gray-700">
              <ul className="space-y-4">
                <li>
                  <strong className="text-gray-900">Blade Material:</strong>{" "}
                  {commonSpecs.blade}
                </li>
                <li>
                  <strong className="text-gray-900">Motor Type:</strong>{" "}
                  {commonSpecs.motor}
                </li>
                <li>
                  <strong className="text-gray-900">Noise Level:</strong>{" "}
                  <span className="font-extrabold text-green-700">
                    {commonSpecs.noise}
                  </span>
                </li>
                <li>
                  <strong className="text-gray-900">Aesthetics:</strong>{" "}
                  {commonSpecs.aesthetics}
                </li>
                <li>
                  <strong className="text-gray-900">No. of Blades:</strong>{" "}
                  {commonSpecs.noOfBlades}
                </li>
              </ul>

              <ul className="space-y-4">
                <li>
                  <strong className="text-gray-900">Rated Voltage:</strong>{" "}
                  {commonSpecs.ratedVoltage}
                </li>
                <li>
                  <strong className="text-gray-900">Rated Efficiency:</strong>{" "}
                  {commonSpecs.ratedEfficiency}
                </li>
                <li>
                  <strong className="text-gray-900">
                    Minimum Mounting Height:
                  </strong>{" "}
                  {commonSpecs.mountingHeight}
                </li>
                <li>
                  <strong className="text-gray-900">Safety System:</strong>{" "}
                  {commonSpecs.safety}
                </li>
                <li>
                  <strong className="text-gray-900">Full Warranty:</strong>{" "}
                  {commonSpecs.warranty}
                </li>
              </ul>
            </div>
          </div> */}
          <div className="mt-14 p-5 bg-gray-50 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold text-sky-700 mb-4 border-b pb-2 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-sky-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Core Features Across All Basic HVLS Models
            </h2>

            <div className="grid md:grid-cols-2 gap-y-4 gap-x-8 text-sm text-gray-700">
              <ul className="space-y-2">
                <li>
                  <strong className="text-gray-900">Blade Material:</strong>{" "}
                  {commonSpecs.blade}
                </li>
                <li>
                  <strong className="text-gray-900">Motor Type:</strong>{" "}
                  {commonSpecs.motor}
                </li>
                <li>
                  <strong className="text-gray-900">Noise Level:</strong>{" "}
                  {commonSpecs.noise}
                </li>
                <li>
                  <strong className="text-gray-900">Rated Efficiency:</strong>{" "}
                  {commonSpecs.ratedEfficiency}
                </li>
                <li>
                  <strong className="text-gray-900">No. of Blades:</strong>{" "}
                  {commonSpecs.noOfBlades}
                </li>
              </ul>

              <ul className="space-y-2">
                <li>
                  <strong className="text-gray-900">Rated Voltage:</strong>{" "}
                  {commonSpecs.ratedVoltage}
                </li>
                <li>
                  <strong className="text-gray-900">Phase:</strong>{" "}
                  {commonSpecs.phase}
                </li>
                <li>
                  <strong className="text-gray-900">
                    Minimum Mounting Height:
                  </strong>{" "}
                  {commonSpecs.mountingHeight}
                </li>
                <li>
                  <strong className="text-gray-900">Safety System:</strong>{" "}
                  {commonSpecs.safety}
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <button
              onClick={() => Navigate("/contact")}
              className="w-full sm:w-auto text-center px-12 py-5 bg-slate-600 text-white text-xl font-extrabold rounded-full shadow-lg hover:bg-slate-700 transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-slate-300 focus:ring-opacity-75 tracking-wide"
            >
              Request a Custom Quote
            </button>
            <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-lg mx-auto">
              Elevate your space. Contact us for a consultation on blade
              finishes and smart control integration.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Toast/Snackbar Message */}
      {showToast && (
        <div className="fixed bottom-6 right-6 p-4 bg-green-600 text-white rounded-lg shadow-xl transition-opacity duration-300 z-50 animate-pulse">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <p className="font-medium">
              Quote Request Sent! We'll be in touch shortly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignerProductDetails;
