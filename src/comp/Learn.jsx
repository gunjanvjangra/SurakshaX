import React from "react";
<<<<<<< HEAD

const Learn = () => {
  const steps = [
    {
      title: "Before an Earthquake",
      points: [
        "Secure heavy furniture and objects to prevent them from falling.",
        "Prepare an emergency kit with food, water, and first-aid supplies.",
        "Identify safe spots in each room, like under sturdy tables.",
      ],
    },
    {
      title: "During an Earthquake",
      points: [
        "Drop, Cover, and Hold until the shaking stops.",
        "Stay away from windows, mirrors, and heavy objects.",
        "If outdoors, move to an open space away from buildings.",
      ],
    },
    {
      title: "After an Earthquake",
      points: [
        "Check for injuries and provide first aid if needed.",
        "Avoid using elevators and be cautious of aftershocks.",
        "Turn off gas and check for structural damage before re-entering buildings.",
      ],
    },
  ];

  return (
    <div className="bg-[#004D25] text-white min-h-screen py-20 px-6">
      <h1 className="text-3xl font-bold text-center mb-6">Earthquake Preparedness</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-black">
            <h2 className="text-xl font-semibold mb-3">{step.title}</h2>
            <ul className="list-disc list-inside text-gray-700">
              {step.points.map((point, idx) => (
                <li key={idx} className="mb-2">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
=======
import {
  FaTools,
  FaExclamationTriangle,
  FaCheckCircle,
  FaWater,
  FaFire,
} from "react-icons/fa";

const disasterPreparedness = [
  {
    disaster: "Earthquake Preparedness",
    steps: [
      {
        title: "Before an Earthquake",
        icon: <FaTools className="text-green-700 text-5xl" />,
        points: [
          "Secure heavy furniture and objects to prevent them from falling.",
          "Prepare an emergency kit with food, water, and first-aid supplies.",
          "Identify safe spots in each room, like under sturdy tables.",
        ],
      },
      {
        title: "During an Earthquake",
        icon: <FaExclamationTriangle className="text-yellow-600 text-5xl" />,
        points: [
          "Drop, Cover, and Hold until the shaking stops.",
          "Stay away from windows, mirrors, and heavy objects.",
          "If outdoors, move to an open space away from buildings.",
        ],
      },
      {
        title: "After an Earthquake",
        icon: <FaCheckCircle className="text-blue-600 text-5xl" />,
        points: [
          "Check for injuries and provide first aid if needed.",
          "Avoid using elevators and be cautious of aftershocks.",
          "Turn off gas and check for structural damage before re-entering buildings.",
        ],
      },
    ],
  },
  {
    disaster: "Flood Preparedness",
    steps: [
      {
        title: "Before a Flood",
        icon: <FaWater className="text-blue-700 text-5xl" />,
        points: [
          "Know your flood risk and evacuation routes.",
          "Stock emergency supplies, including clean water and food.",
          "Move valuable items to higher levels in your home.",
        ],
      },
      {
        title: "During a Flood",
        icon: <FaExclamationTriangle className="text-yellow-600 text-5xl" />,
        points: [
          "Avoid walking or driving through floodwaters.",
          "Move to higher ground immediately.",
          "Listen to emergency alerts for updates.",
        ],
      },
      {
        title: "After a Flood",
        icon: <FaCheckCircle className="text-green-700 text-5xl" />,
        points: [
          "Check for structural damage before re-entering your home.",
          "Avoid drinking floodwater; ensure clean water sources.",
          "Wear protective gear while cleaning up.",
        ],
      },
    ],
  },
  {
    disaster: "Fire Preparedness",
    steps: [
      {
        title: "Before a Fire",
        icon: <FaFire className="text-red-700 text-5xl" />,
        points: [
          "Install smoke alarms and test them regularly.",
          "Plan and practice fire escape routes.",
          "Keep flammable materials away from heat sources.",
        ],
      },
      {
        title: "During a Fire",
        icon: <FaExclamationTriangle className="text-yellow-600 text-5xl" />,
        points: [
          "Stay low and crawl under smoke.",
          "Use the nearest exit; never use elevators.",
          "Call 911 and alert others if possible.",
        ],
      },
      {
        title: "After a Fire",
        icon: <FaCheckCircle className="text-blue-600 text-5xl" />,
        points: [
          "Do not re-enter a burned structure until it's declared safe.",
          "Check for hot spots and extinguish embers.",
          "Contact your insurance company for claims.",
        ],
      },
    ],
  },
];

const Learn = () => {
  return (
    <div className="bg-[#004D25] text-white min-h-screen pt-28 pb-20 px-6">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Disaster Preparedness Guide
      </h1>
      <p className="text-lg text-center max-w-2xl mx-auto mb-12">
        Learn the essential steps to stay safe before, during, and after
        disasters.
      </p>

      {disasterPreparedness.map((disaster, index) => (
        <div key={index} className="mb-16">
          <h2 className="text-2xl font-bold text-center text-white mb-6">
            {disaster.disaster}
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {disaster.steps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-gray-100 p-6 rounded-lg shadow-lg text-black 
                           transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex flex-col items-center">
                  {step.icon}
                  <h3 className="text-xl font-semibold mt-4 text-center">
                    {step.title}
                  </h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                  {step.points.map((point, i) => (
                    <li
                      key={i}
                      className="mb-2 transition-colors duration-300 hover:text-green-900"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
>>>>>>> fe74968 (initial commit)
    </div>
  );
};

export default Learn;
