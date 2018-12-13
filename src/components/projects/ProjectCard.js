import React from 'react'

import Button from '../common/Button'
import { projectColors } from '../common/utilities'

import './ProjectCard.css'

const ProjectCard = ({
  handleClick,
  project: {
    id,
    images,
    technologies,
    title,
    type,
  },
}) => (
  <div className="project" onClick={() => handleClick(id)}>
    <div
      className="project--image cover-image"
      style={{
        backgroundImage: `
        linear-gradient(
          to right bottom,
          rgba(255, 174, 0, 1),
          rgba(15, 255, 183, 1)),
          url('${images[0]}')
          `,
        }}
        >
    </div>
    <div className="project--text">
      <div className="project--content flex-column">
        <h3 id="projectTitle" className="project--content_text-title">
          {title}
        </h3>
        <div className="project--content_text-buttons flex-row">
          <Button content={type} size="micro" color={projectColors[type]} flat />
          {
            technologies.map((tech, i) =>
              <Button key={i} content={tech} size="micro" color="dark" flat />
            )
          }
        </div>
      </div>
    </div>
  </div>
)

export default ProjectCard