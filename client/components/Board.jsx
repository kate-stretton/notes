import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchNotes } from '../actions'

// import Note from './Note'
import AddNote from  './AddNote'

function Board(){
const notes = useSelector(state => state.notes)
const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchNotes())
}, [])

  return(
    <>
    <div className='board'>
        {notes.map((note) => (
      <div key={note.id} className='note'>{note.text}</div>
      ))}
    </div>
    <AddNote/>
    </>
  )
}

export default Board