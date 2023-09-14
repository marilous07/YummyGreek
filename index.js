const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

// db.TXT
let rawData = fs.readFileSync('db.txt', 'utf8');
let lines = rawData.split('\n');

app.get('/data', (req, res) => {
  res.send({ data: lines });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
