import React from "react";
import "./Character.scss";

class Character extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="character"
        style={{
          top: `${this.props.y * 64}px`,
          left: `${this.props.x * 64}px`
        }}
      ></div>
    );
  }
}

export default Character;
