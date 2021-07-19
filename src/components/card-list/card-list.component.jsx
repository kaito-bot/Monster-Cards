import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styling.css";
export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monster.map((monster) => {
        return (
          <Card
            key={monster.id}
            id={monster.id}
            monster={monster}
            onClickCard={props.handleClickCard}
          />
        );
      })}
    </div>
  );
};
