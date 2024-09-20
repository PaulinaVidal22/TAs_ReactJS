import React from "react";
import classes from "./card.module.css";

export function Card(props) {
  return (
    <div className={classes.card}>
      <h1 className="card_header">{props.title}</h1>
      <div className="card_container">
        <text className="description">{props.description}</text>
        <p className={classes.assigned_person}>{props.assignedPerson}</p>
        <p className="init-date">{props.initDate}</p>
        <p className="end-date">{props.endDate}</p>
      </div>
    </div>
  );
}