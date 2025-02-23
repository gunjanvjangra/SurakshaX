import React from "react";
import {
  FaBookOpen,
  FaUsers,
  FaLightbulb,
  FaGlobe,
  FaHandshake,
  FaShieldAlt,
  FaHeartbeat,
  FaCity,
  FaLeaf,
  FaHandsHelping,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-900 px-4 py-6">
        About SurakshaX
      </h2>
      <p className="mt-4 text-lg max-w-3xl mx-auto">
        At SurakshaX, we believe that preparedness is the key to resilience. Our
        mission is to empower individuals and communities with the knowledge and
        tools to act effectively when disaster strikes.
      </p>

      {/* Core Values Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 ">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:scale-110">
          <FaLightbulb className="text-green-700 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">
            Empowerment through Knowledge
          </h3>
          <p className="text-gray-700 mt-2">
            We provide actionable, scenario-based learning to help individuals
            make confident decisions.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:scale-110">
          <FaBookOpen className="text-green-700 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">
            Engagement & Interaction
          </h3>
          <p className="text-gray-700 mt-2">
            Through gamified learning and real-world scenarios, we make crisis
            education engaging and effective.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:scale-110">
          <FaUsers className="text-green-700 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">
            Community Collaboration
          </h3>
          <p className="text-gray-700 mt-2">
            Our platform fosters a shared knowledge exchange to build a
            resilient community.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:scale-110">
          <FaGlobe className="text-green-700 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Innovative Solutions</h3>
          <p className="text-gray-700 mt-2">
            We harness technology to create scalable and accessible crisis
            solutions.
          </p>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:scale-110">
          <FaShieldAlt className="text-green-700 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Preparedness Guides</h3>
          <p className="text-gray-700 mt-2">
            Step-by-step guidance for handling various crises effectively.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:scale-110">
          <FaBookOpen className="text-green-700 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Gamified Learning</h3>
          <p className="text-gray-700 mt-2">
            Interactive quizzes and simulations to reinforce crisis
            preparedness.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:scale-110">
          <FaUsers className="text-green-700 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Community Knowledge</h3>
          <p className="text-gray-700 mt-2">
            Real-life stories and expert insights shared across the platform.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:scale-110">
          <FaHandshake className="text-green-700 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Global Impact</h3>
          <p className="text-gray-700 mt-2">
            Supporting SDGs for safer and more resilient communities worldwide.
          </p>
        </div>
      </div>

      {/* 🌍 SDGs Section */}
      <h3 className="text-3xl font-bold text-center text-blue-800 mt-12 mb-6">
        Our Impact – Sustainable Development Goals (SDGs)
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {[
          {
            icon: (
              <FaHeartbeat className="text-red-600 text-4xl mx-auto hover:text-white" />
            ),
            title: "SDG 3: Good Health & Well-being",
            description:
              "Providing resources and education to reduce disaster-related injuries and fatalities.",
          },
          {
            icon: (
              <FaLeaf className="text-green-700 text-4xl mx-auto hover:text-white" />
            ),
            title: "SDG 13: Climate Action",
            description:
              "Raising awareness on climate-related risks and promoting disaster preparedness.",
          },
          {
            icon: (
              <FaCity className="text-blue-600 text-4xl mx-auto hover:text-white" />
            ),
            title: "SDG 11: Sustainable Cities & Communities",
            description:
              "Enhancing urban and rural resilience through emergency planning.",
          },
          {
            icon: (
              <FaHandsHelping className="text-yellow-600 text-4xl mx-auto hover:text-white" />
            ),
            title: "SDG 17: Partnerships for the Goals",
            description:
              "Collaborating with disaster management experts, NGOs, and government agencies.",
          },
        ].map((sdg, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-950 hover:text-white"
          >
            {sdg.icon}
            <h3 className="font-semibold text-lg mt-3">{sdg.title}</h3>
            <p className="mt-2">{sdg.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-lg max-w-3xl mx-auto">
        Thank you for choosing SurakshaX—where preparedness meets action.
        Together, we can make our world safer, one step at a time.
      </p>
    </section>
  );
};

export default AboutUs;
