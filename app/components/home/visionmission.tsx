import React from "react";
import { Zap, Target } from "lucide-react";

export const VisionMission: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white" id="vision">
      <div className="container mx-auto px-6">
        
        {/* TOP LEVEL HEADING */}
        <div className="text-center mb-16" data-aos="fade-down">
            <h2 className="text-sm uppercase font-bold text-sky-400 tracking-widest">
                Our Foundation
            </h2>
            <p className="text-4xl md:text-5xl font-extrabold text-white mt-2">
                Vision & Mission
            </p>
        </div>

        {/* 🚀 VISION AND MISSION CARDS (2-Column Grid) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* VISION CARD */}
          <div 
            className="bg-slate-800 p-8 md:p-10 rounded-2xl shadow-xl border-t-4 border-sky-500 flex flex-col items-center text-center"
            data-aos="fade-up"
          >
            <Target className="h-12 w-12 text-sky-500 mb-4" />
            <h3 className="text-3xl font-extrabold mb-4 text-white">
              Our Vision
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To become a **global leader** in efficient, **sustainable**, and **innovative** airflow 
              solutions—improving **comfort**, **energy savings**, and **engineering excellence** in every environment we touch.
            </p>
          </div>

          {/* MISSION CARD */}
          <div 
            className="bg-slate-800 p-8 md:p-10 rounded-2xl shadow-xl border-t-4 border-sky-500 flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Zap className="h-12 w-12 text-sky-500 mb-4" />
            <h3 className="text-3xl font-extrabold mb-4 text-white">
              Our Mission
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To **engineer world-class**, **reliable**, and **affordable** HVLS airflow systems that
              deliver **exceptional performance**, **reduce energy consumption**, and enhance
              comfort across industries, institutions, and communities.
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
};