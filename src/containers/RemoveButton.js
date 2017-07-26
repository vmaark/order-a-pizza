import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';

let RemoveButton = ({ dispatch }) => {
  return (
    <div>
      <button onClick={() => { dispatch(removeFromCart()) }}>Remove from Cart</button>
    </div>
  )
};

RemoveButton = connect()(RemoveButton);

export default RemoveButton;
