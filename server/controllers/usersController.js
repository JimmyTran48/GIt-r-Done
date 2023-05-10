const models = require('../models/soloModel');

const usersController = {};

usersController.findusers = (req, res, next) => {
  console.log('-----> USERS CONTROLLER');
  console.log('-----> Attempting to Find user');
};

usersController.createusers = (req, res, next) => {
  console.log('-----> USERS CONTROLLER');
  console.log('-----> Attempting to Create user');

  models.Users.create(req.body)
    .then((response) => {
      console.log('-----> NEW USER CREATED')
      res.locals.storage = response;
      return next();
    })
    .catch((error) => {
      return next({ error });
    });
};

usersController.updateusers = (req, res, next) => {
  console.log('-----> USERS CONTROLLER');
};

module.exports = usersController;
