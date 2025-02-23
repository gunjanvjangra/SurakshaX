import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authcontext";

const SignUp = () => {
  const navigate = useNavigate();
   const { isAuthenticated } = useAuth(); 
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    // Simulated sign-up logic (replace with actual backend logic)
    if (fullName.trim() && email.trim() && password.trim()) {
      localStorage.setItem("isAuthenticated", "true"); // Mark user as logged in

      // Get stored next page (if any) and clear it after use
      const nextPage = localStorage.getItem("nextPage") || "/";
      localStorage.removeItem("nextPage");

      navigate(nextPage); // Redirect to the intended page (default: home)
    } else {
      alert("Please fill in all fields correctly!");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('../public/output.jpg')",
      }}
    >
      {/* Glassmorphic Card */}
      <div className="bg-black/50 backdrop-blur-xl p-8 rounded-2xl shadow-xl text-white w-96 border border-white/30">
        <h2 className="text-3xl font-extrabold text-center mb-6 drop-shadow-lg">
          Sign Up
        </h2>

        <form className="space-y-5" onSubmit={handleSignUp}>
          {/* Full Name Input */}
          <div>
            <label className="block text-sm font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 mt-1 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-white focus:bg-white/30 transition"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-white focus:bg-white/30 transition"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-white focus:bg-white/30 transition"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-2 mt-2 text-lg font-bold rounded-lg bg-green-800 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center mt-4 text-sm text-gray-200">
          Already have an account?{" "}
          <a href="./Login" className="text-green-400 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
