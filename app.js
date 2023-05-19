const express = require('express');
const app = express();
const playersRouter = require('./routes/playersRouter');

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

app.use(playersRouter);

module.exports = app;
