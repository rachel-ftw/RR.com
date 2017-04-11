import React, { Component } from 'react'
import {StickyContainer} from 'react-sticky'
import './App.css'
import projectData from './project_data'
import PrimaryNav from './PrimaryNav'
import About from './About'
import Splash from './Splash'
import PortfolioCard from './PortfolioCard'
import Footer from './Footer'

class App extends Component {

  render() {
    const projects = projectData
    console.log(projects)
    const projectComponents = projects.map(project =>
      <PortfolioCard key={project.id} project={project} />)

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
