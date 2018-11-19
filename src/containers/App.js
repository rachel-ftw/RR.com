import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavigationContainer from '../components/navigation/NavigationContainer'
import ProjectsContainer from '../components/projects/ProjectsContainer'
import Spacer from '../components/common/Spacer'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

import { openModal } from '../store/actions/contact'
import { sortProjectCards } from '../store/actions/projects'

import './App.css'

class App extends Component {
  render() {
    console.log("this.props", this.props)
    const { projects, sortProjectCards } = this.props
    return (
      <div className="content">
        <NavigationContainer />
        <Spacer height={50} />
        <ProjectsContainer projectData={projects} sortProjectCards={sortProjectCards}/>
        <Contact />
        <Footer />
      </div>
    )
  }
}

function mapStateToProps({ modals, projects }) {
  // console.log('map State: ', state)
  return { modals, projects }
}

export default connect(mapStateToProps, { openModal, sortProjectCards })(App)
