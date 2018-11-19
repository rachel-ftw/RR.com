import React from 'react'

import './Button.css'

const Button = ({ link, color, text }) => (
  <a href={link}>
    <div className={color}>{text}</div>
  </a>
)


export default Button
