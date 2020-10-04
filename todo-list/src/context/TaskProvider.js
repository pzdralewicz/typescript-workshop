import React, { createContext, useState, useContext } from "react";
import { v4 } from "uuid";

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) =>
    setTasks([
      ...tasks,
      {
        id: v4(),
        name,
        complete: false,
      },
    ]);

  const setTaskStatus = (id, status) => {
    const result = tasks.map((task) =>
      task.id === id ? { ...task, complete: status } : task
    );

    setTasks(result);
  };

  const removeTask = (id) => {
    const result = tasks.filter((task) => task.id !== id);

    setTasks(result);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, setTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
