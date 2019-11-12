import React from "react";
import "./style/EnemyRun.scss";

const EnemyRun = props => {
  return (
    <div
      className="bloc"
      style={{
        top: `${props.y * 64}px`,
        left: `${props.x * 64}px`,
        transitionDuration: `${
          props.transition ? `${props.durationTransition}ms` : "0ms"
        }`
      }}
    ></div>
  );
};

export default EnemyRun;
