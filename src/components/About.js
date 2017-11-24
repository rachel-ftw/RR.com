import React from 'react'
import Button from './Button'

const About = () => (
  <div className="container">
    <h1 className="header">Hi, I'm Rachel.</h1>
    <p className="subheader">
      I'm a blockchain developer and designer living in Oakland, CA.
    </p>
    <div className="flex-row">
      <Button
        text={'twitter'}
        link={'http://www.twitter.com/rachelralston'}
      />
      <Button
        text={'github'}
        link={'http://www.github.com/rachel-ftw'}
      />
      <Button
        text={'email'}
        link={'mailto:rachel@blockchaindevelopers.io'}
      />
    </div>
  </div>
)

export default About
