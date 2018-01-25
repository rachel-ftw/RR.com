import React, { Component } from 'react'

class ProjectModal extends Component {
  state = {
    isOpen: false,
  }

  render() {
    return (
      <div>
      Im a project modalIsOpen
      {this.props}
      </div>
    )
  }
}

export default ProjectModal
