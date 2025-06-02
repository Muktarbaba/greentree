import React from 'react'
import { useLocation } from 'react-router-dom';
import icondot from '../assets/icondot.png';
import icon from '../assets/listicon.png';
import Carouseltext from "../components/carouseltext";

export const Medical = () => {
    const location = useLocation();
            
              console.log(location.pathname); 

  return (
            <div className="flex flex-col min-h-screen bg-white">
          <div className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-20 text-left">
            <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-[#3d822f] mb-6 leading-tight">
            Medication Management at Greentree Wellness
            </h1>
            <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight leading-relaxed mb-4">
            At Greentree Wellness, we recognize that medication management can be an essential part of effective mental health treatment. 
            Our team of board-certified psychiatrists and psychiatric nurse practitioners specialize in creating tailored medication plans that 
            support clients in managing symptoms, improving quality of life, and enhancing overall well-being. 
            </p>

            <p className="text-[#0B1B19] text-sm md:text-[15px] font-satoshi font-extralight leading-relaxed mb-12">
            We offer flexible, accessible options for medication management, including in-person and telepsychiatry appointments, to meet the 
            diverse needs of our clients across Maryland.                  
            </p>
        
            <h1 className="flex items-center text-l md:text-[17px] font-medium font-satoshi text-[#3d822f] mb-4 leading-tight">
                <img src={icondot} alt="Adult Services Icon" className="w-2 h-2 mr-1" />
                Psychiatric Evaluations
            </h1>
            <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight mb-4 leading-relaxed">
            A comprehensive psychiatric evaluation is the first step in determining if medication could be beneficial in managing mental health symptoms. Our skilled 
            psychiatric providers conduct thorough assessments, taking into account each client’s medical history, current symptoms, and treatment goals. This 
            personalized approach ensures that any recommended medication aligns with the client’s unique needs and complements other therapeutic interventions.
            </p>
            <p className="text-[#0B1B19] text-sm md:text-[15px] font-satoshi font-extralight leading-relaxed mb-6">
            During the evaluation, our team discusses potential treatment options, answers questions, and provides guidance on what to expect from medication as part of 
            a holistic treatment plan. The goal is to empower clients with knowledge and confidence as they begin or adjust their mental health journey.                
            </p>
        
            <h1 className="flex items-center text-l md:text-[17px] font-medium font-satoshi text-[#3d822f] mb-4 leading-tight">
                <img src={icondot} alt="Adult Services Icon" className="w-2 h-2 mr-1" />
                Medication Monitoring
            </h1>
            <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight mb-4 leading-relaxed">
            Once a medication plan is established, ongoing monitoring is essential to ensure its effectiveness and adjust as needed. Our psychiatric providers work closely 
            with clients to track progress, manage side effects, and fine-tune dosages over time. This collaborative, ongoing support helps clients achieve the best possible 
            outcomes, providing peace of mind that their mental health needs are consistently being met.
            </p>
            <p className="text-[#0B1B19] text-sm md:text-[15px] font-satoshi font-extralight leading-relaxed mb-6">
            Medication monitoring can be conducted through regular in-person visits or telepsychiatry appointments, allowing clients to choose the option that best fits their 
            schedule and comfort level. Our team is dedicated to maintaining open communication and making adjustments as necessary to support each client’s wellness goals.                 
            </p>

            <h1 className="flex items-center text-l md:text-[17px] font-medium font-satoshi text-[#3d822f] mb-4 leading-tight">
                <img src={icondot} alt="Adult Services Icon" className="w-2 h-2 mr-1" />
                Telepsychiatry
            </h1>
            <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight mb-4 leading-relaxed">
            For clients who prefer the convenience of remote care, Greentree Wellness offers telepsychiatry services, enabling clients to connect with their psychiatric providers 
            from the comfort of their own home. Our secure, HIPAA-compliant telepsychiatry platform allows for high-quality virtual appointments, providing the same level of 
            personalized care as in-person visits.
            </p>
            <p className="text-[#0B1B19] text-sm md:text-[15px] font-satoshi font-extralight leading-relaxed mb-6">
            Telepsychiatry is available for both psychiatric evaluations and medication monitoring, ensuring flexibility for clients with busy schedules or those who may find it 
            difficult to attend in-office appointments. This accessible approach to mental health care makes it easier for clients across Maryland to receive the support they need.
            </p>
            
          </div>
        
        
            <div className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-10 text-left">
            <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-[#3d822f] mb-6 leading-tight">
            Why Choose Greentree Health & Wellness for Medication Management?
            </h1>
            <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight leading-relaxed mb-8">
            Greentree Wellness is committed to providing comprehensive, individualized medication management services that prioritize client comfort and long-term success. Our psychiatric 
            team collaborates with therapists, PRP counselors, and other healthcare professionals to deliver well-rounded care tailored to each client’s unique needs. With the added 
            convenience of telepsychiatry and medication monitoring options, we make it easy for clients to stay engaged and supported throughout their mental health journey.
            </p>
            </div>
        
            <Carouseltext/>
        </div>
        
          )
}
