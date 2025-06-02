import React from 'react'
import { useLocation } from 'react-router-dom';
import icondot from '../assets/icondot.png';
import icon from '../assets/listicon.png';
import Carouseltext from "../components/carouseltext";
import Abouticon from '../assets/aboutpic.png';

export const About = () => {
    const location = useLocation();
    
      console.log(location.pathname);  
  return (
    <div className="flex flex-col min-h-screen bg-white">
    <div className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-20 text-left">
      <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-[#3d822f] mb-6 leading-tight">
      About Greentree Wellness
      </h1>
      <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight leading-relaxed mb-12">
      Greentree wellness is a person centered patient Mental Health Clinic (OMHC) committed to providing compassionate, 
      individualized care that strengthens clients, families, and communities. Through therapy, Psychiatric Rehabilitation 
      Program (PRP) services, and medication management, we help underserved populations across Maryland achieve their full 
      potential. With a holistic, person-centered approach, we empower individuals to navigate life’s challenges and thrive.
      Explore mission, values, and the team that drives our dedication to mental wellness.
      </p>

      <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-[#3d822f] mb-6 leading-tight">
      Our Mission
      </h1>
      <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight leading-relaxed mb-12">
      Our mission has remained the same: to reduce barriers to care and provide wrap-around mental health support. Our CARF 
      accreditation confirms our adherence to the highest standards in behavioral health care, ensuring every client receives 
      quality, person-centered services tailored to their needs.
      </p>

      <div className="w-full  justify-center mx-0 md:mx-12 mb-12">
          <img src={Abouticon} alt="Greentree Wellness" className="w-full max-w-[1000px] h-auto object-contain" />
        </div>
    </div>

    <div className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-10 text-left">
    <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-[#3d822f] mb-6 leading-tight">
    Vision of Greentree Health & Wellness
    </h1>
    <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight leading-relaxed mb-8">
    To become one of Greentree’s leading Outpatient Mental Health Clinics (OMHC) and providers of Psychiatric 
    Rehabilitation Program (PRP) services through excellent client service, community partnerships, and innovation.
    </p>
    </div>

    <div className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-6 text-left">
    <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-[#3d822f] mb-6 leading-tight">
    Our Values
    </h1>
    <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight leading-relaxed mb-4">
    Fruit of the Spirit (Galatians 5:22-23), guiding our interactions with clients, partners, and team members. We are 
    committed to providing compassionate, faith-driven care that nurtures the whole person—mind, body, and spirit.
    </p>
    <div className="flex items-start space-x-3 mb-6">
              <img src={icondot} alt="icon" className="w-3 h-3 mt-1" />
              <p className="text-[#0B1B19] text-sm md:text-[14px] font-satoshi font-normal">
              <span className='font-normal text-[#3d822f]'> Love (Compassion)</span> – We serve with unconditional love, 
              treating every individual with kindness and empathy. Just as Christ’s love knows no bounds, we extend the same 
              care to our clients and colleagues, fostering a culture of healing and understanding.
              </p>
        </div>

        <div className="flex items-start space-x-3 mb-6">
              <img src={icondot} alt="icon" className="w-3 h-3 mt-1" />
              <p className="text-[#0B1B19] text-sm md:text-[14px] font-satoshi font-normal">
              <span className='font-normal text-[#3d822f]'> Joy (Commitment)</span> – We find joy in walking alongside our clients on their 
              journey to wellness. Our dedication goes beyond appointments—we actively reach out to those who disengage, recognizing that their 
              absence may indicate a greater need for support. Our commitment also extends to our team, ensuring they feel valued, supported, and equipped to thrive.
              </p>
        </div>
        <div className="flex items-start space-x-3 mb-6">
              <img src={icondot} alt="icon" className="w-3 h-3 mt-1" />
              <p className="text-[#0B1B19] text-sm md:text-[14px] font-satoshi font-normal">
              <span className='font-normal text-[#3d822f]'>Peace (Respect)</span> – We create a safe, welcoming environment where every client is
               treated with dignity. Just as Christ offers peace to all, we honor each person’s unique journey, ensuring they play an active role in 
               their care. Within our organization, we cultivate a culture of equity, inclusion, and mutual respect.
              </p>
        </div>
        <div className="flex items-start space-x-3 mb-6">
              <img src={icondot} alt="icon" className="w-3 h-3 mt-1" />
              <p className="text-[#0B1B19] text-sm md:text-[14px] font-satoshi font-normal">
              <span className='font-normal text-[#3d822f]'>Patience (Collaboration)</span>– True healing takes time, and we walk alongside our clients 
              with patience and perseverance. We collaborate with therapists, prescribers, primary care physicians, and other providers to offer holistic, 
              integrated care. Internally, we work as one body, overcoming challenges together for the best outcomes.
              </p>
        </div>
        <div className="flex items-start space-x-3 mb-6">
              <img src={icondot} alt="icon" className="w-3 h-3 mt-1" />
              <p className="text-[#0B1B19] text-sm md:text-[14px] font-satoshi font-normal">
              <span className='font-normal text-[#3d822f]'>Kindness (Transparency)</span> – We believe in open, honest communication, ensuring clients are 
              fully involved in their treatment plans. Just as kindness fosters trust, we uphold integrity in all we do, creating transparency at every level of our organization.
              </p>
        </div>
        <div className="flex items-start space-x-3 mb-6">
              <img src={icondot} alt="icon" className="w-3 h-3 mt-1" />
              <p className="text-[#0B1B19] text-sm md:text-[14px] font-satoshi font-normal">
              <span className='font-normal text-[#3d822f]'>Faithfullness (Innovation)</span> – From mobile medication delivery to transportation assistance, 
              we constantly seek new ways to meet client needs. Internally, we embrace feedback to drive meaningful change and expand our offerings.
              </p>
        </div>
        
        <div className="flex items-start space-x-3 mb-6">
              <img src={icondot} alt="icon" className="w-3 h-3 mt-1" />
              <p className="text-[#0B1B19] text-sm md:text-[14px] font-satoshi font-normal">
              <span className='font-normal text-[#3d822f]'>Gentleness (Empowerment)</span>  – We approach every individual with gentleness, empowering them to take ownership of their 
              mental health journey. We believe true healing happens in an environment where people feel heard, valued, and supported.
              </p>
        </div>
        <div className="flex items-start space-x-3 mb-12">
              <img src={icondot} alt="icon" className="w-3 h-3 mt-1" />
              <p className="text-[#0B1B19] text-sm md:text-[14px] font-satoshi font-normal">
              <span className='font-normal text-[#3d822f]'>Self-Control (Stewardship)</span>  – We are mindful stewards of the resources entrusted to 
              us, ensuring they are used effectively to serve our clients and community. We also encourage self-discipline in our clients, helping them develop strategies for long-term wellness and resilience. At Greentree Health and Wellness, our mission is more than providing services—it is about transforming lives through faith, compassion, and excellence.
              </p>
        </div>

    </div>
    <Carouseltext/>
    </div>
  )
}
