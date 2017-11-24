import React from 'react'
import ProjectCard from './ProjectCard'
import projectData from './project_data'

const PersonalProjects = () => {
  const projectCards = projectData.map(project =>
    <ProjectCard
      key={project.id}
      image={project.image}
      title={project.title}
      blurb={project.blurb}
    />
  )
  return (
    <div className="container" style={style.background}>
      <h1 className="header secondary">Personal Projects</h1>
      <div className="flex-row">
        {projectCards}
      </div>
    </div>
  )
}

const style = {
  background: {
    backgroundColor: '#333',
    color: '#fff'
  },
}

export default PersonalProjects
