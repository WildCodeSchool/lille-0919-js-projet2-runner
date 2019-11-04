import React from "react";
import "./style/NavBar.scss";
import { Link } from "react-router-dom";
function Nav_bar() {
  return (
    <header>
      <ul className="navBar">
        <li>
          <Link to="/leaderboard">
            <img
              src="leaderboard_button.png"
              className="leaderboard_button"
              alt="leaderboard logo"
            />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img
              src="game_button.png"
              className="game_button"
              alt="game logo"
            />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img
              src="contact_button.png"
              className="contact_button"
              alt=" contact logo"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Nav_bar;
