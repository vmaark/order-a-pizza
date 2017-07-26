export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const TOGGLE_TOPPING = 'TOGGLE_TOPPING';

export const LOADING_PIZZA_INFO = 'LOADING_PIZZA_INFO';
export const RECEIVE_PIZZA_INFO = 'RECEIVE_PIZZA_INFO';

export const PizzaSize = {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE'
};

const query = `{
  pizzaSizes {
    name
    maxToppings
    basePrice
    toppings {
      defaultSelected
      topping {
        name
        price
      }
    }
  }

}`;

export function toggleTopping(topping) {
  return { type: TOGGLE_TOPPING, topping };
};

export function addToCart(pizza) {
  return { type: ADD_TO_CART, pizza: pizza };
};

export function removeFromCart(index) {
  return { type: REMOVE_FROM_CART, index };
};

export function loadingPizzaInfo(size) {
  return { type: LOADING_PIZZA_INFO, size };
};

function receivePizzaInfo(size, json) {
  return {
    type: RECEIVE_PIZZA_INFO,
    size,
    data: json.data,
  }
};

export function fetchPizzaInfo(size) {
  return function (dispatch) {
    dispatch(loadingPizzaInfo(size));
    return fetch("https://core-graphql.dev.waldo.photos/pizza?query=" + query)
      .then(response => response.json(), error => console.log('An error occured.', error))
      .then(json => dispatch(receivePizzaInfo(size, json)));
  };
};
