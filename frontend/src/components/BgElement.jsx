import React from "react";
import "./style/BgElement.scss";

class BgElement extends React.Component {
  render() {
    return (
      <div
        className="element"
        style={{
          top: `${this.props.y * 64}px`,
          left: `${this.props.x * 64}px`,
          backgroundImage: `url(../assets/${this.props.type}.png)`,
          backgroundRepeat: "no-repeat",
          transitionDuration: `${this.props.transition ? "250ms" : "0ms"}`
        }}
      />
    );
  }
}

export default BgElement;
