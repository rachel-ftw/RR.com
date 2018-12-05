import React, { Component } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import Button from '../common/Button'
import Modal from '../common/Modal'
import ModalContent from './ModalContent'
import ProjectCard from './ProjectCard'

import './Projects.css'

class Projects extends Component {
  state = { 
    cardData: null,
    isModalOpen: false, 
  }

  closeProjectsModal = () => {
    this.setState({ isModalOpen: false, cardData: null })
    enableBodyScroll(this.targetElement)
  }

  openProjectsModal = cardId => {
    this.setState({ cardData: this.findModalContent(cardId), isModalOpen: true })
    disableBodyScroll(this.targetElement)
  }

  findModalContent = cardId => this.props.projectData.filter(project => project.id === cardId)[0]

  handleSortCards = btnType => this.props.sortProjectCards(btnType)

  render() {
    const { handleSortCards, openProjectsModal, closeProjectsModal } = this
    const { projectData } = this.props
    const { isModalOpen, cardData } = this.state

    const projectCards = projectData.map(project =>
      <ProjectCard
        key={project.id}
        project={project}
        handleClick={openProjectsModal}
      />
    )

    return (
      <div className="projects flex-column cover-image" >
        <h2 className="projects--title page-title">
          projects
        </h2>
        <div className="projects--buttons flex-row">
          <Button color="white" content="code" onClick={() => handleSortCards('code')} />
          <Button color="white" content="design" onClick={() => handleSortCards('design')} />
          <Button color="white" content="all" onClick={() => handleSortCards('all')} />
        </div>
        <div className="projects--cards">
          {projectCards}
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeProjectsModal}
          imageUrl={cardData ? cardData.image : undefined}
        >
          <ModalContent data={cardData}/>
        </Modal>
      </div>
    )
  }
}

export default Projects