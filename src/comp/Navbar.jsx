import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showmobmenu, setshowmobmenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
  }, []);
  

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("isAuthenticated");
      setIsAuthenticated(false);
      navigate("/");
    }
  };

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

        {/* Right Section - Profile Icon OR Sign Up */}
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            // Profile Icon with Dropdown
            <div className="relative">
              <img
                src={assets.userIcon}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-white hover:border-green-300 transition"
                onClick={() => setshowmobmenu((prev) => !prev)}
              />
              {showmobmenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                    View Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Sign Up Button
            <Link
              to="/signup"
              className="hidden md:block"
              onClick={() => localStorage.setItem("nextPage", "/learn")}
            >
              <button className="bg-white text-green-900 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-green-100 transition duration-300">
                Sign Up
              </button>
            </Link>
          )}

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setshowmobmenu(true)}
            src={assets.menu}
            className="md:hidden w-7 cursor-pointer"
            alt="Menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {showmobmenu && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
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
              onClick={() => setshowmobmenu(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:bg-green-100 py-3 px-4 rounded-md transition duration-300"
              onClick={() => setshowmobmenu(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:bg-green-100 py-3 px-4 rounded-md transition duration-300"
              onClick={() => setshowmobmenu(false)}
            >
              Contact Us
            </Link>

            {/* Mobile Profile Section */}
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="hover:bg-green-100 py-3 px-4 rounded-md transition duration-300"
                  onClick={() => setshowmobmenu(false)}
                >
                  View Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-left w-full hover:bg-green-100 py-3 px-4 rounded-md transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/signup"
                className="hover:bg-green-100 py-3 px-4 rounded-md transition duration-300"
                onClick={() => {
                  localStorage.setItem("nextPage", "/learn");
                  setshowmobmenu(false);
                }}
              >
                Sign Up
              </Link>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
