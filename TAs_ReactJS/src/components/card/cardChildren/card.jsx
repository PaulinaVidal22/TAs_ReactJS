import React from "react";
import classes from "/src/components/card/cardChildren/card.module.css";

export function Card2({ children }) {
    return <div className={classes.card}>{children}</div>;
  }