import React, { Component } from 'react'

import PrimaryNav from '../components/PrimaryNav'
import About from '../components/About'
import PersonalProjects from '../components/PersonalProjects'
import Spacer from '../components/Spacer'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="content">
        <PrimaryNav />
        <About />
        <Spacer height={50} />
        <PersonalProjects />
      </div>
    )
  }
}

export default App
