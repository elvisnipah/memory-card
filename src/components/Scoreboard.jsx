import React from "react";

function Scoreboard(props) {
  return (
    <div className="font-bold text-3xl text-white bg-red-700 p-4 rounded-xl">
      <p>Current Score: {props.currentscore}</p>
      <p>Highest Score: {props.highestscore}</p>
    </div>
  );
}

export default Scoreboard;
