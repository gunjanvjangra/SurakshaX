import React from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 text-gray-900 py-16 px-6 text-center relative">
      {/* Background Image with Light Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('./bg.jpeg')" }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 px-4 py-6">
          Contact Us
        </h2>
        <hr className="border-t-4 border-green-900 w-20 mx-auto mb-6" />
        <p className="mt-4 text-lg max-w-3xl mx-auto font-bold">
          Have questions or need support? Reach out to us, and we'll be happy to
          help.
        </p>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <label className="block text-sm font-semibold text-left text-green-900">
                Name
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden transition focus-within:ring-2 focus-within:ring-green-900">
                <FaUser className="text-green-900 mx-3" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 outline-none text-gray-700"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative">
              <label className="block text-sm font-semibold text-left text-green-900">
                Email
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden transition focus-within:ring-2 focus-within:ring-green-900">
                <FaEnvelope className="text-green-900 mx-3" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 outline-none text-gray-700"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <label className="block text-sm font-semibold text-left text-green-900">
                Message
              </label>
              <div className="flex items-start border border-gray-300 rounded-lg overflow-hidden transition focus-within:ring-2 focus-within:ring-green-900">
                <FaCommentDots className="text-green-900 mx-3 mt-3" />
                <textarea
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2 outline-none text-gray-700"
                  rows="4"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-lg font-bold rounded-lg bg-green-800 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
