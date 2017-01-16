import React, { Component } from 'react'
import './App.css'
import PortfolioCard from './PortfolioCard'
import projectData from './project_data'
import Footer from './Footer'

class App extends Component {
    
  render() {
    const projects = projectData
    console.log(projects)
    const projectComponents = projects.map(project => 
      <PortfolioCard key={project.id} project={project} />)

    return (
      <div className="content">
        <div className="primary-nav">
          <h1 id="rachelRalstonLogo">RACHEL RALSTON</h1>
          <div id="nav-link-box">
            <a className="nav-links" href="#">projects</a>
            <a className="nav-links" href="#">portfolio</a>
            <a className="nav-links" href="#">about</a>
          </div>
        </div>
        <div id="main">
            
              <h1>I'm the unicorn that can design & code that you've been looking for. </h1>
          <div id="about">
            <div id="about-words">
              <p>Oakland based designer & full stack developer. I can handle whatever you
              can throw at me. I've developed & maintained full stack apps, 
              designed brand marketing strategies & materials, & illustrated 
              magazine covers.</p>
              <p>Non-tech loves include rock climbing, dancing, hiking with 
              <a href={'./uma.jpg'}>this lady</a>, meditation and yoga.</p>
            </div>
            <div id="technologies">
              <div id="social-links">
                <a href="mailto:rachel@rachelralston.com"><i className="fa fa-lg fa-envelope" aria-hidden="true"></i></a>
                <a href="https://github.com/rachel-ftw"><i className="fa fa-lg fa-github" aria-hidden="true"></i></a>
                <a href="https://twitter.com/rachelralston"><i className="fa fa-lg fa-twitter" aria-hidden="true"></i></a>
                <a href="https://dribbble.com/rachelralston"><i className="fa fa-lg fa-dribbble" aria-hidden="true"></i></a>
                <a href="https://linkedin.com/in/rachelralston"><i className="fa fa-lg fa-linkedin" aria-hidden="true"></i></a>
              </div>

            </div>
          </div>
          <div id="splash">
            <div id="cta">
              <a href="#" className="cta-button">check out my work</a>
              <a href="#" className="cta-button">get in touch</a>
            </div>
          </div>
          <div id="project">{projectComponents}</div>
          <div id="portfolio"></div>
        </div>
        <Footer/>
      </div>
    )
  }
}



export default App
