import React from 'react'

import Button from '../common/Button'
import { twelveWordBlurb } from '../common/utilities.js'

import './ProjectCard.css'

const ProjectCard = ({ project: { image, title, id, technologies, type, ...rest}, handleClick }) => {
  console.log(rest)
  return (
  <div className="project">
    <div 
      className="project--image cover-image" 
      onClick={() => handleClick(id)}
      style={{
        backgroundImage: `
          linear-gradient(
            to right bottom, 
            rgb(255, 0, 255), 
            rgb(0, 200, 255)), 
            url('${image}')
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
