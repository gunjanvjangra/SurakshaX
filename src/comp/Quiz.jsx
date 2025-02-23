import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What should you do first during an earthquake?",
<<<<<<< HEAD
      options: ["Run outside", "Take cover under a table", "Stand near a window", "Use the elevator"],
=======
      options: [
        "Run outside",
        "Take cover under a table",
        "Stand near a window",
        "Use the elevator",
      ],
>>>>>>> fe74968 (initial commit)
      correctAnswer: "Take cover under a table",
    },
    {
      question: "Which is NOT a recommended earthquake safety measure?",
<<<<<<< HEAD
      options: ["Drop, Cover, and Hold", "Stock emergency supplies", "Stand near glass doors", "Secure heavy furniture"],
=======
      options: [
        "Drop, Cover, and Hold",
        "Stock emergency supplies",
        "Stand near glass doors",
        "Secure heavy furniture",
      ],
>>>>>>> fe74968 (initial commit)
      correctAnswer: "Stand near glass doors",
    },
    {
      question: "Where is the safest place to be during an earthquake?",
<<<<<<< HEAD
      options: ["Under a sturdy table", "Near a window", "On a staircase", "Inside an elevator"],
      correctAnswer: "Under a sturdy table",
    },
=======
      options: [
        "Under a sturdy table",
        "Near a window",
        "On a staircase",
        "Inside an elevator",
      ],
      correctAnswer: "Under a sturdy table",
    },
    {
      question: "What should you do after an earthquake?",
      options: [
        "Check for injuries",
        "Light a match to check for gas leaks",
        "Rush to an elevator",
        "Ignore emergency alerts",
      ],
      correctAnswer: "Check for injuries",
    },
    {
      question: "Which items are essential in an earthquake emergency kit?",
      options: [
        "Flashlight, food, and water",
        "Luxury items and decorations",
        "Heavy furniture and glassware",
        "Expensive electronics",
      ],
      correctAnswer: "Flashlight, food, and water",
    },
>>>>>>> fe74968 (initial commit)
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
<<<<<<< HEAD

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
=======
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  const handleAnswer = (answer) => {
    if (!answerSubmitted) {
      setSelectedAnswer(answer);
    }
  };

  const submitAnswer = () => {
    if (!selectedAnswer) return;

    setAnswerSubmitted(true);
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
>>>>>>> fe74968 (initial commit)
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
<<<<<<< HEAD
=======
      setAnswerSubmitted(false);
>>>>>>> fe74968 (initial commit)
    } else {
      setShowResult(true);
    }
  };

<<<<<<< HEAD
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
=======
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnswerSubmitted(false);
  };

  const goToLearningPage = () => {
    window.location.href = "/Learn"; // Redirect to learning page
  };

  return (
    <div className="bg-green-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-black w-96">
        {showResult ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-800">
              Quiz Completed!
            </h2>
            <p className="mt-2 text-lg text-green-950">
              Your Score: {score} / {questions.length}
            </p>

            {score <= 2 ? (
              <div>
                <p className="text-red-600 mt-2">
                  Your score is low. Consider reviewing the learning materials.
                </p>
                <button
                  className="mt-4 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800"
                  onClick={goToLearningPage}
                >
                  Go to Learning Page
                </button>
              </div>
            ) : (
              <p className="text-green-600 mt-2">Great job!</p>
            )}

            <button
              className="mt-4 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800"
              onClick={restartQuiz}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-lg font-semibold mb-4 text-green-900">
              {questions[currentQuestion].question}
            </h3>
            {questions[currentQuestion].options.map((option, index) => {
              let buttonStyle =
                "block w-full py-2 px-4 rounded-lg my-2 bg-gray-300 text-black hover:bg-green-400";

              if (answerSubmitted) {
                if (option === questions[currentQuestion].correctAnswer) {
                  buttonStyle =
                    "block w-full py-2 px-4 rounded-lg my-2 bg-green-600 text-white"; // Correct answer
                } else if (option === selectedAnswer) {
                  buttonStyle =
                    "block w-full py-2 px-4 rounded-lg my-2 bg-red-500 text-white"; // Incorrect answer
                } else {
                  buttonStyle =
                    "block w-full py-2 px-4 rounded-lg my-2 bg-gray-300 text-black"; // Unselected options
                }
              } else if (selectedAnswer === option) {
                buttonStyle =
                  "block w-full py-2 px-4 rounded-lg my-2 bg-green-500 text-white"; // Selected before submission
              }

              return (
                <button
                  key={index}
                  className={buttonStyle}
                  onClick={() => handleAnswer(option)}
                  disabled={answerSubmitted}
                >
                  {option}
                </button>
              );
            })}

            {!answerSubmitted ? (
              <button
                className="mt-4 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800"
                onClick={submitAnswer}
                disabled={!selectedAnswer}
              >
                Submit Answer
              </button>
            ) : (
              <button
                className="mt-4 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800"
                onClick={nextQuestion}
              >
                Next Question
              </button>
            )}
>>>>>>> fe74968 (initial commit)
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
