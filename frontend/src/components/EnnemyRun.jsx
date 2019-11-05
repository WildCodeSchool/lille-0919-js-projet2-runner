import React from "react";
import "./style/EnnemyRun.scss";

class EnnemyRun extends React.Component {
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

export default EnnemyRun;
