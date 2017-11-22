import React, { Component } from 'react'
import './PrimaryNav.css'
import {Sticky} from 'react-sticky'

export default class PrimaryNav extends Component {

  render() {
    return (
      <Sticky>
        <div className="primary-nav">
          <div>
            <h1 id="rachelRalstonLogo">RACHEL RALSTON</h1>
          </div>
          <div id="nav-link-box">
            <a className="nav-links" href="#">projects</a>
            <a className="nav-links" href="#">portfolio</a>
            <a className="nav-links" href="#">about</a>
          </div>
        </div>
      </Sticky>
    )
  }
}
