import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

import {addNote} from '../apis/notes'

function AddNote() {
  const [newNote, setNewNote] = useState({text: ''})
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    addNote(newNote)
    .then (newNote => dispatch({type: "ADD_NOTE", payload: newNote}))
    .catch(err => {
      console.log(err)
    })
    setNewNote({text: ''})
  }

  return <form onSubmit={handleSubmit}>
    <label htmlFor='newNote'>Add note: </label>
    <input id='newNote' type='text' name='note' value={newNote.text} onChange={e => setNewNote(e.target.value)} />
    <input type='submit' value='Save' />
  </form>
}

export default AddNote