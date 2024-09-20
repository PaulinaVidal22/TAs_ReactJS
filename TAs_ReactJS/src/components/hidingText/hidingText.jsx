import { useState } from "react";
import classes from "/src/components/hidingText/hidingText.module.css";

const HidingText = () => {
  const [text, setText] = useState("");

  const onTextShowClickHandler = () => {
    setText("default text");
  };

  const onTextHideClickHandler = () => {
    setText("");
  };

  return (
    <>
      <text className={classes.hiding_text}>{text}</text>

      <div className={classes.buttons_container}>
        <button
          className={classes.display_button}
          onClick={onTextShowClickHandler}
        >
          Show text
        </button>
        <button
          className={classes.display_button}
          onClick={onTextHideClickHandler}
        >
          Hide text
        </button>
      </div>
    </>
  );
};

export default HidingText;
