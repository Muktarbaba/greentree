import React from 'react'
import { useNavigate } from 'react-router-dom';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import x from '../assets/x.svg';

export const Header = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleGetStarted = () => {
    navigate('/getstarted'); // Navigate to the /getstarted page
  };

  return (
    <header className="bg-gradient-to-r from-firstgreen from-5% via-secgreen via-20% to-thirdwhite to-50% w-full py-6">
      <div className="max-w-[1250px] mx-auto px-6 sm:px-10 flex justify-between items-start">
        
        {/* Left: Tagline */}
        <div className="leading-tight">
          <span className="text-[32.66px] text-[#3d822f] font-normal font-satoshi block">
            You matter to us!
          </span>
        </div>

        {/* Right: Social Icons + Get Started */}
        <div className="flex items-center space-x-2 mt-1">
          {/* Social Icons */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="w-7 h-7 hover:opacity-80" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="Twitter" className="w-7 h-7 hover:opacity-80" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="w-7 h-7 hover:opacity-80" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" className="w-7 h-7 hover:opacity-80" />
          </a>

          {/* Get Started Button */}
          <button   onClick={handleGetStarted} className="bg-[#3d822f] text-white text-sm px-4 py-2 rounded hover:bg-[#316f29] transition duration-200">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
