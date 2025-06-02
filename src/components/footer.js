import React from 'react';
import logo from '../assets/logo.png'; // adjust path as needed
import footerImage from '../assets/footerimg.png'; // adjust path as needed
import { Link, useLocation } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#F3F4ED] text-gray-700">
      {/* Top Footer */}
      <div className="max-w-[1440px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-1 justify-center md:justify-start ml-8">
          <img src={logo} alt="Logo" className="h-[57px] w-auto" />
          <div className="leading-tight">
            <span className="text-[22.66px] text-[#3d822f] font-semibold font-montserrat block">
              GREENTREE
            </span>
            <span className="text-[12.1px] text-[#90b6a3] font-normal block">
              HEALTH & WELLNESS
            </span>
          </div>
        </div>

        {/* Center: Links with sub-links */}
        <div className="flex flex-col items-start space-y-4 text-sm font-satoshi font-medium text-[#3d822f]">
  <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0 w-full">
    
    {/* SERVICES Section */}
    <div className="flex flex-col items-start text-left min-w-[180px]">
      <a href="/services" className="hover:underline mb-2">SERVICES</a>
      <div className="flex flex-col space-y-1 text-[#798B77] text-xs">
        <Link to="/prp" className="hover:underline">Psychiatric Rehabilitation Program (PRP)</Link>
        <Link to="/therapy" className="hover:underline">Therapy</Link>
        <Link to="/medical" className="hover:underline">Medication Management</Link>
      </div>
    </div>

    {/* ABOUT Section */}
    <div className="flex flex-col items-start text-left min-w-[120px]">
      <Link to="/about" className="hover:underline mb-2">ABOUT</Link>
      <div className="flex flex-col space-y-1 text-[#798B77] text-xs">
        <a href="/about/team" className="hover:underline">Our Team</a>
        <a href="/about/story" className="hover:underline">Our Story</a>
      </div>
    </div>

    {/* CONTACT Section */}
    <div className="flex flex-col items-start text-left min-w-[100px]">
      <Link to="/contactpage" className="hover:underline mb-2">CONTACT</Link>
    </div>

  </div>
</div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end mr-8">
          <img src={footerImage} alt="Footer Art" className="w-[120px] h-auto" />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#3D822F] border-t border-gray-300 py-8 text-sm font-satoshi px-10 max-w-full mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-white mb-4 md:mb-0">
          Greentree Wellness provides expert outpatient mental health care, including <br />
          therapy, PRP, and medication management, with clinic in Frederick, serving<br />
          all over Maryland.
        </p>
        <p className="text-white">&copy; {new Date().getFullYear()} Greentree Health & Wellness. All rights reserved.</p>
      </div>
    </footer>
  );
};
