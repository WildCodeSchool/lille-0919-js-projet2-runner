import React from "react";
import "./style/EnemyFly.scss";

const EnemyFly = props => {
  return (
    <div
      className="ennemy"
      style={{
        top: `${props.y * 64}px`,
        left: `${props.x * 64}px`,
        transitionDuration: `${props.transitionEF ? "200ms" : "0ms"}`
      }}
    ></div>
  );
};

export default EnemyFly;
