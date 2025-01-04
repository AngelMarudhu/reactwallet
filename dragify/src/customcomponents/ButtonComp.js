import React from "react";
import { buttonComp } from "../util/Toolbar";

const ButtonComp = () => {
  return (
    <div>
      <button
        onClick={() => buttonComp()}
        style={{
          padding: "10px",
          marginTop: "10px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default ButtonComp;
