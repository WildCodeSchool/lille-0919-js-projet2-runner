import React from "react";
import "./style/PopIn.scss";

const PopIn = props => {
  return (
    <div id="modal">
      <h1>YOUR SCORE : {props.score}</h1>
    </div>
  );
};

export default PopIn;
