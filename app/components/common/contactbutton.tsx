import React from "react";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsAppButton: React.FC = () => {
  const phoneNumber = "+919744117995"; // replace with your real WhatsApp number
  
  // Base classes for the button container
  const baseClasses = `
    fixed bottom-6 right-6 
    bg-green-600 hover:bg-green-700 
    text-white 
    p-4 md:px-6 md:py-3 
    rounded-full 
    shadow-2xl 
    flex items-center justify-center 
    transition-all duration-300 ease-in-out 
    z-50 
    group 
    transform hover:scale-105
  `;

  // Animation classes (requires a custom Tailwind utility or keyframes)
  // For a subtle pulse effect (simulated here)
  const pulseAnimation = `
    animate-pulse 
    shadow-green-500/50 
    hover:animate-none
  `;

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${pulseAnimation}`}
    >
      <MessageCircle className="h-6 w-6 mr-0 md:mr-2" />
      
      {/* Text Call-to-Action (Visible on desktop/md screens and wider) */}
      <span className="hidden md:block font-semibold tracking-wider text-sm">
        Chat with us
      </span>
      
     
    </a>
  );
};