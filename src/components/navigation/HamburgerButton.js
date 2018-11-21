import React from 'react'

import './HamburgerButton.css'

const HamburgerButton = ({ isOpen, handleClick }) => (
  <button className={`c-hamburger c-hamburger-x ${isOpen ? 'is-active' : ''}`} onClick={() => handleClick()}>
    <span>toggle menu</span>
  </button>
)

export default HamburgerButton