import React, { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./Components/ProgressBar";

function App() {
  const [value, setValue] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      value < 100 && setValue((prev) => prev + 1);
      if (value === 100) {
        setComplete(true);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="text-2xl">
      <h1>Progress Bar</h1>
      <ProgressBar value={value} />
      {complete ? <h1>Completed</h1> : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
