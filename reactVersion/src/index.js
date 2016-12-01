import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

(function() {
  let toggles = document.querySelectorAll(".c-hamburger")
  for (let i = toggles.length -1; i >= 0; i--) {
    let toggle = toggles[i]
    toggleHandler(toggle)
  }

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e){
      e.preventDefault();
      this.classList.contains("is-active") === true ? 
        this.classList.remove("is-active") : this.classList.add("is-active")
    })
  }
})()
