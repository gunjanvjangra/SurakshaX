import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simulated authentication check (Replace with actual backend validation)
    if (email.trim() && password.trim()) {
      localStorage.setItem("isAuthenticated", "true"); // Store login status

      // Get the stored page the user wanted to visit (e.g., "/learn")
      const nextPage = localStorage.getItem("nextPage") || "/";
      localStorage.removeItem("nextPage"); // Clear after use

      navigate(nextPage); // Redirect to intended page
    } else {
      alert("Please enter a valid email and password!");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/output.jpg')" }} // Fixed path
    >
      {/* Glassmorphic Card */}
      <div className="bg-black/50 backdrop-blur-xl p-8 rounded-2xl shadow-xl text-white w-96 border border-white/30">
        <h2 className="text-3xl font-extrabold text-center mb-6 drop-shadow-lg">
          Log In
        </h2>

        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-white focus:bg-white/30 transition"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-white focus:bg-white/30 transition"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 mt-2 text-lg font-bold rounded-lg bg-green-800 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Log In
          </button>
        </form>

        {/* Signup Redirect */}
        <p className="text-center mt-4 text-sm text-gray-200">
          Don't have an account?{" "}
          <a href="/signup" className="text-green-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
