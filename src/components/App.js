import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import About from './about/About'
import Blog from './blog/Blog'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import NavigationContainer from './navigation/NavigationContainer'
import ProjectsContainer from './projects/ProjectsContainer'
import Splash from './splash/Splash'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavigationContainer />
          <div>
            <Route exact path="/" component={Splash} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={ProjectsContainer} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
