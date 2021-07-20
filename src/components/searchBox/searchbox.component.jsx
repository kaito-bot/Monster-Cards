import React from "react";
import "./searchbox.styling.css";

export const SearchBox = ({ placeHolder, handleChange }) => {
  return (
    <div className="searchBox">
      <input
        type="search"
        placeholder={placeHolder}
        onChange={handleChange}
      ></input>
    </div>
  );
};
