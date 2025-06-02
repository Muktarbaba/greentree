import React, { useState } from 'react';
import group from '../assets/group1.png';
import group2 from '../assets/Group2.png';
import group3 from '../assets/Group3.png';
import underline from '../assets/underline.png';
import Slider from "react-slick"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const slides = [ 
    { 
        titleBefore: "Your", 
        highlighted: "Wellness", 
        titleAfter: "Journey Starts Here", 
        description: "Greentree Health & Wellness is committed to delivering compassionate, person-centered mental health care that empowers clients to achieve their goals and improve their quality of life. Our services are tailored to meet the unique needs of each individual, whether they’re facing challenges with anxiety, depression, bipolar disorder, or other mental health conditions.", 
        image: group, 
        buttonText: "EXPLORE OUR SERVICES", 
        buttonLink: "/prp" 
    }, 
    { 
        titleBefore: "Get The", 
        highlighted: "Care", 
        titleAfter: "You Deserve", 
        description: "Our streamlined referral and intake process ensures that you receive the support you need as soon as possible. Whether you’re a potential client or a referring provider, this page outlines everything you need to know to get started with our services.", 
        image: group2,
        buttonText: "START YOUR REFERRAL NOW", 
        buttonLink: "/getstarted" 
    },
    { 
        titleBefore: "Providing The", 
        highlighted: "Crucial", 
        titleAfter: "Support You Need", 
        description: "Our PRP counselors work with each client to build personalized strategies that support their goals, offering flexible services that fit into clients’ daily lives. With in-home and community-based support options", 
        image: group3, 
        buttonText: "LEARN ABOUT OUR SUPPORT", 
        buttonLink: "/contactpage" 
    },
];

export default function CarouselHero() { 
 

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => { 
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); 
    };
    
    const nextSlide = () => { 
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1)); 
    };

    return (
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-6 lg:px-10 py-12">
            {/* Carousel Slide */}
            <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-10 bg-white mt-[-50px]">            
                {/* Left: Text Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 lg:pr-10 lg:px-8 transition-all duration-300 ease-in-out"> 
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-satoshi font-medium text-black leading-tight mb-4"> 
                        {slides[currentIndex].titleBefore}{" "} 
                        <span className="relative inline-block"> 
                            <span className="text-[#3d822f] font-semibold z-10 relative"> 
                                {slides[currentIndex].highlighted}
                            </span> 
                            <img src={underline} alt="Underline" className="absolute left-0 bottom-0 w-full h-3 object-contain -mb-1" /> 
                        </span>{" "} <br /> 
                        {slides[currentIndex].titleAfter} 
                    </h1>
                    <p className="text-sm sm:text-base font-satoshi font-extralight text-gray-600 mb-6 max-w-xl">
                        {slides[currentIndex].description}
                    </p> 
                    <button className="bg-[#F3F4E8] text-[#3d822f] px-6 sm:px-6 py-2 sm:py-3 border border-[#3d822f] text-sm font-semibold hover:bg-[#316f29] hover:text-white transition duration-200"> 
                        <Link to={slides[currentIndex].buttonLink}> {slides[currentIndex].buttonText} </Link> 
                    </button>
                </div>

                {/* Right: Image */}
                <div className="w-[250px] lg:w-1/2 justify-center flex lg:pl-4 transition-all duration-300 ease-in-out">
                    <img
                        src={slides[currentIndex].image}
                        alt="Hero"
                        className="w-[300px] sm:w-[400px] lg:w-[500px] h-auto rounded-lg object-contain"
                    />
                </div>

                {/* Arrow Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2"
                >
                    <FontAwesomeIcon icon={faCaretLeft} className="w-8 h-8 text-[#3d822f] hover:opacity-20"/>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2"
                >
                    <FontAwesomeIcon icon={faCaretRight} className="w-8 h-8 text-[#3d822f] hover:opacity-20"/>
                </button>
            </div>

            {/* Indicators aligned left */}
            <div className="hidden sm:flex justify-start space-x-2 mt-4">
                {slides.map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${
                            idx === currentIndex ? "bg-[#3d822f]" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
