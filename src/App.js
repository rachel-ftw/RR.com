import React, { Component } from 'react'
import './App.css'
import PortfolioCard from './PortfolioCard'

class App extends Component {
  render() {
    return (
      <div className="splash">
        <div className="primary-nav">
          <div id="nav-content">
            <h1 className="myName">RACHEL RALSTON</h1>
            <p id="sub-title">full stack engineer</p>
          </div>
          <div id="nav-link-box">
            <a className="nav-links" href="#">about</a>
            <a className="nav-links" href="#">portfolio</a>
            <a className="nav-links" href="#">writing</a>
          </div>
          <div className="social-links">
            <i className="fa fa-lg fa-github" aria-hidden="true"></i>
            <i className="fa fa-lg fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-lg fa-dribbble" aria-hidden="true"></i>
          </div>
        </div>
        <div className="main">
          <div></div>
        </div>
      </div>
    )
  }
}



export default App
