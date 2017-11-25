import React, { Component } from 'react'

import PrimaryNav from '../components/PrimaryNav'
import About from '../components/About'
import Projects from '../components/Projects'
import Spacer from '../components/Spacer'
import Contact from '../components/Contact'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.modalIsOpen
    })
  }

  render() {
    return (
      <div className="content">
        <PrimaryNav />
        <About />
        <Spacer height={50} />
        <Projects />
        <Contact modalIsOpen={this.state.modalIsOpen}/>
      </div>
    )
  }
}

export default App
