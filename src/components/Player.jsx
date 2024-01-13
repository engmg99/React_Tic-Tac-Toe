import React from "react";
import { useState } from "react";

const Player = ({ name, symbol, isActive, onNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name == "playerName") {
      setPlayerName(value);
    }
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player player-info">
        {isEditing ? (
          <input
            type="text"
            name="playerName"
            value={playerName}
            onChange={handleInput}
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
