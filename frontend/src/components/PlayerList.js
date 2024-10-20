import React from 'react';

const PlayerList = ({ players, selectedPlayers, togglePlayerSelection }) => {
  return (
    <div>
      <h3>Select Players (Max 11)</h3>
      <ul>
        {players.map((player) => (
          <li key={player._id}>
            <label>
              <input
                type="checkbox"
                checked={selectedPlayers.includes(player._id)}
                onChange={() => togglePlayerSelection(player._id)}
              />
              {player.name} - {player.position} (Rating: {player.rating})
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
