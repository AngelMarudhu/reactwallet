import React from "react";
import { useDrop } from "react-dnd";
import DynamicContent from "./DynamicContent";

const RightSide = ({ item, onDrop }) => {
  const [, drop] = useDrop({
    accept: "component",
    drop: (item) => {
      console.log(item);
      onDrop(item);
    },
  });

  return (
    <div
      ref={drop}
      style={{
        border: "1px solid black",
        minHeight: "300px",
        padding: "10px",
        flex: 1,
      }}
    >
      <h1>Drop Here</h1>
      {item.map((item, index) => {
        return <DynamicContent key={index} type={item.type} />;
      })}
    </div>
  );
};

export default RightSide;
