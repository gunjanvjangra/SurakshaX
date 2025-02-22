import React from "react";

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
    </div>
  );
};

export default Learn;
