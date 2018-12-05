import React from 'react'

import Button from '../common/Button'

import './ProjectCard.css'

const ProjectCard = ({ project: { image, title, id, technologies, type, ...rest}, handleClick }) => {
  // console.log(image)
  let preview = Array.isArray(image) ? image[0] : image
  return (
  <div className="project">
    <div 
      className="project--image cover-image" 
      onClick={() => handleClick(id)}
      style={{
        backgroundImage: `
          linear-gradient(
            to right bottom, 
            rgba(255, 174, 0, 1), 
            rgba(15, 255, 183, 1)), 
            url('${preview}')
        `,
      }}
    >
    </div>
    <div className="project--text">
      <h3 className="project--text-title">{title}</h3>
      <div className="project--text-buttons flex-row">
        <Button content={type} size="micro" color="pink" flat />
        { 
          technologies.map((tech, i) => <Button key={i} content={tech} size="micro" color="dark" flat />)
        }
      </div>
    </div>
  </div>
)}


export default ProjectCard
