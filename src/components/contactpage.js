import React from 'react'
import { useLocation } from 'react-router-dom';
import icondot from '../assets/icondot.png';
import icon from '../assets/listicon.png';
import Carouseltext from "../components/carouseltext";
import  {Contact}  from "../components/contact";

export const Contactpage = () => {
    const location = useLocation();
        
    console.log(location.pathname);  

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-20 text-left">
                <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-[#3d822f] mb-6 leading-tight">
                    Contact Greentree Wellness
                </h1>
                <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight leading-relaxed mb-6">
                    At Greentree Wellness, we’re here to make reaching out as easy and comfortable as possible. Whether you’re looking for more information 
                    about our mental health services, need help getting started, or want to provide feedback, our team is ready to assist you. Below, you’ll 
                    find all the ways to connect with us, including direct contact information, office locations, an online contact form, and a space for 
                    feedback and suggestions. We look forward to hearing from you.
                </p>
            </div>
            
            <div className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-10 text-left">
                <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-[#3d822f] mb-6 leading-tight">
                    Contact Information
                </h1>
                <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight leading-relaxed mb-4">
                    We’re committed to making sure every inquiry is met with timely, compassionate support. Use the contact details below to get in touch 
                    with our team directly, whether for general questions, service inquiries, or specific needs:
                </p>
            </div>

            <div className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-10 text-left">
            <div className="max-w-[600px]">
                <h1 className="text-2xl md:text-3xl font-bold font-satoshi text-[#3d822f] mb-6 leading-tight">
                    Main Greentree Health & Wellness Office
                </h1>
                <p className="text-[#3D85FD] text-base md:text-[15px] font-satoshi font-extralight leading-relaxed mb-8">
                Frederick Maryland<br></br>
                <span className="text-[#0B1B19] font-medium">Phone:</span> 240-565-7739<br></br>
                <span className="text-[#0B1B19] font-medium">Email:</span> info@greentree.com <br></br>
                <span className="text-[#0B1B19] font-medium">Office Hours:</span> Monday – Friday: 9:00 AM – 5:00 PM<br></br>
                </p>
                </div>
            </div>

            <div className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-10 text-left">
                <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-[#3d822f] mb-6 leading-tight">
                Office Locations & Hours
                </h1>
                <p className="text-[#0B1B19] text-base md:text-[15px] font-satoshi font-extralight leading-relaxed mb-4">
                Greentree Wellness offers services across multiple locations in Maryland, ensuring that support is accessible to 
                individuals and families in need. Our offices provide both in-person and telehealth options, making it convenient
                 for clients to connect with our mental health professionals.<br></br>
                Note: Office hours may vary. Please contact the location nearest you to confirm hours or to schedule an appointment.
                </p>
            </div>
            <Contact/>
            <Carouseltext/>
        </div>
    )
}
