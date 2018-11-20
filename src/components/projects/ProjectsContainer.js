import React from 'react'
import { connect } from 'react-redux'

import Projects from './Projects'
import { sortProjectCards } from '../../store/projects/actions'

const ProjectsContainer = props => <Projects {...props} />

function mapStateToProps({ projects }) {
  return { projectData: projects }
}

export default connect(mapStateToProps, { sortProjectCards })(ProjectsContainer)