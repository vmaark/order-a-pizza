import React, { Component } from 'react';
import './App.css';
import OrderFormContainer from './containers/OrderFormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Waldo Pizza</h2>
        </div>
        <OrderFormContainer/>
      </div>
    );
  }
}

export default App;
