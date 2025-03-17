import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import PhoneInput from "./Components/PhoneInput";

function App() {
  return (
    <div className="App">
      <h1>Otp Login</h1>
      <PhoneInput />
    </div>
  );
}

export default App;
