import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameInfoLog from "./components/GameInfoLog";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (playerData) => {
  let currentPlayer = "X";

  if (playerData.length > 0 && playerData[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};

const App = () => {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  // const [gameOver, setGameOver] = useState(false);
  // const [winner, setWinner] = useState(null);
  let gameBoard = [...initialGameBoard.map((arr) => [...arr])];
  let winner = null;

  for (const turn in gameTurns) {
    const { sqaureInfo, player } = gameTurns[turn];
    const { row, col } = sqaureInfo;
    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      // setGameOver(true);
      winner = players[firstSquareSymbol];
    }
  }

  const hasDraw = !winner && gameTurns.length === 9;
  let currentPlayer = deriveActivePlayer(gameTurns);

  const changeTurn = (rowIndex, colIndex) => {
    // setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
    setGameTurns((prevTurn) => {
      let currentPlayer = deriveActivePlayer(prevTurn);

      const updatedTurn = [
        { sqaureInfo: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];

      console.log(updatedTurn);
      return updatedTurn;
    });
  };

  const handleGameReset = () => {
    setGameTurns([]);
    winner = null;
  };

  const handlePlayerNameChange = (symbol, name) => {
    setPlayers((prevPlayer) => {
      return { ...prevPlayer, [symbol]: name };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {/* <Player
            name="Player 1"
            symbol="X"
            isActive={gameTurns?.player === "X"} // this was sending the data but player highlight functinality did not worked
          /> */}
          <Player
            name={players["X"]}
            symbol="X"
            isActive={currentPlayer === "X"}
            onNameChange={handlePlayerNameChange}
          />
          <Player
            name={players["O"]}
            symbol="O"
            isActive={currentPlayer === "O"}
            onNameChange={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver
            winner={winner}
            draw={hasDraw}
            resetGame={handleGameReset}
          />
        )}
        <GameBoard changePlayerTurn={changeTurn} gameBoard={gameBoard} />
      </div>
      <GameInfoLog gameInfo={gameTurns} />
    </main>
  );
};

export default App;
