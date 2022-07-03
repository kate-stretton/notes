import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {saveNote} from '../actions'

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
    <textarea value={newNote} placeholder='Add a note...' onChange={e => setNewNote(e.target.value)} />
    <div className='add-footer'>
      <button type='submit'>Save</button>
    </div>
  </form>
  )
}

export default AddNote