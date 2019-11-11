import React from "react";
import "./style/Map.scss";
import Character from "./Character";
import EnemyFly from "./EnemyFly";
import EnemyRun from "./EnemyRun";
import Background from "./Background";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xC: 2,
      yC: 4,
      canJump: true,
      transition: true,
      xER: 12,
      yER: 3.85,
      xEF: 15,
      yEF: 2.75
    };
  }

  carte = [
    ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", ""]
  ];

  componentDidMount() {
    window.onkeydown = event => {
      this.getInput(event);
    };
    this.loopEnemyRun();
    this.loopEnemyFly();
    setInterval(() => {
      this.loopEnemyRun();
    }, 250);
    setInterval(() => {
      this.loopEnemyFly();
    }, 300);
  }

  loopEnemyFly() {
    if (this.state.xEF === -2) {
      this.setState({
        xEF: this.state.xEF + 17,
        transition: false
      });
    } else {
      this.setState({
        xEF: this.state.xEF - 1,
        transition: true
      });
    }
  }

  loopEnemyRun() {
    if (this.state.xER === -2) {
      this.setState({
        xER: this.state.xER + 15,
        transition: false
      });
    } else {
      this.setState({
        xER: this.state.xER - 1,
        transition: true
      });
    }
  }

  getInput = event => {
    const key = event.code;
    if (key === "Space" && this.state.canJump) {
      this.setState({
        yC: 2,
        canJump: false
      });
      setTimeout(() => {
        this.setState({
          yC: 3.92
        });
      }, 300);
      setTimeout(() => {
        this.setState({
          canJump: true
        });
      }, 600);
    }
  };

  render() {
    return (
      <div id="map">
        {this.carte.map(row =>
          row.map(column => {
            return <div className="tiles"></div>;
          })
        )}
        <Background />
        <Character x={this.state.xC} y={this.state.yC} />
        <EnemyRun
          x={this.state.xER}
          y={this.state.yER}
          transition={this.state.transition}
        />
        <EnemyFly
          x={this.state.xEF}
          y={this.state.yEF}
          transition={this.state.transition}
        />
      </div>
    );
  }
}

export default Map;
