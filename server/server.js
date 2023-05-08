const express = require('express');

const app = express();

const PORT = 3000;

app.get('/test', (req, res) => {
  res.status(200).send('IT WORKS!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
