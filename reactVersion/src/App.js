import React, { Component } from 'react'
import './App.css'
import PortfolioCard from './PortfolioCard'
import HamburgerButton from './hamburger'
let FeedParser = require('feedparser'),
  request = require('request')

class App extends Component {

  render() {
  let req = request('https://medium.com/feed/@rachel_ftw'),
    feedparser = new FeedParser()

  req.on('error', (error) => {
    console.log('yo, you got an error dude.')
  })

  req.on('response', (res) => {
    let stream = this
    if (res.statusCode !== 200) 
      this.emit('error', new Error('Bad status code'))
    stream.pipe(feedparser)
  })
   
   
  feedparser.on('error', (error) => {
    // always handle errors 
  })

  feedparser.on('readable', () => {
    // This is where the action is! 
    let stream = this, 
      meta = this.meta, // **NOTE** the "meta" is always available in the context of the feedparser instance 
      item
   
    while(item === stream.read()) {
      console.log('it\'s your item',item, meta)
    }
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
