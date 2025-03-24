import React from "react";
import facilityImage from "../assets/facility.jpeg"; 
import outdoorImage from "../assets/outdoor.jpeg"; 
import logo from "../assets/logo.png";

function Home() {
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
         <div>
        <button className="relative left-[370px] top-1 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-200">
          Login
        </button>
      </div>
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
      <section id="about-us" className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 py-16">
        <h2 className="text-6xl font-bold text-gray-800">About Us</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl text-center">
          E. Zarate General Hospital is dedicated to providing top-quality healthcare services with 
          a patient-centered approach. Our team of professionals ensures the well-being of 
          every individual with modern medical care.
        </p>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="w-full min-h-screen flex flex-col items-center justify-center bg-white py-16">
        <h2 className="text-6xl font-bold text-gray-800">Appointment</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl text-center">
          Schedule your appointment with ease. Our online booking system ensures that you receive 
          prompt medical attention.
        </p>
        <button className="mt-6 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 transition duration-300">
          Book Now
        </button>
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
    </div>
  );
}

export default Home;
