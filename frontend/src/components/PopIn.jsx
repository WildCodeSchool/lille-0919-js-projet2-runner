import React from "react";
import "./style/PopIn.scss";
import axios from "axios";
import { Link } from "react-router-dom";
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

    axios.post("http://localhost:5000/highscores", this.state);
  }

  render() {
    return (
      <div id="modal">
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
          />
          <Link to="/leaderboard">
            <input className="send" type="submit" value="Send !" />
          </Link>
        </form>
      </div>
    );
  }
}

export default PopIn;

// import React from "react";
// import "./style/PopIn.scss";

// const PopIn = props => {
//   return (
//     <div id="modal">
//       <h1>YOUR SCORE : {props.score}</h1>
//     </div>
//   );
// };

// export default PopIn;