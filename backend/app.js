const express = require('express');
const app = express();
const playersRouter = require('./routes/playersRouter');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

app.use(playersRouter);

module.exports = app;
