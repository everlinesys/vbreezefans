import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router";

export const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  // Define column links for clean rendering
  const companyLinks = [
    { title: "About Us", href: "/about" },
    { title: "Careers", href: "/contact" },
    { title: "Vision & Mission", href: "/#vision" },
    { title: "Partnerships", href: "/contact" },
  ];

  const productLinks = [
    { title: "Industrial HVLS", href: "/services" },
    { title: "Designer Series", href: "/services#designer" },
    { title: "Maintenance Plans", href: "/services#maintenance" },
    { title: "Site Assessment", href: "/services#assessment" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* TOP SECTION: GRID COLUMNS */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 border-b border-gray-700 pb-12">
          {/* COLUMN 1: BRANDING & CONTACT INFO */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              {/* Placeholder for Logo image */}
              <img
                src="/logo.png"
                alt="VBreeze Fans Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-extrabold text-sky-400">
                VBREEZE
              </span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Engineered in India, delivering powerful, energy-efficient airflow
              solutions worldwide.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center text-sky-300">
                <Phone className="w-4 h-4 mr-2 text-sky-500" />
                <a
                  href="tel:+918921892816"
                  className="hover:text-white transition"
                >
                 Deon Joseph:  +91 8921892816 <br />site engineer
                </a>
              </div> <div className="flex items-center text-sky-300">
                <Phone className="w-4 h-4 mr-2 text-sky-500" />
                <a
                  href="tel:+919744117995"
                  className="hover:text-white transition"
                >
                 HO:  +91 9744117995
                </a>
              </div>
              <div className="flex items-center text-sky-300">
                <Mail className="w-4 h-4 mr-2 text-sky-500" />
                <a
                  href="mailto:support@vbreezefans.com"
                  className="hover:text-white transition"
                >
                  support@vbreezefans.com
                </a>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-sky-500" />
                <p>Headquarters: Perumbavoor, Ernakulam, Kerala</p>
              </div>
            </div>
          </div>

          {/* COLUMN 2: COMPANY LINKS */}
          <div className="col-span-1 space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {companyLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="hover:text-sky-400 transition text-gray-400"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: PRODUCTS & SOLUTIONS */}
          <div className="col-span-1 space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              {productLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="hover:text-sky-400 transition text-gray-400"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER / CTA (Last column on desktop) */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-400">
              Get the latest news on HVLS technology and offers.
            </p>
            {/* <button className="w-full bg-sky-600 text-white py-2 rounded-lg font-medium hover:bg-sky-700 transition">
                Request a Quote
            </button> */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full px-3 bg-sky-600 text-white py-2 rounded-lg font-medium hover:bg-sky-700 transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT & SOCIAL */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 space-y-4 md:space-y-0 text-sm">
          {/* Copyright & Policy Links */}
          <div className="text-center md:text-left space-y-2 md:space-y-0">
            <p className="text-gray-400">
              &copy; {currentYear} VBreeze Fans. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 text-xs">
              <a
                href="/privacy"
                className="hover:text-sky-400 transition text-gray-500"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-sky-400 transition text-gray-500"
              >
                Terms of Use
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-500 hover:text-sky-400 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-500 hover:text-sky-400 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-500 hover:text-sky-400 transition"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-sky-400 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
