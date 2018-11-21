import React from 'react'

import MenuButton from './MenuButton'

import './Menu.css'

const Menu = ({ handleClick }) => {
  const pages = ['home', 'about', 'projects', 'blog']
  const menuButtons = pages.map((page, index) => (
    <MenuButton key={`nav-${index}`} destination={page} handleClick={handleClick}/>
  ))
  
  return (
    <div className="flex-column navigation-menu">
      {menuButtons}
    </div>
  )
}

export default Menu