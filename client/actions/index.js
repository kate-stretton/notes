import { getNotes, postNote } from '../apis/notes'

export const SET_NOTES = 'SET_NOTES'
export const ADD_NOTE = 'ADD_NOTE'

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

export function addNote(note) {
  console.log('payload', note)
  return {
    type: ADD_NOTE,
    note,
  }
}
export function saveNote(note) {
  return (dispatch) => {
    return postNote(note)
      .then((newNote) => {
        dispatch(addNote(newNote))
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
