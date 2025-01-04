import React, { useState } from "react";
import { useDrop } from "react-dnd";
import "../css/canvascss.css";

const Canvas = ({ blocks, setBlocks }) => {
  const [droppedItemType, setDroppedItemType] = useState(null); // State to store dropped item type

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "TREE_NODE",
    drop: (item) => moveChild(item),
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  }));

  const moveChild = (item) => {
    // Here, we capture the type of the dropped item and set it in the state
    setDroppedItemType(item.type); // Setting the dropped item's type
  };

  return (
    <div
      ref={drop}
      className="canvas"
      style={{
        height: "100vh",
        backgroundColor: canDrop ? "lightgreen" : "lightgray",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>Canvas</div>
      {/* Display the type of the dropped item */}
      {droppedItemType && (
        <div
          style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bold" }}
        >
          Dropped Item Type: {droppedItemType}
        </div>
      )}
    </div>
  );
};

export default Canvas;
