const models = require('../models/soloModel');

const teamsController = {};

teamsController.findTeams = (req, res, next) => {
  console.log('-----> TEAMS CONTROLLER');
  console.log('-----> Attempting to Find TEAM');

  models.Teams.find(req.query)
    .then((response) => {
      if (!response.length) {
        throw new Error('Wrong TEAM name or password!');
      }
      console.log('-----> TEAM Found!');
      res.locals.storage = response;
      return next();
    })
    .catch((error) => {
      return next(error);
    });
};

teamsController.createTeams = (req, res, next) => {
  console.log('-----> TEAMS CONTROLLER');
  console.log('-----> Attempting to Create TEAM');

  models.Teams.create(req.body)
    .then((response) => {
      console.log('It Worked!');
      res.locals.storage = response;
      return next();
    })
    .catch((error) => {
      return next(error);
    });
};

teamsController.updateTeams = (req, res, next) => {
  console.log('-----> TEAMS CONTROLLER');
};

module.exports = teamsController;
