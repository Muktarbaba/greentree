import React, { useState } from 'react';
import bg from '../assets/bg.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const slides = [ 
  { 
    description: 
      "Greentree health & Wellness is committed to delivering compassionate, person-centered mental health care that empowers clients to achieve their goals and improve their quality of life.", 
  }, 
  { 
    description: 
      "Greentree health & Wellness is committed to delivering compassionate, person-centered mental health care that empowers clients to achieve their goals and improve their quality of life.", 
  },
];

export default function Carouseltext() { 
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => { 
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); 
  };
  
  const nextSlide = () => { 
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1)); 
  };

  return (
    <div
      className="w-full min-h-[400px] py-20 px-6 bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Main Content */}
      <div className="flex flex-col items-center w-full max-w-4xl px-4">
        
        {/* Arrows and Text */}
        <div className="flex items-center w-full justify-center">
          {/* Left Arrow */}
          <button onClick={prevSlide} className="pr-6">
            <FontAwesomeIcon icon={faCaretLeft} className="w-8 h-8 text-[#3d822f] hover:opacity-60" />
          </button>

          {/* Text */}
          <div className="flex-1 text-center px-4">
            <p className="text-sm sm:text-[22px] font-medium font-satoshi text-[#3d822f] leading-relaxed">
              {slides[currentIndex].description}
            </p>
          </div>

          {/* Right Arrow */}
          <button onClick={nextSlide} className="pl-6">
            <FontAwesomeIcon icon={faCaretRight} className="w-8 h-8 text-[#3d822f] hover:opacity-60" />
          </button>
        </div>

        {/* Dot Indicators under Text */}
        <div className="flex justify-center space-x-2 mt-6">
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                idx === currentIndex ? 'bg-[#3d822f]' : 'bg-white border border-[#3d822f]'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
