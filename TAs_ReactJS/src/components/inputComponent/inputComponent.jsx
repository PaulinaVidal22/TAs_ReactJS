import React, { useState } from "react";
import classes from "/src/components/inputComponent/inputComponent.module.css";

export function InputComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Write here"
        className={classes.input_holder}
      />

      {}
      <p>Written: {inputValue}</p>
    </div>
  );
}