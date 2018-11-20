import React from 'react'

import MenuButton from './MenuButton'

import './Menu.css'

const Menu = ({ toggleNavigation }) => {
  const pages = ['home', 'about', 'projects', 'blog']
  const menuButtons = pages.map((page, index) => (
    <MenuButton key={`nav-${index}`} destination={page} handleClick={toggleNavigation}/>
  ))
  
  return (
    <div className="navigation-menu">
      {menuButtons}
    </div>
  )
}

export default Menu