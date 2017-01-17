import React, { Component } from 'react'
import './App.css'
import PortfolioCard from './PortfolioCard'
import projectData from './project_data'
import Footer from './Footer'
import PrimaryNav from './PrimaryNav'
import {StickyContainer, Sticky} from 'react-sticky'

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
          <div id="about">
            <div className="splash">
              <div className="grey-background">
                <h1>design & code</h1>
                <div className="about-words">
                  <p>Oakland based designer & full stack developer. </p>
                </div>
                <div className="cta">
                  <a href="#" className="cta-button">check out my work</a>
                  <a href="#" className="cta-button">get in touch</a>
                </div>
              </div>
            </div>
          </div>
          <div id="project">{projectComponents}</div>
        </div>
        </StickyContainer>
        <Footer/>
      </div>
    )
  }
}



export default App
