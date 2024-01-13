import React from "react";

const GameOver = ({ winner, draw, resetGame }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {!draw && winner ? (
        <>
          <p>{winner} won!</p>
        </>
      ) : (
        <p>Its a Draw!</p>
      )}
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
};

export default GameOver;
