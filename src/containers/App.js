import React, { Component } from 'react'

import PrimaryNav from '../components/PrimaryNav'
import About from '../components/About'
import Projects from '../components/Projects'
import Spacer from '../components/Spacer'
import Contact from '../components/Contact'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="content">
        <PrimaryNav />
        <About />
        <Spacer height={50} />
        <Projects />
        <Contact />
      </div>
    )
  }
}

export default App
