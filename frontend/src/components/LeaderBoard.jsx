import React from "react";
import "./LeaderBoard.scss";

function LeaderBoard() {
  return (
    <div className="leaderBoard">
      <div className="leaderBoardTitle">
        <img src="players_title.png" alt="Players Title" />
        <img src="score_title.png" alt="Score Title" />
      </div>
      <div className="leaderBoardItems">
        <ol>
          <li>
            <span>Adrien</span>
            <div>978846</div>
          </li>
          <li>
            <span>Blandine</span>
            <div>678541</div>
          </li>
          <li>
            <span>Léo</span>
            <div>559743</div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default LeaderBoard;
