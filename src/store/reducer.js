import { SORT_PROJECT_CARDS } from './constants'

import projectsData from './projectsData.json'

export function projectsReducer(state = projectsData, action) {
  switch(action.type) {
    case SORT_PROJECT_CARDS:
      return action.projectType === 'all' ? 
        projectsData : 
        [...projectsData.filter(project => project.type === action.projectType)]
    default:
      return state
  }
}