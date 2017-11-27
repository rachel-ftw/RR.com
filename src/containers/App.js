import React, { Component } from 'react'

import PrimaryNav from '../components/PrimaryNav'
import About from '../components/About'
import Projects from '../components/Projects'
import Spacer from '../components/Spacer'
import Contact from '../components/Contact'

import '../styles/App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactModalOpen: false,
      project1ModalOpen: false,
    }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.contactModalOpen
    })
  }

  render() {
    return (
      <div className="content">
        <PrimaryNav />
        <About />
        <Spacer height={50} />
        <Projects />
        <Contact contactModalOpen={this.state.contactModalOpen}/>
      </div>
    )
  }
}

export default App
