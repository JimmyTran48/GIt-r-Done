const express = require('express');
const teamsController = require('../controllers/teamsController');

const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.query);
  return res.status(200).json({ test: 'string' });
});

router.post('/', (req, res) => {});

router.patch('/', (req, res) => {});

module.exports = router;
