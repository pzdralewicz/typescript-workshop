import React from "react";
import Task from "./Task";
import { useTasks } from "../context/TaskProvider";

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <table>
      <tbody>
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
