import React from "react";
import classes from "/src/components/taskList/taskList.module.css";

export default function TaskList({ tasks }) {
  return (
    <ul className={classes.task_list}>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}