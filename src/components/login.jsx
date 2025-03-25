import React, { useState } from "react";

function Login({ setShowLogin }) {
  const [isPhoneLogin, setIsPhoneLogin] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleLogin = () => {
    setIsPhoneLogin(!isPhoneLogin);
    setInputValue(""); // Clear input when switching
  };

  const handleLogin = () => {
    if (!inputValue) {
      alert("Please enter your " + (isPhoneLogin ? "phone number" : "email"));
      return;
    }
    if (isPhoneLogin && !/^\d{10,15}$/.test(inputValue)) {
      alert("Invalid phone number!");
      return;
    }
    if (!isPhoneLogin && !/\S+@\S+\.\S+/.test(inputValue)) {
      alert("Invalid email address!");
      return;
    }

    alert("Login successful with " + inputValue);
    setShowLogin(false); // Close the modal after login
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center relative">
        
        {/* Close (X) Button */}
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
          onClick={() => setShowLogin(false)}
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4">Login</h2>
        
        <input
          type={isPhoneLogin ? "tel" : "email"}
          placeholder={isPhoneLogin ? "Enter Phone Number" : "Enter Gmail"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition"
        >
          Login
        </button>

        <button
          onClick={toggleLogin}
          className="mt-4 text-blue-600 underline"
        >
          {isPhoneLogin ? "Login with Gmail" : "Login with Phone Number"}
        </button>
      </div>
    </div>
  );
}

export default Login;
