import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OrderForm from './OrderForm';
import Pizza from './Pizza';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Waldo Pizza</h2>
        </div>
        <Pizza
          onClick={()=>{}}
          toppings={[{
            name: "yolo",
            price: 1.23
          },
          {
            name: "bolo",
            price: 4.13
          },
          {
            name: "gumó",
            price: 0.19
          }]}
          maxToppings={3}
          size="Small"
          basePrice={5.32}
        />
      </div>
    );
  }
}

export default App;
