import React from 'react'

import Button from '../common/Button'

import './ModalContent.css'

const ModalContent = ({ data }) => {
  const { title, blurb, type, technologies } = data
  const techUsed = technologies.map((tech, index) => <Button key={`tech-${index}`} content={tech} size="small" flat />)
  
  return (
  <div className="project-modal-container">
    <span className="project-modal-type">{type}</span>
    <h1 className="project-modal-title">{title}</h1>
    <div className="project-modal-tech flex-row">{techUsed}</div>
    <p>{blurb}</p>
  </div>
)}

export default ModalContent