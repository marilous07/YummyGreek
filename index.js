const express = require('express');
const fs = require('fs');
const { filterByDietary, filterByPrice, filterByAllergens } = require('./filters');

const app = express();
const port = 3001;


// Middleware for JSON parsing
app.use(express.json());

let dishes;

// Read database once when the application starts
fs.readFile('db.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    dishes = JSON.parse(data);
});

app.get('/dishes', (req, res) => {
    let filteredDishes = dishes;

    if (req.query.dietary) {
        filteredDishes = filterByDietary(filteredDishes, req.query.dietary);
    }

    if (req.query.price) {
        const [minPrice, maxPrice] = req.query.price.split('-').map(Number);
        filteredDishes = filterByPrice(filteredDishes, minPrice, maxPrice);
    }

    if (req.query.allergens) {
        filteredDishes = filterByAllergens(filteredDishes, req.query.allergens);
    }

    res.send({ dishes: filteredDishes });
});
 

//POST
app.post('/data', (req, res) => {
    const newLine = req.body.line;
    lines.push(newLine);
    fs.writeFileSync('db.txt', lines.join('\n'));
    res.send({ message: 'Data added successfully' });
  });

//PUT
app.put('/data/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const newLine = req.body.line;
    if (lines[id]) {
      lines[id] = newLine;
      fs.writeFileSync('db.txt', lines.join('\n'));
      res.send({ message: 'Data updated successfully' });
    } else {
      res.send({ message: 'ID not found' });
    }
  });
  

//DELETE
app.delete('/data/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (lines[id]) {
      lines.splice(id, 1);
      fs.writeFileSync('db.txt', lines.join('\n'));
      res.send({ message: 'Data deleted successfully' });
    } else {
      res.send({ message: 'ID not found' });
    }
  });

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });

  
  module.exports = app;