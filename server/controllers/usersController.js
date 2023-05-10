const models = require('../models/soloModel');

const usersController = {};

usersController.findusers = (req, res, next) => {
  console.log('-----> USERS CONTROLLER');
  console.log('-----> Attempting to Find user');
  models.Users.find({ team_id: req.query.team_id })
    .then((response) => {
      res.locals.storage = response;
      return next();
    })
    .catch((error) => {
      return next(error);
    });
};

usersController.createusers = (req, res, next) => {
  console.log('-----> USERS CONTROLLER');
  console.log('-----> Attempting to Create user');

  models.Users.create(req.body)
    .then((response) => {
      console.log('-----> NEW USER CREATED');
      res.locals.storage = response;
      return next();
    })
    .catch((error) => {
      return next({ error });
    });
};

usersController.updateusers = (req, res, next) => {
  console.log('-----> USERS CONTROLLER');
  console.log('-----> Attempting to Update User');

  const { _id, tasks } = req.body;
  console.log('tasks', tasks);
  models.Users.findOneAndUpdate({ _id: _id }, { tasks: tasks }, { new: true })
    .then((response) => {
      console.log('----->USER Updated');
      res.locals.storage = response;
      return next();
    })
    .catch((error) => {
      return next(error);
    });
};

module.exports = usersController;
