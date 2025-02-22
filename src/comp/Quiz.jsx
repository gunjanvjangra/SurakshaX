import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What should you do first during an earthquake?",
      options: ["Run outside", "Take cover under a table", "Stand near a window", "Use the elevator"],
      correctAnswer: "Take cover under a table",
    },
    {
      question: "Which is NOT a recommended earthquake safety measure?",
      options: ["Drop, Cover, and Hold", "Stock emergency supplies", "Stand near glass doors", "Secure heavy furniture"],
      correctAnswer: "Stand near glass doors",
    },
    {
      question: "Where is the safest place to be during an earthquake?",
      options: ["Under a sturdy table", "Near a window", "On a staircase", "Inside an elevator"],
      correctAnswer: "Under a sturdy table",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="bg-[#004D25] text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-black w-96">
        {showResult ? (
          <div>
            <h2 className="text-2xl font-semibold">Quiz Completed!</h2>
            <p>Your Score: {score} / {questions.length}</p>
          </div>
        ) : (
          <>
            <h3 className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</h3>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`block w-full py-2 px-4 rounded-lg my-2 ${
                  selectedAnswer === option ? "bg-green-700 text-white" : "bg-gray-300 text-black"
                }`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
            <button
              className="mt-4 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800"
              onClick={nextQuestion}
              disabled={!selectedAnswer}
            >
              Next Question
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
