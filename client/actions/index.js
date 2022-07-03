import { getNotes, postNote, delNote } from '../apis/notes'

export const SET_NOTES = 'SET_NOTES'
export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

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

function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    id,
  }
}

export function removeNote(id) {
  return (dispatch) => {
    return delNote(id)
      .then(() => {
        dispatch(deleteNote(id))
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
