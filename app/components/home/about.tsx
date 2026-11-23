import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 text-slate-900 overflow-hidden">

      {/* BLOCK 1: Origin Story (Text Left / Image Right) */}
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">

        {/* LEFT: CONTENT - THE SPARK */}
        <div className="lg:col-span-6" data-aos="fade-right">
          <h2 className="text-sm uppercase font-bold text-sky-600 tracking-widest mb-2">
            Our Legacy
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-slate-900">
            Big Air. Smart Engineering.
          </h3>

          {/* Core Narrative */}
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The journey of VBreeze didn’t begin in a factory or a boardroom.
            It started in a simple engineering workshop — with a spark of curiosity 
            and the belief that world-class airflow technology should be accessible to everyone.
          </p>

          <div className="p-6 bg-sky-50 border-l-4 border-sky-600 mb-6 shadow-sm">
            <p className="text-xl italic text-slate-800 font-medium">
              “India can build a better, affordable alternative.”
            </p>
            <p className="mt-2 text-sm text-gray-500">
              — Mr. Herald Kalappurackal Stanslavos, Founder
            </p>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            This idea took shape after Mr. Herald noticed a massive, expensive,
            imported HVLS fan at St. Joseph’s Syro-Malabar Church, Kalamasserry. 
            Inspired to create a locally-made, affordable solution, he designed 
            and built a prototype for his home parish, St. George Roman Catholic Church, Perumbavoor.
          </p>

          <p className="font-extrabold text-sky-700 text-lg">
            One idea can spark an entire movement.
          </p>
        </div>

        {/* RIGHT: IMAGE - THE INSPIRATION */}
        <div className="lg:col-span-6 w-full lg:order-2 order-1" data-aos="fade-left">
          <div className="relative p-2 bg-white rounded-3xl shadow-2xl transform hover:scale-[1.02] transition duration-300">
            <img
              src="/products/founder.jpg"
              alt="First HVLS fan installation in a church"
              className="rounded-2xl w-full object-cover aspect-4/3"
            />
            <p className="absolute bottom-6 left-6 text-white bg-black bg-opacity-40 px-3 py-1 rounded-md text-sm font-semibold">
                
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 container mx-auto my-16"></div>

      {/* BLOCK 2: Growth and Values (Image Left / Text Right) */}
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">

        {/* LEFT: IMAGE - GROWTH */}
        <div className="lg:col-span-6 w-full lg:order-1 order-2" data-aos="fade-right">
          <div className="relative p-2 bg-white rounded-3xl shadow-2xl transform hover:scale-[1.02] transition duration-300">
            <img
              src="/products/globalreach.jpg"
              alt="Timeline of VBreeze growth"
              className="rounded-2xl w-full object-cover aspect-4/3"
            />
            <p className="absolute bottom-6 left-6 text-white bg-black bg-opacity-40 px-3 py-1 rounded-md text-sm font-semibold">
                
            </p>
          </div>
        </div>

        {/* RIGHT: REMAINING CONTENT - VALUES */}
        <div className="lg:col-span-6 lg:order-2 order-1" data-aos="fade-left">
          <h3 className="text-sm uppercase font-bold text-sky-600 tracking-widest mb-2">
            Our Foundation
          </h3>
          <h3 className="text-4xl font-extrabold mb-8 text-slate-900">
            Built on Three Core Pillars
          </h3>

          <ul className="space-y-6 mb-8 text-gray-700">
            {/* Value 1 */}
            <li className="flex items-start">
              <span className="text-2xl font-bold text-sky-600 mr-4 mt-1">01.</span>
              <div>
                <strong className="text-xl block text-slate-900">Uncompromised Quality</strong>
                <p>Deliver world-class engineering quality and safety in every single fan we build.</p>
              </div>
            </li>
            {/* Value 2 */}
            <li className="flex items-start">
              <span className="text-2xl font-bold text-sky-600 mr-4 mt-1">02.</span>
              <div>
                <strong className="text-xl block text-slate-900">Accessible Solutions</strong>
                <p>Keep HVLS technology affordable and accessible, removing the barrier of high import costs.</p>
              </div>
            </li>
            {/* Value 3 */}
            <li className="flex items-start">
              <span className="text-2xl font-bold text-sky-600 mr-4 mt-1">03.</span>
              <div>
                <strong className="text-xl block text-slate-900">User-Centric Design</strong>
                <p>Design specifically for real-world user needs, focusing on efficiency, silence, and durability.</p>
              </div>
            </li>
          </ul>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Since 2013, VBreeze has completed 
            <strong className="text-sky-700"> 1200+ installations</strong> across India, Tanzania, and Zimbabwe — 
            becoming a trusted name for churches, auditoriums, warehouses, and industries. We are committed to constantly adopting
            high-efficiency PMSM motors for quieter operation and enhanced reliability.
          </p>
        </div>
      </div>
    </section>
  );
};