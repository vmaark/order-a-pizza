import React from 'react';
import PropTypes from 'prop-types';
import Pizza from './Pizza';
import Cart from './Cart';
import PizzaContainer from './containers/PizzaContainer';
import { PizzaSize } from './actions';

const OrderForm = ({ onClick, onSelect, pizza, pizzasInCart }) => (
  <div>
    <p className="App-intro">
      Pick the size of your pizza!
    </p>
    <button onClick={() => {onClick(PizzaSize.SMALL)}}>Small</button>
    <button onClick={() => {onClick(PizzaSize.MEDIUM)}}>Medium</button>
    <button onClick={() => {onClick(PizzaSize.LARGE)}}>Large</button>
    <div className="form-container">
      {
        <div className="panel">
          {
            pizza.size && <PizzaContainer toppings={pizza.toppings} price={pizza.price}/>
          }
          <button onClick={() => {onClick(pizza)}}>Add to Cart</button>
        </div>
      }
      <Cart pizzasInCart={pizzasInCart}/>
    </div>
  </div>
);

OrderForm.propTypes = {
  pizza: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  pizzasInCart: PropTypes.array.isRequired
};

export default OrderForm;
