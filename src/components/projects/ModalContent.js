import React from 'react'

import Button from '../common/Button'

import './ModalContent.css'

const ModalContent = ({ data: { title, blurb, type, technologies, images } }) => {
  const techUsed = technologies.map((tech, index) => <Button key={`tech-${index}`} content={tech} size="small" flat />)
  const imageStyles = images.length <= 1 ? { backgroundImage: `url('${images[0]}')` } : {}
  const imageClasses = [
    "projectModal--img",
    // TODO solve UX & logic for multiple images
    // images.length <= 1 ? "single-img" : "a-number-of-imgs"
  ].join(' ')

  return (
  <div className="projectModal--container">
    <header className="projectModal--header">
      <div>
        <span className="projectModal--type">{type}</span>
        <h3 className="projectModal--title">{title}</h3>
        <div className="projectModal--tech flex-row">{techUsed}</div>
      </div>
      <div className={imageClasses} style={imageStyles} />
    </header>
    <p className="projectModal--content">{blurb}</p>
  </div>
)}

export default ModalContent