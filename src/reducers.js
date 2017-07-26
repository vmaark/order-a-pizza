import * as actions from './actions';

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
  isFetching: false
}

export default function pizzaApp(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TO_CART:
      var newCart = state.pizzasInCart.slice();
      newCart.push(action.pizza);
      var newPizza = Object.assign({}, initialPizzaState);
      return {
        pizzasInCart: newCart,
        pizza: newPizza,
        isFetching: state.isFetching
      };
    case actions.REMOVE_FROM_CART:
      var newCart = state.pizzasInCart.slice();
      newCart.splice(action.index, 1);
      return Object.assign({}, state, {
        pizzasInCart: newCart
      });
    case actions.TOGGLE_TOPPING:
      let id = state.pizza.toppings.findIndex((topping) => topping.name === action.topping.name);
      state.pizza.toppings[id].defaultSelected = !state.pizza.toppings[id].defaultSelected;
      var newPizza = Object.assign({}, state.pizza, {
        toppings: state.pizza.toppings
      });
      return Object.assign({}, state, {
        pizza: newPizza
      });
    case actions.RECEIVE_PIZZA_INFO:
      let pizzaId = action.data.pizzaSizes.findIndex((pizzaSize) => pizzaSize.name.toUpperCase() === action.size);
      let selectedPizzaData = action.data.pizzaSizes[pizzaId];
      selectedPizzaData.size = selectedPizzaData.name.toUpperCase();
      let toppings = selectedPizzaData.toppings.map((topping) => {
        return {
          defaultSelected: topping.defaultSelected,
          price: topping.topping.price,
          name: topping.topping.name
        };
      });
      selectedPizzaData.toppings = toppings;
      return Object.assign({}, state, {
        pizza: selectedPizzaData,
        isFetching: false
      });
    case actions.LOADING_PIZZA_INFO:
      return Object.assign({}, state, {
        isFetching: true
      });
    default:
      return state
  }
};
