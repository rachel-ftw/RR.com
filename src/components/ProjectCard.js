import React from 'react'
import '../styles/ProjectCard.css'

const ProjectCard = (props) => {
  return (
    <div className="project-card" >
      <div
        className="project-img"
        style={{backgroundImage: `url('${props.image}')`}}
      />
      <div className="project-text-area">
        <h3 className="project-title">{props.title}</h3>
        <p>{props.blurb}</p>
      </div>
    </div>
  )
}

export default ProjectCard
