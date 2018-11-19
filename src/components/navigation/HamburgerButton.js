import React, { Component } from 'react'
import './HamburgerButton.css'

class HamburgerButton extends Component {
  render(){
    const { isOpen, handleClick } = this.props
    const isActive = isOpen ? 'is-active' : ''
    
    return (
      <button className={`c-hamburger c-hamburger-x ${isActive}`} onClick={() => handleClick()}>
        <span>toggle menu</span>
      </button>
    )
  }
}

export default HamburgerButton