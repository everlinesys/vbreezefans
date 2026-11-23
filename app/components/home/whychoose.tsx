import React from "react";
import { ShieldCheck, Wind, Zap, CheckCircle } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: "Premium PMSM Technology",
      icon: <Zap className="h-6 w-6 text-sky-600" />,
      desc: "Our HVLS fans use advanced **PMSM motors** that deliver high torque, silent operation, and ultra-low energy consumption.",
      side: "left", // Marker for left column
    },
    {
      title: "Engineered for Maximum Airflow",
      icon: <Wind className="h-6 w-6 text-sky-600" />,
      desc: "Designed with **aerodynamically optimized blades** that ensure wide-area cooling for any large space.",
      side: "left", // Marker for left column
    },
    {
      title: "Longest Warranty in Class",
      icon: <ShieldCheck className="h-6 w-6 text-sky-600" />,
      desc: "VBreeze fans come with **industry-leading warranty coverage** and dependable long-term support you can rely on.",
      side: "right", // Marker for right column
    },
    {
      title: "Trusted by Industries & Institutions",
      icon: <CheckCircle className="h-6 w-6 text-sky-600" />,
      desc: "From warehouses to elegant institutions, thousands rely on VBreeze for comfort, performance, and durability.",
      side: "right", // Marker for right column
    },
  ];

  const leftPoints = points.filter(p => p.side === 'left');
  const rightPoints = points.filter(p => p.side === 'right');

  return (
    <section id="whychooseus" className="py-24 bg-white text-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase font-bold text-sky-600 tracking-widest" data-aos="fade-down">
            The VBreeze Advantage
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2" data-aos="fade-down">
            Why Choose VBreeze?
          </h3>
        </div>

        {/* 🚀 SPLIT LAYOUT (POINTS | IMAGE | POINTS) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">

          {/* LEFT POINTS */}
          <div className="flex-1 space-y-12 lg:order-1 order-2">
            {leftPoints.map((p, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 150}
                className="flex items-start text-left max-w-sm lg:ml-auto" // Aligned right for desktop
              >
                <div className="flex-shrink-0 p-2 rounded-lg bg-sky-50 border border-sky-200 mr-4">
                  {p.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-slate-900">{p.title}</h4>
                  <p className="text-gray-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CENTRAL IMAGE */}
          <div className="lg:w-[400px] lg:h-[400px] w-full max-w-md lg:order-2 order-1" data-aos="zoom-in" data-aos-delay="300">
             {/* Using a placeholder for a fan visual */}
            <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden bg-gray-100 flex items-center justify-center p-8 border-4 border-sky-500">
               {/* This is where a diagram of a fan motor/blade would go */}
               <img src="logo.png" alt="" />
            </div>
          </div>

          {/* RIGHT POINTS */}
          <div className="flex-1 space-y-12 lg:order-3 order-3">
            {rightPoints.map((p, index) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 150 + 300}
                className="flex items-start text-left max-w-sm" // Aligned left for desktop
              >
                <div className="flex-shrink-0 p-2 rounded-lg bg-sky-50 border border-sky-200 mr-4">
                  {p.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-slate-900">{p.title}</h4>
                  <p className="text-gray-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
             <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-medium transition shadow-lg hover:shadow-xl transform hover:scale-105">
                 Get a Free Airflow Consultation
             </button>
        </div>

      </div>
    </section>
  );
};