import { OPEN_MODAL } from '../constants'

export function openModal(id) {
  return { type: OPEN_MODAL, id }
}
