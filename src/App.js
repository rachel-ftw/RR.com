import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div>
        <HamburgerButton />
      </div>
    );
  };
};

class HamburgerButton extends React.Component {
  render(){
    return (
      <button className="c-hamburger c-hamburger-x">
        <span>toggle menu</span>
      </button>
    )
  }
}

export default App;
