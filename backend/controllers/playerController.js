const Player = require('../models/Player');

// @desc Get all players
// @route GET /players
// @access Public
exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
