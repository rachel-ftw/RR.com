import React from 'react'

import './ModalContent.css'

const ModalContent = ({ data }) => {
  // console.log(data)
  const { title, blurb, image} = data
  return (
  <div className="project-container">
    <h1>{title}</h1>
    <p>{blurb}</p>
    <div className="project-image">
      <div 
        className="project-image cover-image"
        style={{ backgroundImage: `url('${image}')` }}
      />
    </div>
  </div>
)}

export default ModalContent