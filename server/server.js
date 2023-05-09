const express = require('express');

const app = express();

const PORT = 3000;

app.use('/teams', (req, res) => {});
app.use('/users', (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
