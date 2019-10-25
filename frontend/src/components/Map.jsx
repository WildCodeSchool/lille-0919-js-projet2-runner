import React from "react";
import "./Map.scss";
import Character from "./Character";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 2,
      y: 3
    };
  }

  componentDidMount() {
    window.onkeydown = event => {
      this.getInput(event);
    };
  }

  getInput = event => {
    const keyCode = event.keyCode;
    if (keyCode === 32) {
      this.setState({ y: 0.5 });
      setTimeout(() => {
        this.setState({ y: 3 });
      }, 300);
    }
  };

  carte = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  render() {
    return (
      <div className="map">
        {this.carte.map(row =>
          row.map(column => {
            return <div></div>;
          })
        )}
        <Character x={this.state.x} y={this.state.y} />
      </div>
    );
  }
}

export default Map;
