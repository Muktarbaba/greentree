import { useState } from "react";
import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Navbar = ({currentPage}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-white border-b border-[#ECECEC] z-50 rounded-t-[30px]">
      <div className="max-w-[1250px] mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-1">
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

        {/* Navigation (Desktop) */}
        <div className="hidden lg:flex space-x-8 items-center relative">
        
          {['/', '/getstarted', '/our services', '/about', '/contactpage'].map((path) => {
            const label =
              path === '/' ? 'HOME' :
              path === '/getstarted' ? 'GET STARTED' :
              path === '/about' ? 'ABOUT US':
              path === '/contactpage' ? 'CONTACT US':
              path.substring(1).toUpperCase();

            if (path === '/our services') {
              return (
                <div key={path} className="relative">
                  <button
                    onClick={toggleDropdown}
                    className={`flex items-center text-[14px] font-normal font-Satoshi hover:text-secgreen focus:outline-none transition-colors duration-200 ${
                      isActive(path) ? 'text-secgreen' : 'text-black'
                    }`}
                  >
                    {label}
                    {dropdownOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 origin-top transform ${
                      dropdownOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
                    }`}
                    style={{ transformOrigin: 'top' }}
                  >
                    <Link to="/prp" className="block px-4 py-2 text-[12px] font-Satoshi hover:bg-firstgreen text-black">PRP</Link>
                    <Link to="/therapy" className="block px-4 py-2 text-[12px] font-Satoshi hover:bg-firstgreen text-black">THERAPY</Link>
                    <Link to="/medical" className="block px-4 py-2 text-[12px] font-Satoshi hover:bg-firstgreen text-black">MEDICAL MANAGEMENT</Link>
                  </div>
                </div>
              );
            }

            return (
              <Link key={path} to={path}>
                <span className={`text-[14px] font-normal font-Satoshi hover:text-secgreen ${isActive(path) ? 'text-secgreen' : 'text-black'}`}>
                  {label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Hamburger (Mobile only) */}
        <div className="lg:hidden">
          <button
            type="button"
            className="p-2 rounded-full text-[#90b6a3] hover:text-white hover:bg-[#3d822f]"
            onClick={toggleNavbar}
          >
            <span className="sr-only">Toggle Menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

{/* Mobile Menu */}
{isOpen && (
  <div className="lg:hidden px-8 pt-4 pb-6 space-y-4 bg-white shadow-md">
    {[
      { path: '/', label: 'HOME' },
      { path: '/getstarted', label: 'GET STARTED' },
      { path: '/our services', label: 'OUR SERVICES', hasDropdown: true },
      { path: '/about', label: 'ABOUT US' },
      { path: '/contactpage', label: 'CONTACT US' },
    ].map(({ path, label, hasDropdown }) => {
      if (hasDropdown) {
        return (
          <div key={path}>
            <div
              onClick={toggleDropdown}
              className="cursor-pointer text-[14px] font-normal font-Satoshi hover:text-firstgreen text-black flex justify-center items-center w-full"
            >
              <span>{label}</span>
              {dropdownOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </div>
            {dropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/prp" onClick={() => setIsOpen(false)} className="block text-sm text-gray-700 hover:text-firstgreen">PRP</Link>
                <Link to="/therapy" onClick={() => setIsOpen(false)} className="block text-sm text-gray-700 hover:text-firstgreen">Therapy</Link>
                <Link to="/medical" onClick={() => setIsOpen(false)} className="block text-sm text-gray-700 hover:text-firstgreen">Medical Management</Link>
              </div>
            )}
          </div>
        );
      }

      return (
        <div key={path}>
          <Link to={path} onClick={() => setIsOpen(false)}>
            <span className={`block text-[14px] font-normal font-Satoshi hover:text-firstgreen ${isActive(path) ? 'text-firstgreen' : 'text-black'}`}>
              {label}
            </span>
          </Link>
        </div>
      );
    })}
  </div>
)}

    </nav>
  );
};
