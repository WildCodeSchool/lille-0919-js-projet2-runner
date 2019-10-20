import React from "react";
import "./Nav_bar.scss";

function Nav_bar() {
  return (
    <header>
      <div className="nav_bar">
        <img
          src="leaderboard_button.png"
          className="leaderboard_button"
          alt="leaderboard logo"
        />
        <img src="game_button.png" className="game_button" alt="game logo" />
        <img
          src="contact_button.png"
          className="contact_button"
          alt=" contact logo"
        />
      </div>
    </header>
  );
}
export default Nav_bar;
