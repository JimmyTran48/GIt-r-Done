const express = require('express');
const teamsController = require('../controllers/teamsController');

const router = express.Router();

router.get('/', teamsController.findTeams, (req, res) => {
  console.log('-----> TEAMS ROUTER');
  return res.status(200).json(res.locals.storage[0]);
});

router.post('/', teamsController.createTeams, (req, res) => {
  console.log('-----> TEAMS ROUTER');
  return res.status(200).json(res.locals.storage);
});

router.patch('/', (req, res) => {
  console.log('-----> TEAMS ROUTER');
  return res.status(200).json(res.locals.storage);
});

module.exports = router;
