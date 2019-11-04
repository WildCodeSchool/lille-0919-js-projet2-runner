import React from "react";
import "./Score.scss";

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        score: this.state.score + 1
      });
    }, 1000);
  }

  render() {
    return <p id="score">score: {this.state.score}</p>;
  }
}

export default Score;
