import React from "react";
import "./style/LeaderBoard.scss";
import axios from "axios";

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/highscores").then(({ data }) => {
      this.setState({ scores: data });
    });
  }
  render() {
    return (
      <div className="leaderBoard">
        <div className="leaderBoardTitle">
          <img src="player_icon.png" alt="Players Title" />
          <img src="score_icon.png" alt="Score Title" />
        </div>
        <div className="leaderBoardItems">
          <ol>
            {this.state.scores
              .sort((sc1, sc2) => {
                return sc2.score - sc1.score;
              })
              .filter((sc, i) => {
                return i < 3;
              })
              .map(sc => {
                return (
                  <li key={sc.id}>
                    <div className="positionName">{sc.playerName}</div>
                    <div>{sc.score}</div>
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    );
  }
}

export default LeaderBoard;
