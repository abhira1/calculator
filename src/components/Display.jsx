import React from "react";
import "../App.css";

const Display = ({ displayValue }) => {
  return (
    <input
      className="calculator_output"
      type="text"
      value={displayValue}
      readOnly
    ></input>
  );
};

export default Display;
