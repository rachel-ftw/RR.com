import React from 'react'
import { Link } from 'react-router-dom'

import './MenuButton.css'

const MenuButton = ({ destination, handleClick }) => {
  const link = destination === 'home' ? '/' : `/${destination}`

  return (
    <div onClick={handleClick} className="navigation-menu-button">
      <Link to={link}>
        <span className="navigation-menu-button-text">{destination}</span>
      </Link>
    </div>
  )
}

export default MenuButton