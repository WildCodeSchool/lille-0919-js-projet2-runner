import React from "react";
import "./style/Character.scss";

const Character = props => {
  return (
    <div
      className="character"
      style={{
        top: `${props.y * 64}px`,
        left: `${props.x * 64}px`
      }}
    ></div>
  );
};

export default Character;
