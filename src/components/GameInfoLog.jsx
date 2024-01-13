import React from "react";

const GameInfoLog = ({ gameInfo }) => {
  return (
    <ol id="log">
      {gameInfo &&
        gameInfo.length > 0 &&
        gameInfo.map((info, index) => {
          return (
            <li key={`${info?.sqaureInfo?.row}${info?.sqaureInfo?.col}`}>
              {info?.player} took place at {info?.sqaureInfo?.row} and{" "}
              {info?.sqaureInfo?.col}
            </li>
          );
        })}
    </ol>
  );
};

export default GameInfoLog;
