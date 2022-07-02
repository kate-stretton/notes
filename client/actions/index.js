import { getNotes, addNewNote } from '../apis/notes'

export const SET_NOTES = 'SET_NOTES'

export function fetchNotes() {
  return (dispatch) => {
    return getNotes()
      .then((notes) => {
        dispatch(setNotes(notes))
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function addNote(newNote) {
  return (dispatch) => {
    return addNewNote(newNote)
      .then((notes) => {
        dispatch(setNotes(notes))
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function setNotes(notes) {
  return {
    type: SET_NOTES,
    notes,
  }
}
