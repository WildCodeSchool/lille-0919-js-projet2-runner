import React from "react";
import Map from "./Map";

class Game extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Map />
      </div>
    );
  }
}

export default Game;
