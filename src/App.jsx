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
import AboutUs from "./comp/AboutUs";
import ContactUs from "./comp/ContactUs";
import Footer from "./comp/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar /> {/* ✅ Navbar appears on all pages */}
        <main className="flex-grow">
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
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer /> {/* ✅ Footer at the bottom */}
      </div>
    </Router>
  );
};

export default App;
