import React from "react";
import "./style/EnnemyFly.scss";

class EnnemyFly extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="ennemy"
        style={{
          top: `${this.props.y * 64}px`,
          left: `${this.props.x * 64}px`,
          transitionDuration: `${this.props.transitionEF ? "200ms" : "0ms"}`
        }}
      ></div>
    );
  }
}

export default EnnemyFly;
