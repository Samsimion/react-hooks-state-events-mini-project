// TaskList.js
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text} // Adding a unique key
          text={task.text}
          category={task.category}
          onDelete={onDelete} // Pass the onDelete function from App
        />
      ))}
    </div>
  );
}

export default TaskList;
