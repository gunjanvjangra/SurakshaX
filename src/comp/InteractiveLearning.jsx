import React from "react";
<<<<<<< HEAD
import { FaBookOpen, FaTrophy, FaUsers, FaQuestionCircle } from "react-icons/fa";

const InteractiveLearning = () => {
=======
import { useNavigate } from "react-router-dom";
import {
  FaBookOpen,
  FaTrophy,
  FaUsers,
  FaQuestionCircle,
} from "react-icons/fa";

const InteractiveLearning = () => {
  const navigate = useNavigate(); // React Router navigation function

>>>>>>> fe74968 (initial commit)
  return (
    <section className="bg-[#004D25] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Interactive Learning</h2>
<<<<<<< HEAD
        <p className="text-lg mb-8">Step-by-step preparedness guides, crisis simulations, and gamified challenges.</p>
=======
        <p className="text-lg mb-8">
          Step-by-step preparedness guides, crisis simulations, and gamified
          challenges.
        </p>
>>>>>>> fe74968 (initial commit)
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-80 text-center text-black">
            <FaBookOpen className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Step-by-Step Guides</h3>
<<<<<<< HEAD
            <p className="text-gray-600">Detailed preparedness instructions for various crises.</p>
=======
            <p className="text-gray-600">
              Detailed preparedness instructions for various crises.
            </p>
>>>>>>> fe74968 (initial commit)
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-80 text-center text-black">
            <FaTrophy className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Gamified Quizzes</h3>
<<<<<<< HEAD
            <p className="text-gray-600">Earn badges and climb the leaderboard.</p>
=======
            <p className="text-gray-600">
              Earn badges and climb the leaderboard.
            </p>
>>>>>>> fe74968 (initial commit)
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-80 text-center text-black">
            <FaUsers className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Community Insights</h3>
<<<<<<< HEAD
            <p className="text-gray-600">Learn from real stories and expert insights.</p>
=======
            <p className="text-gray-600">
              Learn from real stories and expert insights.
            </p>
>>>>>>> fe74968 (initial commit)
          </div>
        </div>
      </div>

      {/* Take a Quiz Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Test Your Crisis Knowledge!</h2>
<<<<<<< HEAD
        <p className="text-lg mb-6">How prepared are you for a crisis? Take a quiz and earn points!</p>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-80 mx-auto text-black">
          <FaQuestionCircle className="text-green-700 text-4xl mx-auto mb-4" />
          <h3 className="font-semibold text-lg">Sample Question</h3>
          <p className="text-gray-600">What should you do first during an earthquake?</p>
          <button className="mt-4 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800">Start Quiz</button>
        </div>
      </div>
          

=======
        <p className="text-lg mb-6">
          How prepared are you for a crisis? Take a quiz and earn points!
        </p>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-80 mx-auto text-black">
          <FaQuestionCircle className="text-green-700 text-4xl mx-auto mb-4" />
          <h3 className="font-semibold text-lg">Sample Question</h3>
          <p className="text-gray-600">
            What should you do first during an earthquake?
          </p>
          <button
            className="mt-4 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800"
            onClick={() => navigate("/Quiz")}
          >
            Start Quiz
          </button>
        </div>
      </div>
>>>>>>> fe74968 (initial commit)
    </section>
  );
};

<<<<<<< HEAD
export default InteractiveLearning;
=======
export default InteractiveLearning;
>>>>>>> fe74968 (initial commit)
