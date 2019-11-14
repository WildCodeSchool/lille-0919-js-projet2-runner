import React from "react";
import "./style/Score.scss";

const Score = props => {
  return <p id="score">score: {props.score}</p>;
};

export default Score;
