import React from 'react';
import PropTypes from 'prop-types';
import Pizza from './Pizza';
import Cart from './Cart';
import PizzaContainer from './containers/PizzaContainer';
import { PizzaSize } from './actions';

const OrderForm = ({ onClick, onSelect, isFetching, pizza, pizzasInCart }) => (
  <div>
    <p className="App-intro">
      Pick the size of your pizza!
    </p>
    <button onClick={() => {onSelect(PizzaSize.SMALL)}}>Small</button>
    <button onClick={() => {onSelect(PizzaSize.MEDIUM)}}>Medium</button>
    <button onClick={() => {onSelect(PizzaSize.LARGE)}}>Large</button>
    <div className="form-container">
      {
        <div className="panel">
          {
            pizza.size && <PizzaContainer toppings={pizza.toppings} price={pizza.price}/>
          }
          {
            isFetching && <label>Waiting for pizza...</label>
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
