import React from "react";
import Header from "./comp/Header";
import Navbar from "./comp/Navbar";
import WhySurakshaX from "./comp/WhySurakshaX";
import InteractiveLearning from "./comp/InteractiveLearning";
const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <WhySurakshaX />
      <InteractiveLearning />
    </div>
  );
};

export default App;
