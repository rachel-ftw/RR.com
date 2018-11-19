import { SORT_PROJECT_CARDS } from '../constants'

import projectsData from '../data/projects.json'

export function projects(state = projectsData, action) {
  switch(action.type) {
    case SORT_PROJECT_CARDS:
        console.log('====', action)
      return action.projectType === 'all' ? projectsData : [...projectsData.filter(project => project.type === action.projectType)]
      // return [...updatedState]
    default:
      return state
  }
}