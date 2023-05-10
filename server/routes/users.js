const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();

router.get('/', usersController.findusers, (req, res) => {
  return res.status(200).json(res.locals.storage);
});

router.post('/', usersController.createusers, (req, res) => {
  return res.status(200).json(res.locals.storage);
});

router.patch('/', usersController.updateusers, (req, res) => {
  return res.status(200).json(res.locals.storage);
});

module.exports = router;
