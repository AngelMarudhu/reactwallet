import { useState } from "react";
import "./App.css";
import CurrencyConverter from "./Components/CurrencyConverter.jsx";

function App() {
  return (
    <div className="App">
      <div className="container">
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
