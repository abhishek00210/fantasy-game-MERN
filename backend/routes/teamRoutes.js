const express = require('express');
const { createTeam, getTeamById } = require('../controllers/teamController');
const router = express.Router();

router.post('/teams', createTeam);
router.get('/teams/:id', getTeamById);

module.exports = router;
