import "./App.css";

// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS HERE
import Home from "../Home";

// 3. AUTO RELOAD
if (module.hot) {
  module.hot.accept();
}

// 4. CREATE A FUNCTION BASED COMPONENT
const App = () => {
  return (
    <div className="app-container">
      <Home />
    </div>
  );
};

// 5. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default App;
