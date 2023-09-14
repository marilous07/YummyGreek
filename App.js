import React, { useState } from 'react';
import DishList from './components/DishList/DishList';
import 'bootstrap/dist/css/bootstrap.min.css';  
function App() {
    const [dishes, setDishes] = useState([]);
  
    useEffect(() => {
    fetch('http://localhost:3001/')
    .then((response) => response.json())
    .then((data) => setDishes(data))
    .catch((error) => console.error('Error fetching data:', error));
}, []);

  return (
    <div className="App">
      <h1>Welcome to Our Restaurant</h1>
      <DishList dishes={dishes} />
      { }
    </div>
  );
};

export default App;
