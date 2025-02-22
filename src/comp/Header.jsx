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
          <a href="#task1" className="border vorder-white px-8 py-3 rounded">
            Task1
          </a>
          <a href="#task2" className="bg-green-950 px-8 py-3 rounded">
            Task2
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
