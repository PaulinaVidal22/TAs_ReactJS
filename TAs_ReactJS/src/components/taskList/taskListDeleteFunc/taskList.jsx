import React from "react";
import classes from "/src/components/taskList/taskList.module.css";

export default function TaskListDel({ tasks, deleteTask }) {
  return (
    <ul className={classes.task_list}>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button
            onClick={() => deleteTask(index)}
            className={classes.clear_button}
          >
            Clear 🧹
          </button>
        </li>
      ))}
    </ul>
  );
}