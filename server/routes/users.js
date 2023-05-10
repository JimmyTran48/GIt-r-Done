const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();

router.get('/', (req, res) => {});

router.post('/', usersController.createusers, (req, res) => {
  return res.status(200).json(res.locals.storage);
});

router.patch('/', (req, res) => {});

router.delete('/', (req, res) => {});

module.exports = router;
