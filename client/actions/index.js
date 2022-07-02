import { getNotes } from '../apis/notes'

export const SET_NOTES = 'SET_NOTES'

export function setNotes(notes) {
  return {
    type: SET_NOTES,
    payload: notes,
  }
}

export function fetchNotes() {
  return (dispatch) => {
    return getNotes().then((notes) => {
      dispatch(setNotes(notes))
      return null
    })
  }
}
