import React from 'react'

import Button from '../common/Button'

import './ModalContent.css'

const ModalContent = ({ data: { title, blurb, type, technologies } }) => {
  const techUsed = technologies.map((tech, index) => <Button key={`tech-${index}`} content={tech} size="small" flat />)
  
  return (
  <div className="projectModal--container">
    <span className="projectModal--type">{type}</span>
    <h3 className="projectModal--title">{title}</h3>
    <div className="projectModal--tech flex-row">{techUsed}</div>
    <p className="projectModal--content">{blurb}</p>
  </div>
)}

export default ModalContent