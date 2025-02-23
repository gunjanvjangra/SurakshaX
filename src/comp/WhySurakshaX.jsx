import React from "react";
import { FaShieldAlt, FaGamepad, FaUsers } from "react-icons/fa"; // Import icons

const WhySurakshaX = () => {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-900">
        Why Crisis Education Matters
      </h2>
      <p className="mt-4 text-lg max-w-3xl mx-auto">
        Disasters strike without warning. Knowledge is the first step to
        survival. SurakshaX transforms crisis preparedness into an engaging and
        actionable experience.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {/* Feature 1 */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <FaShieldAlt className="text-green-700 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Multi-Crisis Coverage</h3>
          <p className="text-gray-700 mt-2">
            Earthquakes, floods, crowd stampedes, heatwaves, and more.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <FaGamepad className="text-green-700 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Gamified Learning</h3>
          <p className="text-gray-700 mt-2">
            Learn through interactive challenges & quizzes.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <FaUsers className="text-green-700 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Community Knowledge</h3>
          <p className="text-gray-700 mt-2">
            Real stories, expert insights, and shared experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySurakshaX;
