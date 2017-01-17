import React, { Component } from 'react'
import './PrimaryNav.css'
import {Sticky} from 'react-sticky'

export default class PrimaryNav extends Component {

  render() {
    return (
      <Sticky>
        <div className="primary-nav">
          <div id="nav-link-box">
            <a className="nav-links" href="#">projects</a>
            <a className="nav-links" href="#">portfolio</a>
            <a className="nav-links" href="#">about</a>
          </div>
          <h1 id="rachelRalstonLogo">RACHEL RALSTON</h1>
          <div id="social-links">
            <a href="mailto:rachel@rachelralston.com"><i className="fa fa-lg fa-envelope" aria-hidden="true"></i></a>
            <a href="https://github.com/rachel-ftw"><i className="fa fa-lg fa-github" aria-hidden="true"></i></a>
            <a href="https://twitter.com/rachelralston"><i className="fa fa-lg fa-twitter" aria-hidden="true"></i></a>
            <a href="https://dribbble.com/rachelralston"><i className="fa fa-lg fa-dribbble" aria-hidden="true"></i></a>
            <a href="https://linkedin.com/in/rachelralston"><i className="fa fa-lg fa-linkedin" aria-hidden="true"></i></a>
          </div>
        </div>
      </Sticky>
    )
  }
}