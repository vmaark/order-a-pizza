export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const TOGGLE_TOPPING = 'TOGGLE_TOPPING';

export const SET_SIZE = 'SET_SIZE';

export const PizzaSize = {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE'
};

export function toggleTopping(topping) {
  return { type: TOGGLE_TOPPING, topping }
};

export function addToCart(pizza) {
  return { type: ADD_TO_CART, pizza: pizza }
};

export function removeFromCart(index) {
  return { type: REMOVE_FROM_CART, index }
};

export function setSize(size, basePrice, maxToppings, toppings) {
  return { type: SET_SIZE, size, basePrice, maxToppings, toppings }
};
