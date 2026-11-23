import React from "react";
import { Link } from "react-router";

// Data updated with brand-consistent naming and subtle logic for styling
const comparisonData = {
  pmsm: {
    title: "VBREEZE PMSM Motor (Our Choice)",
    // Using brand slate-900 for text and sky-600 for high-contrast accents
    headerColor: "text-sky-600",
    bgColor: "bg-white",
    features: [
      { id: 1, text: "Permanent magnet synchronous, high-temperature resistant out rotor motor." },
      { id: 2, text: "Super energy efficient." },
      { id: 3, text: "Small size and light weight, reducing structural load." },
      { id: 4, text: "Ultra-low noise at only 38dB." },
      { id: 5, text: "Simple, direct-drive structure." },
      { id: 6, text: "Wide frequency modulation (0-50Hz) for precise control." },
      { id: 7, text: "Direct Drive motor design, making it completely maintenance-free." },
      { id: 8, text: "No running hazard (eliminates risks like gearbox oil leakage)." },
    ],
  },
  gearMotor: {
    title: "Traditional Gear Motor",
    headerColor: "text-slate-500",
    bgColor: "bg-slate-100/50",
    features: [
      { id: 1, text: "Uses asynchronous ordinary motor + gearbox, consuming significantly more energy." },
      { id: 2, text: "Large and heavy, requiring robust mounting structures." },
      { id: 3, text: "Loud operation with noise levels around 60dB." },
      { id: 4, text: "Complex mechanical structure." },
      { id: 5, text: "Narrow Frequency Modulation Band (25-50Hz)." },
      { id: 6, text: "Requires frequent, costly maintenance (changing seals, adding gearbox oil)." },
      { id: 7, text: "Presents hidden dangers such as gearbox leakage." },
    ],
  },
};

const MotorStandout = () => {
  const { pmsm, gearMotor } = comparisonData;

  return (
    // Corrected padding (py-24) and background (bg-slate-50) to match Products section
    <section className="py-24 bg-slate-50 text-slate-900 overflow-x-hidden">
      <div className="container mx-auto px-6">
        
        {/* Main Heading and Introduction - Styled like "Our Products" */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-semibold text-sky-500 mb-4"
            data-aos="fade-down"
          >
            The Core Difference
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            VBREEZE Fans exclusively use advanced Permanent Magnet Synchronous
            Motors (PMSM) for unparalleled efficiency, reliability, and silence.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* PMSM Motor - The Advantage */}
          <div 
            className={`p-8 rounded-2xl shadow-xl ${pmsm.bgColor} border-t-4 border-sky-500`}
            data-aos="fade-right"
          >
            <h3 className={`text-2xl font-extrabold mb-6 flex items-center ${pmsm.headerColor}`}>
              <span className="bg-sky-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3 text-sm">
                ✓
              </span>
              {pmsm.title}
            </h3>
            <ul className="space-y-4">
              {pmsm.features.map((f) => (
                <li key={f.id} className="flex items-start text-gray-700">
                  <svg className="h-6 w-6 text-sky-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="leading-relaxed">
                    <span className="font-bold text-slate-900">{f.text.split(",")[0].trim()}</span>
                    {f.text.includes(",") ? f.text.substring(f.text.indexOf(",")) : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gear Motor - The Drawbacks */}
          <div 
            className={`p-8 rounded-2xl shadow-md ${gearMotor.bgColor} border-t-4 border-slate-300 opacity-80`}
            data-aos="fade-left"
          >
            <h3 className={`text-2xl font-extrabold mb-6 flex items-center ${gearMotor.headerColor}`}>
              <span className="bg-slate-400 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3 text-sm">
                ✕
              </span>
              {gearMotor.title}
            </h3>
            <ul className="space-y-4 text-gray-600">
              {gearMotor.features.map((f) => (
                <li key={f.id} className="flex items-start">
                  <svg className="h-5 w-5 text-slate-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-base leading-relaxed">
                    <span className="font-semibold">{f.text.split(",")[0].trim()}</span>
                    {f.text.includes(",") ? f.text.substring(f.text.indexOf(",")) : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action - Updated with brand colors and rounded-lg */}
        <div 
          className="mt-16 text-center p-10 bg-white rounded-2xl shadow-xl border-4 border-white max-w-4xl mx-auto"
          data-aos="zoom-in"
        >
          <h3 className="text-3xl font-bold text-slate-900">
            The VBREEZE Promise
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed text-lg">
            By choosing maintenance-free, silent PMSM technology, VBREEZE ensures a lower 
            Total Cost of Ownership (TCO) and unmatched reliability compared to 
            outdated gearbox systems.
          </p>
          <div className="mt-8">
            <Link
              to="/services"
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-medium transition shadow-md inline-block"
            >
              Explore Motor-Powered Fan Models
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotorStandout;