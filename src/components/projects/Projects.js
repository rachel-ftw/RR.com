import React, { Component } from 'react'

import ProjectCard from './ProjectCard'
import Modal from '../common/Modal'
import ProjectModal from './ProjectModal'

import projectData from '../../data/projects.json'

var style = {
  container: {
    backgroundColor: '#333',
    color: '#fff',
    paddingTop: '80px',
    paddingBottom: '100px',
  },
  flex: {
    justifyContent: 'space-around'
  }
}

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      cardData: null,
    }
  }

  toggleModal = (cardId) => {
    let cardData = this.toggleModal(cardId)
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      projectShown: this.state.cardData === null ? cardData : null,
    })
  }

  findModalData = (cardId) => {
    let matchingData = projectData.filter(project => project.id === cardId)
    console.log(matchingData)
    return matchingData
  }
  // TODO this whole multiple modals thing
  render() {
    const projectCards = projectData.map(project =>
      <ProjectCard
        key={project.id}
        image={project.image}
        title={project.title}
        blurb={project.blurb}
        onClick={() => this.toggleModal(project.id)}
        />
    )
    return (
      <div className="flex-column" style={style.container}>
        <h1 className="header secondary" style={{paddingBottom: '50px'}}>
          Projects
        </h1>
        <div className="flex-row" style={style.flex}>
          {projectCards}
        </div>
        <Modal
          show={this.state.modalIsOpen}
          onClose={() => this.toggleModal()}
        >
          <ProjectModal data={this.state.cardData}/>
        </Modal>
        </div>
      )
  }
}

export default Projects
