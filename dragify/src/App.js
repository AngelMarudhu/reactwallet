import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  //// stack will be best for this scenario
  const [rightItems, setRightItems] = React.useState([]);

  const handleDrop = (item) => {
    // console.log(item);
    setRightItems((prev) => [...prev, item]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <LeftSide />
        <RightSide item={rightItems} onDrop={handleDrop} />
      </div>
    </DndProvider>
  );
}

export default App;
