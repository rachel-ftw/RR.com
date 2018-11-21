import React, { Component } from 'react'

import HamburgerButton from './HamburgerButton'
import Menu from './Menu'
import MenuOverlay from './MenuOverlay'

import './Navigation.css'

class Navigation extends Component {
  state = { isNavOpen: false }

  openNavigation = () => {
    this.setState({ isNavOpen: true })
  }

  closeNavigation = () => {
    this.setState({ isNavOpen: false })
  }

  toggleNavigation = () => {
    this.state.isNavOpen ? this.closeNavigation() : this.openNavigation()
  }

  render() {
    const { toggleNavigation } = this
    const { isNavOpen } = this.state

    return (
      <div className="flex-row-reverse">
        <div>
          <MenuOverlay isOpen={isNavOpen} />
          <HamburgerButton isOpen={isNavOpen} handleClick={toggleNavigation} />
        </div>
        <div>
          { isNavOpen && <Menu handleClick={toggleNavigation} />}
        </div>
      </div>
    )
  }
}


export default Navigation
