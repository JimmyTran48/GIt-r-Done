const express = require('express');

const app = express();
const PORT = 3000;

//  requiring routers
const teamsRouter = require('./routes/teams');
const usersRouter = require('./routes/users');

app.use(express.json());

app.use('/teams', teamsRouter);
app.use('/users', usersRouter);

app.use('/*', (req, res) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign(defaultErr, err);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
