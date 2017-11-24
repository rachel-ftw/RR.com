import React from 'react'
import Button from './Button'

const About = () => (
  <div
    className="container flex-column"
    style={{paddingBottom: '50px'}}
  >
    <h1 className="header">Hi, I'm Rachel.</h1>
    <p className="subheader">
      I'm a blockchain developer and designer living in Oakland, CA.<br/>
      Javascript, React, Redux, Web3, Solidity & Smart contract development
    </p>
    <div className="flex-column" style={{paddingTop: '30px'}}>
      <Button
        color={'btn yellow'}
        text={"YES, I'M AVAILABLE FOR HIRE"}
        link={'#contact'}
        />
      <div className="flex-row">
        <Button
          color={'btn white'}
          text={'twitter'}
          link={'http://www.twitter.com/rachelralston'}
          />
        <Button
          color={'btn white'}
          text={'github'}
          link={'http://www.github.com/rachel-ftw'}
          />
        <Button
          color={'btn white'}
          text={'email'}
          link={'mailto:rachel@blockchaindevelopers.io'}
          />
      </div>
    </div>
  </div>
)

export default About
