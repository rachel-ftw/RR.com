import React, { Component } from 'react'
import {StickyContainer} from 'react-sticky'
import './App.css'
import projectData from './project_data'
import PortfolioCard from './PortfolioCard'
import Footer from './Footer'
import PrimaryNav from './PrimaryNav'
import Splash from './Splash'

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
          <div id="project">{projectComponents}</div>
        </div>
        </StickyContainer>
        <Footer/>
      </div>
    )
  }
}



export default App
