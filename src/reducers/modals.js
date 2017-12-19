import { OPEN_MODAL } from '../constants'

export function modals(state = 'default state', action) {
  switch(action.type) {
    case OPEN_MODAL:
      console.log('opening a modal, id?', action.id)
      return state; // will update state here
    default:
      return state;
  }
}
