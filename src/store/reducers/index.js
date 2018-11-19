import { combineReducers } from 'redux'

import { modals } from './modals'
import { projects } from './projects'

const rootReducer = combineReducers({
  modals,
  projects
})

export default rootReducer
