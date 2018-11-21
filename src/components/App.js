import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import About from './about/About'
import BlogContainer from './blog/BlogContainer'
import Footer from './footer/Footer'
import Navigation from './navigation/Navigation'
import ProjectsContainer from './projects/ProjectsContainer'
import Landing from './landing/Landing'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navigation />
          <div className="app-content">
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={ProjectsContainer} />
            <Route exact path="/blog" component={BlogContainer} />
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
