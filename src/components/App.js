import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import About from './about/About'
// import BlogContainer from './blog/BlogContainer'
import Footer from './footer/Footer'
// import Navigation from './navigation/Navigation'
import ProjectsContainer from './projects/ProjectsContainer'
import Landing from './landing/Landing'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-solid-svg-icons'

import './App.css'
library.add(faGithubSquare)


class App extends Component {
  render() {
    return (
        <div className="app">
          <Landing />
          <FontAwesomeIcon icon="fab github-square" />
          <ProjectsContainer />
          <Footer />
        </div>
    )
  }
}

export default App
