import React from "react";
import "./style/PopIn.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";

const MAX_LENGTH = 3;

class PopIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
      score: props.score
    };
  }
  handleChange(e) {
    if (e.target.value.length > MAX_LENGTH) {
      return;
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:5000/highscores", this.state)
    .then(({data})=>{
this.props.history.push("/leaderboard");
    })
  }

  render() {
    return (
      <div id="modalGame">
        <h1>YOUR SCORE : {this.props.score}</h1>
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <input
            className="playerName"
            type="text"
            name="playerName"
            placeholder="A A A"
            value={this.state.playerName}
            onChange={e => {
              this.handleChange(e);
            }}
            required
          />

            <input className="send" type="submit" value="Send !" />
        </form>
      </div>
    );
  }
}

export default withRouter(PopIn);
