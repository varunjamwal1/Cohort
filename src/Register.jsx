import React from "react";

const Register = ({ setToggle, setUser }) => {
  // Local state object managing all input fields together
  let [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "" // Note: Used as the Image URL field in your design
  });

  // Universal change handler for inputs. Dynamically matches input 'name' with state property
  let handleChange = (e) => {
    let { name, value } = e.target; // Destructures name and value from the changed HTML input element
    setFormData({ ...formData, [name]: value }); // Copies existing data and overwrites the active input's field
  };

  // Form submission handler
  let handleSubmit = (e) => {
    e.preventDefault(); // Prevents the browser from reloading the page during native form submission

    // Appends the current formData object into the parent user array state
    setUser((prev) => [...prev, formData]);

    // Resets the input fields back to empty values after submission
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    // Outer full-screen wrapper with an emerald gradient background
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 flex items-center justify-center px-4">
      {/* Centered card wrapper */}
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">
        
        {/* Form Heading & Icon Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">📝</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-500 mt-2">Register to get started</p>
        </div>

        {/* Input Form Fields */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name input */}
          <input
            required
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />

          {/* Email input */}
          <input
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />

          {/* Password input */}
          <input
            required
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />

          {/* Profile Picture URL input (tied to confirmPassword property) */}
          <input
            required
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            type="url"
            placeholder="Profile Image URL"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />

          {/* Submit Button */}
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition duration-300">
            Create Account
          </button>
        </form>

        {/* Switch screen link text */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <span onClick={() => setToggle((prev) => !prev)} className="text-green-600 font-semibold cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;