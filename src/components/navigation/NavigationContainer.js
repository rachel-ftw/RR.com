import React, { Component } from 'react'

import HamburgerButton from './HamburgerButton'
import Menu from './Menu'

import './NavigationContainer.css'

class NavigationContainer extends Component {
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
      <div>
        <HamburgerButton isOpen={isNavOpen} handleClick={toggleNavigation} />
        { isNavOpen && <Menu toggleNavigation={toggleNavigation} />}
      </div>
    )
  }
}


export default NavigationContainer
