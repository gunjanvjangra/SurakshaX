import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showmobmenu, setshowmobmenu] = useState(false);

  return (
    <nav className="bg-green-950 fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <Link to="/">
          <img src={assets.icon} alt="SurakshaX Logo" width={40} height={40} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-green-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg font-medium hover:text-green-300 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg font-medium hover:text-green-300 transition duration-300"
          >
            Contact Us
          </Link>
        </ul>

        {/* Sign Up Button */}
        <Link to="/signup" className="hidden md:block">
          <button className="bg-white text-green-900 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-green-100 transition duration-300">
            Sign Up
          </button>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setshowmobmenu(true)}
          src={assets.menu}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
          showmobmenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setshowmobmenu(false)}
            src={assets.cross}
            className="w-6 cursor-pointer"
            alt="Close"
          />
        </div>

        <ul className="mt-5 text-lg text-green-950 font-medium flex flex-col gap-4 px-6">
          <Link
            to="/"
            className="hover:bg-green-100 py-3 px-4 rounded-md transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:bg-green-100 py-3 px-4 rounded-md transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:bg-green-100 py-3 px-4 rounded-md transition duration-300"
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
