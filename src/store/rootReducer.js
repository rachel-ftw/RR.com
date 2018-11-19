import { combineReducers } from 'redux'

import { projectsReducer } from './projects/reducer'
import { blogReducer } from './blog/reducer';

const rootReducer = combineReducers({
  blogPosts: blogReducer,
  projects: projectsReducer,
})

export default rootReducer
