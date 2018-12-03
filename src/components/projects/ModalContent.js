import React from 'react'

import Button from '../common/Button'

import './ModalContent.css'

const ModalContent = ({ data: { title, blurb, type, technologies } }) => {
  const techUsed = technologies.map((tech, index) => <Button key={`tech-${index}`} content={tech} size="small" flat />)
  
  return (
  <div className="modal--container">
    <span className="modal--type">{type}</span>
    <h3 className="modal--title">{title}</h3>
    <div className="modal--tech flex-row">{techUsed}</div>
    <p className="modal--content">{blurb}</p>
  </div>
)}

export default ModalContent