import React from 'react';
import PropTypes from 'prop-types';
import { calculatePizzaPrice, calculateTotal } from './Helper';

const Cart = ({ pizzasInCart }) => (
  <div className="panel">
    <p>Your cart:</p>
    <div className="toppings-container">
      {
        pizzasInCart.map((pizza) => {
          return (
            <div>
              <label>
                {pizza.size + " " + pizza.price + " $"}
              </label>
              {
                pizza.toppings.filter(topping => topping.selected).map((topping) => {
                  <label>
                    {topping.name}
                  </label>
                })
              }
            </div>
          );
        })
      }
      <label>
        { "total: " + calculateTotal(pizzasInCart) + " $"}
      </label>
    </div>
  </div>
);

Cart.propTypes = {
  pizzasInCart: PropTypes.array.isRequired
};

export default Cart;
