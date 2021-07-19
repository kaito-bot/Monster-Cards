import React from "react";
import "./searchbox.styling.css";

export const SearchBox = ({ placeHolder, handleClick }) => {
  return (
    <div className= "searchBox">
      <input
        type="search"
        placeholder={placeHolder}
        onChange={handleClick}
      ></input>
    </div>
  );
};
