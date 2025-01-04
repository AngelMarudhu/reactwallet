import React from "react";
import { useDrag } from "react-dnd";

const Draggable = ({ item }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "component",
    item: { ...item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        margin: "10px",
        padding: "10px",
        border: "1px solid gray",
      }}
    >
      {item.label}
    </div>
  );
};

export default Draggable;
