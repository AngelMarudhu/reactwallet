import React, { useState } from "react";
import Leftside from "./components/Leftside";
import Canvas from "./components/Canvas";
import initialData from "./data/TreeData.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [blocks, setBlocks] = useState(initialData);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App" style={{ display: "flex" }}>
        <Leftside blocks={blocks} setBlocks={setBlocks} />
        <Canvas blocks={blocks} setBlocks={setBlocks} />
      </div>
    </DndProvider>
  );
}

export default App;
