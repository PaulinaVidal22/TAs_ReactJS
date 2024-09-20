import React from "react";
import classes from "/src/components/cardContent/cardContent.module.css";

export function CardContent({
  title,
  description,
  assignedPerson,
  initDate,
  endDate,
}) {
  return (
    <>
      <h1 className={classes.card_header}>{title}</h1>
      <div className="card_container">
        <text className="description">{description}</text>
        <p className={classes.assigned_person}>{assignedPerson}</p>
        <p className="init-date">{initDate}</p>
        <p className="end-date">{endDate}</p>
      </div>
    </>
  );
}