import React from "react";
import "./style/Map.scss";
import Character from "./Character";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 2,
      y: 4
    };
  }

  componentDidMount() {
    window.onkeydown = event => {
      this.getInput(event);
    };
  }

  getInput = event => {
    const key = event.code;
    console.log(event.code);
    if (key === "Space") {
      this.setState({ y: 0.5 });
      setTimeout(() => {
        this.setState({ y: 4 });
      }, 300);
    }
  };

  carte = [
    ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", ""]
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
