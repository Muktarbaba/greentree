import React from 'react';
import call from '../assets/call.svg';
import mail from '../assets/mail.svg';
import refer from '../assets/refer.svg';
import accredit from '../assets/acrredit.png';
import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <div className="w-full flex justify-center py-16 px-6">
      <div className="max-w-[1200px] flex flex-col md:flex-row items-start justify-center gap-8">

        {/* Left Side - Vertical Buttons */}
        <div className="flex flex-col gap-4 w-full md:w-1/3 items-center md:items-start">
        <button
            onClick={() => window.location.href = 'tel:2405657739'}
            className="w-full px-4 py-4 bg-[#28720F] text-white rounded-lg shadow-md hover:bg-[#326c27] transition text-left flex items-start gap-4"
          >
            <img src={call} alt="General Inquiry" className="w-12 h-12 mt-1" />
            <div>
              <h4 className="text-[16px] font-satoshi font-semibold">Call Greentree - 240-565-7739</h4>
              <p className="text-sm font-light">Tap to connect with our team for assistance or questions</p>
            </div>
          </button>

          <a href="mailto:info.greentreehaw.com" className="w-full">
          <button className="w-full px-4 py-4 bg-[#28720F] text-white rounded-lg shadow-md hover:bg-[#326c27] transition text-left flex items-start gap-4">
            <img src={mail} alt="General Inquiry" className="w-12 h-12 mt-1" />
            <div>
              <h4 className="text-[16px] font-satoshi font-semibold">Email us at info.greentreehaw.com</h4>
              <p className="text-sm font-light">Click here to send us an email for support or information</p>
            </div>
          </button>
          </a>


                  <Link to="/getstarted" className="w-full">
          <button className="w-full px-4 py-4 bg-[#0E5DA7] text-white rounded-lg shadow-md hover:bg-[#326c27] transition text-left flex items-start gap-4">
            <img src={refer} alt="General Inquiry" className="w-12 h-12 mt-1" />
            <div>
              <h4 className="text-[16px] font-satoshi font-semibold">Start your Referral</h4>
              <p className="text-sm font-light">Access our easy referral form to begin service today.</p>
            </div>
          </button>
        </Link>

          {/* Image Under Buttons */}
          <img
            src={accredit}
            alt="Contact Illustration"
            className="w-40 h-40 "
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-[650px] bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-[36px] font-satoshi font-extrabold text-[#3d822f] mb-2">
            Have Questions? Let's Get Started
          </h3>
          <p className="text-sm font-satoshi text-left text-[#4C4E4D] mb-4">
            We understand that reaching out for mental health support or information may feel like a big step. Our online contact form is here to make this process as simple and straightforward as possible. Whether you have questions about our services, 
          </p>

          <form className="flex flex-col gap-4">
            {/* First and Last Name */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col w-full">
                <label htmlFor="firstName" className="text-sm text-left text-[#3d822f] mb-1 font-satoshi">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your firstname"
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3d822f] bg-gray-50"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="lastName" className="text-sm text-left text-[#3d822f] mb-1 font-satoshi">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3d822f] bg-gray-50"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col w-full">
                <label htmlFor="phone" className="text-sm text-left text-[#3d822f] mb-1 font-satoshi">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3d822f] bg-gray-50"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="text-sm text-left text-[#3d822f] mb-1 font-satoshi">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3d822f] bg-gray-50"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm text-left text-[#3d822f] mb-1 font-satoshi">
                Question or Comment
              </label>
              <textarea
                id="message"
                placeholder=""
                rows="5"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3d822f] bg-gray-50"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#3d822f] w-[160px] text-white font-satoshi px-6 py-3 rounded-lg hover:bg-[#326c27] transition self-start"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
