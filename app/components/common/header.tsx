import React, { useState, useEffect } from "react";
import { Link } from "react-router"; // Use 'react-router-dom' for proper routing setup
import { Menu, X, ArrowRight } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";
import { FloatingWhatsAppButton } from "./contactbutton";

// Assuming ContactButton is defined somewhere, we'll create a simple placeholder
const ContactButton = () => (
    <Link 
        to="/contact" 
        className="hidden md:inline-flex items-center bg-sky-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-sky-700 transition transform hover:scale-105 shadow-md ml-4"
        onClick={() => { /* logic to close menu if necessary */ }}
    >
        Get a Quote 
        <ArrowRight className="w-4 h-4 ml-2" />
    </Link>
);


export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
    // Add scroll listener for header effect
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <header 
        // Dynamic styling based on scroll state
        className={`fixed w-full z-30 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-xl py-3' : 'bg-white/95 shadow-md py-4'
        } text-slate-800`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 ">
        
        {/* 1. LOGO & BRANDING */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <img
              src="/logo.png"
              alt="VBreeze Fans Logo"
              className={`h-8 w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'}`}
            />
            <span className="text-xl md:text-2xl font-extrabold text-sky-600">VBREEZE</span>
          </Link>
        </div>

        {/* 2. DESKTOP NAV & CTA */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8 font-medium">
            <li>
              <Link to="/about" className="hover:text-sky-600 transition text-gray-700">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-sky-600 transition text-gray-700">
                Products
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-sky-600 transition text-gray-700">
                Services
              </Link>
            </li>
            {/* Added a subtle internal link to Contact */}
             <li>
              <Link to="/contact" className="hover:text-sky-600 transition text-gray-700">
                Contact
              </Link>
            </li>
          </ul>
          {/* Integrated CTA Button */}
          <ContactButton />
        </nav>

        {/* 3. MOBILE BUTTON */}
        <button className="md:hidden p-2 text-sky-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 4. MOBILE NAV MENU (Sleek Drawer) */}
      <div
        className={`fixed inset-0 top-[60px] bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="shadow-inner h-full flex flex-col justify-start items-start p-8 space-y-6">
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-slate-800 hover:text-sky-600 w-full pb-2 border-b border-gray-100"
          >
            About Us
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-slate-800 hover:text-sky-600 w-full pb-2 border-b border-gray-100"
          >
            Products
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-slate-800 hover:text-sky-600 w-full pb-2 border-b border-gray-100"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-slate-800 hover:text-sky-600 w-full pb-2 border-b border-gray-100"
          >
            Contact
          </Link>
          
          {/* Mobile CTA */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 w-full text-center bg-sky-600 text-white py-3 rounded-full font-bold hover:bg-sky-700 transition shadow-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
      <FloatingWhatsAppButton/>
    </header>
  );
};