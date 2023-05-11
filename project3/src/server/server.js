const express = require('express');
const db = require('./connection');

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for API running on port ${PORT}!`);
  });
});
