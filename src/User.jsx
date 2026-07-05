import React from "react";

const User = ({ user }) => {
  return (
    // Flex block wrapper for individual item entries mapping out data parameters gracefully
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      
      {/* Avatar Wrapper Container */}
      <div className="flex justify-center pt-6">
        <img
          src={user.confirmPassword || "https://via.placeholder.com/150"} // Uses entered URL or generic image fallback
          alt={user.fullName} // Accessibility tag showing the account name
          className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover" // Object cover scales uneven imagery proportionally
        />
      </div>

      {/* User Information details wrapper */}
      <div className="text-center p-6">
        {/* Full Name Display */}
        <h2 className="text-2xl font-bold text-gray-800">
          {user.fullName}
        </h2>

        {/* Email Address details section */}
        <p className="text-gray-500 mt-2">
          📧 {user.email}
        </p>

        {/* Showcase Delete interaction item */}
        <button className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition duration-300">
          🗑 Delete User
        </button>
      </div>
    </div>
  );
};

export default User;