import { OPEN_MODAL } from '../constants'

export function modals(state = 'hai! Ima state', action) {
  switch(action.type) {
    case OPEN_MODAL:
      return state; // will update state here
    default:
      return state;
  }
}
