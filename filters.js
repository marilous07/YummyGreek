function filterByDietary(dishes, dietary) {
    return dishes.filter(dish => dish.dietary.includes(dietary));
  }
  
  function filterByPrice(dishes, minPrice, maxPrice) {
    return dishes.filter(dish => dish.price >= minPrice && dish.price <= maxPrice);
  }
  
  function filterByAllergens(dishes, allergens) {
    return dishes.filter(dish => dish.allergens.includes(allergens));
  }
  
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
  