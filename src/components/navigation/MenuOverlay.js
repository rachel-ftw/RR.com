import React from 'react'

import './MenuOverlay.css'

const MenuOverlay = ({ isOpen }) => (
  <div className="expanding-background-container">
    <div className={`expanding-background ${isOpen ? 'open' : 'closed'}`}></div>
  </div>
)

export default MenuOverlay