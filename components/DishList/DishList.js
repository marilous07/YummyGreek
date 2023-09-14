import React from 'react';
import './DishList.css';

const DishList = ({ dishes }) => {
    return (
        <div className="dish-list">
            <h2>Available Dishes</h2>
            <ul>
                {dishes.map((dish, index) => (
                    <li key={index}>
                        {dish.name} - {dish.price}€
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DishList;
