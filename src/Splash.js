import React, { Component } from 'react'
import './Splash.css'

export default class Splash extends Component {

  render() {
    return (
      <div id="about">
        <div className="splash">
          <div className="grey-background">
            <h1>design & code</h1>
            <div className="about-words">
              <p>Oakland based designer & full stack developer. </p>
            </div>
            <div className="cta">
              <a href="#" className="cta-button">check out my work</a>
              <a href="#" className="cta-button">get in touch</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}