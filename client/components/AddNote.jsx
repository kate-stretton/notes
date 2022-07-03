import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {saveNote} from '../actions'

// import {addNote} from '../apis/notes'


function AddNote() {
  const [newNote, setNewNote] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(saveNote(newNote))
    setNewNote('')
  }

  return (
  <form onSubmit={handleSubmit}>
    <input value={newNote} onChange={e => setNewNote(e.target.value)} />
    <input type='submit' value='Save' />
  </form>
  )
}

export default AddNote