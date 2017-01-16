import React, { Component } from 'react'
import './App.css'
import PortfolioCard from './PortfolioCard.js'
import projectData from './project_data'

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
          <div id="splash">
            <h1>Investigating the intersection of</h1>
            <h1>development, design & psychology</h1>
          </div>
          <div id="project">{projectComponents}</div>
          <div id="portfolio"></div>
          <div id="about">
            <div>
              <img id="RachelImg" role="presentation" src="./rachel_ralston.jpg" />
            </div>
            <div id="about-words">
              <h3>FULL STACK DEVELOPER</h3>
              <p>Oakland, CA</p>
              <p>I'm a former graphic designer turned full stack developer. I 
              love software engineering because lets me solve interesting 
              problems and make useful things. </p>
              <p>Non-tech loves include rock climbing, dancing, hiking with this lady, meditation and yoga.</p>
            </div>
            <div id="technologies">
              <div id="social-links">
                <a href="mailto:rachel@rachelralston.com"><i className="fa fa-lg fa-envelope" aria-hidden="true"></i></a>
                <a href="https://github.com/rachel-ftw"><i className="fa fa-lg fa-github" aria-hidden="true"></i></a>
                <a href="https://twitter.com/rachelralston"><i className="fa fa-lg fa-twitter" aria-hidden="true"></i></a>
                <a href="https://dribbble.com/rachelralston"><i className="fa fa-lg fa-dribbble" aria-hidden="true"></i></a>
                <a href="https://linkedin.com/in/rachelralston"><i className="fa fa-lg fa-linkedin" aria-hidden="true"></i></a>
              </div>
              <div id="technologies-content">
                <h3>TECHNOLOGIES</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Node.js</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default App
