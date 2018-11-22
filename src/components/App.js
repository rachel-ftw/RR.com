import React, { Component } from 'react'

import Footer from './footer/Footer'
import Landing from './landing/Landing'
import ProjectsContainer from './projects/ProjectsContainer'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithubSquare } from '@fortawesome/free-solid-svg-icons'

import './App.css'
library.add(faGithubSquare)


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
