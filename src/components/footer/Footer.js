import React from 'react'

import SocialMedia from '../common/SocialMedia'
import './Footer.css'

const Footer = () => (
  <div className="footer flex-column flex-center">
    <SocialMedia />
    <span>site lovingly made by hand. code on 
      <a href="https://www.github.com/rachel-ftw/portfolio-website" target="_blank" rel="noopener noreferrer">github</a>. ©2019, Rachel Ralston
    </span>
  </div>
)

export default Footer
