import React, { useState, useEffect } from 'react';

/**
 * The NotFound component displays a 404 error and automatically redirects
 * the user to the homepage after a 5-second countdown.
 *
 * NOTE: Since we are in a single-file React component, navigation is simulated
 * by reloading the page to the root path or using a simple state switch if
 * a multi-page app architecture (like a switch/case router) were implemented.
 * For simplicity, we use window.location.href to simulate navigation back to root.
 */
const NotFound = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Start the countdown timer
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer); // Cleanup timer on component unmount or state change
    } else if (countdown === 0) {
      // Once the countdown reaches zero, redirect the user
      // In a real application using React Router, this would be: navigate('/');
      // In this environment, we simulate navigating to the root of the app:
      window.location.href = '/'; 
    }
  }, [countdown]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 font-sans">
      <div className="text-center bg-white p-10 sm:p-16 rounded-xl shadow-2xl max-w-lg w-full border-t-4 border-teal-600">
        
        <div className="flex justify-center mb-6">
          <svg className="w-20 h-20 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        
        <h1 className="text-7xl font-extrabold text-gray-900 mb-4 tracking-tight">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <p className="text-xl text-teal-600 font-bold mb-6">
          Redirecting to the homepage in {countdown} seconds...
        </p>
        
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-teal-600 hover:bg-teal-700 transition duration-150 ease-in-out transform hover:scale-[1.02]"
        >
          Click Here to Go Home Now
        </a>
      </div>
    </div>
  );
};

export default NotFound;