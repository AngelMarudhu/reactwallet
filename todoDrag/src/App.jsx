import React, { useState } from "react";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "marudhupandiyan is a good boy",
    },
    {
      id: 2,
      title: "nayanthara is a good girl",
    },
  ]);

  // for (let i = 0; i < tasks.length; i++) {
  //   console.log(tasks[i].position);
  // }

  return (
    <div>
      {/* <h3>Todo Task Drag and Drop</h3> */}
      <div>
        <TaskInput tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
