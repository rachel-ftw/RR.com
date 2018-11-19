import { SORT_PROJECT_CARDS } from '../constants'

export function sortProjectCards(projectType) {
  return { type: SORT_PROJECT_CARDS, projectType }
}