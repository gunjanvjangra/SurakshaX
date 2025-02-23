import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left - Brand & Navigation */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">SurakshaX</h2>
            <nav className="mt-2">
              <ul className="flex gap-6">
                <li>
                  <a href="/" className="hover:text-green-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-green-400 transition">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-green-400 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Center - Social Media Icons */}
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-green-400 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} SurakshaX All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
