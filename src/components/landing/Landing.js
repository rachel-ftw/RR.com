import React from 'react'

import SocialMedia from '../common/SocialMedia'

import './Landing.css'

const Landing = () => (
  <div className="container flex-column landing">
    <h1 className="landing--header">Rachel Ralston</h1>
    <h2 className="landing--sub-header">
      full stack developer and designer
    </h2>
    <SocialMedia />
    <p className="landing--blurb">I'm an engineer, illustrator & desiger living in the Bay Area. My professional expierence is 
      mostly in front end, but I'm capable up and down the stack. Currently a front end engineer at 
      Wells Fargo. Check out my resume or email me.</p>
  </div>
)

export default Landing
