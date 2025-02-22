import React from "react";

const Login = () => {
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
          Log In
        </h2>

        <form className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-white focus:bg-white/30 transition"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/30 focus:ring-2 focus:ring-white focus:bg-white/30 transition"
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
          <a href="./Signup" className="text-green-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
