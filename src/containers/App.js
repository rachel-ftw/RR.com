import React, { Component } from 'react'
import { StickyContainer } from 'react-sticky'

import {
  About,
  Footer,
  PortfolioCard,
  PrimaryNav,
  projectData,
  Splash,
} from '../components'

import './App.css'

class App extends Component {
  render() {
    const projects = projectData
    const projectComponents = projects.map(project =>
      <PortfolioCard
        key={project.id}
        project={project}
      />
    )

    return (
      <div className="content">
        <StickyContainer>
          <PrimaryNav />
          <div id="main">
            <Splash />
            <About />
            <div id="project">{projectComponents}</div>
          </div>
          <Footer/>
        </StickyContainer>
      </div>
    )
  }
}

export default App
