import React from 'react'
import Button from './Button'

import './Contact.css'

const Contact = () => (
  <div className="container flex-column contact">
    <h1 className="header secondary">Want to work together?</h1>
    <p>I&#39;m currently accepting new projects and would love to hear about yours.</p>
    <p>Please take a few minutes to tell me about it.</p>
    <Button
      color={'btn white'}
      text={'GET STARTED'}
      link={'things'}
    />
  </div>
)

export default Contact
