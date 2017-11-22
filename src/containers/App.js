import React, { Component } from 'react'
import { StickyContainer } from 'react-sticky'

import projectData from '../components/project_data'
import PrimaryNav from '../components/PrimaryNav'
import About from '../components/About'
import Splash from '../components/Splash'
import PortfolioCard from '../components/PortfolioCard'
import Footer from '../components/Footer'

import './App.css'

class App extends Component {
  render() {
    const projectComponents = projectData.map(project =>
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
