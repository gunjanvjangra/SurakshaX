import React from "react";
import Navbar from "./Navbar";

const Header = () => {
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
<<<<<<< HEAD
          <a href="./Learn" className="bg-green-950 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Start Learning
          </a>
          <a href="./Quiz" className="bg-green-950 px-8 py-3 rounded">
=======
          <a
            href="./Learn"
            className="bg-green-950 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Start Learning
          </a>
          <a
            href="./Quiz"
            className="bg-green-950 px-8 py-3 rounded hover:bg-green-700"
          >
>>>>>>> fe74968 (initial commit)
            Take a Quiz
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
