import React from 'react'
import { Link } from 'react-router-dom'

const MenuButton = ({ destination, handleClick }) => {
  const link = destination === 'home' ? '/' : `/${destination}`

  return (
    <div onClick={handleClick}>
      <Link to={link}>
        <div className="navigation-menu-button">
          {destination}
        </div>
      </Link>
    </div>
  )
}

export default MenuButton