import { useState} from "react";
import classes from "/src/components/counter/counter.module.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickHandler = (operator) => {
    if (operator === "decrement") {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div className="App">
      <h2>Counter</h2>
      <hr />
      <p className={classes.counter_num}>{count}</p>
      <button
        className={classes.counter_button}
        onClick={() => onClickHandler("decrement")}
      >
        {" "}
        ➕ decrese{" "}
      </button>
      <button
        className={classes.counter_button}
        onClick={() => onClickHandler("increment")}
      >
        {" "}
        ➕ increse{" "}
      </button>
    </div>
  );
};
