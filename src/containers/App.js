import React, { Component } from 'react'
import { connect } from 'react-redux'

import PrimaryNav from '../components/navigation/PrimaryNav'
import About from '../components/splash/About'
import Projects from '../components/projects/Projects'
import Spacer from '../components/common/Spacer'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

import { openModal } from '../actions/index'

import './App.css'

class App extends Component {
  render() {
    // console.log("this.props", this.props)
    return (
      <div className="content">
        <PrimaryNav />
        <About />
        <Spacer height={50} />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('map State: ', state)
  return { modals: state }
}

export default connect(mapStateToProps, { openModal })(App)
