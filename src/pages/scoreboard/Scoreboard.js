import React from "react";
import "./Scoreboard.css";
import ScoreEntry from "./ScoreEntry";

const tempArr = [
  {
    position: "Delhi",
    user: "Sarthak",
    score: "100",
  },
  {
    position: "Delhi",
    user: "Sarthak",
    score: "100",
  },
  {
    position: "Delhi",
    user: "Sarthak",
    score: "100",
  },
  {
    position: "Delhi",
    user: "Sarthak",
    score: "100",
  },
  {
    position: "Delhi",
    user: "Sarthak",
    score: "100",
  },
];
function Scoreboard() {
  return (
    <div>
      <h1 className="scoreboard-heading">Scoreboard</h1>
      <ScoreEntry position="Place" user="User" score="Score" />
      <div className="scoreboard-table-container">
        {tempArr.map((temp) => (
          <ScoreEntry
            position={temp.position}
            user={temp.user}
            score={temp.score}
          />
        ))}
      </div>
    </div>
  );
}

export default Scoreboard;
