import React from 'react'

import { twelveWordBlurb } from '../common/utilities.js'

import './ProjectCard.css'

const ProjectCard = ({ image, title, blurb, id, handleClick }) => (
  <div 
    className="project--card cover-image" 
    onClick={() => handleClick(id)}
    style={{ 
      backgroundBlendMode: 'screen',
      backgroundImage: `
        linear-gradient(
          to right bottom, 
          rgb(255, 0, 255), 
          rgb(0, 200, 255)), 
          url('${image}')
      `,
    }}
  >
    <div className="project--text">
      <h3 className="project--text-title">{title}</h3>
      <p className="project--text-blurb">{twelveWordBlurb(blurb)}</p>
    </div>
  </div>
)


export default ProjectCard
