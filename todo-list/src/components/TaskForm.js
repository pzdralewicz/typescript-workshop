import React, { useState } from "react";
import { useTasks } from "../context/TaskProvider";

const TaskForm = () => {
  const [name, setName] = useState("");
  const { addTask } = useTasks();

  const submit = (e) => {
    e.preventDefault();

    addTask(name);
    setName("");
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={name}
        placeholder="Todo title..."
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button>Add</button>
    </form>
  );
};
export default TaskForm;
