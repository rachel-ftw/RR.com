import React, { Component } from 'react'

import Footer from './footer/Footer'
import Landing from './landing/Landing'
import ProjectsContainer from './projects/ProjectsContainer'

import './App.css'

class App extends Component {
  render() {
    return (
        <div className="app">
          <Landing />
          <ProjectsContainer />
          <Footer />
        </div>
    )
  }
}

export default App
