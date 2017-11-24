import React from 'react'

const ProjectCard = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.title} />
    </div>
  )
}

export default ProjectCard
