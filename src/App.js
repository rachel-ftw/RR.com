import React, { Component } from 'react';
import ocean from './ocean.jpg';
// var BackgroundImg = require("./ocean.jpg")
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className="splash">
        <div className="left-nav">
          <h1>RACHEL</h1>
          <h1>RALSTON</h1>
          Full Stack Engineer
        </div>
        <div className="right-hero">
          <div className="home-hero"></div>
          <img className="home-hero-img" src={ocean}></img>
        </div>
      </div>
    );
  };
};


export default App;
