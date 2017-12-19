import React, { Component } from 'react'
import { connect } from 'react-redux'

import PrimaryNav from '../components/PrimaryNav'
import About from '../components/About'
import Projects from '../components/Projects'
import Spacer from '../components/Spacer'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import { openModal } from '../actions/index'

import '../styles/App.css'

class App extends Component {
  render() {
    console.log("this.props", this.props)
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
  console.log('map State: ', state)
  return { modals: state }
}

export default connect(mapStateToProps, { openModal })(App)
