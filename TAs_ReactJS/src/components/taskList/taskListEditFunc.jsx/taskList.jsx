import React from "react";
import classes from "/src/components/taskList/taskList.module.css";

export default function TaskListEditFunc({ tasks, deleteTask, editTask }) {
  return (
    <ul className={classes.task_list}>
      {tasks.map((task, index) => (
        <li 
        key={index}>
          {task}
          <div className={classes.buttons_container}>
          <button
            onClick={() => deleteTask(index)}
            className={classes.clear_button}
          >
            Clear 🧹
          </button>
          <button
            onClick={() => editTask(index)}
            className={classes.edit_button}
          >
            Edit
          </button>
          </div>
        </li>
      ))}
    </ul>
  );
}