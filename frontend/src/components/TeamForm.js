import React, { useState, useEffect } from 'react';
import PlayerList from './PlayerList';
import { fetchPlayers, createTeam } from '../services/api';
import '../styles/TeamForm.css';

const TeamForm = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [error, setError] = useState('');

  // Fetch players when the component mounts
  useEffect(() => {
    const getPlayers = async () => {
      const fetchedPlayers = await fetchPlayers();
      setPlayers(fetchedPlayers);
    };

    getPlayers();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedPlayers.length > 11) {
      setError('You can only select up to 11 players.');
      return;
    }

    if (!teamName || selectedPlayers.length === 0) {
      setError('Please select players and provide a team name.');
      return;
    }

    const teamData = { name: teamName, players: selectedPlayers };
    const response = await createTeam(teamData);

    if (response.success) {
      alert('Team created successfully!');
      setTeamName('');
      setSelectedPlayers([]);
      setError('');
    } else {
      setError('Failed to create team.');
    }
  };

  const togglePlayerSelection = (playerId) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers(selectedPlayers.filter(id => id !== playerId));
    } else if (selectedPlayers.length < 11) {
      setSelectedPlayers([...selectedPlayers, playerId]);
    } else {
      setError('Maximum of 11 players allowed.');
    }
  };

  return (
    <div className="team-form">
      <h2>Create a New Team</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Team Name:</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>

        <PlayerList 
          players={players} 
          selectedPlayers={selectedPlayers} 
          togglePlayerSelection={togglePlayerSelection} 
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Create Team</button>
      </form>
    </div>
  );
};

export default TeamForm;
