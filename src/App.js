import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="content">
        <div className="primary-nav">
          <h1 id="rachelRalstonLogo">RACHEL RALSTON</h1>
          <p id="sub-title">full stack engineer</p>
        </div>
        <div id="main">
          <div id="about">
            <div>
              <img id="RachelImg" role="presentation" src="./rachel_ralston.jpg" />
              <div className="social-links">
                <a href="https://github.com/rachel-ftw"><i className="fa fa-lg fa-github" aria-hidden="true"></i></a>
                <a href="https://twitter.com/rachelralston"><i className="fa fa-lg fa-twitter" aria-hidden="true"></i></a>
                <a href="https://dribbble.com/rachelralston"><i className="fa fa-lg fa-dribbble" aria-hidden="true"></i></a>
                <a href="https://linkedin.com/in/rachelralston"><i className="fa fa-lg fa-linkedin" aria-hidden="true"></i></a>
              </div>
            </div>
            <div id="about-words">
              <p>I'm a software engineer living in Oakland CA.  My early career focused on marketing and design, running a small branding company and leading marketing for a multimillion dollar manufacturer. After 5 years in those fields I realized that I was unahppy and board and got me to where I am today. </p>
              <p>I love software engineering because lets me solve interesting problems and make useful things. I'm delighted that I found things that address everything I'm good at, from working with people to problem solving to creative thinking. </p>
              <p>Non-tech loves include rock climbing, dancing, hiking with this lady, meditation and yoga.</p>
              <h3>Technologies</h3>
              <div id="technologies">
                <div>
                  <p>HTML</p>
                  <p>CSS</p>
                </div>
                <div>
                  <p>Javascript</p>
                  <p>Node.js</p>
                </div>
                <div>
                  <p>Ruby</p>
                  <p>Python</p>
                </div>
                <div>
                  <p>Tenson Flow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default App
