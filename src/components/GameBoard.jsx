import { useState } from "react";

// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

const GameBoard = ({ changePlayerTurn, gameBoard }) => {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // let gameBoard = initialGameBoard;

  // for (const turn in gameTurns) {
  //   const { sqaureInfo, player } = gameTurns[turn];
  //   const { row, col } = sqaureInfo;
  //   gameBoard[row][col] = player;
  // }

  //   const handleSelectedSquare = (rowIndex, colIndex) => {
  //     setGameBoard((prev) => {
  //       const prevGameBoard = [...prev.map((innerArr) => [...innerArr])];
  //       prevGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return prevGameBoard;
  //     });
  //     changePlayerTurn();
  //   };

  return (
    <ol id="game-board">
      {gameBoard &&
        gameBoard.map((row, rowIndex) => {
          return (
            <li key={rowIndex}>
              <ol>
                {row.map((symbol, colIndex) => {
                  return (
                    <li key={colIndex}>
                      <button
                        onClick={() => {
                          changePlayerTurn(rowIndex, colIndex);
                        }}
                        disabled={symbol != null}
                      >
                        {symbol}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
    </ol>
  );
};

export default GameBoard;
