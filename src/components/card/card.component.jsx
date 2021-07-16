import React from "react";
import "./card.styling.css";

export const Card = (props) => {
  return (
    <div className="cards">
      <img src={`https://robohash.org/${props.monster.id}?set=set3&size=200x200`} alt="monster" />
      <h2>{props.monster.name}</h2>
    </div>
  );
};
