import React, { Component } from 'react'
import {StickyContainer} from 'react-sticky'
import './App.css'
import projectData from './project_data'
import PrimaryNav from './PrimaryNav'
import Splash from './Splash'
import PortfolioCard from './PortfolioCard'
import ContactForm from './ContactForm'
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
            <div id="project">{projectComponents}</div>
          </div>
          <ContactForm />
          <Footer/>
        </StickyContainer>
      </div>
    )
  }
}



export default App
