import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleDelete = (taskText) => {
    setTasks(tasks.filter((task) => task.text !== taskText));
  };

  const handleCategorySelect = (category) => {
    setFilteredCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks =
    filteredCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === filteredCategory);

  return (
    <div className="App">
      <h1>Task List</h1>
      <CategoryFilter
        categories={CATEGORIES}
        onCategorySelect={handleCategorySelect}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
