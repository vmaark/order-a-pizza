import React from 'react';
import PropTypes from 'prop-types';
import { calculatePizzaPrice, calculateTotal } from './Helper';
import RemoveButton from './containers/RemoveButton';

const Cart = ({ pizzasInCart }) => (
  <div className="panel">
    <p>Your cart:</p>
    <div className="toppings-container">
      {
        pizzasInCart.map((pizza) => {

          return (
            <div>
              <label>
                {pizza.size + " "}
              </label>
              {
                pizza.toppings.filter(topping => topping.defaultSelected).map((topping) => {
                  return (
                    <label>
                      {topping.name + " "}
                    </label>
                  );
                })
              }
              <label>{calculatePizzaPrice(pizza.toppings, pizza.basePrice).toFixed(2) + " $"}</label>
              <RemoveButton/>
            </div>
          );
        })
      }
      <label>
        { "total: " + calculateTotal(pizzasInCart).toFixed(2) + " $"}
      </label>
    </div>
  </div>
);

Cart.propTypes = {
  pizzasInCart: PropTypes.array.isRequired
};

export default Cart;
