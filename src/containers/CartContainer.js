import { connect } from 'react-redux';
import Cart from '../Cart';
import * as actions from '../actions'
import { calculatePizzaPrice, calculateTotal } from '../Helper';

const mapStateToProps = (state, ownProps) => {
  return {
    pizzasInCart: state.pizzasInCart,
    total: calculateTotal(state.pizzasInCart)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {    }
  };
};

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartContainer;
