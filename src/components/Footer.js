import React from 'react'
import './Footer.css'

const Footer = () => (
  <div className="footer">
    <div className="3-col"></div>
    <div className="3-col">
      <div id="social-links">
        <a href="mailto:rachel@rachelralston.com"><i className="fa fa-lg fa-envelope" aria-hidden="true"></i></a>
        <a href="https://github.com/rachel-ftw"><i className="fa fa-lg fa-github" aria-hidden="true"></i></a>
        <a href="https://twitter.com/rachelralston"><i className="fa fa-lg fa-twitter" aria-hidden="true"></i></a>
        <a href="https://dribbble.com/rachelralston"><i className="fa fa-lg fa-dribbble" aria-hidden="true"></i></a>
        <a href="https://linkedin.com/in/rachelralston"><i className="fa fa-lg fa-linkedin" aria-hidden="true"></i></a>
      </div>
    </div>
    <div className="3-col"></div>
  </div>
)

export default Footer
