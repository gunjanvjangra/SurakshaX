import React, { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showmobmenu, setshowmobmenu] = useState(false);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.icon} alt="" width={50} height={50} />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>
        <img
          onClick={() => setshowmobmenu(true)}
          src={assets.menu}
          className="md:hidden w-7 cursor-pointer"
          alt=""
        />
      </div>

      <div
        className={`md:hidden ${
          showmobmenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setshowmobmenu(false)}
            src={assets.cross}
            className="w-6"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a href="#Header" className="px-4 py-2 rounded-full inline-block">
            Home
          </a>
          <a href="#Header" className="px-4 py-2 rounded-full inline-block">
            About
          </a>
          <a href="#Header" className="px-4 py-2 rounded-full inline-block">
            Contact Us
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
