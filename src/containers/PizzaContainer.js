import { connect } from 'react-redux';
import * as actions from '../actions'
import Pizza from '../Pizza';
import { calculatePizzaPrice } from '../Helper';

const mapStateToProps = (state, ownProps) => {
  let sumOfSelectedToppings = state.pizza.toppings.reduce((sum, topping) => {
    return sum + (topping.defaultSelected ? 1 : 0);
  }, 0);
  let toppings = state.pizza.toppings.map((topping) => {
  let disabled = state.pizza.maxToppings
    ? !topping.defaultSelected && sumOfSelectedToppings >= state.pizza.maxToppings
      ? "disabled"
      : ""
    : "";
    return {
      disabled: disabled,
      name: topping.name,
      price: topping.price,
      defaultSelected: topping.defaultSelected
    }
  });

  return {
    toppings: toppings,
    maxToppings: state.pizza.maxToppings,
    size: state.pizza.size,
    basePrice: state.pizza.basePrice,
    price: calculatePizzaPrice(toppings, state.pizza.basePrice).toFixed(2)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (topping) => {
      dispatch(actions.toggleTopping(topping))
    }
  };
};

const PizzaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pizza);

export default PizzaContainer;
