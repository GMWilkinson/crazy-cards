const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

const cards = require('./api/availableCards');

app.use(cors());

app.get('/', (req, res) => {
  res.send(cards);
})

app.listen(port, () => {
  console.log(`Listening on port:: ${port}`);
})