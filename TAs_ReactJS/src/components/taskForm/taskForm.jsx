import React, { useState } from "react";
import classes from "/src/components/taskForm/taskForm.module.css";

export default function TaskForm({ addTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new task"
        className={classes.input_holder}
      />
      <button type="submit" className={classes.submit_button}>
        Add Task
      </button>
    </form>
  );
}