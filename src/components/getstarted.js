import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import heroImage from '../assets/heroimage1.png'; 
import heroImage2 from '../assets/hero2.png';// Ensure the image exists
import icon from '../assets/listicon.png'; // Custom icon
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from '@emailjs/browser';
import { ToastContainer,toast } from "react-toastify";

export const GetStarted = () => {

  const [userInput, setUserInput] = useState({
    gender: "",
    email: "",
    phone: "",
    address: "",
    city:"",
    zipcode:"",
    state:"",
    insuranceid:""

  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value
    });
  };

  const [startDate, setStartDate] = useState(null);
  const [startDateb, setStartDateb] = useState(null);
  const location = useLocation();
  const [housingStatus, setHousingStatus] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [insuranceProvider, setInsuranceProvider] = useState("");
  const [hasInsuranceCard, setHasInsuranceCard] = useState("");

  console.log(location.pathname); // will print '/getstarted'

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!startDateb) newErrors.startDateb = "Date of Birth is required.";
    if (!userInput.address) newErrors.address = "Address is required.";
    if (!userInput.city) newErrors.city = "City is required.";
    if (!userInput.state) newErrors.state = "State is required.";
    if (!userInput.zipcode) newErrors.zipcode = "Zip Code is required.";
    if (!userInput.phone) newErrors.phone = "Phone Number is required.";
    if (!userInput.email) newErrors.email = "Email is required.";
    if (!pronouns) newErrors.pronouns = "Pronouns are required.";
    if (!insuranceProvider) newErrors.insuranceProvider = "Insurance provider is required.";
    if (!hasInsuranceCard) newErrors.hasInsuranceCard = "Please indicate if you have an insurance card.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fill all required fields.");
      return;
    }

    const serviceID = 'service_0wpip3f';
    const templateID = 'referral_form';
    const userID = '7xcU34NEmCd1fCKGK';
  
    try {
      const emailParams = {
        date: startDate ? startDate.toLocaleDateString() : '',
        dob: startDateb ? startDateb.toLocaleDateString() : '',
        housingStatus,
        contactMethod: contactMethod.join(', '),
        pronouns,
        ethnicity,
        insuranceProvider,
        hasInsuranceCard,
        gender: userInput.gender,
        email: userInput.email,
        phone: userInput.phone,
        address: userInput.address,
        city: userInput.city,
        zipcode: userInput.zipcode,
        state: userInput.state,
        insuranceid: userInput.insuranceid
      };
  
      const res = await emailjs.send(serviceID, templateID, emailParams, userID);
  
      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({
          gender: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          zipcode: "",
          state: "",
          insuranceid: ""
        });
        setStartDate(null);
        setStartDateb(null);
        setHousingStatus("");
        setContactMethod("");
        setPronouns("");
        setEthnicity("");
        setInsuranceProvider("");
        setHasInsuranceCard("");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
  };
  

  return (
    <div className="flex flex-col min-h-screen">

      {/* Top Heading + Paragraph */}
      <div className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-20 text-left">
        <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-[#3d822f] mb-4">
          Get Started With Greentree Wellness
        </h1>
        <p className="text-[#0B1B19] max-w-6xl text-sm md:text-[13px] font-satoshi font-extralight">
          Taking the first step toward mental wellness is easier than ever with Greentree Wellness. Our streamlined 
          referral and intake process ensures that you receive the support you need as soon as possible. Whether 
          you’re a potential client or a referring provider, this page outlines everything you need to know to get 
          started with our services.
        </p>
      </div>

      {/* Hero Section */}
<div className="flex-grow flex flex-col md:flex-row items-center justify-center md:justify-between py-16 px-4 max-w-[1200px] mx-auto text-center md:text-left">

{/* Left: Hero Text */}
<div className="flex flex-col items-center md:items-start justify-center w-full md:w-[675px] space-y-4 px-4 md:pl-12 -mt-6">
  <h2 className="text-2xl md:text-4xl font-satoshi font-bold text-[#3d822f]">Referral Process</h2>
  <p className="text-[#0B1B19] text-sm md:text-[13px] font-satoshi font-extralight leading-relaxed max-w-[600px]">
    At Greentree Wellness, the journey begins with our simple referral form, designed to help us understand your 
    unique needs and connect you with the appropriate services. This form serves as both our referral and intake 
    form, streamlining the process for clients and providers alike.
  </p>
  <h2 className="text-l md:text-xl font-satoshi font-semibold text-[#3d822f] py-2">How It Works:</h2>

  <div className="flex flex-col space-y-3 mt-2 max-w-[600px]">
    <div className="flex items-start space-x-3">
      <img src={icon} alt="icon" className="w-3 h-3 mt-3" />
      <p className="text-[#0B1B19] text-sm md:text-[12px] font-satoshi font-extralight">
        <span className='font-medium'>Complete the Referral Form:</span> Fill out the form below with basic information about yourself 
        (or the client, if you’re a provider), including mental health needs and preferred services.
      </p>
    </div>
    <div className="flex items-start space-x-3">
      <img src={icon} alt="icon" className="w-3 h-3 mt-3" />
      <p className="text-[#0B1B19] text-sm md:text-[12px] font-satoshi font-extralight">
      <span className='font-medium'>Review and Assessment:</span> Our intake team will review the form and determine the best fit for services 
      based on the information provided.
      </p>
    </div>
    <div className="flex items-start space-x-3">
      <img src={icon} alt="icon" className="w-3 h-3 mt-3" />
      <p className="text-[#0B1B19] text-sm md:text-[12px] font-satoshi font-extralight">
      <span className='font-medium'>Schedule Initial Appointment:</span> A Greentree Wellness team member will contact you to discuss next steps 
      and schedule an initial appointment with one of our providers.
      </p>
    </div>
  </div>

  <p className="text-[#0B1B19] text-sm md:text-[12px] font-satoshi font-extralight leading-relaxed max-w-[600px]">
    This process allows us to match clients with the right program and ensure timely access to care.
  </p>
</div>

{/* Right: Hero Image */}
<div className="mt-10 md:mt-0 w-full md:w-2/3 flex justify-center px-4 md:pr-12">
  <img 
    src={heroImage} 
    alt="Get Started Hero" 
    className="w-full max-w-sm md:max-w-[700px] object-contain"
  />
</div>
</div>


      {/* Intake Form Section */}
      <div className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-20 text-left">
        <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-[#3d822f] mb-4">
          Intake Form
        </h1>
        <p className="text-[#0B1B19] max-w-6xl text-sm md:text-[13px] font-satoshi font-extralight mb-2">
          Our referral form doubles as the intake form, making it the first step for all new clients 
          and referrals. By completing this form, you provide our team with essential details that 
          help us assess your needs and align you with the most appropriate services.
        </p>
        <p className="text-[#0B1B19] max-w-6xl text-sm md:text-[13px] font-satoshi font-extralight mb-6">
          Please complete the referral form below to get started with Greentree Wellness.
        </p>

         {/* Centered Referral Form Section */}
      <div className="flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-[#3d822f] mb-4">
          Greentree Wellness Referral Form
        </h1>
        <form onSubmit={handleSubmit} className="max-w-[1000px] w-full space-y-4">
          <div className="flex flex-col text-left">
          <label className="text-sm font-normal mb-1">Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Select Date"
              name="date"
              dateFormat="MM/dd/yyyy"
              className="border border-gray-300 bg-gray-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              popperPlacement="bottom-start"
            />
         </div>
          
          <div className="flex flex-col text-left">
                <span className="text-[16px] text-left  font-medium mb-1 pt-2 font-satoshi">
                  Client Information
                </span>
            </div>

            <div className="flex flex-col text-left">
                <label className="text-sm font-normal mb-1">Date of Birth *
                {errors.startDateb && <span className="text-xs text-red-500 ml-2">{errors.startDateb}</span>}</label>
                <DatePicker
                  selected={startDateb}
                  onChange={(date) => setStartDateb(date)}
                  placeholderText="Select Date"
                  name="dob"
                  dateFormat="MM/dd/yyyy"
                  className="border border-gray-300 bg-gray-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  popperPlacement="bottom-start"
                  
                />
              </div>

          <div className="flex flex-col text-left">
            <label className="text-sm font-normal mb-2">Do you currently experience homelessness or lack stable housing?</label>
            <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
            <input
                type="radio"
                id="housingYes"
                name="housingStatus"
                value="yes"
                checked={housingStatus === "yes"}
                onChange={(e) => setHousingStatus(e.target.value)}
                className="w-4 h-4"
              />
              <label htmlFor="housingYes" className="text-sm font-light">Yes</label>

           </div>
            <div className="flex items-center space-x-2">
            <input
                type="radio"
                id="housingNo"
                name="housingStatus"
                value="no"
                checked={housingStatus === "no"}
                onChange={(e) => setHousingStatus(e.target.value)}
                className="w-4 h-4"
              />
              <label htmlFor="housingNo" className="text-sm font-light">No</label>
            </div>
             </div>
        </div>
        <div className="flex flex-col text-left">
                <span className="text-[16px] text-left  font-medium mb-1 pt-2 font-satoshi">
                  Contact Information
                </span>
            </div>
        {/* Email */}
        <div className="flex flex-col md:flex-row gap-8">
            
              <div className="flex flex-col w-full">
              
                <label htmlFor="address" className="text-sm text-left text-[#3d822f] mb-1 font-satoshi">
                Address *
                {errors.address && <span className="text-xs text-red-500 ml-2">{errors.address}</span>}
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={userInput.address} onChange={handleChange}
                  placeholder="Enter your Address"
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3d822f] bg-gray-50"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="city" className="text-sm text-left text-[#3d822f] mb-1 font-satoshi">
                City *
                {errors.city && <span className="text-xs text-red-500 ml-2">{errors.city}</span>}
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={userInput.city} onChange={handleChange}
                  placeholder="Enter your city"
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3d822f] bg-gray-50"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col w-full">
                <label htmlFor="state" className="text-sm text-left text-[#3d822f] mb-1 font-satoshi">
                State *
                {errors.state && <span className="text-xs text-red-500 ml-2">{errors.state}</span>}
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={userInput.state} onChange={handleChange}
                  placeholder="Enter state"
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3d822f] bg-gray-50"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="zip" className="text-sm text-left text-[#3d822f] mb-1 font-satoshi">
                Zip Code *
                {errors.zipcode && <span className="text-xs text-red-500 ml-2">{errors.zipcode}</span>}
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zipcode"
                  value={userInput.zipcode} onChange={handleChange}
                  placeholder="Enter Zip code"
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3d822f] bg-gray-50"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col w-full">
                <label htmlFor="phone" className="text-sm text-left text-[#3d822f] mb-1 font-satoshi">
                Phone Number *
                {errors.phone && <span className="text-xs text-red-500 ml-2">{errors.phone}</span>}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={userInput.phone} onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3d822f] bg-gray-50"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="text-sm text-left text-[#3d822f] mb-1 font-satoshi">
                Email *
                {errors.email && <span className="text-xs text-red-500 ml-2">{errors.email}</span>}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userInput.email} onChange={handleChange}
                  placeholder="Your Email"
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3d822f] bg-gray-50"
                />
              </div>
            </div>

            <div className="flex flex-col text-left">
              <label className="text-sm font-medium mb-2">
                Preferred Contact Method (Select all that apply.)
              </label>
              <div className="flex flex-col space-y-2">
                {[
                  { id: "call", label: "Phone Call" },
                  { id: "text", label: "Text Message" },
                  { id: "email", label: "Email" },
                  { id: "none", label: "No preference" },
                  { id: "other", label: "Other" },
                ].map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`contact${option.id}`}
                      name="contactMethod"
                      value={option.id}
                      checked={contactMethod.includes(option.id)}
                      onChange={(e) => {
                        const value = e.target.value;
                        setContactMethod((prev) =>
                          prev.includes(value)
                            ? prev.filter((method) => method !== value)
                            : [...prev, value]
                        );
                      }}
                      className="w-4 h-4"
                    />
                    <label htmlFor={`contact${option.id}`} className="text-sm font-light">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>


        <div className="flex flex-col text-left">
        <i className="text-[12px] text-left  font-light mb-1 mt-6 font-satoshi">
        By selecting a contact method, you conset to being contacted by Greentree Wellness via the method(s) chosen.
                </i>
            <br></br>
                <span className="text-[16px] text-left  font-medium mb-1 pt-2 font-satoshi">
                  Demographics
                </span>
            </div>

          <div className="flex flex-col text-left">
            <label className="text-sm font-light mb-1">Sex</label>
            <input type="text" placeholder="Your gender" 
            name="gender" 
            value={userInput.gender} onChange={handleChange}
            className="border border-gray-300 bg-gray-50 rounded-md p-2" />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-sm font-medium mb-2">Pronouns *
            {errors.pronouns && <span className="text-xs text-red-500 ml-2">{errors.pronouns}</span>}</label>
            <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
            <input
                type="radio"
                id="pronounShe"
                name="pronouns"
                value="she/her"
                checked={pronouns === "she/her"}
                onChange={(e) => setPronouns(e.target.value)}
                className="w-4 h-4"
              />
              <label htmlFor="pronounShe" className="text-sm font-light">She/Her</label>
           </div>
            <div className="flex items-center space-x-2">
            <input
                  type="radio"
                  id="pronounHe"
                  name="pronouns"
                  value="he/him"
                  checked={pronouns === "he/him"}
                  onChange={(e) => setPronouns(e.target.value)}
                  className="w-4 h-4"
                />
                <label htmlFor="pronounHe" className="text-sm font-light">He/Him</label>
            </div>
            <div className="flex items-center space-x-2">
            <input
                type="radio"
                id="pronounOther"
                name="pronouns"
                value="other"
                checked={pronouns === "other"}
                onChange={(e) => setPronouns(e.target.value)}
                className="w-4 h-4"
              />
              <label htmlFor="pronounOther" className="text-sm font-light">Other</label>
            </div>
        </div>
        </div>
            
             <div className="flex flex-col text-left">
            <label className="text-sm font-medium mb-2">Race/Ethnicity</label>
            <div className="flex flex-col space-y-2 font-light text-sm ">
          {[
            "American Indian or Alaska Native",
            "Asian",
            "Black or African American",
            "Hispanic or Latino",
            "Native Hawaiian or Pacific Islander",
            "White",
            "Other",
          ].map((group) => (
            <label key={group}>
              <input
                type="radio"
                name="ethnicity"
                value={group}
                checked={ethnicity === group}
                onChange={(e) => setEthnicity(e.target.value)}
                className="w-4 h-4"
              />{" "}
              {group}
            </label>
          ))}
        </div>
        </div>

        <div className="flex flex-col text-left">
                <span className="text-[16px] text-left  font-medium mb-1 pt-2 font-satoshi">
                  Insurance Information
                </span>
            </div>

            <div className="flex flex-col text-left">
            <label className="text-sm font-medium mb-2">Health Insurance Provider *
            {errors.insuranceProvider && <span className="text-xs text-red-500 ml-2">{errors.insuranceProvider}</span>}</label>
            <div className="flex flex-col space-y-2 font-light text-sm">
          {[
            "Maryland Medicaid",
            "Medicare",
            "Private Insurance",
            "No Insurance",
            "Other",
          ].map((provider) => (
            <label key={provider}>
              <input
                type="radio"
                name="insuranceProvider"
                value={provider}
                checked={insuranceProvider === provider}
                onChange={(e) => setInsuranceProvider(e.target.value)}
                className="w-4 h-4"
              />{" "}
              {provider}
            </label>
          ))}
        </div>
        </div>


        <div className="flex flex-col text-left">
            <label className="text-sm font-light mb-1">Insurance Policy/Member ID Number</label>
            <input type="text" 
            name="insuranceid" 
            value={userInput.insuranceid} onChange={handleChange}
            placeholder="Enter your insurance policy/member id number" 
            className="border border-gray-300 bg-gray-50 rounded-md p-2" />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-sm font-medium mb-2"> Has Insurance Card *
            {errors.hasInsuranceCard && <span className="text-xs text-red-500 ml-2">{errors.hasInsuranceCard}</span>}</label>
            <div className="flex flex-col space-y-2 font-light text-sm ">
            <div className="flex items-center space-x-2">
            <label>
            <input
              type="radio"
              name="hasInsuranceCard"
              value="yes"
              checked={hasInsuranceCard === "yes"}
              onChange={(e) => setHasInsuranceCard(e.target.value)}
              className="w-4 h-4"
            />{" "}
            Yes
          </label>
           </div>
            <div className="flex items-center space-x-2">
            <label>
            <input
              type="radio"
              name="hasInsuranceCard"
              value="no"
              checked={hasInsuranceCard === "no"}
              onChange={(e) => setHasInsuranceCard(e.target.value)}
              className="w-4 h-4"
            />{" "}
            No
          </label>
            </div>
        </div>
        </div>

        <button
              type="submit"
              value="send"
              className="bg-[#3d822f] w-[160px] text-white font-satoshi px-6 py-3 mb-2 rounded-lg hover:bg-[#326c27] transition self-start"
            >
              SUBMIT
            </button>
            <ToastContainer />
        </form>
      </div>
            </div>


      {/* Hero Section */}
<div className="flex-grow flex flex-col md:flex-row items-center justify-center md:justify-between py-16 px-4 max-w-[1200px] mx-auto text-center md:text-left">

{/* Left: Hero Text */}
<div className="flex flex-col items-center md:items-start justify-center w-full md:w-[675px] space-y-4 px-4 md:pl-12 -mt-6">
  <h2 className="text-2xl md:text-4xl font-satoshi font-bold text-[#3d822f]">Insurance and Payment Information</h2>
  <p className="text-[#0B1B19] text-sm md:text-[13px] font-satoshi font-extralight leading-relaxed">
  Greentree Wellness is committed to making quality mental health care accessible to everyone. We accept
   a range of insurance plans and offer flexible payment options to ensure clients can receive the care they need.
  </p>
  <h2 className="text-l md:text-xl font-satoshi font-semibold text-[#3d822f] py-2">How It Works:</h2>

  <div className="flex flex-col space-y-3 mt-2">
    <div className="flex items-start space-x-3">
      <img src={icon} alt="icon" className="w-3 h-3 mt-3" />
      <p className="text-[#0B1B19] text-sm md:text-[11px] font-satoshi font-extralight">
        <span className='font-medium text-[#3d822f]'>Accepted Insurance:</span>  We currently accept Medicaid, 
        private insurance coming soon. and most major commercial insurance plans, including Blue Cross Blue Shield, Aetna,
         UnitedHealthcare, and Cigna. For questions about specific insurance plans, please contact us at 410-314-1030 ext. 3 
         or consult your insurance provider.
      </p>
    </div>
    <div className="flex items-start space-x-3">
      <img src={icon} alt="icon" className="w-3 h-3 mt-3" />
      <p className="text-[#0B1B19] text-sm md:text-[12px] font-satoshi font-extralight">
      <span className='font-medium text-[#3d822f]'>Self-Pay Options:</span>  For clients without insurance, we offer a sliding fee scale
       based on income and family size, ensuring affordable access to care. Our self-pay options cover all services, including therapy, psychiatric 
       evaluations, and medication management.
      </p>
    </div>
    <div className="flex items-start space-x-3">
      <img src={icon} alt="icon" className="w-3 h-3 mt-3" />
      <p className="text-[#0B1B19] text-sm md:text-[12px] font-satoshi font-extralight">
      <span className='font-medium text-[#3d822f]'>Payment Methods:</span> Payments can be made by check, credit card, or through our client 
      portal for secure online transactions.
      </p>
    </div>
   
  </div>

        <p className="text-[#0B1B19] text-sm md:text-[12px] font-satoshi font-extralight leading-relaxed">
        Insurance and payment information is subject to change. Please contact us or consult our billing department for the most current information.

        </p>
        </div>

        {/* Right: Hero Image */}
        <div className="mt-10 md:mt-0 w-full md:w-2/3 flex justify-center px-4 md:pr-12">
        <img 
            src={heroImage2} 
            alt="Get Started Hero" 
            className="w-full max-w-md md:max-w-[500px] object-contain"
        />
        </div>
        </div>
    </div>
  );
};
