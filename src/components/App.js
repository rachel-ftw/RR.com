import React, { Component } from 'react'
import { StickyContainer } from 'react-sticky'
import './App.css'
import projectData from './project_data'
import PrimaryNav from './PrimaryNav'
import About from './About'
import Splash from './Splash'
import PortfolioCard from './PortfolioCard'
import Footer from './Footer'
// import * as ScrollMagic from 'scrollmagic'

class App extends Component {
  render() {
    const projects = projectData
    const projectComponents = projects.map(project =>
      <PortfolioCard
        key={project.id}
        project={project}
      />
    )

    // var controller = new ScrollMagic.Controller()

    // var ourScene = new ScrollMagic.Scene({
    //     triggerElement: '#project',
    //   })
    //   .setClassToggle('#project', 'fade-in')
    //   .addIndicators()
    //   .addTo(controller)

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
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
        <script src="./scrollMagic.js"></script>
      </div>
    )
  }
}

export default App
