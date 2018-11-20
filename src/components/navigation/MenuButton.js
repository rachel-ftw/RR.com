import React from 'react'
import { Link } from 'react-router-dom'

const MenuButton = ({ destination, handleClick }) => {
  const link = destination === 'home' ? '/' : `/${destination}`

  return (
    <div onClick={handleClick} className="navigation-menu-button">
      <Link to={link}>
        <div className="navigation-menu-button-link">
          {destination}
        </div>
      </Link>
    </div>
  )
}

export default MenuButton