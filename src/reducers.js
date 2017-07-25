import * as actions from './actions';
import { combineReducers } from 'redux';

const initialPizzaState = {
  size: null,
  toppings: [],
  maxToppings: 0,
  basePrice: 0,
  price: 0
};

const initialState = {
  pizzasInCart: [],
  pizza: Object.assign({}, initialPizzaState),
  pizzaData: {}
}

export default function pizzaApp(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TO_CART:
      var newCart = state.pizzasInCart.slice();
      newCart.push(action.pizza);
      var newPizza = Object.assign({}, initialPizzaState);
      return {
        pizzasInCart: newCart,
        pizza: newPizza
      };
    case actions.REMOVE_FROM_CART:
      var newCart = state.pizzasInCart.slice();
      newCart.splice(action.index, 1);
      return Object.assign({}, state, {
        pizzasInCart: newCart
      });
    case actions.TOGGLE_TOPPING:
      let id = state.pizza.toppings.findIndex((topping) => topping.name === action.topping.name);
      state.pizza.toppings[id].selected = !state.pizza.toppings[id].selected;
      var newPizza = Object.assign({}, state.pizza, {
        toppings: state.pizza.toppings
      });
      return Object.assign({}, state, {
        pizza: newPizza
      });
    case actions.SET_SIZE:
      return Object.assign({}, state, {
        pizza: {
          size: action.size,
          basePrice: action.basePrice,
          price: action.basePrice,
          maxToppings: action.maxToppings,
          toppings: action.toppings
        }
      });
    default:
      return state
  }
};
