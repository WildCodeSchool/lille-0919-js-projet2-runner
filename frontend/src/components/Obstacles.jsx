import React from "react";
import "./Obstacles.scss";

class Obstacles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="bloc"
        style={{
          top: `${this.props.y * 64}px`,
          left: `${this.props.x * 64}px`,
          transitionDuration: `${this.props.transition ? "250ms" : "0ms"}`
        }}
      ></div>
    );
  }
}

export default Obstacles;
