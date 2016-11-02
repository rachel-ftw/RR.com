import React, { Component } from 'react'
import './hamburger.css'

class HamburgerButton extends Component {
  render(){
    return (
      <button className="c-hamburger c-hamburger-x">
        <span>toggle menu</span>
      </button>
    )
  }
}