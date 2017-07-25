import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import pizzaApp from './reducers';


let initialState = {
  pizza: {
    size: null,
    toppings: [],
    maxToppings: 0,
    basePrice: 0,
    price: 0
  },
  pizzasInCart: []
};

let store = createStore(pizzaApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
