import React from "react";
import components from "../Data/TypeOfComponet";
import Draggable from "./Draggable";

const LeftSide = () => {
  return (
    <div>
      <h3>Components</h3>
      <div>
        {components.map((item) => {
          return <Draggable key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default LeftSide;
