import React from 'react'

import MenuButton from './MenuButton'

import './Menu.css'

const Menu = () => {
  let pages = ['home', 'about', 'projects', 'blog', 'contact']
  let menuButtons = pages.map((page, index) => <MenuButton key={`nav-${index}`} destination={page} />)
  
  return (
    <div className="navigation-menu">
      {menuButtons}
    </div>
  )
}

export default Menu