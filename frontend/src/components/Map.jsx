import React from "react";
import "./style/Map.scss";
import Character from "./Character";
import EnemyFly from "./EnemyFly";
import EnemyRun from "./EnemyRun";
import Background from "./Background";
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
      durationTransition: 350,
      timerFly: 300,
      timerRun: 300,
      xER: 23,
      yER: 3.85,
      xEF: 15,
      yEF: 3,
      heightC: 1,
      score: 0,
      showModal: false,
      scoreIncrement: null
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
    const scoreIncrement = setInterval(() => {
      if (this.state.score % 10 === 0) {
        this.setState({
          timerFly: this.state.timerFly / 1.15,
          timerRun: this.state.timerRun / 1.15,
          durationTransition: this.state.durationTransition / 1.1
        });
      }
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
    } else if (this.state.xEF === 2 && this.state.yC <= this.state.yEF) {
      this.setState({
        xEF: 2,
        canJump: false,
        score: this.state.score,
        showModal: true
      });
      clearInterval(this.state.scoreIncrement);
    } else {
      this.setState({
        xEF: this.state.xEF - 1,
        transition: true
      });
    }
    setTimeout(() => {
      this.loopEnemyFly();
    }, this.state.timerFly);
  }

  loopEnemyRun() {
    if (this.state.xER === -2) {
      this.setState({
        xER: this.state.xER + 17,
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
    setTimeout(() => {
      this.loopEnemyRun();
    }, this.state.timerRun);
  }

  getInput = event => {
    const key = event.code;
    if (key === "Space" && this.state.canJump) {
      this.setState({
        yC: 2.1,
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
        {this.carte.map((row, i) => {
          return row.map((column, j) => {
            return <div className="tile" key={`${i}${j}`}></div>;
          });
        })}
        <Background />
        <Character x={this.state.xC} y={this.state.yC} />
        <EnemyRun
          x={this.state.xER}
          y={this.state.yER}
          transition={this.state.transition}
          durationTransition={this.state.durationTransition}
        />
        <EnemyFly
          x={this.state.xEF}
          y={this.state.yEF}
          transition={this.state.transition}
          durationTransition={this.state.durationTransition}
        />
        <Score score={this.state.score} />
        {this.state.showModal ? (
          <audio src="music_game_over.mp3" autoPlay></audio>
        ) : (
          <audio src="ingame_music_cut.mp3" loop autoPlay></audio>
        )}
        {this.state.showModal && <PopIn score={this.state.score} />}
      </div>
    );
  }
}

export default Map;
