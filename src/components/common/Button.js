import React from 'react'

import './Button.css'

const Button = ({ color, content, onClick, size, flat }) => {
  const classNames = [
    'btn',
    color,
    flat ? 'flat' : '',
    size ? size : 'medium'
  ].join(' ')

  return (
    <div 
      className={classNames} 
      onClick={onClick ? () => onClick() : () => {}}>
      {content}
    </div>
  )
}

export default Button