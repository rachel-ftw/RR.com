import React from 'react'

import './Button.css'

const Button = ({ color, content, onClick }) => (
  <div className={`btn ${color}`} onClick={() => onClick()}>{content}</div>
)


export default Button
