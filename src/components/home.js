import React from 'react'
import CarouselHero from "../components/carouselhero";
import  {Contact}  from "../components/contact";
import Carouseltext from "../components/carouseltext";
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import hero1 from '../assets/hero1.png';
import calendar from '../assets/calendar.png';
import chat from '../assets/chat.png';
import heart from '../assets/heart.png';
import underline from '../assets/underline.png';
import { CircleCheckBig } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
  
    
    <CarouselHero/>
     {/* Cards Section */}
    <div className="w-full py-4">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
  
  {/* Card 1 */}
  <div className="w-[300px] md:w-[400px] lg:w-[350px] h-[500px] bg-white shadow-2xl rounded-[21px] flex flex-col items-center text-center lg:text-left overflow-hidden">
    <img src={card1} alt="Programs" className="w-full h-auto object-cover" />
    <div className="px-4 pt-1 ">
    <h2 className="text-[30px] font-medium font-satoshi text-[#3d822f] mb-4 mt-0">Programs</h2>
    <p className="text-[13px] font-satoshi font-extralight text-gray-600 leading-relaxed mb-6">
    An Outpatient Mental Health Clinic, we help each person with their individual mental health needs. <br></br>Our programs include Case Management/Psychiatric Rehabilitation Program (PRP), therapy, psychiatry and addictions counseling. We connect clients to critical wrap-around services, resources and benefits.   

    </p>


    <Link to="/contact"  className="text-[11px] font-normal text-[#798B77] hover:underline">
    LEARN HOW WE CAN HELP
    </Link>
    </div>
  </div>

  {/* Card 2 */}
  <div className="w-[300px] md:w-[400px] lg:w-[350px] h-[500px] bg-white shadow-2xl rounded-[21px] flex flex-col items-center text-center lg:text-left overflow-hidden">
    <img src={card2} alt="Programs" className="w-full h-auto object-cover " />
    <div className="px-4 pt-1">
    <h2 className="text-[30px] font-medium font-satoshi text-[#3d822f] mb-4">People</h2>
    <p className="text-[13px] font-satoshi font-extralight text-gray-600 leading-relaxed mb-6">
    Our experienced counselors and therapists bring together all members of our client’s treatment team to support our clients in achieving their life goals. We are affirming toward all clients to build a therapeutic and trusting relationship. We can also meet clients in the community and via telehealth.
    </p>
     

    <Link to="/about"  className="text-[11px] font-normal text-[#798B77] hover:underline">
    MEET OUR TEAM
    </Link>
    </div>
  </div>

 {/* Card 3 */}
 <div className="w-[300px] md:w-[400px] lg:w-[350px] h-[500px] bg-white shadow-2xl rounded-[21px] flex flex-col items-center text-center lg:text-left overflow-hidden">
    <img src={card3} alt="Programs" className="w-full h-auto object-cover  " />
    <div className="px-4 pt-1">
    <h2 className="text-[30px] font-medium font-satoshi text-[#3d822f] mb-4">Partners</h2>
    <p className="text-[13px] font-satoshi font-extralight text-gray-600 leading-relaxed mb-2">
    We are deeply committed to our partners – mental health clinicians, health agencies, schools, nonprofits, social justice agencies and more – to support the community with their mental healthcare needs. We also work closely with resource providers to support their efforts and events, and share their programs with out clients.
    </p>

    <Link to="/about"  className="text-[11px] font-normal text-[#798B77] hover:underline">
    PARTNER WITH US 
    </Link>
    </div>
  </div>

    </div>
  </div>
 </div>

  {/* Support Section */}
  <div className="w-full py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="w-full lg:w-[1100px] mx-auto h-auto bg-white shadow-xl rounded-[21px] flex flex-col lg:flex-row items-center text-center overflow-hidden gap-6">
    
      {/* Left Image (optional) */}
      <div className="w-full lg:w-1/2 mb-0 lg:mb-0 ">
        <img
          src={hero1}
          alt="Supportive illustration"
          className="w-full h-auto object-cover rounded-[16px]"
        />
      </div>

      {/* Right Content (converted from absolute to flex item) */}
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-[29px] p-6">
        <h2 className="text-[38px] text-center font-satoshi font-extrabold text-[#3d822f] mb-0">
        How 
        <span className="relative inline-block"> 
                  <span className="text-[#3d822f] font-extrabold z-10 relative px-2"> 
                   We Can Help
                  </span> 
                    <img src={underline} alt="Underline" className="absolute left-0 bottom-0 w-full h-3 object-contain -mb-1" /> 
                    </span>
        </h2>

        <p className="text-[14px] font-satoshi font-extralight text-gray-600 mt-[-10px]">
         Supporting Adults
        </p>

        {/* Two-Column List */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-[14px] text-left font-satoshi font-normal text-[#3d822f]">
  <div className="flex items-start gap-2">
      <CircleCheckBig className="w-4 h-4 text-[#3d822f] mt-1" />
      <span>Employment and Resume Help</span>
    </div>
    <div className="flex items-start gap-2">
      <CircleCheckBig className="w-4 h-4 text-[#3d822f] mt-1" />
      <span>Job Readiness</span>
    </div>
    <div className="flex items-start gap-2">
      <CircleCheckBig className="w-4 h-4 text-[#3d822f] mt-1" />
      <span>Housing and Support</span>
    </div>
    <div className="flex items-start gap-2">
      <CircleCheckBig className="w-4 h-4 text-[#3d822f] mt-1" />
      <span>Obtaining Valid Identification</span>
    </div>
    <div className="flex items-start gap-2">
      <CircleCheckBig className="w-4 h-4 text-[#3d822f] mt-1" />
      <span>Resources (Food, Clothing, etc.)</span>
    </div>
    <div className="flex items-start gap-2">
      <CircleCheckBig className="w-4 h-4 text-[#3d822f] mt-1" />
      <span>Communication Skills</span>
    </div>
    <div className="flex items-start gap-2">
      <CircleCheckBig className="w-4 h-4 text-[#3d822f] mt-1" />
      <span>Time Management</span>
    </div>
    <div className="flex items-start gap-2">
      <CircleCheckBig className="w-4 h-4 text-[#3d822f] mt-1" />
      <span>GED and Preparedness</span>
    </div>
    <div className="flex items-start gap-2">
      <CircleCheckBig className="w-4 h-4 text-[#3d822f] mt-1" />
      <span>Stress Management</span>
    </div>
    <div className="flex items-start gap-2">
      <CircleCheckBig className="w-4 h-4 text-[#3d822f] mt-1" />
      <span>Recreational Activities</span>
    </div>
    <div className="flex items-start gap-2">
      <CircleCheckBig className="w-4 h-4 text-[#3d822f] mt-1" />
      <span>Career/Life Preparedness</span>
    </div>
    <div className="flex items-start gap-2">
      <CircleCheckBig className="w-4 h-4 text-[#3d822f] mt-1" />
      <span>Organizational Skills</span>
    </div>
    <div className="flex items-start gap-2">
      <CircleCheckBig className="w-4 h-4 text-[#3d822f] mt-1" />
      <span>School Readiness</span>
    </div>
    <div className="flex items-start gap-2">
      <CircleCheckBig className="w-4 h-4 text-[#3d822f] mt-1" />
      <span>Socialisation</span>
    </div>
    <div className="flex items-start gap-2">
      <CircleCheckBig className="w-4 h-4 text-[#3d822f] mt-1" />
      <span>Social Skills</span>
    </div>
  </div>
      </div>
    </div>
  </div>
</div>

{/* Get Started Section */}
<div className="bg-[#F3F4ED] w-full py-16 px-4 flex flex-col items-center">
  <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] text-center font-satoshi font-bold text-[#3d822f] mb-2">
    <span className="relative inline-block">
      <span className="text-[#3d822f] z-10 relative">Get Started Now</span>
      <img src={underline} alt="Underline" className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-[180px] sm:w-[240px] lg:w-[316px] h-3 object-contain" />
    </span>
  </h2>

  {/* Icon Blocks */}
  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl px-4 ">
    {/* Left Item */}
    <div className="flex flex-col items-center text-center max-w-[300px] mx-auto  ">
      <img src={chat} alt="Get Started" className="w-20 h-20 mb-3" />
      <h4 className="text-[18px] sm:text-[19px] font-satoshi font-medium text-[#3d822f] mb-2">Get Started</h4>
      <p className="text-sm font-satoshi text-gray-600 leading-snug">
        Take the first step by completing our referral form to access personalized mental health care.
      </p>
    </div>

    {/* Center Item */}
    <div className="flex flex-col items-center  text-center max-w-[300px] mx-auto md:mt-16 ">
      <img src={calendar} alt="Schedule an Appointment" className="w-20 h-20 mb-3" />
      <h4 className="text-[18px] sm:text-[19px] font-satoshi font-medium text-[#3d822f] mb-2">Schedule an Appointment</h4>
      <p className="text-sm font-satoshi text-gray-600 leading-snug">
        Our team will reach out within 48 hours to schedule your first session and begin your care.
      </p>
    </div>

    {/* Right Item */}
    <div className="flex flex-col items-center text-center max-w-[340px] mx-auto">
      <img src={heart} alt="Begin Your Journey" className="w-20 h-20 mb-3" />
      <h4 className="text-[18px] sm:text-[19px] font-satoshi font-medium text-[#3d822f] mb-2">Begin Your Journey</h4>
      <p className="text-sm font-satoshi text-gray-600 leading-snug">
        Reach your wellness goals with the support of Greentree Health & Wellness – whether in our offices, via telehealth, or in your home or community.
      </p>
    </div>
  </div>      
  </div>
  <Contact/>
  <Carouseltext/>
 
</div>
  )
}

