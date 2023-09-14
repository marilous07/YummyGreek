const app = require('./index.js');


function filterByDietary(dishes, dietary) {
    return dishes.filter(dish => dish.dietary.includes(dietary));
  }
  
  function filterByPrice(dishes, minPrice, maxPrice) {
    return dishes.filter(dish => dish.price >= minPrice && dish.price <= maxPrice);
  }
  
  function filterByAllergens(dishes, allergens) {
    return dishes.filter(dish => dish.allergens.includes(allergens));
  }
  
  
module.exports = { filterByDietary, filterByPrice, filterByAllergens };
  