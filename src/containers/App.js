import React, { Component } from 'react'

// import projectData from '../components/project_data'
import PrimaryNav from '../components/PrimaryNav'
import About from '../components/About'
// import Splash from '../components/Splash'
// import PortfolioCard from '../components/PortfolioCard'
// import Footer from '../components/Footer'

import './App.css'
// const projectComponents = projectData.map(project =>
//   <PortfolioCard
//     key={project.id}
//     project={project}
//   />
// )

class App extends Component {
  render() {
    return (
      <div className="content">
        <PrimaryNav />
        <About />
      </div>
    )
  }
}
// <div id="main">
// <Splash />
// <About />
// <div id="project">{projectComponents}</div>
// </div>
// <Footer/>

export default App
