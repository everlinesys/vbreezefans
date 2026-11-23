import React from "react";
import { Wrench, Cog, ShieldCheck, Boxes, Zap, Layers, BarChart3 } from "lucide-react";
import { Link } from "react-router";

export const Services: React.FC = () => {
  const services = [
    {
      title: "HVLS Fan Installation",
      icon: <Wrench className="h-8 w-8 text-sky-500" />,
      desc: "Professional installation of all VBreeze HVLS fans adhering to strict safety and engineering standards.",
    },
    {
      title: "Site Assessment & Airflow Planning",
      icon: <BarChart3 className="h-8 w-8 text-sky-500" />,
      desc: "We analyze your facility's layout and climate to recommend the optimal fan size and placement for peak performance.",
    },
    {
      title: "Annual Maintenance",
      icon: <ShieldCheck className="h-8 w-8 text-sky-500" />,
      desc: "Routine check-ups, blade cleaning, and inspection to keep your fans running smoothly, efficiently, and quietly year-round.",
    },
    {
      title: "Retrofit & Upgrades",
      icon: <Zap className="h-8 w-8 text-sky-500" />,
      desc: "Upgrade old systems to new energy-efficient Permanent Magnet Synchronous Motor (PMSM) technology for superior performance.",
    },
    {
      title: "Industrial Ventilation Solutions",
      icon: <Boxes className="h-8 w-8 text-sky-500" />,
      desc: "Complete, custom airflow and ventilation planning for large-scale factories, godowns, and warehouse environments.",
    },
    {
      title: "Control System Integration", // Added a 6th service for symmetrical grid
      icon: <Cog className="h-8 w-8 text-sky-500" />,
      desc: "Integrate fans with smart building management systems (BMS) for automated control and energy savings.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 text-slate-900 ">
      <div className="container mx-auto px-4">
        
        {/* TITLE AND SUBTITLE */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase font-bold text-sky-600 tracking-widest" data-aos="fade-down">
            HVLS SOLUTIONS
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2" data-aos="fade-down">
            Our Comprehensive Services
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4" data-aos="fade-down" data-aos-delay="100">
            From initial planning to long-term maintenance, VBreeze provides end-to-end support to maximize your fan's performance and lifespan.
          </p>
        </div>

        {/* 🚀 SERVICE GRID */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((s, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100} // Staggered animation
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col items-start text-left"
            >
              
              {/* ICON BLOCK */}
              <div className="p-3 mb-4 rounded-full bg-sky-50 border-2 border-sky-200">
                {s.icon}
              </div>

              {/* TEXT */}
              <h4 className="text-xl font-bold mb-3 text-slate-900">
                {s.title}
              </h4>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {s.desc}
              </p>
              
              {/* Added a subtle detail for better card design */}
              <Link to="/contact" className="mt-4 text-sky-600 font-semibold flex items-center">
                Learn More 
                <span className="ml-2 text-xs">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};