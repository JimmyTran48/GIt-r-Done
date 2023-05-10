const models = require('../models/soloModel');

const teamsController = {};

teamsController.findTeams = (req, res, next) => {
  console.log('-----> TEAMS CONTROLLER');
};

teamsController.createTeams = (req, res, next) => {
  console.log('-----> TEAMS CONTROLLER');
  console.log('-----> Attempting to Create TEAM');
  models.Teams.create(req.body).then((response) => {
    console.log('It Worked!');
    res.locals.storage = response;
    return next();
  });
};

teamsController.updateTeams = (req, res, next) => {
  console.log('-----> TEAMS CONTROLLER');
};

module.exports = teamsController;
