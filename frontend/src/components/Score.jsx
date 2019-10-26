import React from "react";
import "./Score.scss";

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
    this.scoreUp();
  }

  scoreUp() {
    this.setState({ score: this.state.score + 1 });
    setTimeout(this.scoreUp.bind(this), 250);
  }
  render() {
    return <p id="score">score : {this.state.score}</p>;
  }
}

export default Score;
