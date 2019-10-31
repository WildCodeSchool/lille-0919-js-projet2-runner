import React from "react";
import "./LeaderBoard.scss";

function LeaderBoard() {
  return (
    <div className="leaderBoard">
      <div className="leaderBoardTitle">
        <img src="player_icon.png" alt="Players Title" />
        <img src="score_icon.png" alt="Score Title" />
      </div>
      <div className="leaderBoardItems">
        <ol>
          <li>
            <div className="positionName">Adrien</div>
            <div>978846</div>
          </li>
          <li>
            <div className="positionName">Blandine</div>
            <div>678541</div>
          </li>
          <li>
            <div className="positionName">Léo</div>
            <div>559743</div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default LeaderBoard;
