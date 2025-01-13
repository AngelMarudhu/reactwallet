import { useState } from "react";
import "./App.css";
import PasswordGen from "./Components/PasswordGen";

function App() {
  return (
    <div className="App">
      <div className="container">
        <PasswordGen />
      </div>
    </div>
  );
}

export default App;
