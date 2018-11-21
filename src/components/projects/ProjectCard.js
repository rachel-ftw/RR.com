import React from 'react'

import './ProjectCard.css'

const ProjectCard = ({ image, title, blurb, id, handleClick }) => (
  <div className="project-card" onClick={() => handleClick(id)}>
    <div
      className="project-img"
      style={{backgroundImage: `url('${image}')`}}
    />
    <div className="project-text-area">
      <h3 className="project-title">{title}</h3>
      <p>{blurb}</p>
    </div>
  </div>
)


export default ProjectCard
