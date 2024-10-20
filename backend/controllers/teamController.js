const Team = require('../models/Team');

// @desc Create a new team
// @route POST /teams
// @access Public
exports.createTeam = async (req, res) => {
  const { name, players } = req.body;

  if (!name || !players || players.length > 11) {
    return res.status(400).json({ message: 'Invalid team data' });
  }

  try {
    const team = new Team({ name, players });
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc Get a team by ID
// @route GET /teams/:id
// @access Public
exports.getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).populate('players');
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
