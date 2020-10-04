import React from "react";
import { useTasks } from "../context/TaskProvider";

const Task = ({ id, name, complete }) => {
  const { setTaskStatus, removeTask } = useTasks();

  const onStatusChange = (e) => setTaskStatus(id, e.target.checked);
  const onRemoveClicked = () => removeTask(id);

  return (
    <tr>
      <td>
        <input type="checkbox" onChange={onStatusChange} />
      </td>
      <td>
        <span className={complete ? "task-done" : ""}>{name}</span>
        <span className="task-remove" onClick={onRemoveClicked}>
          Remove
        </span>
      </td>
    </tr>
  );
};

export default Task;
