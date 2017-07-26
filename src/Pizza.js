import React from 'react';
import PropTypes from 'prop-types';

const Pizza = ({ toppings, maxToppings, size, basePrice, price, onChange }) => (
  <div>
    <div>{size}</div>
    <div>{basePrice} $</div>
    <p>You can select {maxToppings} toppings!</p>
    <div className="toppings-container">
      {
        toppings.map((topping) => {
          if (topping.disabled) {
            return (
              <label>
                <input
                  type="checkbox"
                  name={topping.name}
                  checked={topping.defaultSelected}
                  disabled
                />
                {topping.name + " " + topping.price + "$"}
              </label>
            );
          }
          else {
            return (
              <label>
                <input
                  type="checkbox"
                  name={topping.name}
                  checked={topping.defaultSelected}
                  onChange={() => {onChange(topping)}}
                />
                {topping.name + " " + topping.price + "$"}
              </label>
            );
          }

        })
      }
    </div>
    <p>{price} $</p>
  </div>
);

Pizza.propTypes = {
  toppings: PropTypes.array.isRequired,
  maxToppings: PropTypes.number,
  size: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired
};

export default Pizza;
