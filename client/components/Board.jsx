import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { fetchNotes} from '../actions'

import Note from './Note'
import AddNote from  './AddNote'

function Board(){
  const notes = useSelector(state => state.notes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNotes())
  }, [])

  return(
    <>
    <div className='add-note'>
     <AddNote/>
    </div>
    <div className='board'>
    {notes.map((note) => (
      <Note key={note.id} note={note}/>
          ))}
    </div>
    </>
  )
}

export default Board