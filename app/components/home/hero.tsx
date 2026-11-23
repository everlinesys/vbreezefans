import React, { useState, useEffect } from "react";

// NOTE: For the smooth transition, you would need to define 'fade-in-out'
// and potentially 'slide-up-in' keyframes in your tailwind.config.js file.

export const Hero: React.FC = () => {
  const captions = [
    "High performance industrial fans",
    "Built for maximum airflow",
    "ENGINEERED FOR COMFORT",
    "The FUTURE of HVLS cooling", // Added a fourth option
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % captions.length);
    }, 4000); // slide every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden">
      
      {/* 1. BACKGROUND VIDEO */}
      <video
        src="/videos/hero.mov"
         poster="/logo.png" // Added a poster image for loading
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* 2. GRADIENT OVERLAY (New style) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
      
      {/* 3. CONTENT AREA */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        
        {/* STATIC H1 BRANDING */}
        <h1 
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-lg"
            data-aos="fade-down"
        >
            VBREEZE FANS
        </h1>
        
        {/* ROTATING CAPTION */}
        <div className="h-30 flex justify-center items-center overflow-hidden mb-10">
            <p
                key={index}
                // Applying custom transition classes for better effect
                className="text-3xl md:text-4xl font-light italic tracking-wide transition-all duration-1000 ease-in-out animate-fade-in-out" 
            >
                {captions[index].toUpperCase()}
            </p>
        </div>
        
        {/* CALL TO ACTION */}
        <a
          href="#products"
          className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-10 py-4 rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wider"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Explore Cooling Solutions
        </a>
      </div>
      
      {/* Scroll Down Indicator (Subtle visual cue) */}
      <div className="absolute bottom-8 z-10 text-white opacity-70 animate-bounce" data-aos="fade-in" data-aos-delay="1000">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>

    </section>
  );
};