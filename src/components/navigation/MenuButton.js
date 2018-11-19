import React from 'react'
import { Link } from 'react-router-dom'

const MenuButton = ({ destination }) => {
  const link = destination === 'home' ? '/' : `/${destination}`
  return (
    <Link to={link}>
      <button className="navigation-menu-button">
        {destination}
      </button>
    </Link>
  )
}

export default MenuButton