import React, { Component } from 'react'

import Button from '../common/Button'
import Modal from '../common/Modal'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

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

  toggleModal = cardId => {
    let cardData = this.toggleModal(cardId)
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      projectShown: this.state.cardData === null ? cardData : null,
    })
  }

  findModalData = cardId => {
    let matchingData = this.props.projectData.filter(project => project.id === cardId)
    console.log(matchingData)
    return matchingData
  }

  handleClick = btnType => {
    const {sortProjectCards} = this.props
    sortProjectCards(btnType)
  }

  render() {
    const { handleClick } = this
    const { projectData } = this.props

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
        <h2 className="header secondary">
          Projects
        </h2>
        <div className="flex-row">
          <Button color="white" content="code" onClick={() => handleClick('code')} />
          <Button color="white" content="design" onClick={() => handleClick('design')} />
          <Button color="white" content="all" onClick={() => handleClick('all')} />
        </div>
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
