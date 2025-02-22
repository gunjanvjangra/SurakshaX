import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./comp/Header";
import WhySurakshaX from "./comp/WhySurakshaX";
import InteractiveLearning from "./comp/InteractiveLearning";
import Navbar from "./comp/Navbar";
import Quiz from "./comp/Quiz";
import Learn from "./comp/Learn";
import SignUp from "./comp/SignUp";
import Login from "./comp/Login";

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Ensure Navbar is visible on all pages */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <WhySurakshaX />
              <InteractiveLearning />
            </>
          }
        />
        <Route path="/learn" element={<Learn />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
