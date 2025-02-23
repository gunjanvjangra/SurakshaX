import React from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from "../Authcontext";

const Header = () => {
  const navigate = useNavigate();
  const handleStartLearning = () => {
    console.log("Start Learning button clicked");
    console.log("Auth status:", isAuthenticated);
  
    if (isAuthenticated) {
      console.log("Redirecting to Learn page...");
      navigate("/learn");
    } else {
      console.log("User not authenticated, going to Signup...");
      localStorage.setItem("nextPage", "/learn");
      navigate("/signup");
    }
  };
  
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/output.jpg')" }}
      id="Header"
    >
      <Navbar />
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-bold pt-25">
          Empowering You To Act, Not Panic
        </h2>
        <div className="space-x-6 mt-16">
        <Link
      to="/signup" // Ensure navigation without reload
      className="bg-green-950 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
      onClick={handleStartLearning}
    >
      Start Learning
    </Link>
          <a
            href="./Quiz"
            className="bg-green-950 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Take a Quiz
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
