import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text: taskText, category: taskCategory });
    setTaskText(""); // Clear form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="taskText">Details</label>
        <input
          id="taskText"
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="taskCategory">Category</label>
        <select
          id="taskCategory"
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
        >
          {categories
            .filter((category) => category !== "All")
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </div>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
