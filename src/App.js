import React, { Component } from 'react'
import './App.css'
import PortfolioCard from './PortfolioCard'
import HamburgerButton from './hamburger'
var $ = require('jquery');


class App extends Component {

  render() {
    console.log('oh hai')
    $(document).ready(() => {
      var feed = "https://medium.com/feed/@rachel_ftw";
    
      $.ajax(feed, {
          accepts:{
              xml:"application/rss+xml"
          },
          dataType:"xml",
          success:(data) => {
            console.log(data)
          }
        })
      })
    
    return (
      <div className="splash">
        <div className="left-nav">
          <HamburgerButton />
          <h1>RACHEL</h1>
          <h1>RALSTON</h1>
          <div id="nav-content">
            <p id="sub-title">full stack engineer</p>
            <div id="nav-link-box">
              <a className="nav-links" href="#">about</a>
              <a className="nav-links" href="#">portfolio</a>
              <a className="nav-links" href="#">blog</a>
            </div>
            <div className="social-links">
              <i className="fa fa-lg fa-github" aria-hidden="true"></i>
              <i className="fa fa-lg fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-lg fa-dribbble" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="main">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
      </div>
    )
  }
}



export default App
