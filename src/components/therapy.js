import React from 'react'
import { useLocation } from 'react-router-dom';
import icondot from '../assets/icondot.png';
import icon from '../assets/listicon.png';
import Carouseltext from "../components/carouseltext";

export const Therapy = () => {
       const location = useLocation();
        
          console.log(location.pathname);  
          return (
            <div className="flex flex-col min-h-screen bg-white">
          <div className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-20 text-left">
            <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-[#3d822f] mb-6 leading-tight">
            Therapy Services at Greentree Wellness
            </h1>
            <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight leading-relaxed mb-4">
            Greentree Wellness provides holistic, client-centered therapy services that empower individuals to navigate life’s 
            challenges and improve their mental health. Our experienced therapists, counselors, and social workers support clients 
            of all ages—from children and adolescents to adults. We offer a variety of therapy options, including individual, group, 
            and family sessions, all available in-person or via telehealth, to ensure flexible access to care across Maryland.
            </p>

            <p className="text-[#0B1B19] text-sm md:text-[15px] font-satoshi font-extralight leading-relaxed mb-12">
            Our therapy services address a range of mental health needs, from mood disorders and anxiety to ADHD and behavioral concerns. 
            By combining evidence-based techniques with a compassionate approach, we guide clients toward resilience, stability, and a fulfilling life.                  
            </p>
        
            <h1 className="flex items-center text-l md:text-[17px] font-medium font-satoshi text-[#3d822f] mb-4 leading-tight">
                <img src={icondot} alt="Adult Services Icon" className="w-2 h-2 mr-1" />
                Individual Therapy
            </h1>
            <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight mb-6 leading-relaxed">
            In individual therapy, clients work one-on-one with a therapist to explore personal challenges, develop coping strategies, and set meaningful 
            goals for growth. Our therapists use evidence-based approaches, including Cognitive Behavioral Therapy (CBT), person-centered therapy, and 
            psychodynamic techniques, to tailor each session to the client’s unique needs and experiences. Individual therapy provides a safe, confidential 
            space to work through concerns such as anxiety, depression, trauma, and stress, empowering clients to build resilience and achieve emotional wellness.
            </p>
            
        
            <h1 className="flex items-center text-l md:text-[17px] font-medium font-satoshi text-[#3d822f] mb-4 leading-tight">
                <img src={icondot} alt="Adult Services Icon" className="w-2 h-2 mr-1" />
                Couples Therapy
            </h1>
            <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight mb-4 leading-relaxed">
            Greentree Wellness also provides couples therapy through a supportive yet structured process designed to strengthen relationships. During couples therapy, 
            our clinicians assess the couple’s needs and build a therapeutic alliance. Together, the couple and clinician work to establish relationship goals and 
            identify strategies to foster positive changes. These changes aim to reduce distress, improve communication, and enhance connection and satisfaction within 
            the relationship.
            </p>
            <p className="text-[#0B1B19] text-sm md:text-[15px] font-satoshi font-extralight leading-relaxed mb-6">
            To meet the diverse needs of our clients, couples therapy is offered in both in-person and hybrid formats, ensuring accessibility and flexibility 
            for all participants.                 
            </p>

            <h1 className="flex items-center text-l md:text-[17px] font-medium font-satoshi text-[#3d822f] mb-4 leading-tight">
                <img src={icondot} alt="Adult Services Icon" className="w-2 h-2 mr-1" />
                Group Therapy
            </h1>
            <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight mb-6 leading-relaxed">
            Group therapy offers clients the opportunity to connect with others facing similar challenges in a supportive, therapeutic setting. Our group sessions 
            are led by licensed therapists who facilitate discussions, promote self-reflection, and foster a sense of community. Group therapy can be an effective 
            way to build social skills, gain new perspectives, and develop healthy ways to manage emotions. Topics vary by group and may include anxiety management,
            coping skills, and self-esteem building.
            </p>
        
            <h1 className="flex items-center text-l md:text-[17px] font-medium font-satoshi text-[#3d822f] mb-4 leading-tight">
                <img src={icondot} alt="Adult Services Icon" className="w-2 h-2 mr-1" />
                Family Therapy
            </h1>
            <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight mb-6 leading-relaxed">
            Family therapy is designed to support families navigating relational challenges, helping to improve communication, resolve conflicts, and strengthen bonds. 
            Our therapists work with families to address dynamics that may impact mental health, fostering understanding and collaboration. Family therapy sessions provide 
            tools for managing life transitions, building trust, and addressing issues such as behavioral concerns, grief, and emotional regulation.
            </p>

            <h1 className="flex items-center text-l md:text-[17px] font-medium font-satoshi text-[#3d822f] mb-4 leading-tight">
                <img src={icondot} alt="Adult Services Icon" className="w-2 h-2 mr-1" />
                Telehealth Options
            </h1>
            <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight mb-6 leading-relaxed">
            To make therapy accessible and convenient, Maryland Wellness offers telehealth sessions for individual, group, and family therapy. Telehealth allows clients to 
            connect with their therapist from the comfort of their home or another preferred location, ensuring flexibility for busy schedules or clients who may have difficulty
            attending in-person sessions. Our secure, HIPAA-compliant telehealth platform enables high-quality care that’s just as effective as in-person visits, providing reliable 
            mental health support wherever you are.
            </p>
          </div>
        
        
          <div className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-10 text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold font-satoshi text-[#3d822f] mb-6 leading-tight">
            Our Approach to Therapy
            </h1>
            <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight leading-relaxed mb-4">
            Greentree Wellness therapists integrate a range of therapeutic modalities to create a personalized experience 
            for each client. Common approaches include:
            </p>
            <div className="flex items-start space-x-3 mb-4">
                      <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
                      <p className="text-[#0B1B19] text-sm md:text-[14px] font-satoshi font-normal">
                      <span className='font-medium text-[#3d822f]'>Cognitive Behavioral Therapy (CBT):</span>  Helps clients 
                      identify and change negative thought patterns, promoting a more positive and effective outlook on life.
                      </p>
                </div>
        
                <div className="flex items-start space-x-3 mb-4">
                      <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
                      <p className="text-[#0B1B19] text-sm md:text-[14px] font-satoshi font-normal">
                      <span className='font-medium text-[#3d822f]'>Person-Centered Therapy:</span> Focuses on creating a supportive 
                      and empathetic environment where clients feel empowered to explore their thoughts, emotions, and goals.
                      </p>
                </div>
                <div className="flex items-start space-x-3 mb-4">
                      <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
                      <p className="text-[#0B1B19] text-sm md:text-[14px] font-satoshi font-normal">
                      <span className='font-medium text-[#3d822f]'>Psychodynamic Therapy:</span> Explores past experiences to gain insight 
                      into current behaviors and emotions, fostering self-awareness and growth.
                      </p>
                </div>
                
        
                <p className="text-[#0B1B19] text-sm md:text-[15px] font-satoshi font-extralight leading-relaxed">
                Our therapy approach is compassionate, collaborative, and goal-oriented, empowering clients with the tools and strategies 
                they need to thrive in their mental health journey.
                  </p>
            </div>
        
        
            <div className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-20 text-left">
            <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-[#3d822f] mb-6 leading-tight">
            Why Choose Greentree Health & Wellness for Therapy Services?
            </h1>
            <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight leading-relaxed mb-8">
            Choosing Greentree Wellness means receiving therapy tailored to your needs in a safe, supportive environment. Our team is dedicated 
            to providing holistic mental health care that respects each client’s journey, offering flexible options to accommodate all lifestyles. 
            With the choice of individual, group, or family therapy—available both in-person and via telehealth—Maryland Wellness provides the 
            accessibility and personalized support that help individuals and families flourish.
            </p>
            </div>
        
            <Carouseltext/>
        </div>
        
          )
}
