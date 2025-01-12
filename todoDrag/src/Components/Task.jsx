import React, { useRef } from "react";
import "../Css/TaskStyle.css";

const Task = React.forwardRef(({ content, position, onMouseDown }, ref) => {
  //   console.log(position);

  return (
    <div
      ref={ref}
      className="task"
      style={{ left: position?.x, top: position?.y }}
      onMouseDown={onMouseDown}
    >
      <h3>
        <span>📌</span>
        {content}
      </h3>
    </div>
  );
});

export default Task;
