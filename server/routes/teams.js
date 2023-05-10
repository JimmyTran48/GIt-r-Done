const express = require('express');
const teamsController = require('../controllers/teamsController');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('-----> TEAMS ROUTER');
  return res.status(200).json({ test: 'string' });
});

router.post('/', teamsController.createTeams, (req, res) => {
  console.log('-----> TEAMS ROUTER');
  return res.status(200).json(res.locals.storage);
});

router.patch('/', (req, res) => {
  console.log('-----> TEAMS ROUTER');
});

module.exports = router;
