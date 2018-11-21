import React, { Component } from 'react'

import Button from '../common/Button'
import Modal from '../common/Modal'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

class Projects extends Component {
  state = { isModalOpen: false, cardData: null }

  toggleProjectsModal = cardId => {
    const { isModalOpen } = this.state
    cardId === undefined ? 
      this.setState({ isModalOpen: false, cardData: null }) :
      this.setState({
        isModalOpen: isModalOpen ? false : true,
        cardData: this.findModalContent(cardId)
      })
  }

  findModalContent = cardId => this.props.projectData.filter(project => project.id === cardId)[0]

  handleSortCards = btnType => this.props.sortProjectCards(btnType)

  render() {
    const { handleSortCards, toggleProjectsModal } = this
    const { projectData } = this.props
    const { isModalOpen, cardData } = this.state

    const projectCards = projectData.map(project =>
      <ProjectCard
        key={project.id}
        image={project.image}
        title={project.title}
        blurb={project.blurb}
        id={project.id}
        handleClick={toggleProjectsModal}
        />
    )

    return (
      <div className="projects flex-column">
        <h2 className="page-title">
          projects
        </h2>
        <div className="flex-row">
          <Button color="white" content="code" onClick={() => handleSortCards('code')} />
          <Button color="white" content="design" onClick={() => handleSortCards('design')} />
          <Button color="white" content="all" onClick={() => handleSortCards('all')} />
        </div>
        <div className="card-container flex-column">
          {projectCards}
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={toggleProjectsModal}
        >
          <ProjectModal data={cardData}/>
        </Modal>
      </div>
    )
  }
}

export default Projects