import React from 'react'

import { twelveWordBlurb } from '../common/utilities.js'

import './ProjectCard.css'

const ProjectCard = ({ image, title, blurb, id, handleClick }) => (
  <div 
    className="project-card cover-image" 
    onClick={() => handleClick(id)}
    style={{backgroundImage: `url('${image}')`}}
  >
    <div className="project-text-area">
      <h3 className="project-title">{title}</h3>
      <p>{twelveWordBlurb(blurb)}</p>
    </div>
  </div>
)


export default ProjectCard
