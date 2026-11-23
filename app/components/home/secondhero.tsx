import React from "react";
import { Zap, Feather, Leaf } from "lucide-react";

export const SecondHero: React.FC = () => {
  return (
    <section className="relative w-full py-28 md:py-40 bg-white text-slate-900 overflow-hidden">
      {/* 1. SECTION HEADER (Center aligned) */}
      <div className="container mx-auto px-6 max-w-4xl text-center mb-16 md:mb-20">
        <span
          className="text-sm uppercase font-bold text-sky-600 tracking-widest"
          data-aos="fade-up"
        >
          Technology & Design
        </span>
        <h2
          className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Engineered for Comfort. Built to Last.
        </h2>
      </div>

      {/* 2. MAIN CONTENT GRID (Offset Layout) */}
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT: TEXT CONTENT (Takes 7/12 columns) */}
        <div className="lg:col-span-6 space-y-8 lg:pr-10" data-aos="fade-right">
          <h3 className="text-3xl font-bold mb-4">
            High Quality. High Performance.
          </h3>

          <div className="space-y-6 text-lg text-gray-700">
            <p className="leading-relaxed">
              VBreeze Fans are engineered to deliver{" "}
              <strong className="text-sky-700">exceptional airflow</strong>{" "}
              while maintaining modern aesthetics. We focus on two key areas:{" "}
              <strong className="text-sky-700">raw power</strong> {" "}
              for industrial environments and{" "}
              <strong className="text-sky-700">refined style</strong> for
              commercial and residential spaces.
            </p>
            <p className="leading-relaxed">
              Whether you're outfitting a warehouse, commercial lobby, or an
              interior living space, VBreeze provides a cooling solution
              tailored for every need. Our fans range from large industrial
              solutions to beautifully crafted designer and decorative models.
            </p>
          </div>

          {/* FEATURE BULLETS */}
          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            <div className="flex items-center space-x-2 text-sky-700 font-semibold">
              <Zap className="w-5 h-5" />
              <span>PMSM Efficiency</span>
            </div>
            <div className="flex items-center space-x-2 text-sky-700 font-semibold">
              <Feather className="w-5 h-5" />
              <span>Ultra Silent</span>
            </div>
            <div className="flex items-center space-x-2 text-sky-700 font-semibold">
              <Leaf className="w-5 h-5" />
              <span>Low Energy Cost</span>
            </div>
          </div>

          <a
            href="#products"
            className="inline-flex items-center bg-sky-600 text-white px-8 py-3 rounded-full font-bold hover:bg-sky-700 transition mt-6 shadow-md"
          >
            View All Products
          </a>
        </div>

        {/* RIGHT: IMAGE & HIGHLIGHT (Offset - Takes 5/12 columns) */}
        <div
          className="lg:col-span-6 relative"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          {/* Background Accent Shape (Offset) */}
          <div className="hidden lg:block absolute top-10 left-[-20px] w-full h-full bg-sky-200/50 rounded-3xl -z-10 shadow-inner"></div>

          {/* Main Image Container */}
          <div className="relative nomobile rounded-3xl shadow-2xl overflow-hidden border-4 border-white transition-all duration-500 hover:shadow-sky-400/50 hover:scale-[1.01]">
            <img
              src="/products/crosssection.png"
              alt="Large Industrial Fan"
              className="w-auto h-auto aspect-4/2"
            />
          </div>

          <div className="relative onmobile rounded-3xl shadow-xl overflow-hidden border-4 border-white transition-all duration-500 hover:shadow-sky-400/50 hover:scale-[1.01]">
            <img
              src="/products/11.png"
              alt="Large Industrial Fan"
              className="w-auto h-auto aspect-4/2"
            />
          </div><div className="relative onmobile rounded-xl shadow-2xl mt-1  overflow-hidden border-4 border-white transition-all duration-500 hover:shadow-sky-400/50 hover:scale-[1.01]">
            <img
              src="/products/22.png"
              alt="Large Industrial Fan"
              className="w-auto h-auto aspect-4/2"
            />
          </div><div className="relative onmobile rounded-xl shadow-2xl mt-1  overflow-hidden border-4 border-white transition-all duration-500 hover:shadow-sky-400/50 hover:scale-[1.01]">
            <img
              src="/products/33.png"
              alt="Large Industrial Fan"
              className="w-auto h-auto aspect-4/2"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
