import React from 'react';
import PropTypes from 'prop-types';

const Pizza = ({ onClick, toppings, maxToppings, size, basePrice }) => (
  <div>
    <p>{size}</p>
    <p>You can select {maxToppings} toppings!</p>
    <div className="toppings-container">
      {
        toppings.map((topping) => {
          return (
            <label>
              <input
                type="checkbox"
                name={topping.name}
              />
              {topping.name}
            </label>
          );
        })
      }
    </div>
    <p>{calculatePizzaPrice(toppings, basePrice)} $</p>
    <button onClick={onClick}>Add to Cart</button>
  </div>
);

let calculatePizzaPrice = (toppings, basePrice) => {
  const total = toppings.reduce((sum, topping) => {
    return sum + topping.price;
  }, basePrice);
  return total.toFixed(2);
}

Pizza.propTypes = {
  onClick: PropTypes.func.isRequired,
  toppings: PropTypes.array.isRequired,
  maxToppings: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired
};

export default Pizza;
