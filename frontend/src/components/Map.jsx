import React from "react";
import "./Map.scss";
import Obstacles from "./Obstacles";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 12,
      y: 4,
      transition: true
    };
    this.loopObstacle();
  }

  carte = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  loopObstacle() {
    if (this.state.x === -2) {
      this.setState({
        x: this.state.x + 15,
        transition: false
      });
    } else {
      this.setState({
        x: this.state.x - 1,
        transition: true
      });
    }
    setTimeout(this.loopObstacle.bind(this), 100);
  }

  render() {
    return (
      <div className="map">
        {this.carte.map(row =>
          row.map(column => {
            return <div></div>;
          })
        )}
        <Obstacles
          x={this.state.x}
          y={this.state.y}
          transition={this.state.transition}
        />
      </div>
    );
  }
}

export default Map;
