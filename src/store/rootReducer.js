import { combineReducers } from 'redux'

import { projectsReducer } from './reducer'

const rootReducer = combineReducers({
  projects: projectsReducer,
})

export default rootReducer
