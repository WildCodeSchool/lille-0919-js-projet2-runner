import React from "react";
import "./style/Map.scss";
import Character from "./Character";
import EnemyFly from "./EnemyFly";
import EnemyRun from "./EnemyRun";
import Score from "./Score";
import PopIn from "./PopIn";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xC: 1.7,
      yC: 4,
      canJump: true,
      transition: true,
      xER: 15,
      yER: 3.85,
      xEF: 17,
      yEF: 3,
      heightC: 1,
      score: 0,
      showModal: false,
      scoreIncrement: null,
      debug: false
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
    }, 300);
    setInterval(() => {
      this.loopEnemyFly();
    }, 300);
    const scoreIncrement = setInterval(() => {
      this.setState({
        score: this.state.score + 1
      });
    }, 1000);
    this.setState({
      scoreIncrement
    });
  }

  loopEnemyFly() {
    if (this.state.xEF === -2) {
      this.setState({
        xEF: this.state.xEF + 17,
        transition: false
      });
    } else if (this.state.xEF === 2 && this.state.yC < this.state.yEF) {
      this.setState({
        xEF: 2,
        canJump: false,
        score: this.state.score,
        showModal: true
      });
      console.log("true");
      clearInterval(this.state.scoreIncrement);
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
    } else if (
      this.state.xER === 2 &&
      this.state.yC <= this.state.yER + this.state.heightC &&
      this.state.heightC + this.state.yC >= this.state.yER
    ) {
      this.setState({
        xER: 2,
        canJump: false,
        score: this.state.score,
        showModal: true
      });
      clearInterval(this.state.scoreIncrement);
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
        yC: 2.4,
        canJump: false
      });
      setTimeout(() => {
        this.setState({
          yC: 3.92
        });
      }, 400);
      setTimeout(() => {
        this.setState({
          canJump: true
        });
      }, 700);
    }
  };

  render() {
    return (
      <div id="map">
        {this.carte.map(row =>
          row.map(column => {
            return <div className="tile"></div>;
          })
        )}
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
        <Score score={this.state.score} />
        {this.state.debug && (
          <ul>
            <li>Player: {`${this.state.xC} ; ${this.state.yC}`}</li>
            <li>Runner: {`${this.state.xER} ; ${this.state.ER}`} </li>
            <li>Flyer: {`${this.state.xEF} ; ${this.state.yEF}`} </li>
          </ul>
        )}
        {this.state.showModal && <PopIn score={this.state.score} />}
      </div>
    );
  }
}

export default Map;
