import { createRef, useEffect, useRef } from "react";
import Task from "./Task";

const TaskList = ({ tasks = [], setTasks }) => {
  //// we need to set the random x and rand y position for the task when the ui rendering

  const taskRefs = useRef([]);

  const handleDragStart = (event, task) => {
    const { id } = task;
    const taskRef = taskRefs.current[id].current;
    const taskRect = taskRef.getBoundingClientRect();

    const offsetX = event.clientX - taskRect.left;
    const offsetY = event.clientY - taskRect.top;

    const startPosition = task;
    // console.log(startPosition);

    // console.log(offsetX, taskRect);

    const handleDrag = (event) => {
      const newX = event.clientX - offsetX;
      const newY = event.clientY - offsetY;

      taskRef.style.left = `${newX}px`;
      taskRef.style.top = `${newY}px`;
    };

    const handleDragEnd = (event) => {
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("mouseup", handleDragEnd);

      const finalRect = taskRef.getBoundingClientRect();
      const newPosition = {
        x: finalRect.left,
        y: finalRect.top,
      };

      if (false) {
      } else {
        updatePosition(id, newPosition);
      }
    };

    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDragEnd);
  };

  const updatePosition = (id, newPosition) => {
    const updateTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, position: newPosition };
      } else {
        return task;
      }
    });

    setTasks(updateTask);
    localStorage.setItem("task", JSON.stringify(updateTask));
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("task"));

    const updatedNotes = tasks.map((task) => {
      const savedNote = savedNotes.find((node) => node.id === task.id);
      if (savedNote) {
        return { ...task, position: savedNote.position };
      } else {
        const position = determineRandomPosition();
        return { ...task, position };
      }
    });

    setTasks(updatedNotes);
    localStorage.setItem("task", JSON.stringify(updatedNotes));
  }, [tasks.length]);

  const determineRandomPosition = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  };

  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            ref={
              taskRefs.current[task.id]
                ? taskRefs.current[task.id]
                : (taskRefs.current[task.id] = createRef())
            }
            key={task.id}
            content={task.title}
            position={task.position}
            onMouseDown={(event) => handleDragStart(event, task)}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
