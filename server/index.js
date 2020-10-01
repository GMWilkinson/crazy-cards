const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

const cards = require('./api/availableCards');
const checkdata = require('./lib/checkData');

app.use(cors());

app.get('/', (req, res) => {
    const userData = Object.entries(JSON.parse(req.query.userEntries));
    const availableCards = checkdata(cards, userData);
    res.send(availableCards);
})

app.listen(port, () => {
  console.log(`Listening on port:: ${port}`);
})