import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
// import { faGithubSquare } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
import { Provider } from 'react-redux'

import App from './components/App'
import rootReducer from './store/rootReducer'

// library.add(faGithubSquare)

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root')
)
