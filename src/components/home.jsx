import React, { useState } from "react";
import facilityImage from "../assets/facility.jpeg"; 
import outdoorImage from "../assets/outdoor.jpeg"; 
import logo from "../assets/logo.png";
import Login from "./login";


function Home() {
  const [openCategory, setOpenCategory] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const doctorCategories = [
    {
      name: "Family/Internal Medicine",
      doctors: [
        "Edgar L. Zarate, MD, MHA, LLB - General Practitioner",
        "Christina Martinez, MD - Internal Medicine",
        "Ralph Edward V. Gascon, MD - General Practitioner",
        "Liewellyn Nathaniel Chua, MD - General Physician",
        "Juan Paolo Barrios, MD - General Physician",
      ],
    },
    {
      name: "General Otolaryngology",
      doctors: ["Guinere S. Pabayos, MD - ENT-Otolaryngology"],
    },
    {
      name: "General Radiology",
      doctors: ["Mario Carlo De VERA, MD, FPPS - Radiologist / Sonologist"],
    },
    {
      name: "General Pediatric",
      doctors: [
        "Sheila S. Trovela-Marcelino, MD - Pediatrician",
        "Mari Marvin Bolabola-Ching, MD, FDPS - Pediatrician",
        "Joana Marie Meneses, MD - Pediatrician",
      ],
    },
    {
      name: "Obstetric and Gynecology",
      doctors: [
        "Joan Sy Zarate, MD, FPOGS - OB Gynecologist",
        "Charlene Robello L. Ramos, MD - OB Gynecologist",
        "Chuchi Sentones-Dalisay, MD - OB Gynecologist",
      ],
    },
    {
      name: "Surgery and Anesthesia",
      doctors: [
        "Siegfried James T. Tap, MD - General Surgeon",
        "Jillian Georgina T. Tap, MD - General Surgeon",
        "Allen Anthony Sese, MD - General Surgeon",
        "Ray Francis Indiongco, MD - General Surgeon",
        "Ralph Dennies A. Vincente, MD - Orthopedic Surgeon",
        "Christian M. Del Mundo, MD - Anesthesiology",
        "Partrick Fidel B. Timtiman, MD - Orthopedic and Spine Surgeon",
        "Erwin Rommel M. Halili, MD - Urology",
      ],
    },
  ];

  // Split the categories into two equal groups
  const midIndex = Math.ceil(doctorCategories.length / 2);
  const leftCategories = doctorCategories.slice(0, midIndex);
  const rightCategories = doctorCategories.slice(midIndex);


  return (
    <div className="min-h-screen bg-white flex flex-col items-center">

      
      <nav className="fixed top-0 left-0 w-full bg-[#41bbc5] shadow-md py-4 flex justify-center gap-8 z-50">
      <div className="relative right-[390px] flex items-center space-x-3">
          <img src={logo} alt="Hospital Logo" className="w-12 h-12 rounded-full" />
        </div>
        {["Home", "About Us", "Appointment", "Contact Us"].map((section) => (
          <a 
            key={section}
            href={`#${section.toLowerCase().replace(" ", "-")}`}
            className="relative top-2 text-2xl font-semibold text-gray-800 hover:text-teal-500 transition duration-300"
          >
            {section}
          </a>
        ))}
   
        <button
          onClick={() => setShowLogin(true)}
          className="relative left-[370px] top-1 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
        >
          Login
        </button>
      </nav>
    
      {/* Home Section */}
      <section id="home" className="w-full min-h-screen flex flex-col justify-center bg-white py-20 px-6">
        <h1 className="relative text-8xl font-bold text-black left-16" style={{ fontFamily: "serif" }}>
          E. ZARATE <br />
          GENERAL <br />
          HOSPITAL
        </h1>

        <h2 
          className="relative text-5xl text-black mt-10 left-28 bottom-[30px]" 
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          "We Treat, God Heals"
        </h2>

        <div className="absolute right-12 top-32 w-[45%]">
          <div className="relative">
            {/* Main Clipped Image */}
            <img
              src={outdoorImage}
              alt="Hospital"
              className="relative top-0 left-12 w-screen h-[550px] rounded-lg shadow-lg clip-parallelogram"
            />
            
            {/* Smaller Overlapping Image */}
            <img
              src={facilityImage}
              alt="Interior"
              className="absolute top-36 left-[-70px] w-[350px] h-[220px] rounded-lg border-4 border-white shadow-xl clip-parallelogram"
            />
          </div>
         
        </div>
        {[
          "top-20 left-20",
          "top-20 right-12",
          "bottom-16 left-36",
          "bottom-24 right-10",
          "top-16 left-16 text-5xl",
          "top-16 right-24",
          "bottom-5 left-28",
          "bottom-20 right-24",
        ].map((pos, index) => (
          <span key={index} className={`absolute text-7xl text-teal-400 font-bold ${pos}`}>+</span>
        ))}
      </section>

      {/* About Us Section */}
      <section id="about-us" className="w-full min-h-screen flex flex-col items-center bg-gray-100 py-16">
        <h2 className="absolute top-[820px] text-6xl font-bold text-[#41bbc5]">About Us</h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl">

        <img 
          src={facilityImage} 
          alt="Hospital Facility" 
          className="absolute top-[900px] right-[10px] w-[600px] h-[600px] rounded-full border-4 border-white shadow-lg"
        />

        <img 
          src={outdoorImage} 
          alt="Hospital Facility" 
          className="absolute top-[1050px] right-[450px] w-[300px] h-[300px] rounded-full border-4 border-white shadow-lg"
        />
      
          <h2 className="absolute top-[920px] left-[100px] text-3xl font-bold text-[#41bbc5]">Vision</h2>
            <p className="absolute top-[950px] left-[100px] toptext-lg text-black-600 justify-center mt-4 max-w-2xl">
            To face and overcome the challenges posed by constant changes and
            innovation in medical diagnostics and management in the midst of
            challenges brought by rapid global technological advancement. 
            To continue on serving the patients with utmost and optimum care, 
            presently and in all the years to come, through relentless perseverance,
            unwavering dedication, and most importantly, faith in God, the giver 
            and provider of all
            </p>

          <h2 className="absolute top-[1220px] left-[100px] text-3xl font-bold text-[#41bbc5]">Mission</h2>
            <p className="absolute top-[1250px] left-[100px] toptext-lg text-black-600 justify-center mt-4 max-w-2xl">
            To face and overcome the challenges posed by constant changes and
            innovation in medical diagnostics and management in the midst of
            challenges brought by rapid global technological advancement. 
            To continue on serving the patients with utmost and optimum care, 
            presently and in all the years to come, through relentless perseverance,
            unwavering dedication, and most importantly, faith in God, the giver 
            and provider of all
            </p>
            </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="w-full min-h-screen flex flex-col items-center bg-white py-16">
      <h2 className="text-6xl font-bold text-gray-800 relative top-[30px]">Appointment</h2>
  

      <div className="relative top-[70px] mt-6 w-full max-w-lg grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left Column */}
        <div>
          {leftCategories.map((category, index) => (
            <div key={index} className="mb-6">
              {/* Category Button */}
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full text-left text-2xl font-semibold bg-teal-500 text-white px-4 py-3 rounded-lg hover:bg-teal-600 transition duration-300"
              >
                {category.name}
              </button>

              {/* Doctor List (Collapsible) */}
              {openCategory === category.name && (
                <ul className="mt-2 bg-gray-100 rounded-lg shadow-lg p-4">
                  {category.doctors.map((doctor, idx) => (
                    <li key={idx} className="text-lg text-gray-700 border-b py-2 last:border-none">
                      {doctor}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div>
          {rightCategories.map((category, index) => (
            <div key={index} className="mb-6">
              {/* Category Button */}
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full text-left text-2xl font-semibold bg-teal-500 text-white px-4 py-3 rounded-lg hover:bg-teal-600 transition duration-300"
              >
                {category.name}
              </button>

              {/* Doctor List (Collapsible) */}
              {openCategory === category.name && (
                <ul className="mt-2 bg-gray-100 rounded-lg shadow-lg p-4">
                  {category.doctors.map((doctor, idx) => (
                    <li key={idx} className="text-lg text-gray-700 border-b py-2 last:border-none">
                      {doctor}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 py-16">
        <h2 className="text-6xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl text-center">
          Need assistance? Reach out to us via phone, email, or visit our hospital for 
          in-person support.
        </p>
        <div className="mt-6 text-gray-700 text-lg">
          <p>📞 Phone: (123) 456-7890</p>
          <p>📧 Email: info@zaratehospital.com</p>
          <p>📍 Address: 123 Medical Ave, City, Country</p>
        </div>
      </section>

      {/* Custom CSS for Clipped Image */}
      <style>
        {`
          .clip-parallelogram {
            clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
          }

          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
        {showLogin && <Login setShowLogin={setShowLogin} />}
    </div>
  );
}


export default Home;
