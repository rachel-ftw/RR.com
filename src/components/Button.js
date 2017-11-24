import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <a href={props.link}>
      <div className="btn">{props.text}</div>
    </a>
  )
}

export default Button
