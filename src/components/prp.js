import React from 'react'
import { useLocation } from 'react-router-dom';
import icondot from '../assets/icondot.png';
import icon from '../assets/listicon.png';
import Carouseltext from "../components/carouseltext";

export const Prp = () => {
    const location = useLocation();
    
      console.log(location.pathname);  

  return (
    <div className="flex flex-col min-h-screen bg-white">
  <div className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-20 text-left">
    <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-[#3d822f] mb-6 leading-tight">
      Psychiatric Rehabilitation Program (PRP) at Greentree Health & Wellness
    </h1>
    <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight leading-relaxed mb-12">
      Greentree Wellness’s Psychiatric Rehabilitation Program (PRP) is designed to empower individuals with the
      skills, resources, and guidance needed to overcome life’s challenges and achieve mental wellness. Our PRP counselors work with
      each client to build personalized strategies that support their goals, offering flexible services that fit into clients’ daily lives.
      With in-home and community-based support options, Greentree Wellness provides accessible, hands-on assistance that makes a meaningful
      impact on mental health and overall well-being. Explore our PRP services below to learn more about how we support both adults and
      youth on their path to independence and stability.
    </p>

    <h1 className="flex items-center text-l md:text-[17px] font-medium font-satoshi text-[#3d822f] mb-4 leading-tight">
        <img src={icondot} alt="Adult Services Icon" className="w-2 h-2 mr-1" />
        Adult Services
    </h1>
    <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight mb-6 leading-relaxed">
    Our Adult PRP services are focused on providing practical skills and guidance to help clients build resilience and independence. 
    Through one-on-one sessions with PRP counselors, adults receive personalized coaching, training, and support designed to address 
    both immediate needs and long-term goals. PRP counselors help clients build skills in areas like financial management, job readiness, 
    health education, and socialization, all within a compassionate, supportive framework.<br></br> Adult PRP services are tailored to meet each 
    individual’s unique needs, helping them to overcome obstacles and maintain stability in their mental health journey. PRP counselors 
    coordinate with other professionals, such as therapists, healthcare providers, and community partners, to provide well-rounded support.
    </p>

    <h1 className="flex items-center text-l md:text-[17px] font-medium font-satoshi text-[#3d822f] mb-4 leading-tight">
        <img src={icondot} alt="Adult Services Icon" className="w-2 h-2 mr-1" />
        Youth Services
    </h1>
    <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight mb-6 leading-relaxed">
    Youth PRP services at Greentree Wellness are tailored to help young clients develop important life skills that support their mental health goals. 
    Our PRP counselors provide a safe and positive environment where youth can learn and practice essential skills like socialization, coping strategies, 
    and personal responsibility. Youth clients also receive support in areas such as academic assistance, social skills, and family relationships.<br></br>
    Our counselors work with youth and their families to create a customized plan that fosters growth, stability, and emotional resilience. With both in-home and community-based options, youth services are adaptable to meet the needs of each client, ensuring they feel empowered and supported.
    </p>

    <h1 className="flex items-center text-l md:text-[17px] font-medium font-satoshi text-[#3d822f] mb-4 leading-tight">
        <img src={icondot} alt="Adult Services Icon" className="w-2 h-2 mr-1" />
        In- home support
    </h1>
    <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight mb-6 leading-relaxed">
    Greentree Wellness offers in-home PRP support for clients who prefer to receive services in the comfort of their own home. In-home support 
    provides a familiar, convenient setting for skill-building and guidance, making it easier for clients to fully engage with their rehabilitation plan.<br></br>
    Our PRP counselors visit clients regularly to provide hands-on support tailored to their unique needs. Adults typically meet with their counselor up 
    to six times per month, while minors are seen up to four times per month. During these sessions, counselors assist clients in developing practical skills 
    such as budgeting, personal organization, wellness routines, and goal setting. For clients facing barriers to accessing community resources, in-home support also 
    includes detailed guidance on local services, equipping clients with the tools and strategies needed to overcome challenges without disrupting their mental health journey.
    </p>

    <h1 className="flex items-center text-l md:text-[17px] font-medium font-satoshi text-[#3d822f] mb-4 leading-tight">
        <img src={icondot} alt="Adult Services Icon" className="w-2 h-2 mr-1" />
        Community-based Support
    </h1>
    <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight mb-6 leading-relaxed">
    Our community-based PRP support is designed for clients who prefer to meet in a community setting, such as a library, park, or other public space. This option encourages clients
     to engage with their surroundings, practice social skills, and connect with local resources.<br></br>
    PRP counselors work closely with clients to identify local opportunities and resources that align with their goals, from job support and academic resources to wellness programs 
    and social activities. Community-based support helps clients build confidence in navigating public spaces, accessing community services, and participating in social interactions, 
    all while reinforcing their individual rehabilitation plans.

    </p>
  </div>


  <div className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-20 text-left">
    <h1 className="text-3xl md:text-4xl font-extrabold font-satoshi text-[#3d822f] mb-6 leading-tight">
    Additional Support Services
    </h1>
    <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight leading-relaxed mb-4">
    As part of our commitment to holistic care, Greentree Health & Wellness connects clients with a range of community resources that 
    support their broader goals. Our PRP counselors provide guidance on accessing resources, such as:
    </p>
    <div className="flex items-start space-x-3 mb-4">
              <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
              <p className="text-[#0B1B19] text-sm md:text-[14px] font-satoshi font-normal">
              Housing and food assistance
              </p>
        </div>

        <div className="flex items-start space-x-3 mb-4">
              <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
              <p className="text-[#0B1B19] text-sm md:text-[14px] font-satoshi font-normal">
              Academic support and job training
              </p>
        </div>
        <div className="flex items-start space-x-3 mb-4">
              <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
              <p className="text-[#0B1B19] text-sm md:text-[14px] font-satoshi font-normal">
              Transportation solutions
              </p>
        </div>
        <div className="flex items-start space-x-3 mb-4">
              <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
              <p className="text-[#0B1B19] text-sm md:text-[14px] font-satoshi font-normal">
              Health and wellness services
              </p>
        </div>
        <div className="flex items-start space-x-3 mb-4">
              <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
              <p className="text-[#0B1B19] text-sm md:text-[14px] font-satoshi font-normal">
              Social security and identification services
              </p>
        </div>

        <p className="text-[#0B1B19] text-sm md:text-[15px] font-satoshi font-extralight leading-relaxed">
        These resources are designed to ensure that clients have access to the tools they need to build a stable, fulfilling life.
          </p>
    </div>


    <div className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-20 text-left">
    <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-[#3d822f] mb-6 leading-tight">
    Why Choose Greentree Health & Wellness for PRP Services?
    </h1>
    <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight leading-relaxed mb-6">
    Greentree Wellness provides flexible, person-centered PRP services that empower clients to grow, learn, and thrive. Our skilled PRP 
    counselors are dedicated to helping each individual develop the skills and confidence they need to reach their potential. Whether 
    you’re looking for in-home support, community engagement, or specialized services for youth, our PRP program is here to support you 
    every step of the way.<br></br>
    Start building the skills for a fulfilling life. Complete our referral form to connect with our team and learn how Greentree Wellness’s Psychiatric Rehabilitation Program (PRP) can support your personal growth and mental health journey.
    </p>
    </div>

    <Carouseltext/>
</div>

  )
}
