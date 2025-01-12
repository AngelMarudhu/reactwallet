import React, { useState } from "react";
import "../Css/TaskStyle.css";

const TaskInput = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleChange = (e) => {
    e.preventDefault();
    setTask(e.target.value);
    setPosition(determineRandomPosition());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.length > 0) {
      const newTask = {
        id: tasks.length + 1,
        title: task,
        position: position,
      };
      setTasks([...tasks, newTask]);

      setTask("");
    } else {
      alert("Please Enter Task");
    }
  };

  const determineRandomPosition = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter Task"
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit(e);
          }
        }}
        autoFocus
        value={task}
      />
    </div>
  );
};

export default TaskInput;
