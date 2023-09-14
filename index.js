const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

fs.readFile('db.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  
  const lines = data.split('\n');

  app.get('/data', (req, res) => {
    res.send({ data: lines });
  });

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
