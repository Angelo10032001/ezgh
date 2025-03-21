import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure the logo path is correct

function Header() {
  return (
    <header className="w-full bg-[#41bbc5] text-white py-4 px-6 flex justify-between items-center shadow-lg">
      {/* Left Side: Logo & Text */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Hospital Logo" className="w-12 h-12 rounded-full" />
        <h1 className="text-xl font-bold">E. Zarate General Hospital</h1>
      </div>

      {/* Right Side: Navigation Links */}
      <nav>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-gray-300 transition duration-200">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300 transition duration-200">About Us</Link>
          </li>
          <li>
            <Link to="/appointment" className="hover:text-gray-300 transition duration-200">Appointment</Link>
          </li>
          <li>
          <button className="bg-gray-800 px-4 py-2 rounded">Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
