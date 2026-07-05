import React from "react";

const Login = ({ setToggle }) => {
  return (
    // Outer full-screen layout centered vertically and horizontally
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Login Card frame */}
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login
        </h1>

        {/* Username/Email text input placeholder */}
        <input
          type="text"
          placeholder="Enter your username"
          className="w-full border border-gray-300 rounded-md px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password masking type input field */}
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border border-gray-300 rounded-md px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Showcase button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition duration-300">
          Login
        </button>

        {/* View switching logic triggered by updating toggle state value via click listener */}
        <p className="text-center text-gray-600 mt-5">
          Don't have an account?{" "}
          <span onClick={() => setToggle((prev) => !prev)} className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;